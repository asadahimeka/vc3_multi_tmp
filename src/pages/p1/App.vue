<template>
  <div id="app">
    <el-container>
      <el-header>
        <p style="line-height:60px;">Header</p>
      </el-header>
      <el-main>
        <p v-for="i in 10" :key="i" style="">Main</p>

      </el-main>
      <el-footer>
        <p style="line-height:60px;">Footer</p>

      </el-footer>
    </el-container>
  </div>
</template>

<script>
import '@a/css/p1.css'
export default {
  name: 'App',
  data() {
    return {

    }
  }
}
</script>

<style lang="less">
</style>
