async function entrar(){
    let dados = await fetch("../painel/usuario.json");
    let dadosJSON = await dados.json();
    
    console.log(dadosJSON);

    let usuarioLogin = document.querySelector("#usuario").value;
    let senha = document.getElementById("pass").value;
    console.log(senha);

    let verdade;
    let form;
    
    dadosJSON['users'].forEach((user) => {
        console.log(user);
        if(user.user == usuarioLogin && user.pws == senha){
            console.log("To aqui");
            form = document.forms[0];
            verdade = true;
        }
    });
    if(verdade){
        form.submit();
    }else{
        alert("Usuario ou senha incorreta!");
    }
}