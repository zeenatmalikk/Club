import React from 'react'
import './header.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import seller1 from '../../assets/seller1.jpg'
import seller2 from '../../assets/seller2.png'
import seller3 from '../../assets/seller3.png'
import seller4 from '../../assets/seller4.png'
import seller5 from '../../assets/seller5.png'
import seller6 from '../../assets/seller6.jpg'
import verify from '../../assets/verify.png'
import torch from '../../assets/torch.gif'
import newGoogle from '../../assets/newGoogle.png'
import winner from '../../assets/winner.gif'

import { Link  } from 'react-router-dom';
import { Grid } from '@mui/material';
const Header = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide:true,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          swipeToSlide:true,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide:true,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
        }
      }
    ]
  };
  return (
    <div className='header section__padding'>
      <div className="header-content">
        <div>
          <h1>Social And Entertainment Super Platform  Socio-Club</h1>
          <p>Sink Yourself Into Vibes</p>
          {/* <a href=''>
          <img  src='http://assets.stickpng.com/images/5a902dbf7f96951c82922875.png'/>
            </a> */}
        </div>
          {/* <img className='shake-vertical' src={torch} alt="" /> */}
      </div>
      
      <div className="header-slider">
        <Grid container>
        <Grid item md={1}/>

        <Grid item md={4} xs={12}>
        <div className='trophy'>

        <img src={winner}  alt=''/>
        </div>
          </Grid>
          <Grid item md={1}/>
          <Grid item md={5} xs={12} className='contests-p'>
            
        <p>participate in Contests for Free and win rewards</p>
            </Grid>
          </Grid>
         
      </div>
      <div className='googleplay'>
        <p>Get in on Google Playstore</p>
        <img src={newGoogle} className='gpay-anime'/>
        </div>
    </div>
  )
}

export default Header
