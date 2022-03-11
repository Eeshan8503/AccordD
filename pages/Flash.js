import React,{useState} from 'react'
import FlashCard from '@components/Cards/FlashCard'
import Data from '@util/Data'
import Navbar from '@components/LoginPage/Navbar'
const Flash = () => {
  const [user, setuser] = useState(0);
  return (
    <div>
        <Navbar col='black'/>
        {console.log("user = "+user)}
        <FlashCard data={Data[user]} setter={setuser} val={user}/>
    </div>
  )
}

export default Flash