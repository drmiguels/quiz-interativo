const nomes = ["Hércules","Evandro","P.didy","Atenas","Afrodite","Lívia"]

 export function aleatório(lista){
    const posicao = Math.floor(Math.random ()* lista.lenght);
    return lista[posicao];
}

export const nome = aleatório(nomes)