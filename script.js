
            function ocultarElementos() {
                document.getElementById("imagenBucador").style.visibility = "hidden";
                document.getElementById("mensajeRectangulo1").style.visibility = "hidden"
                document.getElementById("mensajeRectangulo2").style.visibility = "hidden";
                document.getElementById("botonCopiar").style.visibility = "visible";
            }

            function encriptar(){
                let arregloMensaje=[]; 
                let textoEncriptado="";
                
                arregloMensaje = document.getElementById("mensaje").value;

                if(arregloMensaje != ""){

                    ocultarElementos();
                    for(indice=0;indice<arregloMensaje.length;indice++){
                    if(arregloMensaje[indice]=="e"){
                        textoEncriptado=textoEncriptado + "enter";
                    }   
                        else if(arregloMensaje[indice]=="i"){
                            textoEncriptado=textoEncriptado + "imes";
                        }
                            else if(arregloMensaje[indice]=="a"){
                                textoEncriptado=textoEncriptado + "ai";
                            }
                                else if(arregloMensaje[indice]=="o"){
                                textoEncriptado=textoEncriptado + "ober";
                                }
                                    else if(arregloMensaje[indice]=="u"){
                                    textoEncriptado=textoEncriptado + "ufat";
                                    }
                                    else{
                                    textoEncriptado=textoEncriptado + arregloMensaje[indice];
                                    }
                    }
                    document.getElementById("mensajeEncriptado").innerHTML=textoEncriptado;
                }else{
                    alert("El campo no puede estar vacio")
                }
            }

            function desencriptar(){
                let textoProcesado=document.getElementById("mensaje").value;
    
                textoProcesado = textoProcesado.replace(/ai/g, 'a');
                textoProcesado = textoProcesado.replace(/enter/g, "e") 
                textoProcesado = textoProcesado.replace(/imes/g, "i") 
                textoProcesado = textoProcesado.replace(/ober/g, "o") 
                textoProcesado = textoProcesado.replace(/ufat/g, "u") 

                document.getElementById("mensajeEncriptado").innerHTML=textoProcesado;
            }

            function copiar(){
                let copyText = document.querySelector("#mensajeEncriptado");
                copyText.select();
                document.execCommand("copy");
            }

            /*document.querySelector("#botonCopiar").addEventListener("click", copiar);/* otra forma de llamar al boton es el mas usado*/
            document.getElementById("botonEncriptar").onclick=encriptar;
            document.getElementById("botonDesencriptar").onclick=desencriptar;
            document.getElementById("botonCopiar").onclick=copiar;
