

let i=10;
function incrementar(numero) {
    i = numero -= 1;
}
function condicion(numero){
    console.log(`%c ${numero} ${numero>0}`, "color:red;");
    return numero>0;
}
for(i; condicion(i); incrementar(i)){
    console.log(`%c ${i} ${i>0}`,"color:violet;");
}


function tabla(numero) {
    i++;
    return `${((numero+3) - i)} X ${i} = ${((numero+3) - i)  * i}`;
}
for(i; i<10;){
    console.log(tabla(i));
}

let num = parseInt(prompt("Ingrese hasta donde quiere que valla la tabla de multiplicar\n\n Nota: Comienza desde la tabla del 1"));
for (let i = 1; i<=num; i++) {
    console.log(`%cTabla del ${i} `,"color:orange;");
    for (let x = 1; x <= 10; x++) {
        console.log(`${i} x ${x} = ${i * x}`);
    }
}

ciclo1:
for (let i = 1; i<=10; i++) {
    console.log(`ciclo 1 ${i}`);
    ciclo2:
    for (let x = 1; x<=10; x++) {
        if(i>3){
            break ciclo1;
        }
        console.warn(`ciclo 2 ${x}`);
    }
}




// let i;
// for (i=0;i<10;i+=2){
//     console.log(i);
// }


// let i=10;
// function incrementar(numero) {
//     i = numero -= 1;
// }
// function condicion(numero){
//     console.log(`%c ${numero} ${numero>0}`, "color:red;");
//     return numero>0;
// }
// for(i; condicion(i); incrementar(i)){
//     console.log(`%c ${i} ${i>0}`,"color:violet;");
// }
// let i,j;
// for ( i= 0; i < 10; i++) {
//     console.log(i);
// }
// for (j= 0; j < 10; j++) {
//     console.log(j);
// }


// let i=1;
// function tabla(numero) {
//     i++;
//     return `${((numero+3) - i)} X ${i} = ${((numero+3) - i)  * i}`;
// }
// for(i; i<10;){
//     console.log(tabla(i));
// }
// let j;
// let i;
// //let num = parseInt(prompt("Ingrese hasta donde quiere que vaya la tabla de multiplicar\n\n Nota: Comienza desde la tabla del 1"));
// // for (let i = 1; i<=10; i++) {
// //     console.log(`%cTabla del ${i} `,"color:orange;");
// //     for (let j = 1; j <= 10; j++) {
// //         if(i%2==0 && j%2==0){
// //             console.log(`%c${i}`,"color:red;",` x `, `${j}`,`= ${i * j}`);
// //         }
// //         console.log(`${i} x ${j} = ${i * j}`);
// //     }
// // }
// ciclo1:
// for (let i = 1; i<=10; i++) {
//     console.log(`ciclo 1 ${i}`);
//     ciclo2:
//     for (let x = 1; x<=10; x++) {
//         if(i>3){
//             break ciclo1;
//         }
//         console.warn(`ciclo 2 ${x}`);
//     }
// }
