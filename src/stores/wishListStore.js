import {defineStore} from 'pinia'
export let useWislistStore = defineStore('wishListStore',{

    state:()=>({
        wishlist: [],
        books: []
    }),
    actions:{
        async fetchBooks() {
            let res = await fetch("http://localhost:3000/books")
            let books = await res.json()
            this.books = books
            return books
        },
        formatCurrency(price) {
            return Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDidits: 2,
            }).format(price);
          },
          removefromwishlist(book) {
            let bookIndexinBooks = this.books.findIndex(
              (ibook) => ibook.id == book.id
            );
            this.books[bookIndexinBooks].inwishlist = false;
            let bookIndex = this.wishlist.findIndex(
              (ibook) => ibook.id == book.id
            );
            this.wishlist.splice(bookIndex, 1);
          },
        addtowishlist(book) {
            let bookIndex = this.books.findIndex((ibook) => ibook.id == book.id);
            console.log(bookIndex);
            this.books[bookIndex].inwishlist = true;
            this.wishlist.push(book);
            console.log(this.wishlist);
          },
    }
})