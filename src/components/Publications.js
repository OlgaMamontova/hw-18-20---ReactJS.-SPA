import '../styles/publications.css'
import ANAKIN_IMAGE from '../assets/index.jpg';
import RAY_IMAGE from '../assets/960x0.jpg';
import React from "react";
import Post from "./Post";
function Publications (){
    return(
        <div className='publications'>
            <h2>Publications</h2>
        <Post author={{
            name: "Anakin skywalker",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader"
         }}
         content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
         image={RAY_IMAGE}
         date={"26 лют."}
/>
<Post author={{
            name: "Anakin skywalker",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader"
         }}
         content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
         image={RAY_IMAGE}
         date={"26 лют."}
/>
<Post author={{
            name: "Anakin skywalker",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader"
         }}
         content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
         image={RAY_IMAGE}
         date={"26 лют."}
/>
</div>
    )
}

export default Publications;