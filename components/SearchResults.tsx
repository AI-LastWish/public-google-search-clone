import React from 'react'
import response from '../mockData/response'

interface Props {
  results: typeof response
}

const SearchResults = ({results}: Props) => {
  return (
    <div>SearchResults</div>
  )
}

export default SearchResults