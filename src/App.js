import React, { useState } from "react"
import Icon from "./components/Icon"

     // import react-toastify//
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

//import reactstrap//
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import "./style.css"

const tiktacArray = new Array(9).fill("")
const App=()=>{
    let [isCross, setIsCross] = useState(true)
    let [winMessage, setWinMeassage] =useState("")

    const playAgain=()=>{
        setIsCross(true)
        setWinMeassage("")
        tiktacArray.fill("")
    }
  
    return( 

       <div  className="icon">        
           <Icon choice="circle" />
       </div>        
    )
    }

export default App