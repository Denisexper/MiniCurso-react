import React from 'react'
import Header from '../layout/Header'
import Nav from '../layout/Nav'
import ArticleList from './ArticleList'
import Lateral from '../layout/Lateral'
import Footer from '../layout/Footer'

const Inicio = ({saveInformation}) => {
    return (
        <>
            <Header />

            <Nav />
            
            <ArticleList saveInformation={saveInformation} />

            <Lateral />

            <Footer/>
 
        </>
    )
}

export default Inicio
