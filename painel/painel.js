import { clientes } from "../painel/clientes.js";
import {produtos} from "../painel/produtos.js";
 
let btn = document.querySelectorAll(".btn");
//recebendo infor do input codigo cliente
let IdCliente = document.getElementById('codigoCliente');
let codProduto = document.getElementById('IdProduto');
 
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
function lerDados(){
    let produtos = {}
    produtos.codigoP = document.getElementById('IdProduto').value;
    produtos.descricao = document.getElementById('descricao').value;
    produtos.valor = document.getElementById('valor').value;
    produtos.qntd = document.getElementById('quantidadePedido').value;
    return produtos;
}
function listaTabela(produto){
    let tbody = document.getElementById("tbody");
    let tabela = document.querySelector("#tabela");
    let produto_input = document.getElementById("IdProduto");
 
    let tr = tbody.insertRow(tbody.parentElement.rows.length-1);
    let totalValor = document.getElementById('total');
 
    let td_id = tr.insertCell(0);
    let td_descricao = tr.insertCell(1);
    let td_valor = tr.insertCell(2);
    let td_quantidade = tr.insertCell(3);
    let td_SubTotal = tr.insertCell(4);
 
    for(let i of tabela.rows){
        if(produto_input.value == i.cells[0].textContent){
            alert('Esse produto já foi adicionado');
            return; // serve para nao continuar
        }
    }
    td_id.textContent = produto.codigoP;
    td_descricao.textContent = produto.descricao;
    td_valor.textContent = produto.valor;
    td_quantidade.textContent = produto.qntd;
    td_SubTotal.textContent = (Number(quantidadePedido.value)* Number(valor.value)).toFixed(2); // foi utilizado o id do input
    totalValor.textContent = (Number(total.textContent) + Number(td_SubTotal.textContent)).toFixed(2);
}
 
//apresentar e fechar aba clientes-produtos-pedidos
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
//Botão avançar-voltar
for(let y of btnVP){
    y.addEventListener('click', (evento) =>{
        let btnClicado = evento.target;
        if(btnClicado.form.id == "clientes"){
            let codigo = document.forms[0][1].value;
            let Cliente = clientes;
            console.log(codigo)
            if(btnClicado.classList.contains("proximo")){
                if(codigo == Cliente.length){
                    alert("Chegou ao final da lista!");
                }else{
                    formCliente(codigo);
                }
            }else if(btnClicado.classList.contains("voltar")){
                if(codigo == 1){
                    alert("Chegou ao inicio da lista!");
                }else{
                    formCliente(Number(codigo-2));
                }
            }
        }else if(btnClicado.form.id == "Produtos"){
            let codigo = document.forms[1][1].value;
            let prod = produtos;
            if(btnClicado.classList.contains("proximo")){
                if(codigo == prod.length){
                    alert("Chegou ao final da lista!");
                }else{
                    formProdutos(codigo);
                }
            }else if(btnClicado.classList.contains("voltar")){
                if(codigo == 1){
                    alert("Chegou ao inicio da lista!");
                }else{
                    formProdutos(Number(codigo-2));
                }
            }
        }
    })
}
 
let btnNS = document.querySelectorAll(".btnNS");
//salvar novos clientes/ produtos
for(let z of btnNS){
    z.addEventListener('click', (evento) =>{
        let btnClicado = evento.target;
        let nome = document.getElementById("nome");
        console.log(btnClicado.form);
        if(btnClicado.form.id == "clientes"){
            if(btnClicado.classList.contains("novo")){
                let codigo = clientes.length;
                formNovoCliente(Number(codigo+1));
            }else if(btnClicado.classList.contains("salvar")){
                if(nome.value.length != ""){
                    formSalvarCliente();
                    alert("Novo cliente cadastrado com sucesso!");
                }else{
                    alert("Preencha todos os campos!");
                }
            }
        }else if(btnClicado.form.id == "Produtos"){
            let des = document.getElementById("codigo");
            let preco = document.getElementById("preco");
            let qntd = document.getElementById("quantidade");
            if(btnClicado.classList.contains("novo")){
                let codigo = produtos.length;
                formNovoProduto(Number(codigo+1));
            }else if(btnClicado.classList.contains("salvar")){
                if(des.value.length != "" || preco.value.length != "" || qntd.value.length != ""){
                    formSalvarProdutos();
                    alert("Novo produto cadastrado com sucesso!");
                }else{
                    alert("Preencha todos os campos!");
                }
            }
        }
    })
}
 
//pesquisa cliente
IdCliente.addEventListener('focusout', function(){
    let codigoV = IdCliente.value -1;
   
    if(codigoV < 0){
        codigoV = 0;
    }
 
    document.getElementById('cliente').value = clientes[codigoV]['nomeCliente'];
})
 
// pesquisa itens
codProduto.addEventListener('focusout', function(){
    let codigo = codProduto.value -1;
    if(codigo < 0){
        codigo = 0;
    }
 
    document.getElementById('descricao').value = produtos[codigo]['descProduto'];
    document.getElementById('valor').value = produtos[codigo]['precoProduto'];
})
 
let btnAdd = document.querySelector(".btnAdd");
 
btnAdd.addEventListener('click', function(){
    let produto = lerDados();
    let codigo = produto['codigoP'];
    console.log(codigo);
    console.log(produtos[codigo-1].qtdEstoqueProd);
    if(produto['qntd']<=produtos[codigo-1].qtdEstoqueProd){
        listaTabela(produto);
    }else{
        alert("Quantidade indisponível no momento!");
    }
})
 

