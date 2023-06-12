//console.log('Hello world')
//O significado de API é Interface de Programação de Aplicações. Ela permite que dois componentes de software se comuniquem. Chamamos esses dois lados de cliente e servidor.
async function buscaEndereco(cep){
    try {
    var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCepConvertida = await consultaCep.json();
        if (consultaCepConvertida.erro){
        throw Error('Cep não existente!')
        }
        console.log(consultaCepConvertida);
        return consultaCepConvertida
    }catch (erro){
        console.log(erro)
    }
}
let ceps =  ['01001000','01001001']
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
Promise.all(conjuntoCeps).then(respostas => console.log(respostas))