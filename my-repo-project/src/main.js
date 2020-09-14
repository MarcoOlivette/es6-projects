import axios from 'axios'

var list = JSON.parse(localStorage.getItem('list_repo')) || [];
var span = document.querySelector('span#erro');
var input = document.querySelector('input[name=repository]');
var button = document.querySelector('button');
var ul = document.querySelector('ul#repo-list')
console.log(span.val);


class Api {
    static async getRepo() {
        try {
            let text = input.value;
            if (Api.verifyString(text)) {
                console.log(`https://api.github.com/users/${text}`);
                const response = await axios.get(`https://api.github.com/users/${text}`);
                console.log(response);
                await Api.createNode(`https://api.github.com/users/${text}`);
                span.innerText = "Repositorio adicionado com sucesso";
                span.style.color = "green";
            }
        } catch (err) {
            span.innerText = "Repositorio não encontrado";
            span.style.color = "red";
        }
    }

    static async verifyString(text) {
        if (text == "") {
            return false;
        }
        return true
    }

    static async createNode(text) {
        if (Api.verifyString(text)) {
            list.push(text);
            Api.saveStorage();
            Api.renderList();
        }
    }

    static async renderList() {
        ul.innerHTML = '';
        for (let l of list) {
            let li = document.createElement('li');
            let a = document.createElement('a');
            let text = document.createTextNode(l);
            a.setAttribute('href', l);
            a.appendChild(text);
            li.appendChild(a);
            ul.appendChild(li);
        }
    }

    static async saveStorage() {
        localStorage.setItem('list_repo', JSON.stringify(list));
    }
}
button.onclick = Api.getRepo;

Api.renderList();