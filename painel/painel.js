import { clientes } from "../painel/clientes.js";
import {produtos} from "../painel/produtos.js";

let btn = document.querySelectorAll(".btn");

function formCliente(codigo){
    document.forms[0][1].value = clientes[codigo].codCliente;
    document.forms[0][2].value = clientes[codigo].nomeCliente;
    document.forms[0][3].value = clientes[codigo].dataCadCli;
}
function formProdutos(codigo){
    document.forms[1][1].value = produtos[codigo].codProduto;
    document.forms[1][2].value = produtos[codigo].descProduto;
    document.forms[1][3].value = produtos[codigo].precoProduto;
    document.forms[1][4].value = produtos[codigo].qtdEstoqueProd;
}
function formNovoCliente(codigo){
    document.forms[0][1].value = codigo;
    document.forms[0][2].value = "";
    let data = new Date();
    document.forms[0][3].value = data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear();
}
function formNovoProduto(codigo){
    document.forms[1][1].value = codigo;
    document.forms[1][2].value = "";
    document.forms[1][3].value = "";
    document.forms[1][4].value = "";
}
function formSalvarCliente(){

    let novoCliente = {
        "codCliente": document.forms[0][1].value,
        "nomeCliente": document.forms[0][2].value,
        "dataCadCli": document.forms[0][3].value
    }
    clientes.push(novoCliente);
}
function formSalvarProdutos(){
    let novoProdutos = {
        "codProduto": document.forms[1][1].value,
        "descProduto": document.forms[1][2].value,
        "precoProduto" : document.forms[1][3].value,
        "qtdEstoqueProd" : document.forms[1][4].value
    }
    produtos.push(novoProdutos);
}
function pesquisaCodigo(codigo){

}

for(let x of btn){
x.addEventListener('click', (evento)=>{
    let btnClicado = evento.target;
    if(btnClicado.classList.contains("clientes")){
        if(document.forms[0].style.display == "none"){
            document.forms[0].style.display = "flex";
            document.forms[1].style.display = "none";
            document.forms[2].style.display = "none";
            formCliente(0);
        }else{
            document.forms[0].style.display = "none";
        }
    }else if(btnClicado.classList.contains("produtos")){
        if(document.forms[1].style.display == "none"){
            document.forms[1].style.display = "flex";
            document.forms[2].style.display = "none";
            document.forms[0].style.display = "none";
            formProdutos(0);
        }else{
            document.forms[1].style.display = "none";
        }
    }else if(btnClicado.classList.contains("pedidos")){
        if(document.forms[2].style.display == "none"){
            document.forms[2].style.display = "flex";
            document.forms[0].style.display = "none";
            document.forms[1].style.display = "none";
        }else{
            document.forms[2].style.display = "none";
        }
    }
    if(btnClicado.classList.contains("fechar")){
        btnClicado.form.style.display = "none";
    }
});
}

let btnVP = document.querySelectorAll(".btnVP");

for(let y of btnVP){
    y.addEventListener('click', (evento) =>{
        let btnClicado = evento.target;
        console.log(btnClicado.form);
        if(btnClicado.form.id == "clientes"){
            let codigo = document.forms[0][1].value;
            if(btnClicado.classList.contains("proximo")){
                formCliente(codigo);
            }else if(btnClicado.classList.contains("voltar")){
                formCliente(Number(codigo-2));
            }
        }else if(btnClicado.form.id == "Produtos"){
            let codigo = document.forms[1][1].value;
            if(btnClicado.classList.contains("proximo")){
                formProdutos(codigo);
            }else if(btnClicado.classList.contains("voltar")){
                formProdutos(Number(codigo-2));
            }
        }
    })
}

let btnNS = document.querySelectorAll(".btnNS");

for(let z of btnNS){
    z.addEventListener('click', (evento) =>{
        let btnClicado = evento.target;
        console.log(btnClicado.form);
        if(btnClicado.form.id == "clientes"){
            if(btnClicado.classList.contains("novo")){
                let codigo = clientes.length;
                formNovoCliente(Number(codigo+1));
            }else if(btnClicado.classList.contains("salvar")){
                formSalvarCliente();
            }
        }else if(btnClicado.form.id == "Produtos"){
            if(btnClicado.classList.contains("novo")){
                let codigo = produtos.length;
                formNovoProduto(Number(codigo+1));
            }else if(btnClicado.classList.contains("salvar")){
                formSalvarProdutos();
            }
        }
    })
}

let IdCliente = document.querySelector("#codigoCliente"); //recebendo infor do input codigo cliente
let ListaClientes = document.querySelectorAll(clientes); // lista clientes

for(let w of ListaClientes){
    let pesquisa = clientes.indexOf(IdCliente);
    console.log(pesquisa);
}