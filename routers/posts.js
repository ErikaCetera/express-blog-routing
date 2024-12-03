// Importa modulo express
const express = require("express");
// Crea un router utilizzando express.Router
const router = express.Router();
// Importa dati del file data.js
const postsList = require("../data");
// Esporta router
module.exports = router;

// index - legge tutti i dati di ogni elemento
router.get('/', (req, res) => {
    const data = {
        postsList: postsList,
        count: postsList.length
    };
    res.json(data);
});

// show -legge i dati di un singolo elemento attraverso un'id
router.get("/:id", (req, res) => {
    // preleva parametro e lo converte in numero
    const postId = parseInt(req.params.id);
    // Trova il primo post con id corrispondente a quello inserito nell'url
    const post = postsList.find(curPost => curPost.id === postId);
    // restituisce il post
    res.json(post);
});

// create
router.post("/", (req, res) => {
    res.json("aggiunge un nuovo elemento")
})

// update
router.put("/:id", (req, res) => {
    const postId = req.params.id;
    res.json("modifica e sovrascrive tutte le proprietà di un elemento con id:" + postId)
})

// modify
router.patch("/:id", (req, res) => {
    const postId = req.params.id;
    res.json(" modifica alcune proprietà selezionate di un elemento con id:" + postId)
});

// destroy
router.delete("/:id", (req, res) => {
    const postId = req.params.id;
    res.json(" elimina un elemento con id:" + postId)
});