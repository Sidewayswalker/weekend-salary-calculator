
let totalMonthlyCost = 0

function createEmployee(event) {
    event.preventDefault();

    let firstNameInput = document.getElementById("first name").value;
    let lastNameInput = document.getElementById("last name").value;
    let idNumberInput = document.getElementById("id number").value;
    let jobTitleInput = document.getElementById("job title").value;
    let annualSalaryInput = document.getElementById("annual salary").value;

    let newTableRow = `
    <tr>
      <td>${firstNameInput}</td>
      <td>${lastNameInput}</td>
      <td>${idNumberInput}</td>
      <td>${jobTitleInput}</td>
      <td>${annualSalaryInput}</td>
      <td><button onclick="deleteRow(event)">❌</button></td>
    </tr>
    `

    let tableLocation = document.getElementById("employeeTable");
    tableLocation.innerHTML += newTableRow

    document.getElementById('first name').value = '';
    document.getElementById('last name').value = '';
    document.getElementById('id number').value = '';
    document.getElementById('job title').value = '';
    document.getElementById('annual salary').value = '';
}

function deleteRow(event) {
    let buttonclicked = event.target;
    let toDelete = buttonclicked.parentElement.parentElement;
    toDelete.remove();
  }