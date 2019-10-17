function getData(method,url){
    return new Promise(function(resolve,reject){
      var xhr = new XMLHttpRequest();
      xhr.open(method,url);
      xhr.onload=function()
      {
        if(this.status>=200 && this.status<300) resolve(xhr.response);
        else{
          reject({
            status:this.status,
            statsText:xhr.statusText
          });
        }
      };
      xhr.onerror=function(){
        reject({
          status:this.status,
          statsText:xhr.statusText
        });
      };
      xhr.send();
    });
  }

setInterval(() => {

    getData("GET","https://api.chucknorris.io/jokes/random").then(function(data){
   
  let todos = JSON.parse(data);
  let output = '';
   output += `
  <p>${todos.value}</p>
  `;
  document.getElementById('Joke').innerHTML= output;
  
  
  }).catch(function(err){
  console.log(err);
  });
  }, 3000);