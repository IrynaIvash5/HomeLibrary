<template>
<div>
    <div @click="$router.push('/book')" class="content">
        <div v-for="(book, index) in books" :key="index" class="block-book">
            <h3 class="h3">{{ book.titleBook }}</h3>
            <img src="" alt="">
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Main-Content-Books',
    data() {
        return {
            books: [{
                    titleBook: '1'
                },
                {
                    titleBook: '2'
                },
                {
                    titleBook: '3'
                },
                {
                    titleBook: '4'
                },
                {
                    titleBook: '5'
                },
                {
                    titleBook: '6'
                },
                {
                    titleBook: '7'
                },
                {
                    titleBook: '8'
                },
                {
                    titleBook: '9'
                },
                {
                    titleBook: '10'
                },
                {
                    titleBook: '11'
                },
                {
                    titleBook: '12'
                },
                {
                    titleBook: '13'
                },
                {
                    titleBook: '14'
                },
                {
                    titleBook: '15'
                },
                {
                    titleBook: '16'
                },
                {
                    titleBook: '17'
                },
                {
                    titleBook: '18'
                },
                {
                    titleBook: '19'
                },
                {
                    titleBook: '20'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100%;
    margin: 0;
    padding: 0;
}

.block-book {
    background-color: rgb(37, 37, 39);
    width: 250px;
    height: 300px;
    border: 1px solid yellow;
    border-radius: 10px;
    margin: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    &:hover {
        background-color: rgb(101, 101, 102);
        width: 275px;
        height: 322px;
        border: none;
        margin-top: 10px;
        font-size: 28px;
        color: yellow;
    }

    .h3 {
        color: white;
        font-size: 20px;
        font-family: Brush Script MT, Brush Script Std, cursive;

        &:hover {
            font-size: 28px;
            color: yellow;
        }
    }
}
</style>
