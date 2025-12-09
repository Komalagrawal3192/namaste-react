 import * as React from "react";
 import ReactDOM from "react-dom/client";
 import companyLogo from './images/food.png';



 const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                  <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0QKqZOcPqTyBnFHq0Vso0rIX49-JoBVSBcwce_jXNebmWyw3HAHGBt4&s" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
                  
            </div>
        </div>

    );

 }

 const RestaurantCard=()=>{
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0ff"}}>
            <img className="res-logo" alt="img-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHz1oghCMfie_4AOsUF0JwofGnAItBiH-hKQ&s">
            </img>
        <h3>Meghna Foods</h3>
        <h4>North Indian, Asian, Snacks</h4>
        <h4>4.5 Rating</h4>
        <h4>38mins</h4>
        </div>
    );
 }
 const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
              <RestaurantCard /> 
              <RestaurantCard /> 
              <RestaurantCard /> 
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard /> 
            </div>
        </div>
    )
 }


 const AppLayout=()=>{
    return(
        <div className="app">
          <Header />
          <Body />
        </div>
    )
 }
 
 const root= ReactDOM.createRoot(document.getElementById("root")); 
 root.render(<AppLayout />);
