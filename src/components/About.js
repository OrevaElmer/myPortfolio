import React from "react"
import myFacebook from "./img/social/facebook.png"
import myLinkedIn from "./img/social/linkedIn.png"
import myTelegram from "./img/social/telegram.png"
import myWhatsApp from "./img/social/whatsApp.png"

export default function About(){
    return(
        <>
        <section id="about">
            <div className="aboutContent">
                <h1> About Me </h1>
                <p> Egalase Oreva Elmer is a passionate and goal driven Techpreneur whose interest is in using technology to build solutions to  solve real world problems. </p>
                <div className="socialIcon">
                    <img src={myFacebook} alt="facebook icon"/>
                    <img src={myLinkedIn} alt="LinkedIn icon"/>
                    <img src={myTelegram} alt="Telegram icon"/>
                    <img src={myWhatsApp} alt="WhatsApp icon"/>
                </div>
            </div>
        </section>
        </>
    )
}