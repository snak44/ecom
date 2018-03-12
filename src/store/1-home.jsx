import React from 'react'
import Cone from "./img/cone.png"
import {Link} from 'react-router-dom'




export default class extends React.Component{
    render(){
        return(
            <div className="yeti">




                <h1>converse</h1>
                    <div className="mom">
                     <h1>shoot for the stars!!</h1>
                       <div className="they">
                            <img className="cone" src={Cone} alt={Cone}/>
                       </div>
                       <div className="city">
                        <button>
                        <Link className="myLink" to="/1" >Shop now</Link>
                        </button>
                       </div>
                        <div className="coffee">
                        <button>
                            <Link className="myLink" to="/2" >learn more</Link>
                        </button>
                            <button>
                                <Link className="myLink" to="/3" >Sighn in</Link>
                            </button>

                        </div>
                    </div>
            </div>















        )
    }
}