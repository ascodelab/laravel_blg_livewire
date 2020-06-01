<template>
  <section class="hero-banner hero-banner--sm mb-30px">
    <div class="container">
      <div class="hero-banner--sm__content">
        <h1>{{ pagetitle}}</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
      name: "PageHeader",
      data() {
        return {
                 pagetitle:this.$store.state.pageTitle
               }
        },
      computed(){},
      mounted() {},
};
</script>
