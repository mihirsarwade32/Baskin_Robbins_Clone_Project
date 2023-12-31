import React from 'react';
import { Link } from 'react-router-dom';

const ListingDisplay = (props) => {

    const renderData = ({ listData }) => {
        if (listData) {
            if (listData.length > 0) {
                return listData.map((item) => {
                    return (
                        <div class="list">
                            <div class="card mb-5">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="https://i.ibb.co/vszWg36/Mumbai.jpg" class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h2 class="card-title">Soham's Baskin Robbins Store</h2>
                                            <p class="card-text">Shop No.4, Daffodils Apts, Bhawani Nagar, Marol Maroshi Road, Mumbai
                                            </p>
                                            <p class="card-text"><small class="text-muted">Price Starting from Rs.69</small></p>
                                            <p class="card-contact"><small class="text-muted">Contact No. 9453524651</small></p>
                                            <div class="goto"><button><a href="shopDetails.html">Go to Shop</a></button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card mb-5">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="https://i.ibb.co/XVT3cpq/Vadodara.jpg" class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h2 class="card-title">Bhai's Baskin Robbins</h2>
                                            <p class="card-text">Ground Floor, Satyam Apts, Jetalpur Rd, beside Narayan Jewellers,
                                                Vadodara
                                            </p>
                                            <p class="card-text"><small class="text-muted">Price Starting from Rs.69</small></p>
                                            <p class="card-contact"><small class="text-muted">Contact No. 9453524667</small></p>
                                            <div class="goto"><button><a href="shopDetails.html">Go to Shop</a></button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card mb-5">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="https://i.ibb.co/MgVDrJG/Bhopal.jpg" class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h2 class="card-title">Baskin Robbins Store</h2>
                                            <p class="card-text">3rd Food Court, D B Mall, Arera Hills, Maharana Pratap Nagar, Bhopa
                                            </p>
                                            <p class="card-text"><small class="text-muted">Price Starting from Rs.69</small></p>
                                            <p class="card-contact"><small class="text-muted">Contact No. 9455724667</small></p>
                                            <div class="goto"><button><a href="shopDetails.html">Go to Shop</a></button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="card mb-5">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="https://i.ibb.co/Mg9Fm57/Bengaluru.jpg" class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h2 class="card-title">Anna's Baskin Robbins Store</h2>
                                            <p class="card-text">25, 2, Millers Rd, next to Imperial Hotel, Vasanth Nagar, Bengaluru
                                            </p>
                                            <p class="card-text"><small class="text-muted">Price Starting from Rs.69</small></p>
                                            <p class="card-contact"><small class="text-muted">Contact No. 9453524667</small></p>
                                            <div class="goto"><button><a href="shopDetails.html">Go to Shop</a></button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="card mb-5">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="https://i.ibb.co/Lzn40Z4/Guwahati.jpg" class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h2 class="card-title">Baskin Robbins Zone</h2>
                                            <p class="card-text">Digholi Pukhuri, MG Rd, Latasil, Uzan Bazar, Guwahati
                                            </p>
                                            <p class="card-text"><small class="text-muted">Price Starting from Rs.69</small></p>
                                            <p class="card-contact"><small class="text-muted">Contact No. 9675724667</small></p>
                                            <div class="goto"><button><a href="shopDetails.html">Go to Shop</a></button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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