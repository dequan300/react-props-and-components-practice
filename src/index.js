import React from "react";
import ReactDOM from "react-dom";

function QueenB(props){
  console.log(props)

  return <div>
<h2>{props.name}</h2>
<img alt="avatar_img" src={props.img}/>
<p>{props.tele}</p>
<p>{props.email}</p>

  </div>
}




ReactDOM.render(

  
  <div>
    <h1>My Contacts</h1>
    <QueenB email="b@beyonce.com"name = "beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" tele="+123 456 789 "  />
    <QueenB name="jack" email="jack@gmail" tele="313 132 5846" img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"/>
   <QueenB name="Chuck Noris" tele="313 555 5555" email="chuckN@gmail,com" img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" />
  </div>,
  document.getElementById("root")
);
