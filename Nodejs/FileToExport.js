let ans=1;

// let PI = 3.14;

// const sayHi = str => console.log(`Hey there, ${str}!`);
// const multiplyAll = (...eles) => eles.forEach((ele)=>{
//     ans*=ele;
// })

// module.exports.PI = PI;


const toExport = {
    PI : 3.14,

    sayHi : str => console.log(`Hey there, ${str}!`),
    multiplyAll: (...eles) => {
        eles.forEach((ele)=>{
        ans*=ele;
    })
    return ans;
}   
}

module.exports = toExport;
module.exports.year = 2022;