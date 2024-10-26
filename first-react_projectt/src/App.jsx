
import { BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Lateral from './layout/Lateral'
import Nav from './layout/Nav'
import ArticleList from './components/ArticleList'
import { PrincipalRoutes } from './Routes/PrincipalRoutes'

function App() {


  return (
    <>
      
      <div className="layout">
        <PrincipalRoutes/>
      </div>
    </>
  )
}

export default App
