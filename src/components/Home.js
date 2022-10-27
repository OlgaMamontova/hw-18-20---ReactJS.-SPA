import React from "react";
import BG from '../assets/bg.jpg'

function Home (){
    return(
        <div className='home'>
            <img src={BG}></img>
            <div className='text'>
                <h1>Hi there!<br/>My name is Dmytro<br/>
                <span>(you should pronounce it similar to the word “metro” but add “D” in the beginning)
                </span></h1>
                <p><strong>I’m choking a plush moose in this photo, but people mostly know me as <span className="yellow-text">a creative copywriter</span></strong></p>
            </div>
        </div>
    )
}

export default Home;