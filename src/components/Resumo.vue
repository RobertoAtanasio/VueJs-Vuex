<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <!-- <span>Total: <strong>{{ valorTotal | dinheiro }}</strong></span> -->
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>


<script>
// O data() abaixo foi substituído pela propriedade computada produtos().
// A lista de produtos não será mais necessária, pois o total é obtido a partir do getters.

// Com a inclusão do import { mapGetters }, a variável a ser referenciada no html acima deve ser valorTotal
// Se quisermos continuar utilizando a nossa variável, definimos um objeto e fazemos referância à variável.
// Com o ...mapGetters({ é uma forma de acessar o getters com outras propriedade computadas.

import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('carrinho', {
            total: 'valorTotal'
        }),
    }
    // computed: mapGetters ({
    //     total: 'valorTotal'
    // })

    // computed: mapGetters(['valorTotal']),

    // computed: {
    //     total() {
    //         return this.$store.getters.valorTotal
    //         // return this.produtos
    //         //     .map(p => p.quantidade * p.preco)
    //         //     .reduce((total, atual) => total + atual, 0)
    //     },
    //     // produtos() {
    //     //     return this.$store.state.produtos
    //     // }
    // },
    // data() {
    //     return {
    //         produtos: [
    //             { nome: 'Produto 1', quantidade: 7, preco: 14.55 },
    //             { nome: 'Produto 2', quantidade: 10, preco: 22.99 },
    //             { nome: 'Produto 3', quantidade: 1, preco: 43.18 },
    //         ]
    //     }
    // }
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }
</style>
