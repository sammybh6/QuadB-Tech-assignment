import React from 'react'
import { useLocation } from 'react-router-dom'
import "../styles/Page2.css"
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Modal from './Modal'
export default function Page2()
{

    const [showModal, setShowModal] = React.useState(false)
    const location = useLocation()
    const show =location.state.show
    const check = (show.status === "Running") ? true : false

    const checkPrevUrl = (show._links.previousepisode && (show._links.previousepisode.href)) ? show._links.previousepisode.href : show._links.self.href
    const checkNextUrl = (show._links.next && (show._links.next.href)) ? show._links.next.href : show._links.self.href

    const [nextUrl, setNextUrl] = React.useState();
    const getNextEp = () => {
        axios.get(checkNextUrl)
            .then(res => {
                setNextUrl(res.data.url)
            })
            .catch(err => {
                console.log(err)
            })
    }
    React.useEffect(() => {
        getNextEp()
    }, [])

    const handleClick = () => {
        console.log("clicked")
        setShowModal(true)
    }


    const [prevUrl, setPrevUrl] = React.useState();
    const getPrevEp = () => {
        axios.get(checkPrevUrl)
            .then(res => {
                setPrevUrl(res.data.url)
            })
            .catch(err => {
                console.log(err)
            })
    }
    React.useEffect(() => {
        getPrevEp()
    }, [])
    return (
        <div>
            {/* <header>
                <h1>{show.name}</h1>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">TV Shows</a></li>
                        <li><a href="#">My List</a></li>
                    </ul>
                </nav>
            </header> */}
            <main>
                <section className="movie-preview">
                    <img src={show.image.medium} alt="Movie Poster" />
                        <div className="movie-info">
                            <div className='tth'>
                            <div className='title-head'>
                                <h2>{show.name}</h2>
                            </div>
                                <div className='title-head-btn'>
                                { check &&<button className='tt' onClick={handleClick}>
                                <i className="fas fa-play"></i> BOOK TICKETS
                                </button>
                                }
                                <Link to={show.url}>
                                <button >
                                <i className="fas fa-download"></i> WATCH NOW
                                </button>
                                </Link>
                                </div>
                                
                            </div>
                            
                            <p>{ReactHtmlParser(show.summary)}</p>
                            <p>Premiered: {show.premiered}</p>
                            <p>Language: {show.language}</p>
                            <p>Days : {show.schedule && show.schedule.days.map((item)=>{
                    return <span className="genre">{item}</span>
                })}</p>
                <p>Time: {show.schedule.time}</p>
                            <p>Genres: {show.genres && show.genres.map((item)=>{
                    return <span className="genre">{item}</span>
                })}</p>
                <p>Type: {show.type}</p>
                <p>Status: {show.status}</p>
                <div className='ep-btn'>
                <Link to={prevUrl}><button >
                 <i className="fas fa-play"></i> PREVIOUS EPISODE
                </button></Link>
                <Link to={nextUrl}>
                <button >
                  <i className="fas fa-download"></i> NEXT EPISODE
                </button></Link>
                </div>
                
                </div>
                </section>
            </main>
           {showModal && <Modal onClose={()=> setShowModal(false)} show={showModal} data={show}/>}
        </div>
    )
}
