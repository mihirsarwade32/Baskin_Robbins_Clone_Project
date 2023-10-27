let toggle = document.getElementById("mode");
toggle.addEventListener('click', () => {
    document.body.classList.toggle('mydark');
})


const onloadPage = () =>{
    document.getElementById('title-id').style.opacity = '0.1';
    document.getElementById('topslider-id').style.opacity = '0.1';
    document.getElementById('locate').style.opacity = '0.1';
    document.getElementById('weather').style.opacity = '0.1';
    document.getElementById('mode').style.opacity = '0.1';
    document.getElementById('coupen').style.visibility = 'visible'; 
}


const closeCoupen = () =>{
    document.getElementById('coupen').style.visibility = 'hidden';
    document.getElementById('title-id').style.opacity = '1';
    document.getElementById('topslider-id').style.opacity = '1';
    document.getElementById('locate').style.opacity = '1';
    document.getElementById('weather').style.opacity = '1';
    document.getElementById('mode').style.opacity = '1';  
}
