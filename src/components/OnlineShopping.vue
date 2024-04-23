<template>
    <div
        class="row justify-content-center gap-2 align-items-baseline"
    >
        <div
          class="card"
          style="width: 18rem"
          v-for="book in books"
          :key="book.id"
        >
          <img :src="book.image" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{book.name}}</h5>
            <div class="row justify-content-between mt-2 align-items-center">
              <div class="col"><span>{{book.category}}</span></div>
              <div class="col"><span :class="[book.numberOfPages < 50 ? 'less' : 'more']">{{book.numberOfPages}} pages</span></div>
            </div>
            <div class="row justify-content-between align-items-center mt-2">
              <span class="col">By {{book.author}}</span>
              <span class="col">{{wishListStore.formatCurrency(book.price)}}</span>
            </div>
            <div class="my-2">ISBN: {{book.ISBN}}</div>
            <button
              class="btn btn-primary"
              @click="wishListStore.addtowishlist(book)"
              :disabled="book.inwishlist"
            >
              Add to wishlist
            </button>
          </div>
    </div>
    </div>
</template>
<script>
    import {useWislistStore} from '../stores/wishListStore.js'
    export default {
        async created(){
            this.books = await this.wishListStore.fetchBooks()
            console.log(this.book);
        },
        data:()=>({
            books: [],
            wishListStore: useWislistStore(),
        }),
        
    }
</script>
<style>
    
</style>