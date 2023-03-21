<template>
  <div class="common-layout">
   <el-container>
    <HeaderComp></HeaderComp>
     <el-container>
       <el-aside width="200px">
         <el-row class="mb-4">
           <el-button>Default</el-button>
           <el-button type="primary">Primary</el-button>
           <el-button type="success">Success</el-button>
           <el-button type="info">Info</el-button>
           <el-button type="warning">Warning</el-button>
           <el-button type="danger">Danger</el-button>
         </el-row>
       </el-aside>
       <el-container>
         <el-main> 
           <FormComp></FormComp>
         </el-main>
         <el-footer>Footer</el-footer>
       </el-container>
     </el-container>
   </el-container>
 </div>
</template>

<script lang="ts" setup>
// import HeaderComp from './components/Layout-container-header.vue'
import { defineAsyncComponent } from 'vue'
const FormComp = defineAsyncComponent(() => import('./components/Form-auth.vue'))
// const HeaderComp = defineAsyncComponent(() => import('./components/Layout-container-header.vue'))

</script>

  <!-- <script>
  import HeaderComp from './components/Layout-container-header.vue'
  export default {
    components: {
      HeaderComp
    }
  }
  </script> -->

<style>
#app {
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 margin-top: 60px;
}

.el-footer {
 background-color: #3375b9;
}

.el-aside {
 background-color: #66b1ff;
}

.el-row {
 display: flex;
 flex-wrap: nowrap;
 flex-direction: column;
}

.el-button {
 margin: 5px;
}
</style>