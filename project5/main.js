//Rest
const usuario = {
    nome : 'Marco',
    idade : 23,
    empresa : "olivette's company"
};

const {empresa, ...resto} = usuario;

console.log(empresa, resto);

//Spread

const arr1 = [1,2,3,54];
const arr2 = [5,6,7,8];
const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario2 = {...usuario, nome:"João"};

console.log(usuario2);

console.log(`meu nome é ${usuario.nome}`);

const nome = 'Marco';
const idade = 21;

function createObj(nome, idade){
    return {
        nome, idade
    }
}

console.log(createObj(nome, idade))
