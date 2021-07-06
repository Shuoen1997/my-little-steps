<!--https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea-->
<template>
  <v-container>
    <v-col>
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
      <v-btn elevation="2" color="green" block outlined @click="userSubmitEntry()" id="button-save-main-step">ADD</v-btn>
    </v-col>


  </v-container>

</template>

<script>
import Editor from "@/components/Editor.vue"

export default {
  name: 'JournalEntry',
  components: {Editor},
  data() {
    return {userTitle: '', userDesc: ''}
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
      if (title === '' || description === '') {
        console.log('Cannot be empty')
        return
      }
      this.$emit('addEntry', title, description)
    }
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


#title-text-area {
  text-align: left;
  padding: 12px;
  font-size: 36px;
  /*font-family: 'Rubik', sans-serif;*/
  font-weight: bold;
  height: auto;
  resize: vertical;
  color: #FF96AD;
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
