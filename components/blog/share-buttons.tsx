'use client'

import { useState } from 'react'
import { Check, Link2, Mail, Share2 } from 'lucide-react'

// 文章分享按钮：复制链接、LinkedIn、邮件。客户端组件。
// url 由服务端传入（规范绝对地址），避免依赖 window.location 造成 hydration 不匹配，
// 同时保证在无 JS 时分享链接依然可用。
export function ShareButtons({
  url,
  title,
  label,
}: {
  url: string
  title: string
  label: string
}) {
  const [copied, setCopied] = useState(false)

  async function copyLink() {
    if (typeof navigator === 'undefined') return
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // 忽略剪贴板错误（如权限不足）
    }
  }

  const linkedIn = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  const mailto = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`

  const btn =
    'inline-flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground/80 transition-colors hover:border-accent hover:text-accent'

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
      <div className="flex items-center gap-2">
        <button onClick={copyLink} className={btn} aria-label="Copy link">
          {copied ? (
            <Check className="size-4" aria-hidden="true" />
          ) : (
            <Link2 className="size-4" aria-hidden="true" />
          )}
        </button>
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className={btn}
          aria-label="Share on LinkedIn"
        >
          <Share2 className="size-4" aria-hidden="true" />
        </a>
        <a href={mailto} className={btn} aria-label="Share by email">
          <Mail className="size-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
