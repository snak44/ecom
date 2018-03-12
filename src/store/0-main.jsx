import React from "react"
import {BrowserRouter as Router, Route , Link, Switch,} from 'react-router-dom'
import Shoe from "./img/shoe.png"
import Home from "./1-home.jsx"
import Aboutme from "./2-aboutme.jsx"
import Product from "./3-product.jsx"
import Login from "./4-login.jsx"
import '../style.css'



export default class Main extends React.Component {
    render(){
        return(
            <div>
               <Router>
                   <div>

                       <div>
                           <header>

                           </header>

                           <div className="image-wrapper">
                                <img id="top-piture" src={Shoe} alt=""/>
                           </div>
                       </div>

                        <div className="menu-rapper">
                            <Link className="mylink" to="/" >Home</Link> | <Link className="mylink" to="/1" >Product</Link> | <Link className="mylink" to="/2" >info</Link> | <Link className="mylink" to="/3" >Login</Link>

                        </div>
                       <br/>

                       <hr/>



                           <Switch>

                               <Route exact path = "/" component = {Home} />
                               <Route path = "/1" component = {Product} />
                               <Route path = "/2" component = {Aboutme} />
                               <Route path = "/3" component = {Login} />

                           </Switch>



                    </div>
               </Router>
            </div>
        )
    }
}