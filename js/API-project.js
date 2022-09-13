

document.getElementById("error-message").style.display="none";
const searchBook=()=>{
// console.log(valueShow)
const createInput=document.getElementById("displayBook")
const valueShow=createInput.value

if(valueShow===""){
document.getElementById("error-message").style.display="block";

}
else{


fetch(`http://openlibrary.org/search.json?q=${valueShow}`)
.then(res=>res.json())
.then(project=>apiWork(project))
}
createInput.value=""


}
const apiWork=(api)=>{

 console.log(api)
 document.getElementById("error-message").style.display="none";
 const createDivElement=document.getElementById("search-book")
 createDivElement.innerHTML=""
 api.docs.forEach((apicreate)=>{
const {title,author_name,cover_i,author_key}=apicreate
const mydiv=document.createElement("div");
 mydiv.classList.add("col")
mydiv.innerHTML=`<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="https://covers.openlibrary.org/b/id/${cover_i}-M.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${author_name[0]}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>

    <div class="card-footer"><button onclick="buttonCreate('${author_key[0]}')" class="btn-btn-outline btn-btn-danger"> button-detail</button></div>
  </div>
</div>
</div>`
createDivElement.appendChild(mydiv)

 })
}

const buttonCreate=(author)=>{
console.log(author)

}


