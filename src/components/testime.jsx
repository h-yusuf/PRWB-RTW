    // testim menggunakan function componet
    import React, { useEffect } from 'react';
    import Typed from 'typed.js';
    
function Testim(props){  
    const addname = () =>{
        return alert("ini untuk adding props name")
    }
    const paragrafAlt = () =>{
        return alert("ini alert untuk props berupa adding tag in constanta")
    }
    useEffect(() => {
        // Create a new instance of Typed.js
        const options = {
          strings: ['Hello!!', 'Welcome to ReactWeb!', 'Used Typed.js in ReactWeb!',],
          typeSpeed: 50, // Typing speed in milliseconds
          backSpeed: 25, // Backspacing speed in milliseconds
          loop: true, // Loop the animation
        };
    
        const typed = new Typed('#typed-text', options);
    
        // Cleanup: Destroy Typed.js instance on unmount
        return () => {
          typed.destroy();
        };
      }, []);

    return(
        <div className="testim">
            <h1 className="App-link my-0" onClick={addname}>
                Ini Untuk Introduction   <br />    <span id="typed-text"></span>
            </h1>
            <div onClick={paragrafAlt}>{props.paragraf()}</div>
            <marquee >ini namanya marque</marquee>
        </div>
    );
}

export default Testim;