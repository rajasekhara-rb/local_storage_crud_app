let form = document.querySelector("#form");
let tableBody = document.querySelector("#table-body");
let submitBtn = document.querySelector("#submit");
let deleteBtn = document.querySelector("#delete");
// let rowDelete = document.querySelectorAll(".delete-btn");
// let rowEdit = document.querySelectorAll(".edit-btn");

// let id = document.querySelector("#id");
let name = document.querySelector("#name");
let gender = document.querySelector("#gender");
let designation = document.querySelector("#designation");
let company = document.querySelector("#company");
let salary = document.querySelector("#salary");
let project = document.querySelector("#project");
let experience = document.querySelector("#experience");


let employeesArray = [];

let editing = false;

class Employees {
    constructor(name, gender, designation, company, salary, project, experience) {
        this.id = this.count;
        this.name = name;
        this.gender = gender;
        this.designation = designation;
        this.company = company;
        this.salary = salary;
        this.project = project;
        this.experience = experience;
    }
}

function updateTable() {
    let tableRow = "";
    let count = 1;
    employeesArray.forEach((e, index) => {
        let c = e;
        c.id = count;
        tableRow +=
            `<tr>
                <td>${c.id}</td>
                <td>${c.name}</td>
                <td>${c.gender}</td>
                <td>${c.designation}</td>
                <td>${c.company}</td>
                <td>${c.salary}</td>
                <td>${c.project}</td>
                <td>${c.experience}</td>
                <td>
                    <button id="${index}" onclick="rowEditFun(this.id)" class="btn btn-primary mx-1 edit-btn"><i class="fas fa-edit fa-1x text-light"></i></button>
                    <button id="${index}" onclick="rowDeleteFun(this.id)" class="btn btn-primary mx-1 delete-btn"><i class="fas fa-trash fa-1x text-light"></i></button>
                </td>
            </tr>`
        count++;
    });
    tableBody.innerHTML = tableRow;

    setLocal();
}

// updateTable();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Gather input data
    if (!editing) {
        let row = new Employees(
            name.value,
            gender.value,
            designation.value,
            company.value,
            salary.value,
            project.value,
            experience.value
        );
        employeesArray.push(row);
    }
    // id.value = "";
    name.value = "";
    gender.value = "";
    designation.value = "";
    company.value = "";
    salary.value = "";
    project.value = "";
    experience.value = "";

    updateTable();
    closeModal();

});

function openModal() {
    console.log("clicked btn")
    let formdiv = document.querySelector("#form-div");
    formdiv.style.display = "block";
    let cBtn = document.getElementById("create");
    cBtn.style.display = "none";
}
let createDataBtn = document.querySelector("#create").addEventListener("click", openModal);


function closeModal() {
    let formdiv = document.querySelector("#form-div");
    formdiv.style.display = "none";
    let cBtn = document.getElementById("create");
    cBtn.style.display = "block";
}
let crossBtn = document.getElementById("crossBtn").addEventListener("click", closeModal);

function setLocal() {
    localStorage.setItem("data", JSON.stringify(employeesArray));
};

let localData = JSON.parse(localStorage.getItem('data'));

if (localData) {
    employeesArray = localData;
    updateTable();
}

function deleteTableData() {
    localStorage.removeItem("data");
    employeesArray = [];
    updateTable();
}

deleteBtn.addEventListener("click", () => {
    deleteTableData();
})

function rowDeleteFun(index) {
    console.log("being deleted", index);
    let row = localStorage.getItem("data");
    empobj = JSON.parse(row);

    empobj.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(empobj));
    employeesArray = empobj;
    updateTable();
}


function rowEditFun(index) {
    console.log("being edited");
    let row = localStorage.getItem("data");
    empobj = JSON.parse(row);
    let c = empobj.slice(index, 1);

    openModal();

    name.value = empobj[index]["name"];
    gender.value = empobj[index]["gender"];
    // designation.value = empobj[index].designation;
    // company.value = empobj[index].company;
    // salary.value = empobj[index].salary;
    // project.value = empobj[index].project;
    // experience.value = empobj[index].experience;

    empobj[index]["name"] = name.value;
    empobj[index]["gender"] = gender.value;
    // designation.value = empobj[index].designation;
    // company.value = empobj[index].company;
    // salary.value = empobj[index].salary;
    // project.value = empobj[index].project;
    // experience.value = empobj[index].experience;

    empobj[index] = c;
    updateTable()

}