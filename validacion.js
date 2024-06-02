// expresiones regulares a usar

// nombre

const regExpNombre = /^[a-zA-Z]{0,9}$/;
const regExpTelefono = /^[1-9][0-9]{9}$/;
//testear en la web regex101.com


function limpiarErrores(event){
     
    //const actualId = event.target.name;
    //const actualInput = document.getElementById(actualId);
    const actualInput = event.target;
    actualInput.classList.remove('inputErroneo');
    const actualHermano = actualInput.nextElementSibling;

    if(actualHermano.classList && actualHermano.classList.contains('colorRojo'))
        actualHermano.remove();
    
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

}





function validar(){
     
    // 1. Obtener los input para obtener los valores

    let flagError =false;//bandera error

    const nombre= document.getElementById('nombre');
    const temperatura= document.getElementById('temperatura');
    const telefono= document.getElementById('telefono');

//control input nombre
// maxlength="9" required
console.log(nombre.value);
if(nombre.value == "" || nombre.value.length >9 || 
!regExpNombre.test(nombre.value)){
    
    console.log('error vacio o mas de 9 o distinto de letras');

    const spanError = document.createElement('span');//<span>>/span>
    
    //spanError.appendChild(document.createTextNode('');

    spanError.textContent= 'Ingrese un nombre valido';
  // spanError.innerHTML='ingrese NOMBRE valido'; 
  // spanError.style.color='red';
   //añadiendo clases
   spanError.className= 'colorRojo';//borra clase
   //spanError.classList.add('colorRojo');//añade clase
  
  //abrir en algun elemento q tengamos en el html
    nombre.insertAdjacentElement("afterend",spanError);

    nombre.classList.add('inputErroneo');


    flagError =true;
}
// control temperatura

if (temperatura.value==""||temperatura.value <-10 || temperatura.value>60){
    console.log('error temp');

    const spanError = document.createElement('span');//<span>>/span>
    spanError.textContent='ingrese TEMPERATURA valido'; 
    spanError.className = 'colorRojo';//borra clase
    temperatura.insertAdjacentElement("afterend",spanError);
    temperatura.classList.add('inputErroneo');
    flagError =true;
}

// control telefono

if(telefono.value  && !regExpTelefono.test(telefono.value)){

    console.log('errorTlf');
    const spanError = document.createElement('span');//<span>>/span>
    spanError.innerHTML='ingrese TELEFONO valido'; 
    spanError.className= 'colorRojo';//borra clase
    telefono.insertAdjacentElement("afterend",spanError);
    telefono.classList.add('inputErroneo');
    flagError =true;

}

    //console.log(nombre, temperatura, telefono);

    //return flase es para que no se envie, que esté al ultimo o even.preventDefault() y pasando el evento
 //AGREGAMOS A LA LISTA
    if(!flagError){
        
        /*
        let texto;
        if (telefono.value){//si HAY TLF

            texto='bla';

        }else{//SI NO HAY TLF

            texto='bla bla';
        */

        // expresion ? algo : otra;

        const texto = telefono.value ? 
        'Hola <nombre>, te llamaremos al <telefono> cuando hagan <temperatura> grados.' :
        'Hola <nombre>, noe vemos cuando hagan <temperatura> grados.'

    }
/*
    return false;
 }else return true;
 */
        //agregamos a lista de nombre

        const li= document.createElement('li');//<li></li>
        li.textContent=texto;

        const ul = document.getElementById('list');
        ul.appendChild(li);
        // borramos campos del input
        nombre.value="";
        temperatura.value="";
        telefono.value="";

    
    return false;//para que no se envie

}