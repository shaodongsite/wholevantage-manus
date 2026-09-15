'use server'

import { Resend } from 'resend'

export type ContactState = {
  ok: boolean
  error?: string
}

// 留言表单提交处理：通过 Resend 把内容发到企业 Gmail 邮箱。
export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const subject = String(formData.get('subject') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()
  // 蜜罐字段：正常用户看不到、不会填写；被填写则判定为机器人，假装成功直接丢弃。
  const honeypot = String(formData.get('company') ?? '').trim()

  if (honeypot) {
    return { ok: true }
  }

  // 基本校验
  if (!name || !email || !message) {
    return { ok: false, error: 'missing' }
  }
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!emailValid) {
    return { ok: false, error: 'invalid_email' }
  }

  const apiKey = process.env.RESEND_API_KEY
  // 收件邮箱：优先用环境变量 CONTACT_TO_EMAIL，未配置时回退到已验证的 Gmail。
  const to = process.env.CONTACT_TO_EMAIL || 'shaodongmoney@gmail.com'
  if (!apiKey) {
    return { ok: false, error: 'config' }
  }

  try {
    const resend = new Resend(apiKey)
    // 默认用 Resend 测试发件地址；验证域名后，设置 CONTACT_FROM_EMAIL
    // 为 "WholeVantage Website <no-reply@wholevantage.com>" 即可，无需改代码。
    const from =
      process.env.CONTACT_FROM_EMAIL ||
      'WholeVantage Website <onboarding@resend.dev>'
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `[Website Inquiry] ${subject || 'New message'} — from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject || '(none)'}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    })

    if (error) {
      return { ok: false, error: 'send' }
    }
    return { ok: true }
  } catch {
    return { ok: false, error: 'send' }
  }
}
