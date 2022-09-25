let senias;
let pregunta;
let respuesta1 = 2; 
let respuesta2 = 2;
let respuesta3 = 1;

senias = prompt("¿Sabes lengua de señas? Poner si o no");
if(senias == "no"){
    alert("Antes de empezar vamos a realizar una breve encuesta para saber tus conocimientos previos.");

    pregunta = parseInt(prompt("Si se dice: lenguaje de señas, ingresa 1. Si se dice: lengua de señas, ingresa 2."));
    while(pregunta == 1 || pregunta ==2){
        if(pregunta == respuesta1){
            alert("Correcto");
        }else{
            alert("Incorrecto");
        }

        pregunta = parseInt(prompt("Si se dice: sordomudo/a, ingresa 1). Si se dice sordo/a, ingresa 2."));

        if(pregunta == respuesta2){
            alert("Correcto");
        }else{
            alert("Incorrecto");
        }

        pregunta = parseInt(prompt("Si se dice: intérprete, ingresa 1. Si se dice: traductor/a, ingresa 2."));

        if(pregunta == respuesta3){
            alert("Correcto");
        }else{
            alert("Incorrecto");
            console.log(`tuvo ${pregunta} respuestas correctas`)
        }
        break
    }
    if (pregunta !== 1 && pregunta !== 2){
        alert("Respuesta invalida")
    }
}
else{
    alert("Tenes nivel avanzado, no necesitas hacer el curso"); 
}
alert("Gracias por participar");