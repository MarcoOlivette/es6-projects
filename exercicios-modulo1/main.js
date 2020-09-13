// Exercicio 1

class User{
    constructor(email = "", password = "", admin = false){
        this.admin = admin;
        this.email = email;
        this.password = password;
    }

    isAdmin(){
        return this.admin;
    }
}

class Admin extends User{
    constructor(email = "", password = ""){
        super(email, password, true);
    }
}

class Manager extends User{
    constructor(email = "", password = ""){
        super(email, password, false);
    }
}

let manager = new Manager("Manager email","Manager password");
let admin = new Admin("admin email","admin password");

// Exercicio 2