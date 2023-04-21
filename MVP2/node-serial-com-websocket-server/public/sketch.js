const NGROK = `${window.location.hostname}`;
const URL = `http://${window.location.hostname}:8080`;
let socket = io(NGROK, { path: '/real-time'});

socket.on('disp-change',chooseCar=>{
    document.getElementById('unique').src=chooseCar
})