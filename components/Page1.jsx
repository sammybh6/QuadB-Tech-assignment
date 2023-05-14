import React from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'
export default function Page1() {

  const [data, setData] = React.useState([])

  function getData(){
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  React.useEffect(() => {
    getData()
  }, [])

  console.log(data)


  return (
    <div>
      {data.map((item)=>{
        return <MovieCard data={item}/>
      })}
    </div>
  )

}
