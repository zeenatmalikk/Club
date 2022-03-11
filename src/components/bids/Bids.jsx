import React from 'react'
import './bids.css'
import { AiFillHeart,AiOutlineHeart } from "react-icons/ai";
import Game from '../../assets/Game.gif'
import readingbook from '../../assets/readingbook.gif'
import audiobook from '../../assets/audiobook.gif'
import News from '../../assets/News.gif'
import Contest from '../../assets/Contest.gif'
import Crypto from '../../assets/Crypto.gif'
import Music from '../../assets/Music.gif'
import Radio from '../../assets/Radio.gif'
import Memes from '../../assets/Memes.gif'
import chatbot from '../../assets/chatbot.gif'
import Podcast from '../../assets/Podcast.gif'
import Anonymous from '../../assets/Anonymous.gif'

// import { Link } from 'react-router-dom';

const Bids = ({title}) => {
  return (
    <div className='bids section__padding'>
      <div className="bids-container">
        <div className="bids-container-text">
          <h1>{title}</h1>
        </div>
        <div className="bids-container-card">
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={Game} alt="" />
              {/* <Link to={`/post/123`}> */}
              <p className="bids-title">Games</p>
              {/* </Link> */}
              </div>
              {/* <div className="bids-card-bottom">
                <p>1.25 <span>ETH</span></p>
                <p> <AiFillHeart /> 92</p>
              </div> */}
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={readingbook} alt="" />
              {/* <Link to={`/post/123`}> */}
              <p className="bids-title">Books</p>
              {/* </Link> */}
              </div>
              
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={audiobook} alt="" />
              {/* <Link to={`/post/123`}> */}
              <p className="bids-title">Audio Books</p>
              {/* </Link> */}
              </div>
              
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={News} alt="" />
              {/* <Link to={`/post/123`}> */}
              <p className="bids-title">News</p>
              {/* </Link> */}
              </div>
             
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={Contest} alt="" />
              {/* <Link to={`/post/123`}> */}
              <p className="bids-title">Contests</p>
              {/* </Link> */}
              </div>
            
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={Crypto} alt="" />
              {/* <Link to={`/post/123`}> */}
              <p className="bids-title">NFT'S</p>
              {/* </Link> */}
              </div>
            
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={Music} alt="" />
              {/* <Link to={`/post/123`}> */}
              <p className="bids-title">Music</p>
              {/* </Link> */}
              </div>
           
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={Radio} alt="" />
              {/* <Link to={`/post/123`}> */}
              <p className="bids-title">Radio</p>
              {/* </Link> */}
              </div>
            
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={chatbot} alt="" />
              {/* <Link to={`/post/123`}> */}
              <p className="bids-title">Chatbot</p>
              {/* </Link> */}
              </div>
             
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={Memes} alt="" />
              {/* <Link to={`/post/123`}> */}
              <p className="bids-title">Memes</p>
              {/* </Link> */}
              </div>
              
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={Podcast} alt="" />
              {/* <Link to={`/post/123`}> */}
              <p className="bids-title">Podcasts</p>
              {/* </Link> */}
              </div>
              
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={Anonymous} alt="" />
              {/* <Link to={`/post/123`}> */}
              <p className="bids-title">Anonymous</p>
              {/* </Link> */}
              </div>
             
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Bids
