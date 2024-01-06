import React from "react";

const QuickListing = (props) => {
console.log(props);

    return (
    <div className="list">
        <div className="card mb-5">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://i.ibb.co/vszWg36/Mumbai.jpg" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h2 className="card-title">Soham's Baskin Robbins Store</h2>
                        <p className="card-text">Shop No.4, Daffodils Apts, Bhawani Nagar, Marol Maroshi Road, Mumbai
                        </p>
                        <p className="card-text"><small className="text-muted">Price Starting from Rs.69</small></p>
                        <p className="card-contact"><small className="text-muted">Contact No. 9453524651</small></p>
                        <div className="goto"><button><a href="shopDetails.html">Go to Shop</a></button></div>
                    </div>
                </div>
            </div>
        </div> 
     </div>
)
}

export default QuickListing;