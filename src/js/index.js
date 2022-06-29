const listaSelecaoNina88 = document.querySelectorAll ('.item')
const nina88Card = document.querySelectorAll ('.cartao-item')

console.log (listaSelecaoNina88)
listaSelecaoNina88.forEach (item => {

    item.addEventListener ('click', () => {

        const cartaoNina88Aberto = document.querySelector ('.aberto')
        cartaoNina88Aberto.classList.remove ('aberto')

        const idNina88Selecionado = item.attributes.id.value

        const idDoCartaoNina88ParaAbrir = 'cartao-' + idNina88Selecionado

        console.log ('idDoCartaoNina88ParaAbrir', idDoCartaoNina88ParaAbrir)
        const cartaoNina88ParaAbrir = document.getElementById (idDoCartaoNina88ParaAbrir)

        console.log ('cartaoNina88ParaAbrir', cartaoNina88ParaAbrir)
        cartaoNina88ParaAbrir.classList.add ('aberto')
        

        const nina88AtivoNaListagem = document.querySelector ('.ativo')
        nina88AtivoNaListagem.classList.remove ('ativo')

        const nina88SelecionadoNaListagem = document.getElementById (idNina88Selecionado)
        nina88SelecionadoNaListagem.classList.add ('ativo')
    })
})
