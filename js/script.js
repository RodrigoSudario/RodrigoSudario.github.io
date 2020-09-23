let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let text = document.getElementById("textProject");
let link = document.getElementById("linkProject")

btn1.addEventListener("click", function(){
    text.innerText = "Descrição do primeiro projeto Descrição do primeiro projetoDescrição do primeiro projetoDescrição do primeiro projeto Descrição do primeiro projetoDescrição do primeiro projeto \n url: github.com.br";
});
btn2.addEventListener("click", function(){
    text.innerText = "Descrição do segundo projeto Descrição do segundo  projetoDescrição do primeiro projetoDescrição do segundo projeto Descrição do primeiro projetoDescrição do primeiro projeto \n url: github.com.br";
});
btn3.addEventListener("click", function(){
    text.innerText = "Descrição do terceiro projeto Descrição do terceiro projetoDescrição do terceiro projeto Descrição do primeiro projetoDescrição do primeiro projeto \n url: github.com.br";
});
btn4.addEventListener("click", function(){
    text.innerText = "Descrição do quarto projetoDescrição do quarto projetoDescrição do quarto %%% projeto Descrição do primeiro projetoDescrição do primeiro projeto \n url: github.com.br";
});
btn5.addEventListener("click", function(){
    text.innerText = "";
});