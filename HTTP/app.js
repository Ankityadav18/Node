let http=require('http')
//!Create your own server
let server=http.createServer((req,res)=>{
    res.setHeader('content-type','text/html')
    res.statusCode=200;
    res.write('<h1>Welcome to node js</h1>')
    res.end()
})
server.listen(5900,(error)=>{
    if(error){
        console.log('error');
    }
    else{
        console.log('Server is running at port number:http://localhost:5900');
    }
})

//! createSer