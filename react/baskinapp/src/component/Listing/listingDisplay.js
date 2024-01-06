import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './listing.css';
import QuickListing from './QuickListing';

const baseUrl = process.env.REACT_APP_API_URL

const StoreList = () => {
    const [storeType, setStoreType] = useState();

    useEffect(() => {
        fetch(`${baseUrl}/stores`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                setStoreType(data)
            })
    })
}

const ListingDisplay = (props) => {

    const renderData = ({ listData }) => {
        if (listData) {
            if (listData.length > 0) {
                return listData.map((item) => {
                    return (
                       
                        <QuickListing storeData = {storeType}/>
                        
                        // {/* <div class="list">
                        //     <div class="card mb-5">
                        //         <div class="row g-0">
                        //             <div class="col-md-4">
                        //                 <img src="https://i.ibb.co/vszWg36/Mumbai.jpg" class="img-fluid rounded-start" alt="..." />
                        //             </div>
                        //             <div class="col-md-8">
                        //                 <div class="card-body">
                        //                     <h2 class="card-title">Soham's Baskin Robbins Store</h2>
                        //                     <p class="card-text">Shop No.4, Daffodils Apts, Bhawani Nagar, Marol Maroshi Road, Mumbai
                        //                     </p>
                        //                     <p class="card-text"><small class="text-muted">Price Starting from Rs.69</small></p>
                        //                     <p class="card-contact"><small class="text-muted">Contact No. 9453524651</small></p>
                        //                     <div class="goto"><button><a href="shopDetails.html">Go to Shop</a></button></div>
                        //                 </div>
                        //             </div>
                        //         </div>
                        //     </div> 
                        // </div> */}
                        
                    )
                })
            } else {
                return (
                    <h2>No Data Found</h2>
                )
            }
        } else {
            return (
                <div>
                    <h2>Loading....</h2>
                    <img src="https://i.ibb.co/3hkHZ9W/1fpC.gif" alt="loader" />
                </div>
            )
        }

    }


    return (
        <div id="content">
            {renderData(props)}
        </div>
    )
}

export default ListingDisplay;