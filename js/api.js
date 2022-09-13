

const date=[
{

    id:"124r233f2333",
    name:"Honda 5den",
    price:"123",
    description:"vehicles type:seadns, seats:2,loggages:2 ,transmission:automatic",
  image:"https://www.caranddriver.com/"




},


{

    id:"124r233f2333",
     name:"AK-FZ",
    price:"333",
    description:"vehicles type:VERY SPREED, seats:3,loggages:1 ,transmission:automatic-spreed",
  
},


{

    id:"124r233f2333",
     name:"AK-FZ",
    price:"333",
    description:"vehicles type:VERY SPREED, seats:3,loggages:1 ,transmission:automatic-spreed",
  
}

]

const constitute=document.getElementById("create-div")
date.forEach(main=>{
    const {id, name,price,description}=date

const ceatly=document.createElement("div")
ceatly.classList.add("col")


ceatly.innerHTML=`

<div class="col">
<div class="card">
  <img src="${main.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${description}</p>
    <h1> My-Id:${id}</h1>
  </div>
</div>
</div>

`
constitute.appendChild(ceatly)




})








