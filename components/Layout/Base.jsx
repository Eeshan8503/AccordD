import Navbar from "./../LoginPage/Navbar";
import { useState,createContext } from "react";

export const Appcontext=createContext(null)
export default function Layout({ children }) {
  const [name, setName] = useState("")
    return (
      <Appcontext.Provider value={{}}>

      <div>
          {/* <Navbar/> */}
          <div className='global-container'>
            {children}
          </div>
         
      </div>
      </Appcontext.Provider>
         
    )
  }