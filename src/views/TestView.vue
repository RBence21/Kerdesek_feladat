<template>
  <Questions v-for="post in posts" v-if="!isResultReady" :questionNumber="post.id" :question="post.question"
   :answer1="post.answer1" :answer2="post.answer2" :answer3="post.answer3" :answer4="post.answer4"
   :url="post.url"
   :rightAnswer="post.rightAnswer"
   @clicked="onClickChild" />
   <Result v-if="isResultReady" :points="this.point" />
</template>

<script>
import Questions from '../components/Question.vue'
import Result from '../components/Result.vue'

export default {
  data()
  {
    return {
      numberOfAnsweredQuestions: 0,
      point: 0,
      isResultReady: false,
      posts:[
        { 
          id: 1, question: "MÁRIA APJÁNAK 5 LÁNYA VAN: ANNA, KATI, KLÁRI ÉS RÓZA. HOGY HÍVJÁK AZ ÖTÖDIK LÁNYT?", 
          answer1: "Péter", answer2: "Éva", answer3: "Mária", answer4: "Róza", 
          url: "src\\components\\images\\girl.png",
          rightAnswer: 3
        },
        {
          id: 2, question: "EGY VILLANYMOZDONY NYUGAT FELÉ HALAD, ÉS ÉSZAKRÓL FÚJ A SZÉL. MERRE SZÁLL A FÜST?",
          answer1: "Nyugat", answer2: "Kelet", answer3: "Észak", answer4: "Semerre", 
          url: "src\\components\\images\\train.png",
          rightAnswer: 4
        },
        { 
          id: 3, question: "HA EGY KÍGYÓNAK KÉT VÉGE VAN, FÉL KÍGYÓNAK HÁNY VÉGE VAN?",
          answer1: "2", answer2: "1", answer3: "3", answer4: "4",
          url: "src\\components\\images\\snake.png",
          rightAnswer: 2
        },
        {
          id: 4, question: "HA FELCSERÉLNÉM A TESTVÉREM JELENLEGI ÉLETKORÁNAK SZÁMJEGYEIT, AKKOR AZ EGY ÉVVEL IDŐSEBB KORÁNAK KÉTSZERESÉT KAPNÁM. HÁNY ÉVES MOST?",
          answer1: "32", answer2: "25", answer3: "42", answer4: "17",
          url: "src\\components\\images\\sibling.png",
          rightAnswer: 2
        },
        { 
          id: 5, question: "NÉMETORSZÁG ÉS LENGYELORSZÁG KÖZÖTT FÉLÚTON LEZUHANT EGY REPÜLŐ. HOVA TEMETIK A TÚLÉLŐKET?",
          answer1: "Sehova", answer2: "Németországba", answer3: "Lengyelországba", answer4: "Máshova",
          url: "src\\components\\images\\plane.png",
          rightAnswer: 1
        }
      ]
    }
  },
  components: { 
    Questions,
    Result
  },
  methods: {
    onClickChild (value, isAnswerRight) {
      this.numberOfAnsweredQuestions = this.numberOfAnsweredQuestions + value;
      if(isAnswerRight){
        this.point++;
      }
      if(this.numberOfAnsweredQuestions == 5){
        this.isResultReady = true;
      }
    }
  }
}
</script>
  
<style>

</style>