<template>
  <v-container>
    <v-col>
      <v-row id="index-and-date" justify="space-between">
        <v-col cols="11">

          {{ formatEntryIndex(entry.indexId) }} | {{ entry.updatedDate }} |
          <v-icon v-if="entry.isPublic">mdi-earth</v-icon>
          <v-icon v-if="!entry.isPublic">mdi-lock</v-icon>
        </v-col>


      </v-row>
      <v-row>
        <div id="title-text-area">
          <ReadOnlyEditor :value="entry.title" id="readonly-editor-title"></ReadOnlyEditor>
        </div>
      </v-row>

      <v-divider></v-divider>
      <v-row>
        <div id="desc-text-area">
          <ReadOnlyEditor :value="entry.description" id="readonly-editor-desc"></ReadOnlyEditor>
        </div>
      </v-row>

    </v-col>


  </v-container>

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
  font-weight: bold;
  color: grey;
  font-size: 16px;
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
  text-align: left;
  padding: 12px;
  font-size: 36px;
  /*font-family: 'Rubik', sans-serif;*/
  font-weight: bold;
  height: auto;
  resize: vertical;
}

#desc-text-area {
  padding: 12px;
  text-align: left;
  /*border: 2px solid #02C3BD;*/
  font-size: 24px;
  min-height: 500px;
  max-width: 100%;
  /*border-radius: 5px;*/
  resize: vertical;
}

</style>
