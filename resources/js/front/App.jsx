import { useState } from 'react'
import './App.css'
import LeftMenu from "./LeftMenu";
import MainContent from "./MainContent";
import {openNav, closeNav} from "./js.js"

import './style.scss'


export default function App() {

 const[open, setOpen] = useState(true)

  return (
    
    
    <div className="App">
     
      {/* <script src="js.js"></script> */}

      <LeftMenu open={open}
      setOpen={setOpen}
          />

      <MainContent
      setOpen={setOpen}
       />




   </div>
)
}

