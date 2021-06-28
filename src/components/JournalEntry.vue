<!--https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea-->
<template>
  <div class="container">
    <div id="title-text-area">
      <Editor v-model="userTitle"/>
    </div>
    <hr>
    <div id="desc-text-area">
      <Editor v-model="userDesc"/>
    </div>
    <button @click="userSubmitEntry()" id="buttonId">ADD</button>

  </div>

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
    stripHTMLContent(theString){
      let firstHalf = theString.replaceAll('<p>', '')
      return firstHalf.replaceAll('</p>', '')
    },
    userSubmitEntry() {
      const title = this.stripHTMLContent(this.userTitle)
      const description = this.stripHTMLContent(this.userDesc)
      if (title === '' || description === ''){
        console.log('Cannot be empty')
        return
      }
      this.$emit('addEntry', title, description )
    }
  },


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




#buttonId {
  border-radius: 5em;
  border-color: #FF96AD;
  background-color: #04052E;
  color: #FF96AD;
  padding: 10px 30px;
  margin: 30px;
  font-weight: bold;
}


</style>
