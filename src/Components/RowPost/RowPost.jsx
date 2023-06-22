import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'
import Youtube from 'react-youtube'

function RowPost(props) {

  const [movies,setMovies] = useState([])
  const [urlid,setUrlId] = useState('')

  useEffect(()=>{
      axios.get(props.url).then(response=>{
        console.log(response.data.results)
        setMovies(response.data.results)
      }).catch(err=>{
        alert(err)
      })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  const handleMovie = (id)=>{
      axios.get(`/movie/${id}/videos?${API_KEY}&language=en-US`).then(response=>{
          if(response.data.results.length!==0){
              setUrlId(id)
          }else{
            console.log('something went wrong')
          }
      }).catch(err=>{
        alert(err)
      })
  }

  return (
    <div className='row'>
        <h1 className='title'>{props.title}</h1>
        <div className='posters'>
          {movies.map((movie)=>{
              return(
                <img onClick={()=>handleMovie(movie.id)} className={props.isSmall ? 'small-poster' : 'poster'} src={`${imageUrl+movie.backdrop_path}`}/>
              )
          })}
        </div>
        { urlid && <Youtube videoId={urlid} opts={opts}/>}
    </div>
  )
}

export default RowPost
