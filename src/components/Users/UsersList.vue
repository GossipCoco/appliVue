<template>
  <div class="user-list">
    <ul>
      <li v-for="(usersList, id) in users" :key="id">
        {{ usersList.name }}
      </li>
    </ul>
  </div>
</template>
<script>
import users from "../datas/usersDatas.json";
export default {
  name: "UsersList",
  data (){
    return{
      users
    }  
  },
  mounted () {
    axios
      .get('../datas/usersDatas.json')
      .then(response => (this.usersList = response))
  },
};
</script>
