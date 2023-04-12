<template>
<div>
  <el-button @click="fetchUsers">get</el-button>
  <el-input v-model="input" placeholder="Please input" clearable />
<hr>
<el-card class="box-card">
    <div v-for="user in getUsers" :key="user.id" class="text item"> ID:{{ user.id }} : {{ user.username }} - {{ user.name }}</div>
  </el-card>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default{
  props: {
    myProp: {
      type: String,
      required: true,
      default: 'Test'
    }
  },
  data(){
    return{
      input:''
    }
  },
  computed: mapGetters(['getUsers']),
  methods: mapActions(['fetchUsers']),
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
</style>