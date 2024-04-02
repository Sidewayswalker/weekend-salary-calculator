//Establish global variable for monthly cost. 
let totalMonthlyCost = 0;

//Create a function that adds employee data to a table. 
function createEmployee(event) {
  // Prevent default HTML form.
  event.preventDefault();

  // Establish T-variables in JS that identify HTML input values.
  let firstNameInput = document.getElementById("first name").value;
  let lastNameInput = document.getElementById("last name").value;
  let idNumberInput = document.getElementById("id number").value;
  let jobTitleInput = document.getElementById("job title").value;
  let annualSalaryInput = document.getElementById("annual salary").value;

  // Establish T-variable that determines the format of the input values.
  // last row in the table '❌' is a button now. 
  // "on click" call "DeleteRow" function.
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

  // Established T-variable that references the location of the table body in HTML. 
  // Add a new row to the table body. 
  let tableLocation = document.getElementById("employee-Table");
  tableLocation.innerHTML += newTableRow

  // Reset the values of the "input" boxes to an empyy string.
  document.getElementById('first name').value = '';
  document.getElementById('last name').value = '';
  document.getElementById('id number').value = '';
  document.getElementById('job title').value = '';
  document.getElementById('annual salary').value = '';

  // G-variable "totalMonthlyCost" += annualSalaryInput
  totalMonthlyCost += Math.round(Number(annualSalaryInput)/12);

  // T-variable that references HTML location of the "totalMonthlyCost" 
  // The location in the HTML is being given the "totalMonthlyCost" variable. 
  let salarySum = document.getElementById('salary-Count')
  salarySum.textContent = totalMonthlyCost;

// assign CSS formatting to 'over-budget'
// if it goes over 20000 give the footer a class of over-budget
  if(totalMonthlyCost > 20000){
    let footer = document.getElementById('myFooter')
    footer.classList.add('over-budget')
  }
}

// Create a function to delete the target of a button click.
// Delete the entire element that contains al the data in that row. 
function deleteRow(event) {
    let buttonclicked = event.target;
    let toDelete = buttonclicked.parentElement.parentElement;
    // let toDelete =  buttonclicked.closest('tr')
    toDelete.remove();

  }
  
  function formatAsUSD(number) {
    return new Intl.NumbersFormat(
      'en-EN',
      { style: 'currency', currency: 'USD' }
    ).format(number);
  }