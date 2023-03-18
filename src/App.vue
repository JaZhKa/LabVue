<template>
  <div class="common-layout">
   <el-container>
     <el-header>
       <h1>Header</h1>
     </el-header>
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
import { defineAsyncComponent } from 'vue'
const FormComp = defineAsyncComponent(() => import('./components/Form-auth.vue'))
</script>

<style>
#app {
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 margin-top: 60px;
}

.el-header,
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