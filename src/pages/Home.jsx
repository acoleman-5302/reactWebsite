import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// Home Component
function Home() {
  return ( 
    <div>
        <div className="hero-container">
          <div className="hero-text">
            <h1>Welcome! I am Anna Paulec</h1>
            <p>I like mathematical knots, nature, and running.</p>
            <button className=" btn btn-secondary">{<Link style={{textDecoration: 'none', color:'white'}} to="/about">Learn More</Link>}</button>
          </div>
        </div>
        
    </div>
  )
}

export default Home;