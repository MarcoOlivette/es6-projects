import axios from 'axios'

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response.data);
        } catch (err) {
            console.log("erro");
        }
    }
}

Api.getUserInfo('MarcoOlivette');