let allJobs = [];

async function loadJobs() {
    const response = await fetch("data/jobs.json");
    allJobs = await response.json();
    displayJobs(allJobs);
}

function displayJobs(jobs) {
    const container = document.getElementById("jobContainer");
    container.innerHTML = "";

    if (jobs.length === 0) {
        container.innerHTML = "<h2>No jobs found.</h2>";
        return;
    }

    jobs.forEach(job => {
        container.innerHTML += `
            <div class="job-card">
                <h2>${job.title}</h2>
                <h3>${job.company}</h3>
                <p>📍 ${job.location}</p>
                <p>💼 ${job.experience}</p>
                <p>💰 ${job.salary}</p>

                <button onclick="saveJob('${job.title}')">
                    ❤️ Save Job
                </button>

                <a href="${job.apply}" target="_blank">
                    <button>Apply Now</button>
                </a>
            </div>
        `;
    });
}

document.getElementById("search").addEventListener("keyup", function () {
    const keyword = this.value.toLowerCase();

    const filtered = allJobs.filter(job =>
        job.title.toLowerCase().includes(keyword) ||
        job.company.toLowerCase().includes(keyword)
    );

    displayJobs(filtered);
});

function saveJob(title) {
    let saved = JSON.parse(localStorage.getItem("savedJobs")) || [];

    if (!saved.includes(title)) {
        saved.push(title);
        localStorage.setItem("savedJobs", JSON.stringify(saved));
        alert("Job Saved Successfully!");
    } else {
        alert("Job already saved.");
    }
}

loadJobs();


const companyFilter = document.getElementById("company");
const locationFilter = document.getElementById("location");
const experienceFilter = document.getElementById("experience");

function applyFilters() {

    let filtered = allJobs;

    if (companyFilter.value !== "") {
        filtered = filtered.filter(job => job.company === companyFilter.value);
    }

    if (locationFilter.value !== "") {
        filtered = filtered.filter(job => job.location === locationFilter.value);
    }

    if (experienceFilter.value !== "") {
        filtered = filtered.filter(job => job.experience === experienceFilter.value);
    }

    displayJobs(filtered);
}

companyFilter.addEventListener("change", applyFilters);
locationFilter.addEventListener("change", applyFilters);
experienceFilter.addEventListener("change", applyFilters);