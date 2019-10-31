<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <label for="quantidade">Adicionar</label>
            <input id="quantidade" type="number" v-model.number="quantidade">
            <label for="preco">itens de <strong>R$</strong></label>
            <input id="preco" type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
// o cometário abaixo (// eslint-disable-next-line) faz com que o console.log não gere problema 
// no build da aplicação

// O this.$store.commit é uma forma de atualizar o store com a mutations.

// É possível acessar as mutations a partir do mapMutations. Elas são colocadas dentro dos Methods.

// A forma ...mapMutations faz o mapeamento das mutations dentro dos Methods (funcionalidades), daí
// a forma de chamar fica igual a this.adicionarProduto(produto). Deve-se fazer o import também.
// Obs.: com o mapMutations, a chamada é feito no método em mutations

// Para o uso da action, vamos importar o mapAction
// Neste exemplo, estamos simulando na action em store.js uma acesso assíncrono que demora n segundos e
// este acesso funciona com o import { mapActions } from 'vuex'

// Para a forma usando this.$store.dispatch para atualizar a store não é necessário fazer o
// importe: import { mapActions } from 'vuex'

// O ...mapActions na realidade faz a criação de uma função em methods com o mesmo nome da action
// e internamente faz a chamada do dispatch. Se criarmos essa função (ver abaixo) não será preciso
// fazer o import de mapActions e o ...mapActions

// import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            sequencia: 1,
            // quantidade: 1,
            // preco: 9.99,
        }
    },
    // Este método substituem a variáves quantidade e preco em data()
    computed: {
        quantidade() {
           return this.$store.state.parametros.quantidade
        },
        preco() {
            return this.$store.state.parametros.preco
        }
    },
    // computed: {
    //     // tratamento para Vuex e two-way binding (v-model). O set usa a mutation.
    //     quantidade: {
    //         get () {
    //             return this.$store.state.quantidade
    //         },
    //         set (valor) {
    //             this.$store.commit('setQuantidade', valor)
    //         }
    //     },
    //     preco: {
    //         get () {
    //             return this.$store.state.preco
    //         },
    //         set (valor) {
    //             this.$store.commit('setPreco', valor)
    //         }
    //     }
    // },
    methods: {
        // ...mapMutations(['adicionarProduto']),
        ...mapActions('carrinho', ['adicionarProduto']),
        // adicionarProduto(produto) {
        //     // aqui acessa o método da mutation em store.js
        //     this.$store.dispatch('adicionarProduto', produto)
        // },
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++
            // eslint-disable-next-line
            // console.log(produto)
            // this.$store.state.produtos.push(produto)
            // this.$store.commit('adicionarProduto', produto)
            this.adicionarProduto(produto)
            // this.$store.dispatch('adicionarProduto', produto)

            /* eslint-disable-next-line */
            console.log(this.$store.getters.getNome)    // obtem o atributo definido em getters.js
            console.log(this.$store.getters.getNomeCompleto)    // obtem o atributo definido em getters.js
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 1.5rem;
        width: 90px;
    }
</style>
