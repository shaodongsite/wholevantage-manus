import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// 文章正文：将 Markdown 渲染为带设计系统样式的元素。
// 不依赖 typography 插件，逐元素映射到项目设计 token。
export function ArticleBody({ content }: { content: string }) {
  return (
    <div className="flex flex-col gap-5 leading-relaxed text-foreground/90">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="mt-6 text-2xl font-bold text-primary">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-4 text-xl font-semibold text-primary">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-pretty leading-relaxed text-foreground/90">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="flex list-disc flex-col gap-2 pl-6 marker:text-accent">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="flex list-decimal flex-col gap-2 pl-6 marker:font-semibold marker:text-accent">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="pl-1 leading-relaxed text-foreground/90">
              {children}
            </li>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="font-medium text-accent underline underline-offset-2"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-primary">{children}</strong>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-accent bg-secondary/60 px-5 py-3 text-foreground/80 italic rounded-r-lg">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-sm text-primary">
              {children}
            </code>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-secondary/60">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="border border-border px-3 py-2 text-left font-semibold text-primary">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-border px-3 py-2 align-top text-foreground/90">
              {children}
            </td>
          ),
          hr: () => <hr className="border-border" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
