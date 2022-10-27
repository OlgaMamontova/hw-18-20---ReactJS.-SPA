import React from "react";
import '../styles/photos.css'
import photo1 from '../assets/1.png';
import photo2 from '../assets/2.png';
import photo3 from '../assets/3.png';
import photo4 from '../assets/4.png';
import photo5 from '../assets/5.png';
import photo6 from '../assets/6.jpeg';
import photo7 from '../assets/7.png';
import photo8 from '../assets/8.png';
import photo9 from '../assets/9.jpg';
function Photos (){
    return(
        <div className="photos">
            <h2>Photos</h2>
            <div  className="gallery">
                <img src={photo1}/>
                <img src={photo2}/>
                <img src={photo3}/>
                <img src={photo4}/>
                <img src={photo5}/>
                <img src={photo6}/>
                <img src={photo7}/>
                <img src={photo8}/>
                <img src={photo9}/>
            </div>
        </div>
    )
}

export default Photos;