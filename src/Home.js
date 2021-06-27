import React, { useState } from 'react'
// import logo from "./logo.svg"
import Data from './data.json'
import { Link } from 'react-router-dom'
// import Cart from "./Cart"


const Home=()=>{
    
    
    const [cartjs, setCartjs]= useState([]);
    const [count, setCount]= useState(1);
    const [cartPrice, setCartPrice]= useState();
    // const [totalPrice, setTotalPrice]= useState(0);
    const [cartItem, setCartItem]= useState("home");

    const addToCart = (Data) => {
        setCartjs([...cartjs, {...Data}])
        console.log(cartjs)
      };
    
    const removeFromCart= (DataToRemove)=>{
        setCartjs(cartjs.filter((Data)=> Data !== DataToRemove));
    }
      const viewInCart=()=>{
        setCartItem("viewInCart");
      }
      const home=()=>{
        setCartItem("home");
      }

    const counterAdd=(dataPrice)=>{
        setCount(count+1);
        setCartPrice(dataPrice * count)
        console.log(cartPrice)
    }
    const counterSub=(dataPrice)=>{
        // setCount(count-2);
        console.log(count)
        
        setCount(count-1);
        setCartPrice(dataPrice * count)
        console.log(cartPrice)
    }





    return(
        <div> 
        <nav>
            <div className="logo">
                <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="logo"></img>
            </div>
            {/* <div className="logo">
                <img src={logo} alt="logo"></img>
            </div> */}
            {/* <h1> flipkart </h1> */}
            <div className="end">
            <div className="home">
                <Link to ={`/`} className="button" onClick={()=>home()}>
                Home
                </Link>
            </div>
            <div className="view">
                <Link to ={`/`} className="button" onClick={()=>viewInCart()}>
                    View In Cart 
                </Link>
                </div>
            </div>
        </nav>
        {cartItem === "home" &&
            <div className="homePageContainer-center">
                {Data.map((dataDetail, index) => {
                     return( 
                    <div className="homePageContainer">
                    
                        <div className="img-container" key={index}>
                            <img src={dataDetail.shirtImage} alt="shirtImage"/> 
                        </div>
                        <div className="homePageContainer-footer">
                            <div className="container">
                            <div className="title">
                            <h1>{dataDetail.title}</h1>
                            <h2>{dataDetail.price}</h2>
                            </div>
                            <div className="size">
                            <h3>{dataDetail.size}</h3>
                            <p>{dataDetail.brand}</p>
                            <p>{dataDetail.gender}</p>
                            </div>
                            </div>
                            <div className="container">
                            <div className="button">
                            <button className="btn btn-primary" value="clear" onClick={() => addToCart(dataDetail)}>Add to Cart</button>
                            </div>
                            </div>
                        </div>
                    
                    </div>)
                    })}
            </div>
        }
        {cartItem === "viewInCart" &&
            <div className="cartPageContainer-center">
            <aside>
                <h1>Total Amount: </h1>{cartPrice}
            </aside>
                
                {cartjs.map((dataDetail, index) => {
                     return( 
                        
                    <main className="cartPageContainer">
                       
                        
                        <div className="img-container" key={index}>
                            <img src={dataDetail.shirtImage} alt="shirtImage"/> 
                        </div>
                        <div className="cartPageContainer-footer">
                            <div className="container">
                            <div className="title">
                            <h1>{dataDetail.title}</h1>
                            <h2>{dataDetail.price}</h2>
                            </div>
                            <div className="size">
                            <h3>{dataDetail.size}</h3>
                            <p>{dataDetail.brand}</p>
                            <p>{dataDetail.gender}</p>
                            </div>
                            </div>
                            <div className="button1">
                            <button className="button2" onClick={() => counterAdd(dataDetail.price)}>+</button>
                            {count-1}
                            <button className="button2" onClick={() => counterSub(dataDetail.price)}>-</button>
                            </div>
                            <div className="container">
                            <div className="button2">
                            <h2>Price</h2> <span>Rs.</span>{cartPrice}
                            <button className="btn btn-primary" value="remove" onClick={() => removeFromCart(dataDetail)}>Remove from Cart</button>
                            </div>
                            <div className="view">
                            </div>
                            </div>
                        </div>
                    
                    </main>)
                    })}
                    
                    
            </div>
            
        }
        </div>
    )
    }
export default Home;