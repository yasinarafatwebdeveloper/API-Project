


const persion={

name:{
common:"john",
fullName:["john","doe"]

},
age:32,
IsMale:false,
address:{

street:"13/A st joees",
home:10,

}

}

const stringyfy=JSON.stringify(persion)
// console.log(stringyfy)
const parsejson=JSON.parse(stringyfy)
// console.log(parsejson)

const {name,age,IsMale}=persion
const {common,fullName}=name
console.log(name)
console.log(persion)

 const createApi=document.getElementById("api-create");

createApi.innerHTML=`<h1>name:${common}</h1>
<p>age:${age}</p>
<p>IsMale:${IsMale===false? "Male": "Female"}</p>

<h2> fullName;${fullName[0]}, ${fullName[1]}</h2>

<h2> ${fullName.join(" ")}</h2>
`






