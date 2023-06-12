//console.log('Hello world')
//O significado de API é Interface de Programação de Aplicações. Ela permite que dois componentes de software se comuniquem. Chamamos esses dois lados de cliente e servidor.
async function buscaEndereco(cep){
    try {
    var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCepConvertida = await consultaCep.json();
        if (consultaCepConvertida.erro){
        throw Error('Cep não existente!')
        }
        var cidade = document.getElementById('cidade')
        var logradoro = document.getElementById('endereco')
        var estado = document.getElementById('estado')
        var bairro = document.getElementById('bairro')

        bairro.value = consultaCepConvertida.bairro
        cidade.value = consultaCepConvertida.localidade;
        logradoro.value = consultaCepConvertida.logradouro;
        estado.value = consultaCepConvertida.uf;

        console.log(consultaCepConvertida);
        return consultaCepConvertida
    }catch (erro){
        console.log(erro)
    }
}
var cep = document.getElementById('cep');
cep.addEventListener('focusout', ()=>buscaEndereco(cep.value)) //clica fora, tira o foco