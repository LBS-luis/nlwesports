import express from "express";

const app = express();

app.get('/ads', (req, res) => {
    return res.json([
        { id: 1, anuncio: "ad1"},
        { id: 2, anuncio: "ad2"},
        { id: 3, anuncio: "ad3"},
        { id: 4, anuncio: "ad4"},
        { id: 5, anuncio: "ad4"},        
    ])
})

app.listen(3333)