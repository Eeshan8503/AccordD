import React from 'react'
import Home from './../components/LoginPage/Home'
import FlashCard from '@components/Cards/FlashCard'
import Data from '@util/Data'
import Navbar from '@components/LoginPage/Navbar'
import IntrestsPage from '@components/IntrestsPage/IntrestsPage'
const index = () => {
  return (
    <div>
    <Navbar col='transparent'/>
      {/* <FlashCard data={Data[0]}/> */}
    <Home/>
    {/* {IntrestsPage} */}
    {/* <IntrestsPage/> */}
    </div>
  )
}

export default index