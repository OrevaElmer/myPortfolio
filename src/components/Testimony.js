import React from "react"
import picture1 from "./img/testimony/picture1.jpg"
import picture2 from "./img/testimony/picture2.jpg"
import picture3 from "./img/testimony/picture3.jpg"
import picture4 from "./img/testimony/picture4.jpg"

const Testimony=()=>{
    return(
        <section id="testimony">
            <div id="testimonyTitle">
                <h1>Testimonies <br/> &#38; Recommendations</h1>
            </div>
            <div id="testimonyContent">
                <div className="allTestimony"> 
                    <div className="individualTestimony">
                        <div className="individualTestimonyImg">
                            <img src={picture1} alt="picture1"/>
                        </div>
                        <h4> Dennis Engineering</h4>
                        <p>Egalase is a great help managing our database on the cloud. Everything we ask him to do is done quickly and efficiently.</p>
                    </div>
                    <div className="individualTestimony">
                        <div className="individualTestimonyImg">
                            <img src={picture2} alt="picture2"/>
                        </div>
                        <h4> Eku Academy</h4>
                        <p>From the start of the project, through to completion, Egalase supported us and exceeded our expectations in every way. He is a champ!</p>
                    </div>
                    <div className="individualTestimony">
                        <div className="individualTestimonyImg">
                            <img src={picture3} alt="picture3"/>
                        </div>
                        <h4> OY stitches</h4>
                        <p>Egalase was very helpful and fast to respond to my inquiry to help with Wordpress website issues.  </p>
                    </div>
                    <div className="individualTestimony">
                        <div className="individualTestimonyImg">
                            <img src={picture4} alt="picture4"/>
                        </div>
                        <h4> Nicky James</h4>
                        <p>I always go back to Egalase when I'm out of my depth and he's never failed to deliver what I ask for.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimony;