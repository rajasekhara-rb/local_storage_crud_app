
let list1 = [];
let list2 = [];
let list3 = [];
let n = 1;
let x = 1;

// let submit = document.querySelector("#submit").addEventListener("click", getData());

function getData() {

    if( document.querySelector("#name").value != "" &&  document.querySelector("#email").value != "" && document.querySelector("#phone").value != ""){
        let addRow = document.getElementById("show");
        let newRow = addRow.insertRow(n);
    
        list1[x] = document.querySelector("#name").value;
        list2[x] = document.querySelector("#email").value;
        list3[x] = document.querySelector("#phone").value;
    
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
    
        cell1.innerHTML = list1[x];
        cell2.innerHTML = list2[x];
        cell3.innerHTML = list3[x];
    
        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#phone").value = "";

        let alertBar = document.getElementById("alert-message-bar");
        alertBar.innerHTML = `<div class="alert alert-success">Success!</div>`;
        setInterval(()=>{alertBar.innerHTML = "";} , 3000);
    } else{
        let alertBar = document.getElementById("alert-message-bar");
        alertBar.innerHTML = `<div class="alert alert-danger">Form cannot be blank</div>`;
        setInterval(()=>{alertBar.innerHTML = "";} , 3000);
    }


}

let createDataBtn = document.querySelector("#create").addEventListener("click", () => {
    // console.log("clicked btn")
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
