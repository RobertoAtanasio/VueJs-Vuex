// Obs.:
// 1. Quando criamos módulos as variáveis de acesso fazem referência ao estado local (via state),
//    caso se queira ter acesso aos estados dos demais módulos, deve-se incluir a 
//    referência ao estado global utilizando o parâmetro rootState


export default {
    // aqui define que todos os getters, mutations e action, ... ficam definidos dentro do
    // namespaced carrinho.
    // Obs. O namespaced deve ser incluído quando do acesso aos métodos. Ex: ver em Loga.vue
    // ...mapActions('carrinho', ['adicionarProduto']),
    namespaced: true, 
    // objeto que representa o estado centralizado pelo Vuex
    // tudo que se colocar neste objeto representará o estado central que é gerenciado pelo Vuex
    state: {
        produtos: []
    },
    getters: {
        valorTotal(state) {
            return state.produtos
                        .map(p => p.quantidade * p.preco)
                        .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations: {
        adicionarProduto(state, payload) {
            state.produtos.push(payload)
        }
    },
    actions: {
        // as duas formas abaixo fazem a mesma coisa, o que muda é a forma do parâmetro
        // Também só pode receber 1 parâmetro a mais, além do primeiro que é padrão

        adicionarProduto({ commit }, payload) {
            // simulando um acesso assícrono
            setTimeout( () => {
                // este commit acessa o método adicionarProduto na mutations
                commit('adicionarProduto', payload)
            }, 1000)
        }
        
        // // assim, esta action adicionarProduto fica na raiz, voltando a se fazer referência 
        // // sem o namespaced. A função é jogada no raiz novamente, fora do namespaced
        // adicionarProduto: {
        //     root: true,
        //     handler({ commit }, payload) {
        //         // simulando um acesso assícrono
        //         setTimeout( () => {
        //             // este commit acessa o método adicionarProduto na mutations
        //             commit('adicionarProduto', payload)
        //         }, 1000)
        //     }
        // }

        // adicionarProduto(context, payload) {
        //     // simulando um acesso assícrono
        //     setTimeout( () => {
        //         // este commit acessa o método adicionarProduto na mutations
        //         context.commit('adicionarProduto', payload)
        //     }, 1000)
        // }
    }
}