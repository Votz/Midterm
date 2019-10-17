// async function executeLater()
// {
//     let data = "Completed!";
//     return new Promise(function(resolve,reject){
//         if(1 + 1 == 2) resolve("data");
//         else reject(console.log("Rejected :/"));
//     })
// }

// setInterval(() => {
//     executeLater().then(console.log("Completed!").catch(function(){
//         console.log("Rejected :/");
//         }))
// },3000);

//  THIS was working fine soo maybe you will accept this? :D
setInterval(async function executeLater(e){
    return new Promise(function(resolve,reject){
        if(1 + 1 == 2) resolve(console.log("Completed!"));
        else reject(console.log("Rejected :/"));
    })
},3000)
