import React from 'react';
import "./Navbar.css";
import {ReactComponent as MyLogo} from './logo.svg' 
const Item = ({url, itemname}) => (
    <li>
        <a href={url}>{itemname}</a>
    </li>
)
const ItemChildren = ({url, children}) => (
    <li>
        <a href={url}>{children}</a>
    </li>
)
const Navbar =() => (
   
           <div className="nav">
            <div className="logo">
            <MyLogo className="App-logo" />  
            <ul className='main-nav'>
                <ItemChildren>Home</ItemChildren>
                <ItemChildren>News</ItemChildren>
                <ItemChildren>Contact</ItemChildren>
                <Item url="https://www.google.com" itemname="Help" />
                 
            </ul>  
            {/* <a class="active" href="#home">Home</a>
            <a >News</a>
            <a >Contact</a>
            <a >About</a> */}
            </div>
        {/* <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="bug" height={50} />*/}
         </div>
       

)


export default Navbar;
