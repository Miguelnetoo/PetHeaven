document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (validateForm()) {
            // Se todos os campos estiverem preenchidos, mostrar alerta e redirecionar
            alert('Compra realizada com sucesso!!! Aguarde a entrega com tempo máximo de 60 minutos, Muito obrigado por fazer parte da nossa jornada.');
            window.location.href = "../index.html";
        } else {
            // Se algum campo estiver vazio, mostrar alerta
            alert('Por favor, preencha todos os campos antes de finalizar a compra.');
        }
    });

    function validateForm() {
        var inputs = form.querySelectorAll('input');
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].type !== 'submit' && inputs[i].value.trim() === '') {
                return false;
            }
        }
        return true;
    }
});