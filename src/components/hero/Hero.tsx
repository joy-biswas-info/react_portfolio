import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./hero.css";
import { IoPersonRemove } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        <h1 className="hTitle">
          Hey there,
          <br />
          <span>I'm Joy!</span>
        </h1>
        <div className="awards">
          <h2 className="awardsTitle">Level 1 Seller on Fiverr</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium.</p>
          <div className="aList">
            <img src="/award1.png" alt="" />
          </div>
        </div>
        <a href="#services" className="hButton">
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <path d="M12 5V8" stroke="white" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </a>
      </div>
      <div className="hSection right">
        {/* FOLLOW  */}
        <div className="follow">
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
          <div className="followTextContainer">
            <div className="followText">Follow Me</div>
          </div>
        </div>
        {/* BUBBLE  */}
        <div className="bubbleContainer">
          <div className="bubble">
            <TypeAnimation
              className="bubbleText"
              sequence={[
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, nam.",
                1000,
                "We produce food for Guinea Pigs",
                1000,
              ]}
              deletionSpeed={50}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </div>
          <img src="/bubble.jpg" alt="" className="bubbleImage" />
        </div>
        {/* CERTIFICATE  */}
        <div className="certificate">
          <img src="/certificate.png" alt="" />
          FreeCodeCamp
          <br />
          Professional
          <br />
          Web Developer
        </div>
        {/* CONTACT LINK  */}
        <a href="/#contact" className="contactLink">
          <div className="contactButton">
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="arrowIcon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 5L4 12L9 19"
                  stroke="#12071f"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M20 12H4" stroke="#12071f" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </a>
      </div>
      <div className="bg">
        <div className="hImg">
          <img src="/hero.png" alt="joy biswas" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
