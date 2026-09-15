// 内页通用页头：大标题 + 副标题，居中，多个内页复用。
export function PageHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-16 pb-10 text-center sm:pt-20">
      <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  )
}
