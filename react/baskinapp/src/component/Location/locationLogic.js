import './location.css';
import { Link } from 'react-router-dom';
import LocationDisplay from './locationDisplay';


const Location = () => {
    return (
        <>
            <div class="main primary-dark">
                <div class="main-content">
                    <div class="main-text">
                        <p class="first-line text-center">Let's get ordering </p>
                        <p class="second-line text-center"><span class="seventh-dark ">Set your delivery location to <br /> get started. </span></p>
                    </div>
                    <div class="locate d-flex">
                        <div id="box1" onclick="geolocation()"><a href="#"><button>Use my Current Location</button></a></div>
                        <div>
                            <p id="box3" class="seventh-dark"></p>
                        </div>
                        <span id="out"></span>
                    </div>
                    <div class="proceed">
                        <Link to= {`Listing`}><button>Proceed</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Location;