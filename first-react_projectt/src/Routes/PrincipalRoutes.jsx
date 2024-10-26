import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import Inicio from "../components/Inicio"


export const PrincipalRoutes = () => {
    //create as state util useState of react
    const [information, setInformation] = useState([])
    //create a method to save imformation
    const saveInformation=(product)=>{
        const allInformation = [...information, product]
        setInformation(allInformation)
        console.log(information);
        localStorage.setItem('information', JSON.stringify(information))
        
        
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio saveInformation={saveInformation}/>} />
            </Routes>
        </BrowserRouter>


    )
}

