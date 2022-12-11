<template>
  <div class="row justify-content-center">
    <div class=" Background col-lg-6 col-md-8 col-sm-10 col-xs-12">
      <label class="text-white qNumber">{{questionNumber}}. feladat</label>
      <div class="qBox">
        <p class="text-white text-center qParagraph">{{question}}</p>
        <img class="questionImage" :src="url" />
        <button class="btn text-white answerButton b1" :class="{ 'btn-outline-danger': !isAnswered }" @click="CheckAnswer(1)" :disabled="isAnswered">{{answer1}}</button>
        <button class="btn text-white answerButton b2" :class="{ 'btn-outline-danger': !isAnswered }" @click="CheckAnswer(2)" :disabled="isAnswered">{{answer2}}</button><br>
        <button class="btn text-white answerButton b3" :class="{ 'btn-outline-danger': !isAnswered }" @click="CheckAnswer(3)"  :disabled="isAnswered">{{answer3}}</button>
        <button class="btn text-white answerButton b4" :class="{ 'btn-outline-danger': !isAnswered }" @click="CheckAnswer(4)" :disabled="isAnswered">{{answer4}}</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        isAnswered: false
      }
    },
    methods:{
      CheckAnswer(choice){
        if(choice == this.rightAnswer){
          this.isAnswered = true;
          this.$emit('clicked', 1, true)
        }
        else{
          this.isAnswered = true;
          this.$emit('clicked', 1, false)
        }
      }
    },
    props:{
      questionNumber: Number,
      question: String,
      answer1: String,
      answer2: String,
      answer3: String,
      answer4: String,
      url: String,
      rightAnswer: Number
    }
  }
</script>

<style>
  .qBackground{
    position: relative;

  }
  .qNumber{
    font-family: monospace;
    margin-top: 1%;
  }
  .qBox{
    position: relative;
    height: 50vh;
    border: 1px solid #df4759;
    margin-bottom: 1%;
  }
  .qParagraph{
    position: relative;
    top: 5%;
  }
  .answerButton{
    margin-bottom: 2%;
    margin-left: 5%;
    width: 42.5%;
  }
  .b1{
    position: absolute;
    bottom: 15%;
  }
  .b2{
    position: absolute;
    bottom: 15%;
    left: 46%;
  }  
  .b3{
    position: absolute;
    bottom: 2%;
  }  
  .b4{
    position: absolute;
    bottom: 2%;
    left: 46%;
  }
  .questionImage{
    position: absolute;
    width: 25%;
    height: 40%;
    top: 25%;
    left: 50%;
    transform: translate(-50%);
  }
</style>