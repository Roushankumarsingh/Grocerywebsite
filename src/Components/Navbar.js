// import React, { useContext } from 'react'
// import "./Navbar.css" 
// import Image from "./grocerryStore.jpg" 
// import { useNavigate } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'
// import { useState } from 'react'
// import Listings from './Listings'
// import allData from './allListings' 
// import { SearchContext } from './SearchContext'

// export default function Navbar({carts}) { 
//     const {setSearchQuery , setFilteredData} = useContext(SearchContext) ; 
//     const [val , setValue] = useState("") ; 
//     const navigate = useNavigate() ; 
//     const Home = ()=>{
//         navigate("/") ; 
//     }
//     const allListings = ()=>{
//         navigate("/all") ; 
//     }
//     const user = ()=>{
//         navigate("/user") ; 
//     }
//     const valString = (e)=>{
//         e.preventDefault() ; 
//         setValue(e.target.value) ; 
//     }
//     const valuableString = ()=>{
//         const filter = allData.filter(item => item.name.toLowerCase().includes(val.toLowerCase())) ; 
//         setFilteredData(filter) ; 
//         setSearchQuery(val) ; 
//         console.log(carts) ; 
//         console.log("Value is ",val) ; 
//         navigate('/search') ; 
//     }
//     const goToCart = ()=>{
//         navigate("/cart") ; 
//     }
//   return (
//     <div className='main-div'>
//         <div className='image' >
//             <img src={Image} alt="Random image"  />
//         </div>
//         <div className='home'>
//         <i class="fa-solid fa-house" onClick={Home} ></i>
//         </div>
//         <div className='listings'>
//         <i class="fa-solid fa-list-check" onClick={allListings}></i>
//         </div>
//         <div className='search'>
//             <input type='text' placeholder='Search anything '  name='search' onChange={valString}/>
//         <i class="fa-solid fa-magnifying-glass" onClick={valuableString}></i>
//         </div>
//         <div className='cart'>
//         <i className="fa-solid fa-cart-shopping"  onClick={goToCart}  ></i> 
//         <span>{carts}</span>
//         </div>
//         <div className='user'><i class="fa-solid fa-user" onClick={user}> </i>
//         </div>
//     </div>
//   )
// }

import React, { useContext } from 'react'
import "./Navbar.css" 
import Image from "./grocery.jpeg" 
import { useNavigate } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import Listings from './Listings'
import allData from './allListings' 
import { SearchContext } from './SearchContext'


export default function Navbar({ carts , isLoggedIn }) {
  const { setSearchQuery, setFilteredData } = useContext(SearchContext);
  const [val, setValue] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const filtered = allData.filter((item) =>
      item.name.toLowerCase().includes(val.toLowerCase())
    );
    setFilteredData(filtered);
    setSearchQuery(val);
    navigate('/search');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/')}>
        <img src={Image} alt="Grocery Store Logo" />
        <span>Sai Store</span>
      </div>
      <ul className="navbar-links">
        <li onClick={() => navigate('/')} className="nav-item">
          <i className="fa-solid fa-house"></i> <span>Home</span>
        </li>
        <li onClick={() => navigate('/all')} className="nav-item">
          <i className="fa-solid fa-list-check"></i> <span>Listings</span>
        </li>
        <li className="nav-item">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={val}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </li>
          <li onClick={() => navigate('/cart')} className="nav-item">
          <i className="fa-solid fa-cart-shopping"></i>
          <span>Cart</span>
          <span className="cart-badge">{carts}</span>
        </li>
        <li onClick={() => navigate('/orders')} className="nav-item">
        <i className="fa-solid fa-truck-fast"></i>
          <span>Orders</span>
          <span className="cart-badge">{carts}</span>
        </li>
        
        
        <li onClick={() => navigate('/user')} className="nav-item">
          <i className="fa-solid fa-user"></i> <span>User</span>
        </li>
      </ul>
    </nav>
  );
}
