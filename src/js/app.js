document.addEventListener('DOMContentLoaded', function(){
    app();
});

function app(){
    validarFormulario();
    search()
}

function validarFormulario(){
    const form = document.getElementById('formContactame');
    const correo = document.getElementById('correo');
    const mensaje = document.getElementById('mensaje');
    correo.addEventListener('blur', validaCorreo);
    mensaje.addEventListener('blur', validaMensaje)
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
    })
}
//Valida el correo electronico 
function validaCorreo(){
    limpiarError();
    const regex_correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(regex_correo.test(correo.value)){
        
    }else{
        if(correo.textLength==0){
            errorForm('Ingresa un correo');
        }else if(correo.textLength>1){
            errorForm('Ingresa un correo valido')
        }
    }
}
//Valida que exista un mensaje
function validaMensaje(){
    //Verifica que el mensaje no este vacío
    limpiarError();
    if(mensaje.textLength!=0){
    }else{errorForm('Escribe un mensaje');}
}

//Crea un mensaje de error 
function errorForm(e){
    const error = document.getElementById('error');
    error.classList.add('error');
    const mensaje = document.createElement('P');
    mensaje.textContent = e;
    error.appendChild(mensaje)
}
//Limpia el mensaje de error
function limpiarError(){
    error.innerHTML = ''
    error.classList.remove('error');
}
//ANIMAR BUSCADOR
function search(){
    const inptSearch = document.getElementById('searchPlant');
    const formSearch = document.getElementById('form-search');
    inptSearch.addEventListener('click',function(){
        formSearch.classList.add('searchIn');
    });
    inptSearch.addEventListener('blur',function(){
        formSearch.classList.remove('searchIn');
    });
}