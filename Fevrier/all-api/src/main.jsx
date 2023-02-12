import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import Header from "./Header.jsx";
import Adresse from './adresse-api/Adresse';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header/>
        <div className="main">
            <Adresse />
        </div>
    </React.StrictMode>,
)
