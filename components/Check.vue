<template>
  <div>
    <p>{{ this.modul }}</p>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data(){
    return{
        
    }
  },
  props: ['modul'],
  created() {
    console.log(this.loading)
  },
  computed: {
    ...mapGetters(() => {
        loading: 'currency/loading'
    })
  }
    

}
</script>

<style>

</style>
