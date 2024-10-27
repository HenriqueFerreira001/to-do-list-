/* lista de tarefas 

[x] saber quando botao for clicado
[x] pegar  o texto dentro do input 
[x] colocar texto na tela  
[ ] deletar texto

*/

function adicionartarefa(){
    let valordoinput = document.querySelector("input").value

 let li = document.createElement("li")
 li.innerHTML =  valordoinput + '<span onclick="deletartarefa(this)">×<span>'

 document.querySelector("ul").appendChild(li)
 document.querySelector("input").value  = ''
}
function deletartarefa(li){
    li.parentElement.remove()
}

