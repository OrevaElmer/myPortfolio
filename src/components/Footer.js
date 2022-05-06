import React from "react"
import myFacebook from "./img/social/facebook.png"
import myLinkedIn from "./img/social/linkedIn.png"
import myTelegram from "./img/social/telegram.png"
import myWhatsApp from "./img/social/whatsApp.png"

export default function Footer(){
    return( 
        <section id="footer">
                <h2> Egalase Oreva Elmer</h2>
                <hr/>
                <div className="socialIcon">
                    <img src={myFacebook} alt="facebook logo"/>
                    <img src={myLinkedIn} alt="linkedIn logo"/>
                    <img src={myTelegram} alt="telegram logo"/>
                    <img src={myWhatsApp} alt="whatsApp logo"/>
                </div>
                <p>&copy; 2022 | All Rights Reserved.</p>
        </section>
    )
}