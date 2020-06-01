<template>
  <div v-html="getArticleData.post_content">
  </div>
</template>

<script>
export default {
  data() {
    return {
        
    }
  },
  mounted() {

        this.$store.dispatch("fetchArticleData")
      
      },
      computed: {
        getArticleData(){ //final output from here

            return this.$store.getters.getArticleData
        }
      },
}
</script>