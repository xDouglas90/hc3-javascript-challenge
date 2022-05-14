const cpfValidate = (cpf) => {
  // Checks if the CPF is valid through a regex
  if (!cpfIsValid(cpf)) return false;
  
  let filteredCPF = '';

  // Checks if the CPF contains only numbers and assign to a variable only the numbers
  if (cpf.length === 11) {
    filteredCPF = cpf;
  } else {
    filteredCPF = cpf.replace(/[^0-9]/g,'');
  }  

  // Separate numbers from digits
  let numbers = filteredCPF.substring(0, 9);
  const digits = filteredCPF.substring(9);

  let sum = 0;

  for (let i = 10; i > 1; i--) {
    sum += numbers.charAt(10 - i) * i;
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  // First digit validation
  if (result != digits.charAt(0)) return false;

  sum = 0;
  numbers = filteredCPF.substring(0, 10);

  for (let k = 11; k > 1; k--) {
    sum += numbers.charAt(11 - k) * k;
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  // Second digit validation
  if (result != digits.charAt(1)) return false;

  return true;
};

function validate() {
  const cpf = document.querySelector('#cpf-input').value,
    successMsg = document.querySelector('#success'),
    errorMsg = document.querySelector('#error');

  successMsg.style.display = 'none';
  errorMsg.style.display = 'none';

  const validationResult = cpfValidate(cpf);

  if (validationResult) successMsg.style.display = 'block';
  if (!validationResult) errorMsg.style.display = 'block';
}

function cpfIsValid(cpf) {
  const regex = /^\d{3}\.?\d{3}\.?\d{3}[.-]?\d{2}$/;
  const filteredCPF = cpf.match(regex);

  if (filteredCPF) return true;

  return false;
}
