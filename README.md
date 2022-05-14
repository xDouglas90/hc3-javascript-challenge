# Basic JavaScript Challenge

Create `match` logic to validate the CPF entry with or without accents.

## Solution
- Created function `cpfIsValid()` containing the regex `/^\d{3}\.?\d{3}\.?\d{3}[.-]?\d{2}$/` in which is valid the cpf with or without accents:
```javascript
function cpfIsValid(cpf) {
  const regex = /^\d{3}\.?\d{3}\.?\d{3}[.-]?\d{2}$/;
  const filteredCPF = cpf.match(regex);

  if (filteredCPF) return true;

  return false;
}
```
- Added logic in `cpfValidate()` to check if CPF contains only numbers, if it contains accents then use Regex `/[^0-9]/g` to assign only numbers to a new variable:
```javascript
  if (cpf.length === 11) {
    filteredCPF = cpf;
  } else {
    filteredCPF = cpf.replace(/[^0-9]/g,'');
  }  

```
