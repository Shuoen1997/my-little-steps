<!--https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea-->
<template>
  <v-container>
    <v-col>
      <v-row no-gutters justify="space-between">
        <v-col cols="4">
          <div id="new-step-z-text" elevation="2">
            <h4>NEW STEP Z</h4>
          </div>
        </v-col>
        <v-col cols="2">
          <v-switch
              v-model="switchIsPublic"
              inset
              color="orange darken-3"
              :label="`${switchIsPublic ? 'PUBLIC' : 'PRIVATE'}`"
          ></v-switch>
        </v-col>

      </v-row>

      <v-sheet height="80" elevation="5" rounded>
        <div id="title-text-area">
          <Editor id="editor-title" v-model="userTitle" data-placeholder="Title"/>
        </div>
      </v-sheet>
      <v-divider></v-divider>
      <v-sheet min-height="500" elevation="5">
        <div id="desc-text-area">
          <Editor id="editor-desc" v-model="userDesc" data-placeholder="Write something..."/>
        </div>
      </v-sheet>
      <v-divider></v-divider>
      <v-btn elevation="2" color="green" block outlined @click="userSubmitEntry()" :disabled="isContentEmpty()" id="button-save-main-step">ADD
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
    return {userTitle: '', userDesc: '', switchIsPublic: true}
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
  color: dimgrey;
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
  color: dimgrey;
}

#desc-text-area {
  padding: 12px;
  text-align: left;
  font-size: 24px;
  min-height: 500px;
  max-width: 100%;
  resize: vertical;
  color: dimgrey;
  font-weight: bold;
}


</style>
