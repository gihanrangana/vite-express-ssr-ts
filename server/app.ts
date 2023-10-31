import express from 'express';
class App {

    public router = express.Router();

    constructor() {
        this.router.get('/', (req, res) => {
            res.send("Welcome to the API!")
        })
    }
}

const api = new App()

export default api;