let submit = document.getElementById("submit");
let text = document.getElementById("text").value;

submit.addEventListener("click", function findPhoto(){
    let imgData = localStorage.getItem(text);
    if(imgData == null){
        alert("Image Not Found!");
    }
    else{
        var image = document.createElement("img");
        var imageParent = document.getElementById("gallery").innerHTML == "";
        image.id = text;
        image.src = imgData;           
        imageParent.appendChild(image);
    }
});
var openPhoto = function(e) 
  {
    var input = e.target;

    var reader = new FileReader();
    reader.onload = function()
    {
      var dataURL = reader.result;
      localStorage.setItem(input.files[0].name, dataURL );


      var image = document.createElement("img");
      var imageParent = document.getElementById("gallery");
      image.id = input.files[0].name.split('.');
      image.src = dataURL;           
      imageParent.appendChild(image);
    };
    reader.readAsDataURL(input.files[0]);
  };
  