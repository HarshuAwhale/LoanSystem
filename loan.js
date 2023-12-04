function calculateLoan() {
    var employeeId = document.getElementById('employeeId').value;
    var employeeName = document.getElementById('employeeName').value;
    var employeeAddress = document.getElementById('employeeAddress').value;
    var employeeDesignation = document.getElementById('employeeDesignation').value;
    var loanAmount = parseFloat(document.getElementById('loanAmount').value);
    var dateOfLoan = document.getElementById('dateOfLoan').value;
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    var maturityDate = document.getElementById('maturityDate').value;

    document.getElementById('employeeIdError').innerHTML = '';
    document.getElementById('employeeFormatError').innerHTML = '';

    // Validate employee ID length
    if (employeeId.length < 4) {
        document.getElementById('employeeIdError').innerHTML = 'Employee ID must be at least four characters long.';
        return;
    }

    if (!employeeId.startsWith('E')) {
        document.getElementById('employeeFormatError').innerHTML = 'Employee ID must start with E.';
        return;
    }

    // Perform calculations based on designation
    var totalInterest = 0;
    if (employeeDesignation.toLowerCase() === 'manager') {
        totalInterest = loanAmount * (interestRate / 100) * 2;
    } else {
        totalInterest = loanAmount * (interestRate / 100);
    }

    // Display individual details
    document.getElementById('first').innerHTML = employeeId;
    document.getElementById('second').innerHTML = employeeName;
    document.getElementById('third').innerHTML = employeeAddress;
    document.getElementById('fourth').innerHTML = employeeDesignation;
    document.getElementById('fifth').innerHTML = 'Rs' + loanAmount.toFixed(2);
    document.getElementById('sixth').innerHTML = dateOfLoan;
    document.getElementById('seventh').innerHTML = interestRate + '%';
    document.getElementById('eighth').innerHTML = maturityDate;

    // Display total loan amount and total interest
    document.getElementById('totalLoanAmount').innerHTML = 'Rs' + (loanAmount + totalInterest).toFixed(2);
    document.getElementById('totalInterest').innerHTML = 'Rs' + totalInterest.toFixed(2);

    // Show the result section
    document.querySelector('.result').style.display = 'block';
}
