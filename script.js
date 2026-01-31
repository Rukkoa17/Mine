console.log("JS chargé");

const yesbtn = document.getElementById("yesbtn");
const nobtn = document.getElementById("nobtn");
let nobtnclicked = 0;
const img = document.querySelector("img");
const heading = document.getElementById("heading");

const normwidth = '100px';
const normheight = '60px';

nobtn.style.width = '100px';

nobtn.addEventListener("click" , () => {

   nobtnclicked += 1;
   console.log(nobtnclicked);
   if (nobtnclicked >= 10){
      yesbtn.remove();
      nobtn.remove();
      img.remove();
      heading.remove() ;
   }

   const currentwith = getComputedStyle(yesbtn).width;
   const currentheight = getComputedStyle(yesbtn).height;

   const widthpx = parseInt(currentwith);
   const heightpx = parseInt(currentheight);

   const change = 20;
   
   yesbtn.style.width = `${widthpx + change}px`;
   yesbtn.style.height = `${heightpx + change}px`;

});

yesbtn.addEventListener("click" , () => {
   changes()
   yesbtn.style.width = normwidth
   yesbtn.style.height = normheight
})

function changes() {
   yesbtn.remove();
   nobtn.remove();
   document.getElementById("image").src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnM4ODdnc2RsaGhldWd5NXJ5czJmaDlwanUxNHZocmpydzh6cGQyaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3I8H8VvG9D7FRqd92Q/giphy.gif";
   
   setTimeout(() => {
      document.getElementById("image").src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXFldXlwa3Bpa3VnMW0yNHkzNHQyNHc2aWF1amQ3bzhuZzc3bXA5eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hfgi4lb6KT84F25Zbf/giphy.gif";      
   }, 3000);
 
   setTimeout((create) => { 
      const btncont = document.getElementsByClassName("btn-container");
      var newbtn = document.createElement("button");
      var txt = document.createTextNode("CLIQUE (;");
      newbtn.appendChild(txt);
      newbtn.classList.add("new-btn");
      document.body.appendChild(newbtn);
      
      setTimeout(() => {
         newbtn.classList.add("show");
      }, 50);

      newbtn.addEventListener("click", (page) => {
         newbtn.remove()
         img.remove()
         heading.remove()

         

      })
   },4000);
}

