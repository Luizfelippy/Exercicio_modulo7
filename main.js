const form = document.getElementById('form-valid');

function validarCampo(valorA, valorB) {
    return valorA < valorB;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = document.getElementById('campoA');
    const valorB = document.getElementById('campoB');
    const mensagemSucesso = `É valido: ${valorB.value} é maior que ${valorA.value}`;
    
    formIsValid = validarCampo(valorA.value, valorB.value)

    if (formIsValid) {
        alert(mensagemSucesso);
    }else if (valorA > valorB){
        alert("A é maior que B!");
    }else {
        alert("A é igual a B!");
    }
})

console.log(form);