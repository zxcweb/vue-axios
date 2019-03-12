<template>
  <div class="hello">
    <el-button type="primary" @click="handleGetData">点击我请求数据</el-button>
    <h1>我是请求的信息：{{ msg }}</h1>
    
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'HelloWorld',
  computed:{
    ...mapState({
      msg:'msg'
    })
  },
  methods:{
    handleGetData(){
      this.$store.dispatch("getMsg",{id:'test'})
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
