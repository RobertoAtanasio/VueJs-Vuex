
// aqui faz acesso ao estado (state) definido em store.js uma vez que o import foi
// colocado em store.js (import * as getters from './getters')

export const getNome = state => state.nome
export const getNomeCompleto = state => state.nome + ' ' + state.sobrenome