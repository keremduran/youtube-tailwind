import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/layouts/layout'
import VideosGrid from '../components/VideosGrid'

const Home: NextPage = () => {
  return (
    <>
      <Layout pageTitle="YOUTUBE">
        <VideosGrid />
      </Layout>
    </>
  )
}

export default Home
