
check_symmetry = (n) =>  {
    let str = n.toString(); 
    let reverseStr = str.split("").reverse().join(""); 
  
    return str === reverseStr; 
  }
  
  const n1 = 121;
  const n2 = 123;
  
  console.log(check_symmetry(n1));
  console.log(check_symmetry(n2));