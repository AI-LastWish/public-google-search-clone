import Head from 'next/head'
import React from 'react'
import type { GetServerSideProps } from 'next'
import Header from '../components/Header'
import response from '../mockData/response'
import { useRouter } from 'next/router'
import SearchResults from '../components/SearchResults'

interface Props {
  results: typeof response
}

const Search = ({ results }: Props) => {
  const router = useRouter()

  console.log('results', results)
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>

      {/* Header */}
      <Header />
      {/* Search Results */}
      <SearchResults results={results}/>
    </div>
  )
}

export default Search

export const getServerSideProps: GetServerSideProps = async (context) => {
  const useDummyData = true
  const startIndex = context.query.start as string || '0'

  const results = useDummyData ? response : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(res => res.json())

  return {
    props: {
      results
    }
  }
}