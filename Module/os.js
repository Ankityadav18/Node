let os=require('os')

console.log(`arch is`, os.arch());
console.log('plaform is ::' ,os.platform());
console.log(os.tmpdir());
console.log ('host name is::',os.hostname());
console.log('release is::',os.release());
console.log( 'userInfo is ::',os.userInfo());