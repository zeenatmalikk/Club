import React from "react";
import "./footer.css";
import nftlogo from "../../assets/logo.png";
import { AiOutlineInstagram, AiFillLinkedin,AiFillFacebook,AiFillPhone,AiFillMail } from "react-icons/ai";
import AddLocationIcon from '@mui/icons-material/AddLocation';

import { RiDiscordFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer-links">
        <div className="footer-links_logo">
          <div className="logo-footer">
            <img src={nftlogo} alt="logo" />
          </div>
          {/* <div>
            <h3>Get the lastes Updates</h3>
          </div>
          <div>
            <input type="text" placeholder="Your Email" />
            <button>Email Me!</button>
          </div> */}
        </div>
        <div className="footer-links_div">
          <h4 style={{marginLeft:'26px'}}> Contact</h4>
         
          <p><AddLocationIcon style={{marginRight:'4px'}}/>Neeladri Nagar, Electronics City Phase 1, Bengaluru, Karnataka 560100</p>
          <p style={{marginLeft:'4px'}}><AiFillMail style={{marginRight:'8px'}}/>socioclubsc@gmail.com</p>
        </div>
      </div>
      <div className="footer-copyright">
        {/* <div>
          <p>
            {" "}
            © {new Date().getFullYear()} SocioClub, Inc. All Rights Reserved
          </p>
        </div> */}
        <div className="flex-icon">
          <div className="card-icon">
            <a
              style={{ display: "flex" }}
              href="https://www.linkedin.com/company/socioclub/"
            >
              <AiFillLinkedin
                size={25}
                color="white"
                className="footer-icon"
              />
              <p>LinkedIn</p>
            </a>
          </div>
          <div className="card-icon">
          
          <a style={{ display: "flex" }} href="https://www.instagram.com/socio__club/?hl=en">
            <AiOutlineInstagram
              size={25}
              color="white"
              className="footer-icon"
            />
          </a>
          <p>Instagram</p>
          </div>
          <div className="card-icon">
          <a style={{ display: "flex" }} href="https://www.facebook.com/profile.php?id=100078175297249">
            <AiFillFacebook
              size={25}
              color="white"
              className="footer-icon"
            />
          </a>
          <p>Facebook</p>
            </div>
          {/* <AiFillFacebook size={25} color="white" className="footer-icon" /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
