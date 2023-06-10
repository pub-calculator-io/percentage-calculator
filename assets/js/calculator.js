function calculate(){
  
  // 1. init & validate
  const type = input.get('type').raw();
  const index = input.get('type').index().raw();
  const a = input.group('number_a_', 'a.b|c.d!0|e.f!0');
  const b = input.group('number_b_', 'a.b');
  const c = input.group('number_c_', 'a.b|c.d');
  const d = input.group('number_d_', 'a+.b+');
  if(!a && index == 0 || !b && index == 1 || !c && index == 2 || !d && index == 3){ 
    input.error('error-list', 'Incorrect data');
  }
  if(!input.valid()) return;

  // 2. calculate
  let result = [];
  switch(type){
    case 'Common Phrases':
      if(a.a!=null && a.b!=null) result.push(`${a.a*a.b/100} is ${a.a}% of ${a.b}`);
      if(a.c!=null && a.d!=null) result.push(`${a.c} is ${a.c/a.d*100}% of ${a.d}`);
      if(a.e!=null && a.f!=null) result.push(`${a.e} is ${a.f}% of ${a.e/a.f*100}`);
    break; 
    case 'Simple Percentage':
      result.push(`${b.a}% of ${b.b} = ${b.a*b.b/100}`);
    break; 
    case 'Percentage Change':
      if(c.a!=null && c.b!=null) result.push(`${c.a} increase ${c.b}% = ${c.a*(1+c.b/100)}`);
      if(c.c!=null && c.d!=null) result.push(`${c.c} decrease ${c.d}% = ${c.c*(1-c.d/100)}`);
    break; 
    case 'Percentage Difference': 
      result.push(`Difference of ${d.a} and ${d.b} is ${math.abs(d.a-d.b)/(d.a+d.b)*200}%,`);
      result.push(`and ${d.b} is a ${math.abs(d.a-d.b)/d.a*100}% increase of ${d.a}`);
    break;
  }

  // 3. output
  _('result_'+['a','b','c','d'][index]).innerHTML = result.join('<br/>');
  
}