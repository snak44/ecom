import React from 'react'
import {Link} from 'react-router-dom'
import Shoe from './img/shoe.png'


export default class extends React.Component{
    render(){
        return(





            <div className="homepage">
                <img className="snak" src={Shoe} alt=""/>

                <form>
                    <label>
                        First Name:
                        <input className="text" name="lastname" />
                    </label>
                    <button>
                        <Link className="myLink" to="/1" >summit</Link>
                    </button>
                </form>
                <form>
                    <label>
                        Last Name:
                        <input type="text" name="lastname" />
                    </label>
                    <button>
                        <Link className="myLink" to="/1" >summit</Link>
                    </button>
                </form>
                <button className="butt">
                    <Link className="myLink" to="/1" >log in</Link>
                </button>


            </div>


        )
    }
}