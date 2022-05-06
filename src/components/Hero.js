import React from 'react'
import myLogo from './img/EgalaseOrevaElmer.jpg'
import myFacebook from "./img/social/facebook.png"
import myLinkedIn from "./img/social/linkedIn.png"
import myTelegram from "./img/social/telegram.png"
import myWhatsApp from "./img/social/whatsApp.png"

export default function Hero(){
    return(
        <>
        <section id='hero'>
            <div className='heroLeft'>
                <div className='header'>
                    <h2 className='myName'> Egalase Oreva Elmer</h2>
                    <div className='myLinks'>
                         <a href='/'>AboutMe</a> 
                         <a href='/'>Services</a> 
                         <a href='/'>Projects</a> 
                         <a href='/'>ContactMe</a> 
                    </div>            
                </div>
                <div className='myOverview-Container'>
                    <div className='myOverview'>
                        <p> HI THERE</p>
                        <h3> I AM EGALASE OREVA ELMER</h3>
                        <h1>A Topnotch Developer, Tutor and Mentor.</h1>
                        <div className="socialIcon">
                            <img src={myFacebook} alt="facebook logo"/>
                            <img src={myLinkedIn} alt="linkedIn logo"/>
                            <img src={myTelegram} alt="telegram logo"/>
                            <img src={myWhatsApp} alt="whatsApp logo"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='heroRight'>
                <div className='myPic'>
                    <img src={myLogo} alt='egalaseOrevaElmerPics' />
                </div>
            </div>
            
        </section>
        </>
    )
}
                /*<div className='mySocialIcon'>
                    <ul>
                        <li> <a href='/'>LinkedIn</a> </li>
                        <li> <a href='/'>twitter</a> </li>
                    </ul>
                </div>
                */