import Head from 'next/head'
import Link from 'next/link'
import { GraphQLClient, gql } from 'graphql-request'

export const getPostsAndPortfolios = async () => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/ckqrgjw27mdpa01z2588nc9le/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      posts(first: 3, orderBy: date_DESC) {
        title
        slug
        description
        date
        tags
        author {
          name
          image {
            url
            width
            height
          }
        }
      }
      portfolios(first: 3, orderBy: date_DESC) {
        title
        tags
        slug
        description
        date
        coverImage {
          url
          width
          height
        }
      }
    }
  `

  return await graphQLClient.request(query)
}

export const getPortfolioItems = async () => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/ckqrgjw27mdpa01z2588nc9le/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      portfolios {
        title
        tags
        slug
        description
        date
        coverImage {
          url
          width
          height
        }
      }
    }
  `

  return await graphQLClient.request(query)
}

export const getPosts = async () => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/ckqrgjw27mdpa01z2588nc9le/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      posts(orderBy: date_DESC) {
        title
        slug
        description
        date
        tags
        author {
          name
          image {
            url
            width
            height
          }
        }
      }
    }
  `

  return await graphQLClient.request(query)
}

export const getPortfolioItem = async (slug) => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/ckqrgjw27mdpa01z2588nc9le/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    query getPortfolio($slug: String!) {
      portfolios(where: { slug: $slug }) {
        title
        tags
        slug
        description
        date
        coverImage {
          url
          width
          height
        }
        content
      }
    }
  `

  const variables = { slug }

  return await graphQLClient.request(query, variables)
}

export const getPortfolioSlugs = async () => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/ckqrgjw27mdpa01z2588nc9le/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      portfolios {
        slug
      }
    }
  `

  return await graphQLClient.request(query)
}

export const getBlogSlugs = async () => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/ckqrgjw27mdpa01z2588nc9le/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      posts {
        slug
      }
    }
  `

  return await graphQLClient.request(query)
}

export const getPost = async (slug) => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/ckqrgjw27mdpa01z2588nc9le/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    query getPost($slug: String!) {
      posts(where: { slug: $slug }) {
        title
        slug
        description
        date
        content
        tags
        author {
          name
          image {
            url
            width
            height
          }
        }
      }
    }
  `

  const variables = { slug }

  return await graphQLClient.request(query, variables)
}
