function timeConversion(s) {
    const string = s.split('');
   
   if(string[8]==='P' && string[9] === 'M'){
     
       if(string[0] === '1' && string[1] ==='2'){
            string.pop();
            string.pop();
           const newString = string.join('');
           return newString;
       } else {
           const dozen = Number(string[0]);
           const unit = Number(string[1]);
           const one = 1;
           const two = 2;
           const sumOfUnit = unit + two;
           const sumOfDozen = dozen + one;
           string[0] = String(sumOfDozen);
           string[1] = String(sumOfUnit);
           string.pop();
           string.pop();
           const newString = string.join('');
           return newString;           
           
       }
       
       
   } 
   
   
   if(string[8]==='A' && string[9] === 'M') {
       
       if(string[0] === '1' && string[1] ==='2'){
           string[0] = '0';
           string[1] = '0';
           string.pop();
           string.pop();
           const newString = string.join('');
           return newString;
       } else {
           string.pop();
           string.pop();
           const newString = string.join('');
           return newString;
       }
   }

}