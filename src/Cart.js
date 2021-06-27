import React from 'react'
import CartInfo from './cart.json'
// import { Link } from 'react-router-dom'
// import Home from './Home'

const Cart = ({cartjs, setCartjs}) =>{

    const removeFromCart=()=>{

    }
    return(
        <div> 
        <div className="homePageContainer-center">
                {CartInfo.map((CartInfo, index) => {
                     return( 
                    <div className="homePageContainer">
                    
                        <div className="img-container" key={index}>
                            <img src={CartInfo.shirtImage} alt="shirtImage"/> 
                        </div>
                        <div className="homePageContainer-footer">
                            <div className="container">
                            <div className="title">
                            <h1>{CartInfo.title}</h1>
                            <h2>{CartInfo.price}</h2>
                            </div>
                            <div className="size">
                            <h3>{CartInfo.size}</h3>
                            <p>{CartInfo.brand}</p>
                            <p>{CartInfo.gender}</p>
                            </div>
                            </div>
                            <div className="container">
                            <div className="button">
                            <button className="btn btn-primary" value="clear" onClick={removeFromCart(CartInfo)}>Remove Cart</button>
                            </div>
                            <div className="view">
                            {/* <Link to ={`/cart`} className="btn btn-primary btn-details">
                            Remove
                            </Link> */}
                            </div>
                            </div>
                        </div>
                    
                    </div>)
                    })}
            </div>
        </div>
    )
    }
export default Cart ;