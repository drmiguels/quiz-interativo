const nomes = ["Hércules","Evandro","P.didy","Atenas","Afrodite","Lívia"]

function aleatório(lista){
    const posicao = Math.floor(Math.random ()* lista.lenght);
    return lista[posicao];
}

export