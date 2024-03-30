function createEmployee(event) {
    event.preventDefault();

    let firstNameText = document.getElementById("first name").value;
    let lastNameText = document.getElementById("last name").value;
    let idNumberText= document.getElementById("id number").value;
    let jobTitleText = document.getElementById("job title").value;
    let annualSalaryText = document.getElementById("annual salary").value;

    let newTableRow = `
    <tr>
      <td>${firstNameText}</td>
      <td>${lastNameText}</td>
      <td>${idNumberText}</td>
      <td>${jobTitleText}</td>
      <td>${annualSalaryText}</td>
    </tr>
    `

    let tableLocation = document.getElementById("employeeTable");
    tableLocation.innerHTML += newTableRow
}