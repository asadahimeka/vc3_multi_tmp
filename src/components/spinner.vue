<template>
  <div id="spinner-center">
    <div id="spinner-center-absolute">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
      <p v-if="text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
  props: {
    text: String
  }
}
</script>

<style scoped>
#spinner-center {
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

#spinner-center-absolute {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
}

#spinner-center p {
  font-size: 20px;
  text-align: center;
  color: #fff;
}

.spinner {
  width: 60px;
  height: 60px;
  position: relative;
  margin: auto;
}

.double-bounce1,
.double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-animation: bounce 2s infinite ease-in-out;
  animation: bounce 2s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@-webkit-keyframes bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>
