


const fetchLoad=()=>{
    fetch("https://randomuser.me/api/")
.then(res=>res.json())
.then(allow=> anotherWork(allow))

}

 const anotherWork=(hero)=>{
//  console.log(hero.results[0].picture.large)



 const sristi=document.getElementById("div-container")

 sristi.innerHTML=`
 
  <div class="card mb-3" style="max-width: 540px;">
   <div class="row g-0">
      <div class="col-md-4">
        <img src="${hero.results[0].picture.large} " class="img-fluid rounded-start" alt="...">
       
      </div>
     <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">"${hero.results[0].name.first} " </h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
   </div>
  </div>
  `
 

 }


