import express from "express";
const app = express();
app.get('/ads', (req, res) => {
    return res.json([
        { "teste": "teste"
        },
        { "teste": "tesadaste",
            "teste2": "te123ste",
            "teste3": "testasdase",
            "teste4": "tesggggte"
        }
    ]);
});
app.listen(3333);
