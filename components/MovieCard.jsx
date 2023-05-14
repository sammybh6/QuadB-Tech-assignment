// import React from "react";
import "../styles/Moviec.css";
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
export default function MovieCard({data}) {

    const shows= (data)? data.show : "Loading";
    const navigate = useNavigate();

    const handleClick = () => {
        window.location.href = shows.url;
    }

    const clicked = () => {
        <Link to={`/show/${shows.id}`} state={data}></Link>
        console.log("clicked"); 
    }
  return (
    
    <div>
      <div className="wrapper">
        <div className="main_card">
          <div className="card_left">
            <div className="card_datails">
              <h1>{shows.name}</h1>
              <div className="card_cat">
                {/* <px className="PG">PG - 13</px> */}
                <p className="year">{shows.premiered}</p>
                {shows.genres && shows.genres.map((item)=>{
                    return <p className="genre">{item}</p>
                })}
                <p className="time">{shows.runtime} min</p>
              </div>
              <p className="disc">
                Language: {shows.language}<br/>
                Status: {shows.status}<br/>
              </p>
              {/* <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
                Read More
              </a> */}
              <div className="social-btn">
              
                <button onClick={clicked}>
                <Link to={`/show/${shows.id}`} state={data} style={{textDecoration: "none",color:"white"}}> <i className="fas fa-play"></i> READ MORE</Link>
                </button>

                <button onClick={handleClick}>
                  <i className="fas fa-download"></i> WATCH NOW
                </button>

                <button>
                  <i className="fas fa-thumbs-up"></i> {(shows.rating.average)? shows.rating.average : "N/A"}
                  <a href={shows.network && shows.network.officialSite}></a>
                </button>

              </div>
            </div>
          </div>
          <div className="card_right">
            <div className="img_container">
              <img
                src={shows.image && shows.image.medium}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
