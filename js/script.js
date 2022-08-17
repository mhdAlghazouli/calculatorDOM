const input = document.getElementById("input");

const numbers= Array.from (document.getElementsByClassName("numbers"));

const operators = Array.from(document.querySelectorAll(".operators"));

const equal = document.getElementById("result");


// let numbersStr = '';


//   for(let i = 0 ; i < numbers.length; i++) {
//     let char = numbers[i];
//     char.addEventListener(`click`, e => {
//       if(e.target.id != `clear`) {
//         numbersStr += e.target.textContent 
//         input.textContent = numbersStr;
//         console.log(Number(numbersStr))
//       }else {
//         numbersStr;
//       }
//     });
//   };



//   operators.forEach((operator, index) => {
//     operator.addEventListener(`click`, e => {
//       if(e.target.textContent == `+`){
//         add(numbersStr,numbersStr);
//       }
//     });
//   });



// function add (num1,num2){
  
//   return (input.textContent = num1 + num2 )
  
// }

// function subtract (num1,num2){
//   let res = num1 - num2 ;
//   return(resultArr.push(res))
// }

// function multiply (num1,num2){
//   let res = num1 * num2 ;
//   return(resultArr.push(res))
// }

// function divide (num1,num2){
//   let res = num1 / num2 ;
//   return(resultArr.push(res))
// }
numbers.forEach (button => {
  
  button.addEventListener(`click`, e => {

    switch(e.target.innerText) {

      case `C` : 
        input.innerText = ``;
        break;
      
      default :
        input.innerText += e.target.innerText;
    };
  });
});

operators.forEach(button => {

  button.addEventListener(`click`, operator => {
    
    switch(operator.target.innerText) {

      default :
        input.innerText += operator.target.innerText;

    };
  });
});

equal.addEventListener('click', () => {

  try{

    input.innerText = eval(input.innerText);

  } catch {

    input.innerText = `ERROR!`

  };

});
