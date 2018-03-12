import React from 'react'
import Info from "./img/info.png"
import {Link} from 'react-router-dom'

export default class extends React.Component{
    render(){
        return(
            <div className="info">
                <img id="Info-piture" src={Info} alt=""/>
                <h1>Convere Chuck taylor High Top</h1>

                <button className="butt">
                <Link className="myLink" to="/" >back</Link>
                </button>
                <button className="butt">
                    <Link className="myLink" to="/1" >Shop now</Link>
                </button>
            </div>







        )
    }
}