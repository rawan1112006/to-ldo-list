const inputfield =document.getElementById("enter");
const getDiv = document.querySelector("div");
const getButton =document.getElementById("button");
const getButton2 = document.getElementById("button2")
getButton.addEventListener("click", function(){
  const input = inputfield.value;
  const newDiv = document.createElement("div") ;
  newDiv.id = "newDiv";
  const createButton = document.createElement("button");
  createButton.innerText = "Done"; 
  const para = document.createElement("p");
  para.innerText = input;
  inputfield.value ="";
  newDiv.append(para);
  newDiv.append(createButton);
  getDiv.insertAdjacentElement("afterend",newDiv);
  
  createButton.addEventListener("click", function(){
    createButton.remove();
    para.innerText = `${input} is Done`;
    newDiv.setAttribute('style','background-color:#ADFF2F;color:white;font-size:20px;');
    
    getButton2.addEventListener("click",function(){
      const createimage = document.createElement('img');
      getButton.remove();
      newDiv.remove();
      getDiv.remove();
      const newDiv2 = document.createElement("div");
      newDiv2.id="newDiv2";
      const para2 = document.createElement("p");
      createimage.setAttribute('src', 'pngtree-golden-creative-hand-painted-text-box-png-image_5429880.jpg');
      createimage.id = 'image';
      para2.innerText = "Well done you did all your targets 👏 ";
      newDiv2.prepend(createimage);
      newDiv2.append(para2);
      document.body.append(newDiv2);
    })
    });
    getButton2.addEventListener("click",function(){
      const createimage = document.createElement('img');
      getButton.remove();
      newDiv.remove();
      getDiv.remove();
      const newDiv2 = document.createElement("div");
      newDiv2.id="newDiv2";
      const para2 = document.createElement("p");
      createimage.setAttribute('src', 'pngtree-golden-creative-hand-painted-text-box-png-image_5429880.jpg');
      createimage.id = 'image';
      para2.innerText = "Well done you did all your targets 👏 ";
      newDiv2.prepend(createimage);
      newDiv2.append(para2);
      document.body.append(newDiv2);
    })

});

