import Head from 'next/head'
import Link from 'next/link'

import { getPortfolioSlugs, getBlogSlugs, getPost } from '../../lib/data'

export const getStaticPaths = async () => {
  const slugRes = await getBlogSlugs()
  const slugs = slugRes.posts

  console.log(slugs)

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)

  return {
    props: {
      post: post.posts[0],
    },
  }
}

export default function Home({ post }) {
  console.log(post)

  return (
    <div>
      <Head>
        <title>Sam&apos;s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>{post.title}</h1>
      </div>
    </div>
  )
}