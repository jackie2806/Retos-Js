function isLeapYear(year) {
    // Tu código aquí 👈 Verifica si el año ingresado es un año bisiesto
    if (year>=1 && year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }

console.log(isLeapYear('1991'))
