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

// Exercicio 3