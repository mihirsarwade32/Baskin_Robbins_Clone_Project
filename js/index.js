

// const changeMode = () => {
//     let mybody = document.body;
//     mybody.classList.toggle('mydark');
// }




let toggle = document.getElementById("mode");
toggle.addEventListener('click', () => {
    document.body.classList.toggle('mydark');
})


const onloadPage = () =>{
    document.getElementById('main-body').style.opacity = '0.5';
    // document.getElementById('coupen').style.opacity = '1';
    document.getElementById('coupen').style.visibility = 'visible';
}

const closeCoupen = () =>{
    document.getElementById('coupen').style.visibility = 'hidden';
    document.getElementById('main-body').style.opacity = '1';
}
