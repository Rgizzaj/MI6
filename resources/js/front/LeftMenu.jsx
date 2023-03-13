import { useState } from "react";

export default function LeftMenu({open, setOpen}){




    
     const style={
          width:open ? 250 : 0, 
          marginLeft: open ? 250 : 0,

 }

     return(

        <div id="sideNav" className="side-navigation" style={style}>

        <a href="javascript:void(0)" className="closebtn" onClick={() => { setOpen(false)}}>&times;</a>
  
        <h2><a href="#">Home</a></h2>
        <h2><a href="#">People of intereset</a></h2>

        

      </div>

     )
}