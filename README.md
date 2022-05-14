<h1 align="center">Hiring Coders #3: Basic JavaScript Challenge</h1>

<p align="center">
  <img src="https://user-images.githubusercontent.com/23640888/168434446-4bed835e-d74d-4f70-812d-e48637f49fca.png"> <br>
  <img src="https://img.shields.io/static/v1?label=functionality&message=javascript&color=F7DF1E&style=for-the-badge&logo=javascript"/>
</p>

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
