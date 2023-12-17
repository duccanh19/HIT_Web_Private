insert_string = (s1, s2, p) => {
    return s2.slice(0, p-1) + s1 + s2.slice(p);
}
  
  var s1 = "000";
  var s2 = "abc";
  var p = 2;
  
  console.log(insert_string(s1, s2, p));
  
  s1 = "000";
  s2 = "abc";
  p = -100;
  
  console.log(insert_string(s1, s2, p));
  
  s1 = "000";
  s2 = "abc";
  p = 100;

  console.log(insert_string(s1, s2, p));