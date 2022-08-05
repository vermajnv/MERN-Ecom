import './App.css';
import React from 'react';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './components/layout/Home/Home';
import ProductDetails from './components/layout/Product/ProductDetails';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import WebFont from 'webfontloader';

function App() {
    React.useEffect(() => {
        WebFont.load({
            google : {
                families : ["Roboto", "Droid Sans", "Chilanka"]
            }
        })
    }, []);

    return (
        <Router>
            <Header></Header>
            <Routes>
                <Route exact path="/" element={<Home></Home>}>

                </Route>
                <Route exact path='/product/:id' element={<ProductDetails></ProductDetails>}></Route>
            </Routes>
            <Footer></Footer>
        </Router>
    );
}

export default App;
