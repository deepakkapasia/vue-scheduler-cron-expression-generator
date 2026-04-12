
<template>
  <div class="main_container">
    <DescriptionComponent></DescriptionComponent>
    <CalenderComponent></CalenderComponent>
  </div>
</template>
<script>
  import DescriptionComponent from "./DescriptionComponent.vue";
  import CalenderComponent from "./CalenderComponent.vue";
  export default {
    name: 'Dashboard',
    components: {DescriptionComponent, CalenderComponent},
    data : () => {
      return {
      }
    }
  }
  </script>

<style lang="scss">

.main_container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

@media (min-width: 1024px) {

}
</style>
