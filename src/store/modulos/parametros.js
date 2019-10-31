export default {
    // aqui define que todos os getters, mutations e action, ... ficam definidos dentro do
    // namespaced parametros
    namespaced: true, 
    // objeto que representa o estado centralizado pelo Vuex
    // tudo que se colocar neste objeto representará o estado central que é gerenciado pelo Vuex
    state: {
        quantidade: 2,
        preco: 19.99
    },
    mutations: {
        setQuantidade(state, payload) {
            state.quantidade = payload
        },
        setPreco(state, payload) {
            state.preco = payload
        }
    }
}