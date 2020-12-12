function Salvar(){
    let nome = document.getElementById("Nome").value;
    let telefone = document.getElementById("Telefone").value;


    document.getElementById("agenda").innerHTML += "<li>" + nome + "-" + telefone + "</li>";

    document.getElementById("Nome").focus();
}