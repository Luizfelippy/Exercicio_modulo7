const form = document.getElementById('form-valid')

function validarCampo(valorA, valorB) {
    return valorA < valorB;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = parseFloat(document.getElementById('campoA').value);
    const valorB = parseFloat(document.getElementById('campoB').value);
    const mensagemSucesso = `É válido: <b>${valorB}</b> é maior que <b>${valorA}</b>!`;
    const mensagemErro = `Não é valido: <b>${valorA}</b> é maior ou igual que <b>${valorB}</b>.Repita a operação.`
    
    const formIsValid = validarCampo(valorA, valorB);

    if (formIsValid) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        
        

    }else {
        const containerMesagemErro = document.querySelector('.error-message');
        containerMesagemErro.innerHTML = mensagemErro
        containerMesagemErro.style.display = 'block';
        
        campoA.value = '';
        campoB.value = '';
    }
    
        
});


