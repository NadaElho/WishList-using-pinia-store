import {defineStore} from 'pinia'

export let useBooksStore = defineStore('booksStore',{
    actions:{
        async fetchBooks() {
            let res = await fetch("http://localhost:3000/books")
            let books = await res.json()
            return books
        },
    }
})