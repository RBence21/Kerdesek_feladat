<template>
  <div class="header">
    <h4 class="text-danger">KÉRDÉSEK</h4>
    <img class="image" src="src\components\images\QImage.png">
  </div>
</template>

<style>
  .header{
      position: sticky;
      background: #171b1f;
      padding: 0.3%;
      top: 0%;
      z-index: 1;
  }
  h4{
    position: absolute;
    margin-left: 35px;
    top: 50%;
    transform: translate(0,-50%);
  }
  .image{
    width: 30px;
    height: 30px;
  }
</style>