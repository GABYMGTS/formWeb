
/* son caracteres aceptamos todo no sólo letras
//EXPRESIONES REGULARES
const regExpPelicula = /^[a-zA-Z)]{1,30}$/;         //obligatorio(vacio), Max 30 CARACTERES
 
const regExpComentario = /^[a-zA-Z)]{0,200}$/;         //opcional, PERO si escribe minimo 10 y Max 200 CARACTERES
*/

const regExpPuntuacion = /^[1-5]{0}$/;              //1,2,3,4,o 5. obligatorio


function validar(){
     
    // 1. Obtener los input para obtener los valores

    let hayError =false;//bandera error FALSE

    const pelicula= document.getElementById('pelicula');
    const puntuacion= document.getElementById('puntuacion');
    const comentario= document.getElementById('comentario');

//control input pelicula
// maxlength="30" required


if(pelicula.value == "" || pelicula.value.length >30 /*|| !regExpPelicula.test(pelicula.value)*/){
 
    //vacio         o           mas q 30                o se admiten caracteres
    
    let spanError = document.createElement('span');//<span>>/span>
    
    spanError.textContent=" * Pelicula de 1 a 30 caracteres";

    spanError.style.color='red';
  
  //abro en elemento adjacente
   
        pelicula.insertAdjacentElement("afterend",spanError);

          alert("spanError"+spanError.textContent);


    hayError =true;
}
// control Puntuación
//1,2,3,4,o 5. obligatorio

if (puntuacion.value==""||puntuacion.value <1 || puntuacion.value>5){

    // vacio        o       menor q 1           o mayor a 5
            
        let spanError = document.createElement('span');//<span>>/span>
    
        spanError.textContent=" * Puntaje del 1 al 5";

        spanError.style.color='green';
  
  //abro en elemento adjacente
   
        puntuacion.insertAdjacentElement("afterend",spanError);

          alert("spanError"+spanError.textContent);


    hayError =true;

}

// control Comentario

if(comentario.value==""){

    alert("comentario.value ACEPTE VACIO"+comentario.value );

    //acepto que esté vacio
    // bandera error queda como venía

} else if(comentario.value.length<10 || comentario.value.length>200){

    
    let spanError = document.createElement('span');//<span>>/span>
    
    spanError.textContent=" * Comentario de 10 a 200 caracteres";

    spanError.style.color='blue';
  
  //abro en elemento adjacente
   
        comentario.insertAdjacentElement("afterend",spanError);

        alert("spanError"+spanError.textContent);


    hayError =true;


   
  
    }

 
    if(!hayError){
        //no hubieron errores

        alert("SIN ERRORES");

    
        
        
        let texto;
        
            texto="PELICULA: "+ pelicula.value +"   PUNTUACION:  "+puntuacion.value+ " RESEÑA: "+comentario.value+"  .";
            alert("texto  "+texto);


       // comentario a la lista     

       const li = document.createElement("li");
       li.innerHTML = comentario.value;
       document.body.appendChild(li);

    }  


   
    
      /* 
    let li= document.getElementById('li');//<li></li>
    li.textContent=texto;

    let ul = document.getElementById('list');
    document.body.appendChild(li);
    ul.appendChild(li);
    */
    
   
    return false;//para que no se envie

}