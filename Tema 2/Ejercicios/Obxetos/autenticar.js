/*
Crea un obxecto chamado usuario que permita autenticar a unha persoa que ten que iniciar 
sesion no sistema.
Terá un id e unha contraseña
*/

class usuario{
    constructor(idUser, contrUser){
        this.id = idUser;
        this.contraseña = contrUser;
    }

    autenticar(){
        var id = "user121";
        var contraseña = "abc123";

        if(this.id == id && this.contraseña == contraseña){
            console.log("Bienvenido usuario");
        }else{
            console.log("No estas registrado");
        }
    }

}

let userId = prompt("Introduce el id");

let userPasswd = prompt("Introduce la contraseña");

let miUsuario = new usuario(userId, userPasswd);

miUsuario.autenticar();
