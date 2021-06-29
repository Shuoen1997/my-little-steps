<!--https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea-->
<template>
  <div class="container">
    <div class="row" id="index-and-date">
      <div class="col" id="index-text">
        {{ formatEntryIndex(entry.indexId) }}
      </div>
      <div class="col" id="date-text">
        {{ entry.updatedDate }}
      </div>
    </div>

    <div id="title-text-area">
      <ReadOnlyEditor :value="entry.title"></ReadOnlyEditor>
    </div>
    <hr>
    <div id="desc-text-area">
      <ReadOnlyEditor :value="entry.description"></ReadOnlyEditor>
    </div>


  </div>

</template>

<script>
import ReadOnlyEditor from "@/components/ReadOnlyEditor.vue"
export default {
  name: 'JournalEntry',
  components: {ReadOnlyEditor},
  props: {
    entry: Object
  },
  methods: {
    formatEntryIndex(theIndex) {
      return '#00' + (++theIndex).toString()
    },
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#index-and-date {
  padding: 10px;
  font-weight: bold;
}

#date-text {
  font-size: 16px;
  text-align: right;
  color: yellow;
}

#index-text {
  font-size: 24px;
  text-align: start;
}

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
  margin-top: -10px;
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
