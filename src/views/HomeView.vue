<template>
  <div class="home">
    <div style="height: 60px;">
       <Header/>
    </div>
   
    <div style="display: flex;">
      <div style="width:190px">
        <Slidebar/>
      </div>
      <div >
        <Mytable/>
      </div>
    </div>
   
    
  </div>
</template>

<script>
import Header from '@/components/Home/Header.vue';
import Slidebar from '@/components/Home/Slidebar.vue';
import Mytable from '@/components/Home/Table.vue';
export default {
  name: 'HomeView',
  components:{
    Header,
    Slidebar,
    Mytable
  }
}
</script>
