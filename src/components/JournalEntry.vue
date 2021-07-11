<!--https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea-->
<template>
  <v-container>
    <v-col>
      <v-row no-gutters justify="space-between">
        <v-col cols="4">
          <div id="new-step-z-text">
            <h4>#NewStepZ!</h4>
          </div>
        </v-col>
        <v-col cols="2">
          <v-switch
              v-model="switchIsPublic"
              inset
              color="accent"
              :label="`${switchIsPublic ? 'PUBLIC' : 'PRIVATE'}`"
          ></v-switch>
        </v-col>

      </v-row>

<!--      <v-sheet height="80" elevation="5" rounded>-->
        <div id="title-text-area">
          <Editor id="editor-title" v-model="userTitle" :placeholder-value="placeHolderValue.title"/>
        </div>
<!--      </v-sheet>-->
      <v-divider></v-divider>
<!--      <v-sheet min-height="500" elevation="5">-->
        <div id="desc-text-area">
          <Editor id="editor-desc" v-model="userDesc" :placeholder-value="placeHolderValue.content"/>
        </div>
<!--      </v-sheet>-->
      <v-divider></v-divider>
      <v-btn color="primary" block outlined @click="userSubmitEntry()" :disabled="isContentEmpty()" id="button-save-main-step">ADD
      </v-btn>
    </v-col>


  </v-container>

</template>

<script>
import Editor from "@/components/Editor.vue"

export default {
  name: 'JournalEntry',
  components: {Editor},
  data() {
    return {
      userTitle: '',
      userDesc: '',
      switchIsPublic: true,
      placeHolderValue: {
        title: 'Title your new step Z',
        content: '...and write something about it :)'
      }}
  },
  methods: {
    stripHTMLContent(theString) {
      // let firstHalf = theString.replaceAll('<p>', '')
      // return firstHalf.replaceAll('</p>', '')
      return theString
    },
    userSubmitEntry() {
      const title = this.stripHTMLContent(this.userTitle)
      const description = this.stripHTMLContent(this.userDesc)

      this.$emit('addEntry', title, description, this.switchIsPublic)
    },
    isContentEmpty(){
      if (this.userTitle === '' || this.userDesc === '') {
        console.log('Cannot be empty')
        return true
      }
      return false

    }
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#new-step-z-text {
  color: #4DB6AC;
  font-size: 8px;
  margin-top: 16px;
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
  font-size: 24px;
  min-height: 500px;
  max-width: 100%;
  resize: vertical;
}


</style>
