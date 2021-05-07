const net = require('net');
const os = require('os');

const server = net.createServer();
const users = [];

function socketWindows(user){
    let bufferData = '';
    const enterBuffer =  Buffer.from([0x0d, 0x0a]);
    console.log('on windows');
    user.on('data', data => {
        if(Buffer.compare(enterBuffer, data) === 0){
            console.log('enter detected...');
            users.forEach(receiverUser => {
                if(user !== users[users.indexOf(receiverUser)]){
                    receiverUser.write(`\n\ruser ${users.indexOf(user) + 1} send you: ${bufferData}\n\r`)
                    receiverUser.write('Ecrivez un message: ')
                }else{
                    user.write('message sended successfully\n\r');
                    user.write('Ecrivez un message: ')
                }
                // console.log(users.indexOf(receiverUser));
            });
            bufferData = '';
        }else{
            bufferData += data.toString();
            console.log('bufferData: ', bufferData);
        }
    });
}

function socketUnix(user){
    console.log('unix server socket');
    user.setEncoding('utf-8');
    user.on('data', data => {
        users.forEach(receiverUser => {
            if(user !== users[users.indexOf(receiverUser)]){
                receiverUser.write(`\n\ruser ${users.indexOf(user) + 1} send you: ${data}\n\r`)
                receiverUser.write('Ecrivez un message: ')
            }else{
                user.write('message sended successfully\n\r');
                user.write('Ecrivez un message: ')
            }
        });
    });
}

server.on('connection', socket => {
    socket.write(' ========= Bienvenu dans notre server de socket !  :) =========\n\r');
    socket.write('Have fun ! \n\n\r');
    users.push(socket);
    socket.write('Ecrivez un message: ');
    os.platform() === "win32" ? socketWindows(socket) : socketUnix(socket);

});

server.listen(3000,() => {
    console.log(`${server.address().address}:${server.address().port}`)
});