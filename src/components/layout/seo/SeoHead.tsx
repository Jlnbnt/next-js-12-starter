import Head from 'next/head'

interface SeoHeadProps {
  title?: string
}

export const SeoHead = ({ title }: SeoHeadProps) => {
  const BASE_TITLE = 'Next.js 12'

  return (
    <Head>
      <title>{`${title ? `${title} - ` : ''}${BASE_TITLE}`}</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>
  )
}
