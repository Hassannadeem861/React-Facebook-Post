import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import img1 from "./Hassan.jpeg";
import img2 from "./coding.jpg";
import cover from "./cover.png";
import hassan1 from "./hassan.jpg";
import img3 from "./Hassan.jpeg";
import like from "./like-blue.png";
import comment from "./comments.png";
import share from "./share.png";


function Post(props) {
  return (
    <div className="heading">
      <h1><strong>MY Facebok Post</strong></h1>
      {/* <hr/> */}
      <div className="write-post-container">
        <div className="post-row">
        <div className="user-profile">
          <img className="image" src={img1} alt="img" />
          <div>
            <p>Hassan Nadeem</p>
            <span className="date">
              8 August at 1:15 PM<i className="bi bi-caret-down"></i>
            </span>
          </div>
        </div>
        <a href="#"><i class="bi bi-three-dots-vertical"></i></a>
        </div>

        
        <p className="post-text">
          Hello I am Called Hassan I am student of Saylani mass it tranning
          program I am Front End Back End Developer Follow My
          <a href="https://www.linkedin.com/in/hassannadeem861/" target="blank">
            Linkedin
          </a>
          And
          <a
            href="https://github.com/Hassannadeem861?tab=repositories"
            target="blank"
          >
            Github
          </a>
          Account...
        </p>
        <img className="post-img" src={img2} alt="img2"></img>
        <hr/>

        <div className="post-row">
          <div className="activity-icon">
            <div><img src={like} alt=""></img>500</div>
            <div><img src={comment} alt=""></img>50</div>
            <div><img src={share} alt=""></img>30</div>
          </div>
          <div className="post-profile-icon">
          <img src={img3} alt=""/><i className="bi bi-caret-down">
          </i>
          
          </div>
        </div>
        <hr/>
            
   </div>
</div>
  );
}

function Post1(props) {
  return (
    <div className="heading">
      {/* <h1><strong>MY Facebok Post</strong></h1> */}
      <br/>
      <div className="write-post-container">
        <div className="post-row">
        <div className="user-profile">
          <img className="image" src={hassan1} alt="img" />
          <div>
            <p>Hassan Nadeem</p>
            
            <span className="date">
              9 August at 3:15 PM<i className="bi bi-caret-down"></i>
            </span>
          </div>
        </div>
        <a href="#"><i class="bi bi-three-dots-vertical"></i></a>
        </div>

        
        <p className="post-text">
          Hello I am Called Hassan I am student of Saylani mass it tranning
          program I am Front End Back End Developer Follow My
          <a href="https://www.linkedin.com/in/hassannadeem861/" target="blank">
            Linkedin
          </a>
          And
          <a
            href="https://github.com/Hassannadeem861?tab=repositories"
            target="blank"
          >
            Github
          </a>
          Account...
        </p>
        <img className="post-img" src={cover} alt="img3"></img>
        <hr/>

        <div className="post-row">
          <div className="activity-icon">
            <div><img src={like} alt=""></img>700</div>
            <div><img src={comment} alt=""></img>50</div>
            <div><img src={share} alt=""></img>40</div>
          </div>
          <div className="post-profile-icon">
          <img src={hassan1} alt=""/><i className="bi bi-caret-down">
          </i>
          
          </div>
        </div>
        <hr/>
            
  </div>
</div>
  );
}

ReactDOM.render(
  <div>
 <Post/>
 <Post1/>
 </div>
, document.querySelector("#root"));
