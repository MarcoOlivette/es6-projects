const arr = [1, 23, 4, 3, 2, 3, 1, 2, 21, 34, 23, 2, 21, 1, 32, 4, 12, 3214, 6, 4];

function teste(i,j){
    return i+j;
}

let newArr = arr.map(
    (item, index) => teste(item, index)
);

console.log(newArr);

// valor padrão

const soma = (a = 2,b = 2) => a+b;

console.log(soma());
console.log(soma(1));
console.log(soma(1,2));


// desestruturar objeto

const usuario = {
    nome : 'Marco',
    idade : 23,
    endereco : {
        cidade: "Curitiba",
        estado : "PR"
    },
}
const {nome, idade} = usuario;
console.log(nome,idade);

function mostraNome({nome}){
    console.log(nome);
}

mostraNome(usuario);
