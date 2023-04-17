let employees = [

    {
        id: 1,
        fullName: "Rajasekhara Reddy",
        gender: "Male",
        designation: "Full Stack Developer",
        company: "Some company",
        salary: 60000,
        project: "project 1",
        experience: "2 Years"
    },

    {
        id: 2,
        fullName: "Suresh",
        gender: "Male",
        designation: "Front End Developer",
        company: "New company",
        salary: 70000,
        project: "project 1",
        experience: "3 Years"
    },

    {
        id: 3,
        fullName: "Naresh",
        gender: "Male",
        designation: "Back End Developer",
        company: "old company",
        salary: 75000,
        project: "project 3",
        experience: "4 Years"
    },

    {
        id: 4,
        fullName: "Nagesh",
        gender: "Male",
        designation: "Full Stack Developer",
        company: "fake company",
        salary: 60000,
        project: "project 10",
        experience: "2 Years"
    },
    {
        id: 5,
        fullName: "Laxmi",
        gender: "Female",
        designation: "Full Stack Developer",
        company: "pixel company",
        salary: 50000,
        project: "project 12",
        experience: "5 Years"
    },

    {
        id: 6,
        fullName: "Sarasvathi",
        gender: "Female",
        designation: "Full Stack Developer",
        company: "red company",
        salary: 90000,
        project: "project 13",
        experience: "7 Years"
    },

    {
        id: 7,
        fullName: "Devi",
        gender: "Female",
        designation: "Full Stack Developer",
        company: "blue company",
        salary: 40000,
        project: "project 211",
        experience: "4 Years"
    },

    {
        id: 8,
        fullName: "Manideep",
        gender: "Male",
        designation: "Full Stack Developer",
        company: "Green company",
        salary: 70000,
        project: "project 122",
        experience: "6 Years"
    },

    {
        id: 9,
        fullName: "Avinash",
        gender: "Male",
        designation: "Team Lead",
        company: "xyz company",
        salary: 100000,
        project: "project 102",
        experience: "15 Years"
    },

    {
        id: 10,
        fullName: "Sandeep",
        gender: "Male",
        designation: "Manager",
        company: "ABC company",
        salary: 150000,
        project: "project 56",
        experience: "20 Years"
    }
]



function displayData(alldata) {
    let tableBody = document.querySelector(".table-body");
    let tableRow = [];
    for (data of alldata) {
        tableRow +=
            `<tr>
                <td>${data.id}</td>
                <td>${data.fullName}</td>
                <td>${data.gender}</td>
                <td>${data.designation}</td>
                <td>${data.company}</td>
                <td>${data.salary}</td>
                <td>${data.project}</td>
                <td>${data.experience}</td>
                <td>
                <button id="edit-btn" class="btn btn-primary mx-1"><i class="fas fa-edit fa-1x text-light"></i></button>
                <button id="delete-btn" class="btn btn-primary mx-1"><i class="fas fa-trash fa-1x text-light"></i></button>
                </td>
            </tr>`
    }
    tableBody.innerHTML = tableRow;
}

displayData(employees);

let createDataBtn = document.querySelector("#create").addEventListener("click", () => {
    console.log("clicked btn")
    let formdiv = document.querySelector("#form-div");
    formdiv.style.display = "block";
    let cBtn = document.getElementById("create");
    cBtn.style.display = "none";
});

let crossBtn = document.getElementById("crossBtn").addEventListener("click", () => {
    let formdiv = document.querySelector("#form-div");
    formdiv.style.display = "none";
    let cBtn = document.getElementById("create");
    cBtn.style.display = "block";
});

let empData = new emp(1, "reddy", "male", "FSWD", "some", 50000, 5, "5 years");
displayData(empData);

class emp {
    constructor(id, fullName, gender, designation, company, salary, project, experience) {
        this.id = id;
        this.fullName = fullName;
        this.gender = gender;
        this.designation = designation;
        this.company = company;
        this.salary = salary;
        this.project = project;
        this.experience = experience;
    }
}


