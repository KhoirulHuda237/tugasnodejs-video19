const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
//   res.send('Hello Huda');

res.sendFile('./index.html', { root: __dirname});
});

app.get('/about', (req, res) => {
//   res.send('Ini adalah Halaman About');
res.sendFile('./about.html', { root: __dirname});
});

app.get('/contact', (req, res) => {
//   res.send('Ini adalah Halaman Contact');
res.sendFile('./contact.html', { root: __dirname});
});

app.get('/product/:id', (req, res) =>{
// app.get('/product/:id/category/:idCat', (req, res) =>{
    // res.send(`Product ID: ${req.params.id} <br> Category ID: ${req.params.idCat}`);
    res.send(`Product ID: ${req.params.id} <br> Category ID: ${req.query.category}`);
});

app.use('/',(req, res) =>{
    res.status(404);
    res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});










// const http = require(`http`);
// const port = 3000;
// const fs = require('fs');

// const renderHTML =(path, res) => {
//     fs.readFile(path, (err, data) =>{
//         if(err){
//           res.writeHead(404);
//           res.write('Error: file not found');
//         } else {
//           res.write(data);
//         } 
//         res.end();
//     });

// };
// // const server = http.createserver((req, res) => {

// // });

// // server.listen(3000, () => {
// //     console.log(`Server is listeing on port 3000..`);
// // });

// http
//     .createServer((req, res) => {
   
//     // console.log(url);
//     res.writeHead(200, {
//         'Content-Type' : 'text/html'}); 

//     const url = req.url;

//     switch(url){
//         case '/about':
//             renderHTML('./about.html', res);
//             break;
//         case '/contact':
//             renderHTML('./contact.html', res);
//             break;
//         default:
//             renderHTML('./index.html', res);
//             break;    
//     }

//     // if(url =='/about'){
//     //     renderHTML('./about.html', res);
//     //     // fs.readFile('./about.html', (err, data) =>{
//     //     //     if(err){
//     //     //       res.writeHead(404);
//     //     //       res.write('Error: file not found');
//     //     //     } else {
//     //     //       res.write(data);
//     //     //     } 
//     //     //     res.end();
//     //     // });
//     //     // res.write('<h1> Ini adalah halaman About</h1>');
//     //     // res.end();
//     // } else if (url === '/contact'){
//     //     renderHTML('./contact.html',res);
//     //     // res.write('<h1> Ini adalah halaman Contact</h1>');
//     //     // res.end(); 
//     // } else {
//     //     renderHTML('./index.html', res);
//     //     // res.write(`Hello Huda`);
//     //     // fs.readFile('./index.html', (err, data) =>{
//     //     //   if(err){
//     //     //     res.writeHead(404);
//     //     //     res.write('Error: file not found');
//     //     //   } else {
//     //     //     res.write(data);
//     //     //   } 
//     //     //   res.end();
//     //     // });
        
//     // }
   
// })
// .listen(3000, () => {
//     console.log(`Server is listening on port ${port}`);
// });