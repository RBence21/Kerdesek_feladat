<template>
   <div class="ghostLine"></div>
    <div class="row justify-content-center text-white">
        <div class="resultBox col-lg-6 col-md-8 col-sm-10">
            <h5 class="text-center display-3">Sikeres teszt kitöltés! &#127881</h5>
            <h5 class="text-center display-5">5/{{points}} pont</h5>
        </div>
    </div>
</template>

<script>
  export default {
    props:{
      points: Number
    }
  }
</script>

<style>
  .resultBox{
    position: absolute;
    top: 30%;
    border: 1px solid #df4759;
  }
  h5{
    position: relative;
  }
</style>