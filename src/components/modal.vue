<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <button class="modal-close" @click="$emit('close')"></button>
          <div class="modal-header">
            <slot name="header"></slot>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal'
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: relative;
  width: 87%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 0.3rem;
  box-shadow: 0 0.02963rem 0.118519rem rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  font-size: 0.9rem;
}

.modal-body {
  max-height: 80vh;
  margin: 20px 0;
  font-size: 0.6rem;
  overflow: auto;
}

.modal-close {
  position: absolute;
  z-index: 9;
  top: 0.7rem;
  right: 0.5rem;
  width: 1rem;
  height: 1rem;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTM0MzAyMzAyNTUzIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjkgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExNTYiIGlkPSJteF9uXzE1MzQzMDIzMDI1NTUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwLjk3NjU2MjUiIGhlaWdodD0iMjAwIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik01MTYuOTE4OTM3IDQ0MC42MDE0NTdMOTAuMTY0NDA5IDE0Ljg1MTA1OGE1MC4yMDY0MTUgNTAuMjA2NDE1IDAgMCAwLTcxLjI5MzEwOSAwSDE0Ljg1NDc4NmE1MC4yMDY0MTUgNTAuMjA2NDE1IDAgMCAwIDAgNzEuMjkzMTA5bDQzMC43NzEwNDIgNDI1Ljc1MDRMMTQuODU0Nzg2IDkzNy42NDQ5NjZhNTAuMjA2NDE1IDUwLjIwNjQxNSAwIDAgMCAwIDcxLjI5MzEwOSA1MC4yMDY0MTUgNTAuMjA2NDE1IDAgMCAwIDcxLjI5MzExIDBMNTE2LjkxODkzNyA1ODMuMTg3Njc2bDQyNS43NTAzOTkgNDI1Ljc1MDM5OWE1MC4yMDY0MTUgNTAuMjA2NDE1IDAgMCAwIDcxLjI5MzExIDAgNTAuMjA2NDE1IDUwLjIwNjQxNSAwIDAgMCAwLTcxLjI5MzEwOUw1ODcuMjA3OTE4IDUxMS44OTQ1NjcgMTAxMi45NTgzMTggODYuMTQ0MTY3YTUwLjIwNjQxNSA1MC4yMDY0MTUgMCAwIDAgMC03MS4yOTMxMDkgNTAuMjA2NDE1IDUwLjIwNjQxNSAwIDAgMC03MS4yOTMxMSAweiIgcC1pZD0iMTE1NyIgZGF0YS1zcG0tYW5jaG9yLWlkPSJhMzEzeC43NzgxMDY5LjAuaTIiIGNsYXNzPSIiPjwvcGF0aD48L3N2Zz4=) center no-repeat;
  background-size: 100% 100%;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: translateY(50%) scale(0);
}

/* .modal-body{
  animation: movedown 1s ease;
}

@keyframes movedown {
  from {
    transform: translateY(-10px);
  }
  to {
    transform: translateY(0);
  }
} */
</style>
