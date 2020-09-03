let first = document.querySelector(".first") // первый инпут
let second = document.querySelector(".second") // второй инпут

let operators = document.querySelectorAll("button") //коллекция кнопок

let result=0; // изначально в калькуляторе значение 0

let[plus, minus, division, multi, pow , sqrt]= operators; //использую деструктурализацию 


plus.onclick = () =>{
  result = Number(first.value) + Number(second.value);
  first.value = result;
  second.value = '';
}

minus.onclick = () =>{
  result = Number(first.value) - Number(second.value);
  first.value = result;
  second.value = '';
}

division.onclick = () =>{
  result = Number(first.value) / Number(second.value);
  first.value = result;
  second.value = '';
}

multi.onclick = () =>{
  result = Number(first.value) * Number(second.value);
  first.value = result;
  second.value = '';
}

pow.onclick = () =>{
    result = Math.pow(Number(first.value),Number(second.value));
  first.value = result;
  second.value = '';
}

sqrt.onclick = () =>{
  
  // Math.pow(Number(first.value) ** 1/Number(second.value))
  first.value = Math.sqrt(Number(first.value));
  second.value = '';
}