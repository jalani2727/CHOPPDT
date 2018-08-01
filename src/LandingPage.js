import React, {Component} from 'react';
import './LandingPage.css';




const LandingPage = () => {
        return (
            <div className = "landing">
                <div className = "landing-text">
                    <div className = "landing-text-inner">
                        <h1>CHOPPDT</h1>
                        <h2>Inspired by Food Network's Hit Television series, "Chopped"</h2>
                        <a href="#Quote" className = "btn view-work">
                            GET COOKIN'
                        </a>
                    </div>
                </div>
                <div className = "landing-image"></div>
            </div>
        )
    }





export default LandingPage;