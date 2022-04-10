const http= require('http');
const fs=require('fs');
const url=require('url');
const uc=require('upper-case');
const nodemailer=require('nodemailer');

// This has the HTTP request and response cylce 
// This has the Read file Example
// Thus has URL (uniform resource locator)
// npm install of packages to use different modules
// this is also how to send the emails using Node js

http.createServer((req,res)=>{

// to show the message on the UI
// res.write("Hello EveryOne");
// res.end();


//to show the requested path That is HTTP request and response cycle

// res.write(req.url);
// res.end();
console.log('server running....')

    // to Read the file 

// fs.readFile('read.txt' ,(err, data)=>{
// res.write(data);
// res.end();
// })


// to append the info to the file
// below code will generate the ERR Invalid Arg Error

// fs.appendFile('read.txt','  thank you Dear Great People', (err , data)=>{
// res.write(data);
// res.end();
// });


// to overwrite the file 
// this also results in some error

// fs.writeFile('read.txt' ,"Hi everyOne I am learning how to overwrite the File here" , (err,data)=>{
//     res.write(data);
//     res.end();

// })


// How to create the file 
//after opening the localhost we will see the text.txt will be created

// fs.appendFile('text.txt' ,'Hi all' ,(err ,data)=>{
//     res.write(data);
//     res.end();
// })


// how to delete the file 

// fs.unlink('text.txt' ,(err)=>{
//     if(err) throw err;
//     console.log("file deleted");
// })


// Using the URLs 



// var addrs='http://localhost:8080/home.html?year=2018&&month=feb';

// var q=url.parse(addrs,true);


//to know th name of the host
// console.log(q.host);
// result=====  localhost:8080


// to know the name of the path
// console.log(q.pathname);
// result===== /home.html

// to know the query parameters and headers

// console.log(q.search);
//result  is    ==== ?year=2018&&month=feb


// use libs of NPM by upper-case

// res.write(uc.upperCase("Hello World"));
// res.end();



// How to send the  mail to other mail using nodemailer


const transporter=nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'thakkinikko@gmail.com',
        pass: 'nikhilrao123456'
    }
})

var options={
    from: 'thakkinikko@gmail.com',
    to: 'kodativinnu@gmail.com',
    subject: 'testing mail',
    text: 'Hi this is nikhil Rao'
}

transporter.sendMail(options,(err,info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("email is sent");
    }
})




}).listen(8080)










