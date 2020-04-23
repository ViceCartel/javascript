const power= function(base, exponent){   //define the function power and assign it to a varible
  let result = 1;  // initialize result as 1
  for (let count=0; count<exponent; count++){   // for every loop count is less than exponent, multiply the result by base and make it the new result
    result*=base;  // result = result*base
  }
  return result
};
console.log(power(2,3));
