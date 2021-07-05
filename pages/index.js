import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <h1 className="text-5xl border-b-4 p-5">Hello World!</h1>
    </Layout>
  )
}
