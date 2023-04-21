
const NGROK = `${window.location.hostname}`;
const URL = `http://${window.location.hostname}:8080`;
let socket = io(NGROK, { path: '/real-time'});



let screens=0;
let cars=0;
let models=false;
let model=1;
let chosenModel="";
let colors=false;
let color=1;
let chosenColor="";
let wheels=false;
let wheel=1;
let posicionJoystick=1;
let fields=document.getElementById("fields");
let submit=document.getElementById("submit");
let chooseCar="https://github.com/Darksea1220/imagesMVP2/blob/master/mupi.png?raw=true";

function changeModel(posicionJostick) {
    if (models==true) {
        console.log(posicionJostick,model);
        if (posicionJostick===0 && model===1) {
            chooseCar="https://github.com/Darksea1220/imagesMVP2/blob/master/Personalizar3.png?raw=true";
            socket.emit('change', chooseCar)
            model=3;
            console.log(posicionJostick);
        }else if (posicionJostick===2 && model===1) {
            chooseCar="https://github.com/Darksea1220/imagesMVP2/blob/master/Personalizar2.png?raw=true";
            socket.emit('change', chooseCar)
            model=2;
            console.log(posicionJostick);
        }else if (posicionJostick===0 && model===2) {
            chooseCar="https://github.com/Darksea1220/imagesMVP2/blob/master/Personalizar.png?raw=true";
            socket.emit('change', chooseCar)
            model=1;
            console.log(posicionJostick);
        }else if (posicionJostick===2 && model===2) {
            chooseCar="https://github.com/Darksea1220/imagesMVP2/blob/master/Personalizar3.png?raw=true";
            socket.emit('change', chooseCar)
            model=3;
            console.log(posicionJostick);
        }else if (posicionJostick===0 && model===3) {
            chooseCar="https://github.com/Darksea1220/imagesMVP2/blob/master/Personalizar2.png?raw=true";
            socket.emit('change', chooseCar)
            model=2;
            console.log(posicionJostick);
        }else if (posicionJostick===2 && model===3) {
            chooseCar="https://github.com/Darksea1220/imagesMVP2/blob/master/Personalizar.png?raw=true";
            socket.emit('change', chooseCar)
            model=1;
            console.log(posicionJostick);
        }
    }
}
function changeColor(posicionJostick) {
    if (colors==true) {
        console.log(posicionJostick,color);
        if (posicionJostick===0 && color===1) {
            chooseCar=`https://github.com/Darksea1220/imagesMVP2/blob/master/Color${chosenModel}3.png?raw=true`;
            socket.emit('change', chooseCar)
            color=3;
            console.log(posicionJostick);
        }else if (posicionJostick===2 && color===1) {
            chooseCar=`https://github.com/Darksea1220/imagesMVP2/blob/master/Color${chosenModel}2.png?raw=true`;
            socket.emit('change', chooseCar)
            color=2;
            console.log(posicionJostick);
        }else if (posicionJostick===0 && color===2) {
            chooseCar=`https://github.com/Darksea1220/imagesMVP2/blob/master/Color${chosenModel}1.png?raw=true`;
            socket.emit('change', chooseCar)
            color=1;
            console.log(posicionJostick);
        }else if (posicionJostick===2 && color===2) {
            chooseCar=`https://github.com/Darksea1220/imagesMVP2/blob/master/Color${chosenModel}3.png?raw=true`;
            socket.emit('change', chooseCar)
            color=3;
            console.log(posicionJostick);
        }else if (posicionJostick===0 && color===3) {
            chooseCar=`https://github.com/Darksea1220/imagesMVP2/blob/master/Color${chosenModel}2.png?raw=true`;
            socket.emit('change', chooseCar)
            color=2;
            console.log(posicionJostick);
        }else if (posicionJostick===2 && color===3) {
            chooseCar=`https://github.com/Darksea1220/imagesMVP2/blob/master/Color${chosenModel}1.png?raw=true`;
            socket.emit('change', chooseCar)
            color=1;
            console.log(posicionJostick);
        }
    }
}
function changeWhel(posicionJostick) {
    if (wheels==true) {
        console.log(posicionJostick,wheel);
        if (posicionJostick===0 && wheel===1) {
            chooseCar=`https://github.com/Darksea1220/imagesMVP2/blob/master/ruedas${chosenModel}${chosenColor}_3.png?raw=true`;
            socket.emit('change', chooseCar)
            wheel=3;
            console.log(posicionJostick);
        }else if (posicionJostick===2 && wheel===1) {
            chooseCar=`https://github.com/Darksea1220/imagesMVP2/blob/master/ruedas${chosenModel}${chosenColor}_2.png?raw=true`;
            socket.emit('change', chooseCar)
            wheel=2;
            console.log(posicionJostick);
        }else if (posicionJostick===0 && wheel===2) {
            chooseCar=`https://github.com/Darksea1220/imagesMVP2/blob/master/ruedas${chosenModel}${chosenColor}_1.png?raw=true`;
            socket.emit('change', chooseCar)
            wheel=1;
            console.log(posicionJostick);
        }else if (posicionJostick===2 && wheel===2) {
            chooseCar=`https://github.com/Darksea1220/imagesMVP2/blob/master/ruedas${chosenModel}${chosenColor}_3.png?raw=true`;
            socket.emit('change', chooseCar)
            wheel=3;
            console.log(posicionJostick);
        }else if (posicionJostick===0 && wheel===3) {
            chooseCar=`https://github.com/Darksea1220/imagesMVP2/blob/master/ruedas${chosenModel}${chosenColor}_2.png?raw=true`;
            socket.emit('change', chooseCar)
            wheel=2;
            console.log(posicionJostick);
        }else if (posicionJostick===2 && wheel===3) {
            chooseCar=`https://github.com/Darksea1220/imagesMVP2/blob/master/ruedas${chosenModel}${chosenColor}_1.png?raw=true`;
            socket.emit('change', chooseCar)
            wheel=1;
            console.log(posicionJostick);
        }
    }
}
function saveModel(x) {
    switch (x) {
        case 1:
            chosenModel="EQ"
            break;
        case 2:
            chosenModel="AMG"
            break;
        case 3:
            chosenModel="May"
            break;
    
        default:
            break;
    }
}
function saveColor(x) {
    switch (x) {
        case 1:
            chosenColor="1"
            break;
        case 2:
            chosenColor="2"
            break;
        case 3:
            chosenColor="3"
            break;
    
        default:
            break;
    }
}

socket.on('arduinoMessage', (arduinostatus) => {
    let {statusX,statusY,push } = arduinostatus;
    addScreen(push);
    let umbralIzquierda = 480;
    let umbralDerecha = 515;

    if (statusX < umbralIzquierda) {
    posicionJoystick = 0;
    changeModel(posicionJoystick);
    changeColor(posicionJoystick);
    changeWhel(posicionJoystick);
    } else if (statusX > umbralDerecha) {
    posicionJoystick = 2;
    changeModel(posicionJoystick);
    changeColor(posicionJoystick);
    changeWhel(posicionJoystick);
    } else {
    posicionJoystick = 1;
    }
    console.log("Posición del joystick: " + posicionJoystick);


    function addScreen(p) {
        if (p===1) {
            screens=screens + 1;
            console.log(screens);
            switch (screens) {
                case 0:
                    socket.emit('change', chooseCar);
                    break;
                case 1:
                    chooseCar="https://github.com/Darksea1220/imagesMVP2/blob/master/Instrucciones.png?raw=true";
                    socket.emit('change', chooseCar);
                    break;
                case 2:
                    chooseCar="https://github.com/Darksea1220/imagesMVP2/blob/master/Personalizar.png?raw=true";
                    socket.emit('change', chooseCar);
                    models=true;
                    break;
                case 3:
                    socket.emit('orderForArduino','M');
                    models=false;
                    saveModel(model);
                    chooseCar=`https://github.com/Darksea1220/imagesMVP2/blob/master/Color${chosenModel}1.png?raw=true`;
                    socket.emit('change', chooseCar);
                    colors=true;
                    break;

                case 4:
                    socket.emit('orderForArduino','R');
                    colors=false;
                    saveColor(color);
                    chooseCar=`https://github.com/Darksea1220/imagesMVP2/blob/master/ruedas${chosenModel}${chosenColor}_1.png?raw=true`;
                    socket.emit('change', chooseCar);
                    wheels=true;
                    break;

                case 5:
                    socket.emit('orderForArduino','C');
                    wheels=false;
                    chooseCar="https://github.com/Darksea1220/imagesMVP2/blob/master/Qr.jpg?raw=true";
                    socket.emit('change', chooseCar);
                    break;

                case 6:
                    document.getElementById("display").src="https://github.com/Darksea1220/imagesMVP2/blob/master/Formulario.png?raw=true";
                    fields.style.zIndex=10;
                    submit.style.zIndex=10;
                    submit.addEventListener('click',()=>{
                    saveData();
                    })
                    break;
                default:
                    break;
            }
        }
    }

    async function saveData(){
        let name =document.getElementById("mail").value;
        let email =document.getElementById("nam").value;
        let phone =document.getElementById("phone").value;
        let message = {nombre:name,mail:email,phone:phone };
        let request = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(message)
        }
        fetch(`/userdata`,request);
        document.getElementById("display").src="https://github.com/Darksea1220/imagesMVP2/blob/master/feedback.png?raw=true";
        chooseCar="https://github.com/Darksea1220/imagesMVP2/blob/master/mupi.png?raw=true";
        socket.emit('change', chooseCar);
        fields.style.zIndex=-10;
        submit.style.zIndex=-10;
        socket.emit('orderForArduino','m');
        socket.emit('orderForArduino','r');
        socket.emit('orderForArduino','c');
    }
});