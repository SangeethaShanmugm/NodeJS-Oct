import express from "express"
import { getAllBooks, getBookById, deleteBookById, addBooks, updateBooksById } from "../helper.js"

const router = express.Router()

router.get('/', async (req, res) => {
    const result = await getAllBooks()
    res.send(result)
})

//get book by ID

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const result = await getBookById(id)
    result ? res.send(result) : res.status(400).send({ message: "No Books found" })
})

//delete books by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const result = await deleteBookById(id)
    res.send(result)
})

//add books
router.post('/', async (req, res) => {
    const newBook = req.body
    console.log(newBook)
    const result = await addBooks(newBook)
    res.send(result)
})

//update books
router.put('/:id', async (req, res) => {
    const { id } = req.params
    const updatedBook = req.body
    console.log(updatedBook)
    const result = await updateBooksById(id, updatedBook)
    res.send(result)
})


export const booksRouter = router