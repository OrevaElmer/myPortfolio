import React from "react"
import ProgressBar from './ProgressBar'
import myHtml from "./img/html.png"
import myCss from "./img/css.png"
import myJavascript from "./img/javascript.png"
import myNode from "./img/node.png"
import myPython from "./img/python.png"
import myReact from "./img/react.png"
import myPhp from "./img/php.png"
import mySql from "./img/mysql.png"

const Skills = ()=>{
    return(
        <section id="skill">
            <h1>My Skills</h1>
            <p> Here are a few skills I possess</p>
            <div className="skillsType">
                <div className="individualSkill">
                    <img src={myHtml} alt="html"/>
                    <ProgressBar bgcolor="rgb(233, 72, 72)" progress='100'  height={30}/>
                </div>
                <div className="individualSkill">
                    <img src={myCss} alt="css"/>
                    <ProgressBar bgcolor="rgb(233, 72, 72)" progress='100'  height={30}/>
                </div>
                <div className="individualSkill">
                    <img src={myJavascript} alt="javascript"/>
                    <ProgressBar bgcolor="rgb(233, 72, 72)" progress='90'  height={30}/>
                </div>
                <div className="individualSkill">
                    <img src={myNode} alt="node"/>
                    <ProgressBar bgcolor="rgb(233, 72, 72)" progress='70'  height={30}/>
                </div>
                <div className="individualSkill">
                    <img src={myPython} alt="python"/>
                    <ProgressBar bgcolor="rgb(233, 72, 72)" progress='80'  height={30}/>
                </div>
                <div className="individualSkill">
                    <img src={myReact} alt="react"/>
                    <ProgressBar bgcolor="rgb(233, 72, 72)" progress='80'  height={30}/>
                </div>
                <div className="individualSkill">
                    <img src={myPhp} alt="php"/>
                    <ProgressBar bgcolor="rgb(233, 72, 72)" progress='90'  height={30}/>
                </div>
                <div className="individualSkill">
                    <img src={mySql} alt="sql"/>
                    <ProgressBar bgcolor="rgb(233, 72, 72)" progress='90'  height={30}/>
                </div>
            </div>
        </section>
    )
}
export default Skills;