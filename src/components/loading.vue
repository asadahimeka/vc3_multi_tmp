<template>
  <div id="loading-center">
    <div id="loading-center-absolute">
      <div id="object_one" class="object"></div>
      <div id="object_two" class="object"></div>
      <div id="object_three" class="object"></div>
      <p v-if="text"><br>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    text: String
  }
}
</script>

<style scoped>
#loading-center {
  position: absolute;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

#loading-center p {
  width: 120px;
  margin: 100px 0;
  font-size: 20px;
  text-align: center;
  color: #fff;
}

/*
#loading {
  background-color: #4a4a4a;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 99999;
  margin-top: 0px;
  top: 0px;
}

#loading-center {
  width: 100%;
  height: 100%;
  position: relative;
}

#loading-center-absolute {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 150px;
  width: 150px;
  margin-top: -75px;
  margin-left: -50px;
}

.object {
  width: 20px;
  height: 20px;
  background-color: #F2E9FC;
  float: left;
  margin-right: 20px;
  margin-top: 65px;
  -moz-border-radius: 50% 50% 50% 50%;
  -webkit-border-radius: 50% 50% 50% 50%;
  border-radius: 50% 50% 50% 50%;
}

#object_one {
  -webkit-animation: object_one 1.5s infinite;
  animation: object_one 1.5s infinite;
}

#object_two {
  -webkit-animation: object_two 1.5s infinite;
  animation: object_two 1.5s infinite;
  -webkit-animation-delay: 0.25s;
  animation-delay: 0.25s;
}

#object_three {
  -webkit-animation: object_three 1.5s infinite;
  animation: object_three 1.5s infinite;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}

@-webkit-keyframes object_one {
  75% {
    -webkit-transform: scale(0);
  }
}

@keyframes object_one {
  75% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
}

@-webkit-keyframes object_two {
  75% {
    -webkit-transform: scale(0);
  }
}

@keyframes object_two {
  75% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
}

@-webkit-keyframes object_three {
  75% {
    -webkit-transform: scale(0);
  }
}

@keyframes object_three {
  75% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
}
*/
</style>
