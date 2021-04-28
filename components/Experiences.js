import React from 'react'
import Title from './Title'
import Timeline from './ExperiencesTimelineItem'

export default class Experiences extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="Experiences" color='#2c3e50'/>
                <div className="container">
                    <Timeline side="left" time="------" color="#e67e22">
                        <h4 style={{'color': '#e67e22'}}>Thomson Reuters</h4>
                        <p>
                            <i className="position">------------</i><br/>
                            -------------<br/>
                            ----------- <b>-------------</b>
                        </p>
                    </Timeline> 
                    <Timeline side="right" time="Jan - Jul 2020" color="#3498db">
                        <h4 style={{'color': '#3498db'}}>RTS Group Spain</h4>
                        <p>
                            <i className="position">Front End Developer</i><br/>
                            Develope an instanst mobile application<br/>
                            using <b>AngularJS</b> and <b>NodeJS</b>
                        </p>
                    </Timeline> 
                    <Timeline side="left" time="2018 - 2020" color="#9b59b6">
                        <h4 style={{'color': '#9b59b6'}}>RTS Group Argentina</h4>
                        <p>
                            <i className="position">Front End Developer</i><br/>
                            Create Webs and Apps<br/>
                            Using <b>React, Apache Cordova, Electron. </b><br/>
                            <a href="https://www.gruports.com" target="blank">Web</a>
                        </p>
                    </Timeline> 
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #bdc3c7;
                        color: #333333;
                        font-size: 1.3em;
                    }
                    h4 {
                        font-size: 1.2em;
                        font-weight: bold;
                    }
                    p {
                        font-size: 0.8em;
                    }
                    i.position {
                        color: #c0392b;
                    }
                `}</style>
            </section>
        )
    }
}