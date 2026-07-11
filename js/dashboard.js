const user = JSON.parse(localStorage.getItem("user"));

if(user){

document.getElementById("welcome").innerHTML=
`Welcome, ${user.name} 👋`;

}

const jobs=[

{
title:"Frontend Developer",
company:"Google",
location:"Bangalore"
},

{
title:"Cloud Engineer",
company:"Microsoft",
location:"Hyderabad"
},

{
title:"Java Developer",
company:"Amazon",
location:"Pune"
},

{
title:"AI Engineer",
company:"IBM",
location:"Noida"
}

];

const container=document.getElementById("recommendedJobs");

jobs.forEach(job=>{

container.innerHTML+=`

<div class="job">

<h3>${job.title}</h3>

<p>${job.company}</p>

<p>${job.location}</p>

<button>View Job</button>

</div>

`;

});