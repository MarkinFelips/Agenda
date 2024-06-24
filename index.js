function login(){
    const usuário = document.getElementById('Usuário').value;
    const senha = document.getElementById('Senha').value;

    const usuárioValido = "admin";
    const senhaValida = "admin";

    if (usuário === usuárioValido && senha === senhaValida) {
        alert('Login bem sucedido!');
        window.location.href = 'AgcPrincipal.html';
    }else{
        alert('Login mal sucedido, tente novamente!');
    }

    return false;
}