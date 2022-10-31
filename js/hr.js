// Problem 1 Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible)
let Sam =
    {
        "firstName" : "Sam",
        "department" : "Tech",
        "designation" : "Manager",
        "salary" : 40000,
        "raiseEligible" : "true",
    }
let Mary =
    {
        "firstName" : "Mary",
        "department" : "Finance",
        "designation" : "Trainee",
        "salary" : 18500,
        "raiseEligible" : "true",
    }
let Bill =
    {
        "firstName" : "Bill",
        "department" : "HR",
        "designation" : "Executive",
        "salary" : 21200,
        "raiseEligible" : "false",
    }

console.log("Problem 1", Sam, Mary, Bill);

// Problem 2 Create JSON for the company with the following details (companyName, website, employees)
company =
    {
       "companyName" : "Tech Stars",
        "website" : "www.techstars.site",
        "employees" : [Sam, Mary, Bill],
    }

console.log("Problem 2", company);
// Problem 3 A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of:
let Anna = {
    "firstName" : "Anna",
    "department" : "Tech",
    "designation" : "Executive",
    "salary" : 25600,
    "raiseEligible" : "false",
}
company.employees.push(Anna);
console.log("Problem 3", company)
// Problem 4 Given the JSON for the company, calculate the total salary for all company employees.
let totalSalary = 0
for(let employee of company.employees){
    totalSalary += employee.salary;
}
console.log("Problem 4", totalSalary)
// Problem 5 It's raise time. If an employee is raise eligible, increase their salary by 10%. Given the JSON of the company 
//and its employees, write a function to update the salary for each employee who is raised eligible, then set their eligibility to false.
for(let employee of company.employees){
    if(employee.raiseEligible == "true"){
        let oldSalary = employee.salary;
        let newSalary = (oldSalary * 1.1);
        employee.salary = newSalary;
        employee.raiseEligible = "false";
    }}
console.log("Problem 5", Sam, Mary, Bill, Anna)
// Problem 6 Some employees have decided to work from home. The following array indicates who is working from home. 
// Use the array to update the company JSON. For each employee, add another property called 'wfh' and set it to true of false
for(let employee of company.employees){
    if(employee.firstName === 'Anna' || employee.firstName === 'Sam'){
        employee.wfh = "true";
    }else{
        employee.wfh = "false";
    }}
console.log("Problem 6", company)