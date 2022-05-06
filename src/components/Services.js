import React from "react"
import myTraining from "./img/services/training.png"
import myResponsiveWebDesign from "./img/services/responsiveWebDesign.png"
import myDatabase from "./img/services/database.png"
import myConsultant from "./img/services/consultant.png"
import mySaas from "./img/services/saasDevelopment.png"
import mySoftwareTesting from "./img/services/softwareTesting.png"

const Services = ()=>{
    return(
        <section id="service">
            <h1>My Services</h1>
            <p> I am proficient in the following skills: </p>
            <div className="serviceType">
                <div className="individualService">
                    <div className="individualServiceImg">
                        <img src={myTraining} alt="html"/>
                    </div>
                    <h3>Training</h3>
                    <p>I offer instructor-led training in a way that fits with the way you work. </p>                   
                </div>
                <div className="individualService">
                    <div className="individualServiceImg">
                        <img src={myResponsiveWebDesign} alt="html"/>
                    </div>
                    <h3>Responsive Web Design</h3>
                    <p>I offer Information technology consulting as a field of activity focused on advising organizations on how best to use information technology in achieving their business objectives.</p>                   
                </div>
                <div className="individualService">
                    <div className="individualServiceImg">
                        <img src={myDatabase} alt="html"/>
                    </div>
                    <h3>Database Development</h3>
                    <p>With equipped skills of developing and maintaining databases i could  help develop scalable and optimized databases for your organization.</p>                   
                </div>
                <div className="individualService">
                    <div className="individualServiceImg">
                        <img src={myConsultant} alt="html"/>
                    </div>
                    <h3>Customer Software Development</h3>
                    <p>I help develop tehnical solutions in form of softwarres that answer to the needs of customer’s problems. </p>                   
                </div>
                <div className="individualService">
                    <div className="individualServiceImg">
                        <img src={mySaas} alt="html"/>
                    </div>
                    <h3>Saas Development</h3>
                    <p>I developed software using Amazon web service that can be accessible all over the web with hight fault tolerance. </p>                   
                </div>
                <div className="individualService">
                    <div className="individualServiceImg">
                        <img src={mySoftwareTesting} alt="html"/>
                    </div>
                    <h3>Software Testing</h3>
                    <p>I help test softwares ready for production to fish out bugs and give advice on how to make it scalable, usable and enterprise-friendly.</p>                   
                </div>
                
            </div>
        </section>
    )
}

export default Services;