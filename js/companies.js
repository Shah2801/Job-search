const companies=[

    {
    name:"Google",
    logo:"assets/logos/google.png",
    jobs:250,
    industry:"Technology"
    },
    
    {
    name:"Microsoft",
    logo:"assets/logos/microsoft.png",
    jobs:180,
    industry:"Cloud & AI"
    },
    
    {
    name:"Amazon",
    logo:"assets/logos/amazon.png",
    jobs:300,
    industry:"E-Commerce"
    },
    
    {
    name:"IBM",
    logo:"assets/logos/ibm.png",
    jobs:140,
    industry:"Technology"
    },
    
    {
    name:"TCS",
    logo:"assets/logos/tcs.png",
    jobs:500,
    industry:"IT Services"
    },
    
    {
    name:"Infosys",
    logo:"assets/logos/infosys.png",
    jobs:450,
    industry:"IT Services"
    }
    
    ];
    
    const container=document.getElementById("companyContainer");
    
    companies.forEach(company=>{
    
    container.innerHTML+=`
    
    <div class="company-card">
    
    <img src="${company.logo}">
    
    <h2>${company.name}</h2>
    
    <p>${company.industry}</p>
    
    <p>Open Jobs : ${company.jobs}</p>
    
    <button>
    
    View Jobs
    
    </button>
    
    </div>
    
    `;
    
    });