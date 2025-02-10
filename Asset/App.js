// let assert=require("assert")
// function add(a,b){
//     return a+b;

// }
// let actual=add(10,20)
// assert.ok(actual===50,'error is there')

// assert.equal(actual,30,"Show me error")

// assert.strictEqual(actual,'30','show me error')

// let array1=[1,2,3,4,5]
// let array2=[1,2,3,4,5 ,6,7]
// assert.deepEqual(array1,array2,'show me error')


// let array1=[1,2,3,4,5]
// let array2=[1,2,3,4,5]
// assert.deepStrictEqual(array1,array2,'show me error')


// let obj1={
//     id:1,
//     name:'india'
// }
// let obj2={
//     id:1,
//     name:'india'
// }
// assert.deepEqual(obj1,obj2,'show me error');

// let obj1={
//     id:1,
//     name:'india'
// }
// let obj2={
//     id:'1',
//     name:'india'
// }
// assert.deepStrictEqual(obj1,obj2,'show me error')
let obj1={
    id:1,
    name:'india'
}
let obj2={
    id:'1',
    name:'india'
}
assert.notDeepEqual(obj1,obj2,'show me error')