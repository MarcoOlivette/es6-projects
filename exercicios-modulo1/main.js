// Exercicio 1

class User {
    constructor(email = "", password = "", admin = false) {
        this.admin = admin;
        this.email = email;
        this.password = password;
    }

    isAdmin() {
        return this.admin;
    }
}

class Admin extends User {
    constructor(email = "", password = "") {
        super(email, password, true);
    }
}

class Manager extends User {
    constructor(email = "", password = "") {
        super(email, password, false);
    }
}

let manager = new Manager("Manager email", "Manager password");
let admin = new Admin("admin email", "admin password");

// Exercicio 2

const usuarios = [{
        nome: 'Diego',
        idade: 23,
        empresa: 'Rocketseat'
    },
    {
        nome: 'Gabriel',
        idade: 15,
        empresa: 'Rocketseat'
    },
    {
        nome: 'Lucas',
        idade: 30,
        empresa: 'Facebook'
    },
];

const arr = usuarios.map(
    user => user.idade
);

const arr2 = usuarios.filter(
    user => user.empresa == 'Rocketseat'
);

const arr3 = usuarios.find(
    user => user.empresa == 'Google'
)

const arr4 = usuarios.map(users => ({
    ...users,
    idade: users.idade * 2
})).filter(users => users.idade <= 50);

// Exercicio 3

// 3.1

const arrayNumbers = [1, 2, 3, 4, 5];
arrayNumbers.map(item => item + 2);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = {
    nome: 'Marco',
    idade: 21
};
const mostraIdade = (usuario = []) => usuario.idade;

// 3.3
// Dica: Utilize uma constante pra function
const mostraUsuario = (nome = 'Diego', idade = 18) => {
    return {
        nome,
        idade
    }
};

console.log(mostraUsuario(usuario.nome, usuario.idade));

// 3.4
const promise = function () {
    return new Promise(function (resolve, reject) {
        return resolve();
    })
}