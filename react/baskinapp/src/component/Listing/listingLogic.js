import React, { useState, useEffect } from 'react';
import './listing.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ListingDisplay from './listingDisplay';


const baseUrl = process.env.REACT_APP_API_URL

const Listing = () => {
    // let params = useParams();
    // console.log(params.location_id);

    const [storeList, setStoreList] = useState();

    useEffect(() => {
        axios.get(`${baseUrl}/stores`)
            .then((res) => {
                setStoreList(res.data);
            })
    }, [])

    return (
        <>
            <hr />
            <div class="main">
                <div class="filter">
                    <h3>Select State</h3>
                    <input type="radio" id="MAHARASHTRA" name="state" value="MAHARASHTRA" class="radiobtn" /><label
                        for="MAHARASHTRA">MAHARASHTRA</label><br />
                    <input type="radio" id="GUJRAT" name="state" value="GUJRAT" class="radiobtn" /><label
                        for="GUJRAT">GUJRAT</label><br />
                    <input type="radio" id="MADHYA PRADESH" name="state" value="MADHYA PRADESH" class="radiobtn" /><label
                        for="MADHYA PRADESH">MADHYA PRADESH</label><br />
                    <input type="radio" id="KARNATAKA" name="state" value="KARNATAKA" class="radiobtn" /><label
                        for="KARNATAKA">KARNATAKA</label><br />
                    <input type="radio" id="ASSAM" name="state" value="ASSAM" class="radiobtn" /><label
                        for="ASSAM">ASSAM</label><br />
                    <input type="radio" id="UTTAR PRADESH" name="state" value="UTTAR PRADESH" class="radiobtn" /><label
                        for="UTTAR PRADESH">UTTAR PRADESH</label><br />
                    <input type="radio" id="PUNJAB" name="state" value="PUNJAB" class="radiobtn" /><label
                        for="PUNJAB">PUNJAB</label><br />
                    <input type="radio" id="KERALA" name="state" value="KERALA" class="radiobtn" /><label
                        for="KERALA">KERALA</label><br />
                    <input type="radio" id="TAMILNADU" name="state" value="TAMILNADU" class="radiobtn" /><label
                        for="TAMILNADU">TAMILNADU</label><br />
                </div>
                <ListingDisplay listData={storeList} />
            </div>


        </>
    )
}

export default Listing;