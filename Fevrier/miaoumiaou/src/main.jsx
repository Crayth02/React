import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header' // ctrl + espace pour faire un import après la dernière lettre de la balise
import Footer from './components/Footer'
import Body from './components/Body'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Body />
    <Footer />
  </React.StrictMode>,
)
