 import React from "react";
import { useNavigation } from "react-router-dom";
import "./Home.css";

function Home() {

  return (
    <>
    {/* <br></br> */}
  <div className="bg" 
  style={{
    display: "flow",
    alignItems: "center",
    // height: "100%"
    flexDirection: "row",
    
  }}
 >
  <p>
  <center><img src="https://d1ssu070pg2v9i.cloudfront.net/pex/pex_carnegie2021/2021/08/04093919/Icon-3-Helping-people-to-help-each-other-sml.jpg" alt="user icon"/></center>
  <center><h1>User App</h1> </center>
  </p>
  </div>

  {/* <h6>Hello!</h6> */}
  
  </>
  );
}

export default Home;
