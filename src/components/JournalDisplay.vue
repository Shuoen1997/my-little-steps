<!--https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea-->
<template>
  <div class="container">
    <div id="title-text-area" v-if="entry !== undefined">
      {{ entry.title }}
    </div>
    <hr>
    <div id="desc-text-area" v-if="entry !== undefined">
      {{ entry.description }}
    </div>


  </div>

</template>

<script>

export default {
  name: 'JournalEntry',
  props: {
    entry: Object
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


#title-text-area {
  /*border: 2px solid #02C3BD;*/
  text-align: left;
  /*border-radius: 5px;*/
  padding: 10px;
  font-size: 36px;
  color: #02C3BD;
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  background-color: #04052E;
  margin-top: 30px;
  margin-bottom: -20px;
  height: auto;
  resize: vertical;
}

#desc-text-area {
  padding: 10px;
  text-align: left;
  /*border: 2px solid #02C3BD;*/
  font-size: 24px;
  min-height: 500px;
  max-width: 100%;
  /*border-radius: 5px;*/
  resize: vertical;
  color: #E0E0E0;
}

</style>
