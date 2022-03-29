import Head from 'next/head'
import React from 'react'

type Props = {
  pageTitle: string
}

const Seo = (props: Props) => {
  return (
    <Head>
      <title>{props.pageTitle}</title>
    </Head>
  )
}

export default Seo
