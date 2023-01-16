const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btncalcular");
const pResultado = document.querySelector('#resultado');


function btnOnClick() {
    const sumaInputs = input1.value + input2.value;
    pResultado.innerText = "Resultado: " + sumaInputs;
}


 /* 
concatenar el valor agregado al moento de dar click
 function btnOnClick() {
    console.log(input1.value + input2.value)
}
 */

/*
Para escuchar el resultado del click,  sin que el usuario lo vea en la consola. 


 <p id="resultado"></p>

 *js
 const pResultado = document.querySelector('#resultado');


function btnOnClick() {
    const sumaInputs = input1.value + input2.value;
    pResultado.innerText = "Resultado: " + sumaInputs;
}

*/