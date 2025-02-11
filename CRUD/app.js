let fs=require('fs')


//!Create the file
//?SYNC
fs.writeFileSync('./text.text','234567890')

//! Async
// fs.writeFile('./plain.txt','234567890',(err)=>{
//     console.log(err);
// })

//!Read the file with the help of synchronous
// let data=fs.readFileSync('./plain.txt','utf-8')
// console.log(data);

//!Read the file with the help of sync
// fs.readFile('./text.text','utf-8',(err,data)=>{

//    if(err){
//     console.log(err);
//    }else{
//     console.log(data);
//    }

// })


//!Delete the file with the help of sync
// fs.unlinkSync('./text.text')

//!Delete the file with help of aync
//  let unlink=fs.unlink('./plain.txt',(data)=>{
//     console.log(data);
// })
// console.log(unlink);
//!how to append the data.

// fs.appendFileSync('./text.text','Contact number of User is: +91 1234567890')

// fs.appendFile('./text.text','\n data' ,(err)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log('data is successfully added');
//   }
// })



//!Exist
// fs.exists('./text.text',(exist)=>{
//     console.log(exist ? 'File is present' : 'file is not present');
// })

//!Copy file
//!Async copy
// fs.copyFile('./text.text' ,'./index.html' ,(err)=>{
//     if(err){
//         console.log(err);
    
//     }
//      else{
//         console.log('file copied successfully');
//     }
// })

//!Sync copying

// try{
// fs.copyFile('./text.text','./index.html');
// console.log('copied succesfully');
// }
// catch(err){
//     console.log('err');
// }

//!rename file
fs.rename('./text.text','./newtext.text',(err)=>{
if(err){
    console.log(err);
}
else{
    console.log('renamed successfully');
}
})