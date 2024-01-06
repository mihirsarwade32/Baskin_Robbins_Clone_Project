import react from 'react';
import './getLocation.css';


const getLocation = () => {
    // <script>
        let x = document.getElementById('out');
        let y = document.getElementById('box3');

        function geolocation() {
        if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition)
            } else {
                x.innerText = "Geo Not Supported"
            }
        }

        function showPosition(data) {
            console.log(data)
            let lat = data.coords.latitude;
            let lon = data.coords.longitude;
            // x.innerText = `Latitude is ${lat} and longitude is ${lon}`
            const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
            //api calling
            fetch(url, { method: 'GET' })
                //return promise
                .then((res) => res.json())
                //resolve the promise
                .then((data) => {
                    console.log(data)
                    let cityName = data.city.name;
                    // let countryName = data.country.name;
                    let temp = data.list[0].temp.day + "°C"
                    y.innerHTML = `${temp},${cityName}`
                })
        }
    // {/* </script> */}


    return (
        <>
            <div className="main primary-dark">
                <div className="main-content">
                    <div className="main-text">
                        <p className="first-line text-center">Let's get ordering </p>
                        <p className="second-line text-center"><span className="seventh-dark ">Set your delivery location to <br/> get started. </span></p>
                    </div>
                    <div className="locate d-flex">
                        <div id="box1" onclick="geolocation()"><a href="#"><button>Use my Current Location</button></a></div>
                        <div>
                            <p id="box3" className="seventh-dark"></p>
                        </div>
                        <span id="out"></span>
                    </div>
                </div>
            </div>

          


        </>
    )
}
export default getLocation;