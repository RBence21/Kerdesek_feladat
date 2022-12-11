<template>
    <div class="ghostLine"></div>
    <div class="row justify-content-center text-white">
        <div class="box col-lg-6 col-md-8 col-sm-10 col-xs-12">
            <h5 class="text-center">Adatok megadása</h5>
            <p class="note text-center">A teszt kitöltéséhez néhány adat megadása kötelező! Az adatok megadása azt a célt szolgálja, hogy senki ne tudja többször kitölteni a tesztet. Emiatt hitelesebb képet kapunk arról, hogy az emberek hány százalékának sikerült jól vagy rosszul a teszt.</p>
            <label class="labelField">Név:</label><label class="text-danger labelField" v-if="nameError">{{nameErrorText}}</label><br>
            <input class="inputField" type="text" v-model="name" placeholder="Csere Bogár" required><br>
            <label class="labelField">Telefonszám:</label><label class="text-danger labelField" v-if="phoneError">{{phoneErrorText}}</label><br>
            <input class="inputField" type="text" v-model="phoneNumber" placeholder="06301234567" required><br>
            <label class="labelField">E-mail cím:</label><label class="text-danger labelField" v-if="emailError">{{emailErrorText}}</label><br>
            <input class="inputField" type="email" v-model="emailAddress" placeholder="katica@gmail.com" required><br>
            <input class="acceptBox" type="checkbox" v-model="isAccepted">
            <label class="tacLabel">Elfogadom az ÁSZF-t</label><br>
            <button class="startButton btn btn-outline-danger" @click="Submit(); Navigate();" role="link" :disabled="!isAccepted">Teszt kitöltése!</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
    return {
        errors: [],
        name: null,
        phoneNumber: null,
        emailAddress: null,
        
        nameError: false,
        phoneError: false,
        emailError: false,

        nameErrorText: "",
        phoneErrorText: "",
        emailErrorText: "",

        isAccepted: false
        }
    },
    methods: {
        Submit() {
            if(!this.name){ this.nameError = true; this.nameErrorText = "* A mező kitöltése kötelező!" } 
                else if (!this.ValidName(this.name)){ this.nameError = true; this.nameErrorText="* A megadott név nem megfelelő!" } 
                    else{ this.nameError = false }
            if(!this.phoneNumber){ this.phoneError = true; this.phoneErrorText = "* A mező kitöltése kötelező!" } 
                else if (!this.ValidPhone(this.phoneNumber)){ this.phoneError = true; this.phoneErrorText="* A megadott telefonszám nem megfelelő!" } 
                    else{ this.phoneError = false }
            if(!this.emailAddress){ this.emailError = true; this.emailErrorText = "* A mező kitöltése kötelező!" } 
                else if (!this.ValidEmail(this.emailAddress)){ this.emailError = true; this.emailErrorText="* A megadott e-mail cím nem megfelelő!" } 
                    else{ this.emailError = false }
        },
        ValidName(name){
            var regex = /[A-ZÁÉ][a-záé]+( [A-ZÁÉ][a-záé]+)+/;
            return regex.test(name);
        },
        ValidPhone(number){
            var regex = /((?:\+?3|0)6)(?:-|\()?(\d{1,2})(?:-|\))?(\d{3})-?(\d{3,4})/;
            return regex.test(number);
        },
        ValidEmail: function (email) {
            var regex = /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])/;
            return regex.test(email);
        },
        Navigate(){
            if(!this.nameError && !this.phoneError && !this.emailError){
                this.$router.push({name: "test"})
            }
        }    
    }
}
</script>

<style>
    .box{
        position: relative;
        border: 1px solid #df4759;
    }
    .ghostLine{
        position: relative;
        margin-bottom: 10%;
    }
    h5{
        position: absolute;
        top: 2%;
    }
    .note{
        position: relative;
        font-size: 12px;
        margin-top: 5%;
    }
    .labelField{
        position: relative;
        left: 5%;
        margin-top: 3%;
        font-size: 12px;
    }
    .inputField{
        position: relative;
        left: 5%;
        width: 40%;
    }
    .acceptBox{
        position: relative;
        top: 2%;
        left: 5%;
    }
    .tacLabel{
        position: relative;
        top: 2%;
        left: 6%;
        font-size: 10px;
        transform: translate(0,-20%);
    }
    .startButton{
        position: relative;
        width: 40%;
        border-radius: 0px;
        margin-top: 5%;
        margin-bottom: 1.5%;
        left: 50%;
        transform: translate(-50%);
    }
</style>