import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './modulos/carrinho'
import parametros from './modulos/parametros'

Vue.use(Vuex)

// a Store deve ser importada em main.js

// O estado dos módulos são concatenados dentro do objeto state: {} da seguinte forma:
/*
    state: {
        carrinho: {
            produtos: []
        },
        parametros: {
            quantidade: 2,
            preco: 19.99
        }
    },
    modules: { carrinho, parametros }
*/

// Obs.: atentar que o acesso nos componentes mudam, pois devem fazer referência ao módulo criado!!!
// Ver, por exemplo, em Loja.vue

import * as getters from './getters'   // arquivo getters.js. Aqui importa todos os método definidos no arquivo

export default new Vuex.Store({
    state: {
        nome: 'Roberto',
        sobrenome: 'Atanásio'
    },
    getters,
    modules: { carrinho, parametros }
})

//--- colocado em comentário depois da criação dos módulos de carrinho e parâmetros

// O mutations equivale ao setters, mas não existe esse nome setters. Só pode ter um único
// parâmetro, além do state. Esse parâmetro pode ser qualquer tipo de objeto

// A actionsdeve ser o lugar onde se coloca as regras de negócios, entre outras coisas, o acesso a API.
// Obs: o objetivo das actions não deve ser o de altera o estado da store.
// Exemplo: ver acesso à action em Loja.vue

// export default new Vuex.Store({
//     // objeto que representa o estado centralizado pelo Vuex
//     // tudo que se colocar neste objeto representará o estado central que é gerenciado pelo Vuex
//     state: {
//         produtos: [],
//         quantidade: 2,
//         preco: 19.99
//         // produtos: [
//         //     { id: 1, nome: 'Produto 1', quantidade: 7, preco: 14.55 },
//         //     { id: 2, nome: 'Produto 2', quantidade: 10, preco: 22.99 },
//         //     { id: 3, nome: 'Produto 3', quantidade: 1, preco: 43.18 }
//         // ]
//     },
//     getters: {
//         valorTotal(state) {
//             return state.produtos
//                         .map(p => p.quantidade * p.preco)
//                         .reduce((total, atual) => total + atual, 0)
//         }
//     },
//     mutations: {
//         adicionarProduto(state, payload) {
//             state.produtos.push(payload)
//         },
//         setQuantidade(state, payload) {
//             state.quantidade = payload
//         },
//         setPreco(state, payload) {
//             state.preco = payload
//         }
//     },
//     actions: {
//         // as duas formas abaixo fazem a mesma coisa, o que muda é a forma do parâmetro
//         // Também só pode receber 1 parâmetro a mais, além do primeiro que é padrão
//         adicionarProduto({ commit }, payload) {
//             // simulando um acesso assícrono
//             setTimeout( () => {
//                 // este commit acessa o método adicionarProduto na mutations
//                 commit('adicionarProduto', payload)
//             }, 1000)
//         }
//         // adicionarProduto(context, payload) {
//         //     // simulando um acesso assícrono
//         //     setTimeout( () => {
//         //         // este commit acessa o método adicionarProduto na mutations
//         //         context.commit('adicionarProduto', payload)
//         //     }, 1000)
//         // }
//     }
// })