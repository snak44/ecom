import React from 'react'
import con from "./img/con.png"
import {Link} from 'react-router-dom'
import List from "./img/list.png"


export default class extends React.Component{
    render(){


        return <div className="bob">
            <h2>Converse Chuck Taylor Hi top shoe</h2>


            <img className='product' src={con} alt=""/>
            <div className="add">
                <h2>($55.99)</h2>
            </div>
            <div className="mocha">
                <h3>Save 15.99</h3>
                <button>
                    <Link className="myLink" to="/">Add To Cart</Link>
                </button>
            </div>
            <div className="slave">
                <h2>Shoe category: (Men)</h2>
            </div>



            <div>
                <img className='List' id="list" src={List} alt="list"/>
                <button className="butt">
                    <Link className="myLink" to="/">back</Link>
                </button>
            </div>
            <div className="steack">


            </div>
        </div>
    }
}
