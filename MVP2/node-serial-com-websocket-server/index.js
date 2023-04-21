import { express, Server, cors, SerialPort, ReadlineParser } from './dependencies.js'

const PORT = 8080;
const IPaddress = "172.30.176.110"
const SERVER_IP = IPaddress;

//⚙️ HTTP COMMUNICATION SETUP _________________________________________________
const app = express();
// const STATIC_MUPI_DISPLAY = express.static('public-display');
// app.use('/mupi-display', STATIC_MUPI_DISPLAY);
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use('/client', express.static('public-display')); 
app.use('/mupi', express.static('public')); 
//============================================ END

app.post('/userdata', (request, response) => {
    console.log(request.body);
    response.end();
})

//⚙️ SERIAL COMMUNICATION SETUP -------------------------------------------------
const protocolConfiguration = { // *New: Defining Serial configurations
    path: 'COM10', //*Change this COM# or usbmodem#####
    baudRate: 9600
};

const port = new SerialPort(protocolConfiguration);

const parser = port.pipe(new ReadlineParser);
parser.on('data',(arduinoData)=>{
    let arduinoArray=arduinoData.split(' ');
    let arduinostatus = {
        statusX: parseInt(arduinoArray[0]),
        statusY: parseInt(arduinoArray[1]),
        push: parseInt(arduinoArray[2])
    }
    ioServer.emit('arduinoMessage', arduinostatus);
    console.log(arduinostatus);

})
const httpServer = app.listen(PORT, () => {
    console.table(
        {
            'Client Endpoint' : `http://${SERVER_IP}:${PORT}/client`,
            'Mupi Endpoint': `http://${SERVER_IP}:${PORT}/mupi`
        }
    )
});
const ioServer = new Server(httpServer, { path: '/real-time' });


ioServer.on('connection', (socket) => {

    socket.on('change',chooseCar=>{
        console.log(chooseCar);
        socket.broadcast.emit('disp-change',chooseCar)
    })

    socket.on('orderForArduino', (orderForArduino) => {
        port.write(orderForArduino);
        console.log('orderForArduino: ' + orderForArduino);
    });
});
