// expresiones regulares a usar

// nombre

const regExpNombre = /^[a-zA-Z]{0,9}$/;
const regExpTelefono = /^[1-9][0-9]{9}$/;//todos números, no arrancar en cero y longitud igual a 10
//testear en la web regex101.com

/*
function limpiarErrores(event){
     
    //const actualId = event.target.name;
    //const actualInput = document.getElementById(actualId);

     //abreviado que no me funciona no mejora nada
    const actualInput = event.target;
    actualInput.classList.remove('inputErroneo');
    const actualHermano = actualInput.nextElementSibling;

    //abreviado que no me funciona no mejora nada

  //  if(actualHermano.classList && actualHermano.classList.contains('colorRojo'))
    //    actualHermano.remove();
    
    /*
    if (actualHermano.nodeName == 'SPAN'){
        //borrar
        actualHermano.remove();

    }
    */

    /*if (listaErrores){
        
    const listaErrores = document.getElementsByClassName('colorRojo');
    //recorrer lista de rrores
    for (const element of listaErrores){

        console.log(element);
        element.remove();
    }
    

}*/

//}





function validar(){
     
    // 1. Obtener los input para obtener los valores

    let flagError =false;//bandera error

    const nombre= document.getElementById('nombre');
    const temperatura= document.getElementById('temperatura');
    const telefono= document.getElementById('telefono');

//control input nombre
// maxlength="9" required

if(nombre.value == "" || nombre.value.length >9 || 
!regExpNombre.test(nombre.value)){
    
    

    let spanError = document.createElement('span');//<span>>/span>
    
    spanError.appendChild(document.createTextNode(''));

  //u  spanError.textContent= 'Ingrese un nombre valido';
  //
  
  spanError.innerHTML='ingrese NOMBRE valido'; 
  // spanError.style.color='red';
   //añadiendo clases
  //U spanError.className= 'colorRojo';//borra clase
   //spanError.classList.add('colorRojo');//añade clase
  
  //abrir en algun elemento q tengamos en el html
    nombre.insertAdjacentElement("afterend",spanError);

  //u  nombre.classList.add('inputErroneo');

    alert("spanError"+spanError.textContent);


    flagError =true;
}
// control temperatura

if (temperatura.value==""||temperatura.value <-10 || temperatura.value>60){
    alert("temperatura.value"+temperatura.value);
    console.log('error temp');
/*
    let spanError = document.createElement('span');//<span>>/span>
    spanError.textContent='ingrese TEMPERATURA valido'; 
    spanError.className = 'colorRojo';//borra clase
    temperatura.insertAdjacentElement("afterend",spanError);
    temperatura.classList.add('inputErroneo');
    flagError =true;
    alert("spanError"+spanError.textContent);
*/
}

// control telefono

 
if(telefono.value  && !regExpTelefono.test(telefono.value)){
    alert("telefono.value "+telefono.value );


    console.log('errorTlf');
  
    /*
    let spanError = document.createElement('span');//<span>>/span>
    spanError.innerHTML='ingrese TELEFONO valido'; 
    spanError.className= 'colorRojo';//borra clase
    telefono.insertAdjacentElement("afterend",spanError);
    telefono.classList.add('inputErroneo');
    alert("spanError"+spanError.textContent);
    flagError =true;


    */
}

    //console.log(nombre, temperatura, telefono);

    //return flase es para que no se envie, que esté al ultimo o even.preventDefault() y pasando el evento
 //AGREGAMOS A LA LISTA
 alert("Hello! la bandera, existen errores= "+flagError+" "+ telefono.value);

    if(!flagError){
        //no hubieron errores

        alert("ENTRÓ A (!flagError)= "+flagError+" el tlf es: "+ telefono.value);
        
        
        let texto;
        if (telefono.value){//si HAY TLF
            alert("HAY TLF");

            texto="Hola "+ nombre.value +", te llamaremos al "+telefono.value+ " cuando hagan "+temperatura.value+" grados.";
            alert("a la salida el texto es "+texto);

        }else{//SI NO HAY TLF
            alert(" NO HAY TLF");

            texto="Hola "+ nombre.value +", nos vemos cuando hagan "+temperatura.value+" grados.";
            alert("a la salida el texto es "+texto);
        }

        // expresion ? algo : otra;
        /*        
        let texto = telefono.value ? 
        "Hola "+ nombre.value +", te llamaremos al "+telefono.value+ " cuando hagan "+temperatura.value+" grados." :
        "Hola "+ nombre.value +", nos vemos cuando hagan "+temperatura.value+" grados."
        */
    }
   
/*
    return false;
 }else return true;
 */
        //agregamos a lista de nombre

        let li= document.createElement('li');//<li></li>
        li.textContent="texto";

        let ul = document.getElementById('list');
        document.body.appendChild(li);
        ul.appendChild(li);


        const para = document.createElement("p");
para.innerHTML = "This is a paragraph.";
document.getElementById("myDIV").appendChild(para);
        /*
        // borramos campos del input
        nombre.value="";
        temperatura.value="";
        telefono.value="";
        */

    
    return false;//para que no se envie

}