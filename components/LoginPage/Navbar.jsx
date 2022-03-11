import React from 'react'
import Logo from './../../public/assets/Accord-logo.svg'
// import './../../styles/styles.css'
import Link from 'next/link'
const Navbar = (props) => {
  return (
    <div className="navv" style={{backgroundColor:props.col}} >
    <div className='image'>
        {/* <img src={Logo} height={50} width={300} alt='sa'></img> */}
        <p>Accord</p>
    </div>
    <div className='item1'>
        <Link href={'./Flash'}>
        <p>Home</p>
        </Link>
        <p>My Profile</p>
        <p>Live Chat</p>
    </div>
    <div className='item2'>
       <p>Settings</p>
    </div>
    </div>
  )
}

export default Navbar