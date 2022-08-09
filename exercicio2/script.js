// let nacionalidade = prompt("Escreva aqui sua nacionalidade").toLowerCase().replace(/o$/,"a")

// if(nacionalidade === "brasileira"){
//     console.log("A pessoa é brasileira");
// }else if(nacionalidade === "argentina"){
// 	console.log("A pessoa é argentina ");
// }else if(nacionalidade === "uruguaia"){
//     console.log("A pessoa é uruguaia");
// }else if(nacionalidade === "chilena"){
//     console.log("A pessoa é chilena");
// }else if(nacionalidade === "colombiana"){
// 	console.log("A pessoa é colombiana");
// }else{
//     console.log("Nacionalidade não encontrada");
// }
let nacionalidade = prompt("Escreva aqui sua nacionalidade").toLowerCase().replace(/o$/,"a")

switch(nacionalidade){
    case "brasileira": 
        console.log("A pessoa é brasileira");
;        break;
    case "argentina": 
        console.log("A pessoa é argentina ");;
        break;
    case "uruguaia": 
        console.log("A pessoa é uruguaia");
        break;
    case "chilena": 
        console.log("A pessoa é chilena");
        break;
    case "colombiana":
        console.log("A pessoa é colombiana");
        break;
    default: 
        console.log("Nacionalidade não identificada");
} 