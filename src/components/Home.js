import React from 'react'
import { useGetRecipesQuery } from '../features/APISlice'
import { Link } from 'react-router-dom'

export default function Home() {

    const {data, isLoading, error}= useGetRecipesQuery()
  return (
    <div>
      <h1>Home</h1>
      
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
      {isLoading && <h1>Loading...</h1>}
      {data && <div>
{data?.map((item) => (
  <div key={item.id}>
    <p>{item.id}</p>
    <h1>{item.name}</h1>
    <p>{item.description}</p>

    <Link to={'/${item.id}'}>
    <button>Show Details</button>
    </Link>
    <button onClick={() => alert(item.id)}>❤️</button>
    <hr />
  </div>
))}

      </div> }
    </div>
  )
}