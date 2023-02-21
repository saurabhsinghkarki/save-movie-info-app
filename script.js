

const movieInput = document.getElementById("movieInput");
const extraInfoName = document.getElementById("extraInfoName");
const extraInfoValue = document.getElementById("extraInfoValue");
const searchMovie = document.getElementById("searchMovie");
const outputList =document.querySelector("ul");


const addMovieBtn =document.getElementById("addMovieBtn");


const addMovieFunction = ()=>{

   if(movieInput.value === ""){
      return ; 
   }
   const newLi = document.createElement("li");
   outputList.appendChild(newLi);
   newLi.className = "addedList";
   newLi.innerHTML = `<p>${movieInput.value}-${extraInfoName.value}:${extraInfoValue.value}</p> <button 
   class="buttons">Delete note</button>`
    
   console.log(newLi.children[1]);
   const deleteButton = newLi.children[1];
   deleteButton.addEventListener("click" , ()=>{
    console.log("called from delete");
   //  newLi.style.display = "none";
    newLi.remove();
   })
};
addMovieBtn.addEventListener("click" , addMovieFunction);


const search = document.getElementById("searchMovie");
search.addEventListener("input" , ()=>{
   let inputVal = search.value.toLowerCase();
   console.log("input event fired" , inputVal)
const addedList = document.querySelectorAll("li");
   Array.from(addedList).forEach((element)=>{
      let liText = element.getElementsByTagName("p")[0].innerText;
      if(liText.includes(inputVal)){
         element.style.display = "block";
      }
      else{
         element.style.display = "none";
      }
   })
   })
   

 