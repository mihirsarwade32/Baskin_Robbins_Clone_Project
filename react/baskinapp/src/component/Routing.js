import react from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Home from './Home/Home';
import Location from './Location/locationLogic';
import Listing from './Listing/listingLogic';


const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}>
                        <Route index element={<Home/>} />
                        <Route path="location" element={<Location/>} />
                        <Route path="listing" element={<Listing/>} />
                      
                    </Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default Routing;