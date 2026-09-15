'use client'

import { useActionState, useEffect, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { sendContactMessage, type ContactState } from '@/app/actions/contact'
import type { Dictionary } from '@/lib/dictionaries'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const initialState: ContactState = { ok: false }

export function ContactForm({ dict }: { dict: Dictionary }) {
  const c = dict.contact
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState,
  )
  const [open, setOpen] = useState(false)
  const [formKey, setFormKey] = useState(0)

  // 提交成功后弹出感谢卡片，并重置表单
  useEffect(() => {
    if (state.ok) {
      setOpen(true)
      setFormKey((k) => k + 1)
    }
  }, [state])

  return (
    <>
      <form key={formKey} action={formAction} className="flex flex-col gap-5">
        {/* 蜜罐字段：对真实用户隐藏，机器人常会自动填写，服务端据此丢弃垃圾提交 */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">{c.fields.name}</Label>
            <Input id="name" name="name" required autoComplete="name" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">{c.fields.email}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="subject">{c.fields.subject}</Label>
          <Input id="subject" name="subject" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="message">{c.fields.message}</Label>
          <Textarea id="message" name="message" required rows={6} />
        </div>

        {!state.ok && state.error && (
          <p className="text-sm text-destructive" role="alert">
            {state.error === 'config' ? c.configText : c.errorText}
          </p>
        )}

        <Button
          type="submit"
          size="lg"
          disabled={pending}
          className="h-12 w-full text-base sm:w-auto sm:self-start sm:px-10"
        >
          {pending ? c.submitting : c.submit}
        </Button>
      </form>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="items-center text-center">
            <CheckCircle2 className="size-14 text-primary" />
            <DialogTitle className="mt-2 text-2xl">
              {c.successTitle}
            </DialogTitle>
            <DialogDescription className="text-base leading-relaxed">
              {c.successText}
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => setOpen(false)}
            size="lg"
            className="mt-2 w-full"
          >
            {c.successClose}
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
