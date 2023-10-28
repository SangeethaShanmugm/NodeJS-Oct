import { client } from "./app.js";

export function getAllBooks() {
    return client.db("node_Oct_mongo").collection("books").find().toArray();
}
export function getBookById(id) {
    return client.db("node_Oct_mongo").collection("books").findOne({ id: id });
}
export function deleteBookById(id) {
    return client.db("node_Oct_mongo").collection("books").deleteOne({ id: id });
}
export function addBooks(newBook) {
    return client.db("node_Oct_mongo").collection("books").insertMany(newBook);
}
export function updateBooksById(id, updatedBook) {
    return client.db("node_Oct_mongo").collection("books").updateOne({ id: id }, { $set: updatedBook });
}
