import React from "react";
import './home.css'
import '../aboutComponent/about';

function Home() {
    return (
    <>
        <div className = 'homeContainer' id = 'homeID'>
            <h1 className = 'mediumName' >Hi I'm</h1>
            <h1 className = 'bigName'>Jonathan Zhou</h1>
            <h4 className = 'description'>Computer Science Student At UMass Amherst</h4>
            <h4 className = 'description'>Amherst · Boston</h4>
        </div>
    </>
    );
}


export default Home;