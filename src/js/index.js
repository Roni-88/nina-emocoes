const listaSelecaoNina88 = document.querySelectorAll ('.nina88')
const nina88Card = document.querySelectorAll ('.cartao-nina88')

listaSelecaoNina88.forEach (nina88 => {

    nina88.addEventListener ('click', () => {

        const cartaoNina88Aberto = document.querySelector ('.aberto')
        cartaoNina88Aberto.classList.remove ('aberto')

        const idNina88Selecionado = nina88.attributes.id.value

        const idDoCartaoNina88ParaAbrir = 'cartao-' + idNina88Selecionado 
        const cartaoNina88ParaAbrir = document.getElementById (idDoCartaoNina88ParaAbrir)
        cartaoNina88ParaAbrir.classList.add ('aberto')

        const nina88AtivoNaListagem = document.querySelector ('.ativo')
        nina88AtivoNaListagem.classList.remove ('ativo')

        const nina88SelecionadoNaListagem = document.getElementById (idNina88Selecionado)
        nina88SelecionadoNaListagem.classList.add ('ativo')
    })
})
