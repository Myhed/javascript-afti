const { spawn } = require('child_process');
const {open, writeFile, readdir, opendir} = require('fs');
const {basename, relative} = require('path');
const os = require('os');

// const ls = spawn('C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\', ['/c', 'test.bat']);

// ls.stdout.on('data', data => {
//     console.log(data.toString());
// });

// ls.stderr.on('data', data => {
//     console.log('error :', data.toString());
// });

// console.log(os.cpus());
// console.log(os.arch());
// console.log(os.platform());
// console.log(os.version());
// console.log(os.userInfo());
// console.log(os.getPriority());
// console.log(os.freemem());

// const absolutPath = `${process.cwd()}`;
// console.log(process.cwd());
// open(`${process.cwd()}\\toto`, 'a+', function(err, dir){
//     writeFile(`${process.cwd()}\\toto`, 'Hello World\n\r', {encoding: 'utf-8', flag: 'a+'}, error => {
//         console.log('error writeFile: ', error);
//     });
// });

// opendir(absolutPath+'\\test', async function(err, dir){
//     console.log('dir:', dir);
//     console.log('read dir:', await (await dir.read()).isDirectory());
// });

// readdir(absolutPath, {withFileTypes: true}, async function(error , files){
    //     files.forEach((file) => {
        //         console.log('file: ', file.isDirectory());
        //         console.log('name: ', file.name);
        //     });
        // });
        
// console.log('basename: ',basename(absolutPath));
// console.log('relative: ', relative(absolutPath+'\\test\\titi.txt', '\\test\\titi.txt'));