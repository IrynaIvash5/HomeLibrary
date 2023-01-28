<template>
<div class="hello">
    <header class="header">
        <div @click="$router.push('/')" class="logo">BooksRead</div>
        <input class="input" type="text" placeholder="look for a book..." autofocus>
        <a href="#popap" class="btn-login">
            <img class="login-img" src="@/assets/img/login.png" alt="">
        </a>
    </header>
    <div id="popap" class="popap">
        <a href="#" class="area-popap"></a>

        <div class="block-registration">
            <div v-if="showLogin" class="name-proces">
                <p @click="showBlockLogin" class="registration">Вхід</p>
                <a @click="showBlockLogin" class="exit">Реєстрація</a>
                <a href="#" class="close">X</a>
            </div>
            <div v-else class="name-proces">
                <p class="registration">Реєстрація</p>
                <a @click="showBlockLogin" class="exit">Вхід</a>
                <a href="#" class="close">X</a>
            </div>
            <div v-if="this.showLogin" class="enter-information">
                <input type="text" v-model="login" placeholder="Enter login">
                <!-- <input type="text" placeholder="Enter email"> -->
                <input type="password" v-model="passwordLogin" placeholder="Enter password">
                <div class="checkbox"><input type="checkbox"><p>Забули пароль?</p></div>  
                <button @click="login()" class="btn-registr">Увійти</button>
            </div>

            <div v-else class="enter-information">
                <input type="text" v-model="username" placeholder="Enter login">
                <input type="text" v-model="Email" :class="{invalide: ($v.email.$dirty && $v.email.requared)}" placeholder="Enter email">
                <input type="password" v-model="password" placeholder="Enter password">
                <input type="password" v-model="password1" placeholder="Repeat password">
                <button @click="registration()" class="btn-registr">Зареєструватися</button>
            </div>
        </div>

    </div>

</div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
// import { required, Email, minLength } from '@vuelidate/validators'
// import {Email,  required, minLength} from 'vuelidate/lib/validators'
import { required, minLength, email } from '@vuelidate/validators'

export default {
    name: 'Header-Header',
    data() {
        return {
            showLogin: true,
            username: '',
            password: '',
            password1: '',
            Email: ''
        }
    },
    setup () {
        return { v$: useVuelidate() }
    },
    // const rules = {
    //         username: {required},
    //         password: {required},
    //         Email: { required}
    // },
    validations() {
        return{
            username: {required},
            password: {required, minLength: minLength(6)},
            email: {email, required}
        }
    },
    methods: {
        showBlockLogin() {
            this.showLogin = !this.showLogin
        },
        async registration() {
            // this.v$.username.$touch()
            if(this.$v.$invalide){
                this.$v.$touch()
                return
            }
            const body = {
                username: this.username,
                Email: this.Email,
                password: this.password,
                password1: this.password1
            }
            console.log(body)

            const goRegistration = await fetch('https://2622-217-196-161-176.eu.ngrok.io/auth/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            const data = await goRegistration.json()
            console.log(data)
        }
    }
}
</script>

<style lang="scss" scoped>
%flex {
    display: flex;
    justify-content: center;
}
%size{
    width: 100%;
    height: 100%;
}
.hello {
    @extend %flex
}

.header {
    width: 100%;
    height: 70px;
    background-color: rgb(255, 208, 0);
    display: flex;
    align-items: center;
    justify-content: space-around;

    .logo {
        font-size: 32px;
        font-family: Brush Script MT, Brush Script Std, cursive;
        font-weight: bold;
        cursor: pointer;
        color: white;

        &:hover {
            text-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }
    }

    .login-img {
        width: 50px;
        height: 50px;
        cursor: pointer;
    }

    .input {
        width: 28%;
        height: 40px;
        border: none;
        border-radius: 5px;
        background: url(@/assets/img/search.png) no-repeat 96% 11px;
        background-color: whitesmoke;
        background-size: 5%;
        cursor: text;
        border-bottom: 1px solid #e0e0e0;
        outline: none;
        transition: 0.3s;

        &:focus {
            border-bottom: 1px solid #c59805;
            background-color: rgb(236, 232, 232);

            &::placeholder {
                font-size: 14px;

                &:hover {
                    background-color: rgb(236, 232, 232);
                }
            }
        }
    }

    .btn-login {
        border: none;
        border-radius: 20px;
        background-color: rgb(255, 208, 0);

        &:hover {
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }
    }

    .input[type=text] {
        padding-left: 10px;
        font-family: cursive;
    }
}

.popap {
    position: fixed;
    @extend %size;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    @extend %flex;
    transition: all 0.8s ease 0s;

    &:target {
        opacity: 1;
        visibility: visible;

        &:target .block-registration {
            transform: perspective(600px) translate(0px, 0%) rotateX(0deg);
            opacity: 1;
        }
    }

    .area-popap {
        position: absolute;
        @extend %size;
        top: 0;
        left: 0;
    }
}

.block-registration {
    width: 350px;
    height: 400px;
    margin-top: 7%;
    background-color: beige;
    position: relative;
    z-index: 1;
    transition: all 0.8s ease 0s;
    opacity: 0;
    transform: perspective(600px) translate(0px, -100%) rotateX(23deg);

    .name-proces {
        display: flex;
        font-family: cursive;
        cursor: pointer;
        padding: 25px;

        .exit {
            color: rgb(255, 208, 0);
            margin: 7px 0 0 10px;
        }

        .registration {
            font-size: 24px;
        }

        .close {
            font-size: 22px;
            margin-left: 280px;
            position: absolute;
            text-decoration: none;
            color: black;

            &:hover {
                text-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
            }
        }
    }

    .enter-information {
        display: flex;
        flex-direction: column;
        padding: 15px;
       
        input {
            padding: 10px;
            margin: 10px;
            border: 1px solid #dedede;
        
            &::placeholder {
                font-family: cursive;
                color: rgb(184, 185, 185);
            }
    
            &:focus {
                outline: none;
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            }
            
        }
        
        .btn-registr {
            height: 40px;
            background-color: rgb(255, 208, 0);
            font-family: cursive;
            font-size: 18px;
            border: none;
            width: 300px;
            margin-left: 10px;
            cursor: pointer;
            margin-top: 20px;

            &:hover {
                background-color: rgb(178, 230, 36);
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            }
        }
        
    }
    .checkbox{
        display: flex;
    p{
        margin-top: 6px;
        font-family: cursive;
            font-size: 14px;
        }
    }
    
}
</style>