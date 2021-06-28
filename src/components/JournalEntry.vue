<!--https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea-->
<template>
  <div class="container">
    <div id="title-text-area">
      <Editor v-model="userTitle"/>
    </div>
    <div id="desc-text-area">
      <Editor v-model="userDesc"/>
    </div>
    <button @click="userSubmitEntry()" id="buttonId">ADD</button>



    <!--    <form @submit.prevent="userSubmitEntry(userTitle, userDesc)">-->
    <!--      <label for="titleId">-->
    <!--      </label><br>-->
    <!--      <textarea v-model="userTitle" name="dreamTitle" id="titleId" cols="60" rows="1" placeholder="Title"></textarea>-->
    <!--      <label for="descId">-->
    <!--      </label><br><textarea v-model="userDesc" name="dreamDesc" id="descId" cols="60" rows="15"-->
    <!--                            placeholder="Write your journal...">-->
    <!--    </textarea><br>-->
    <!--      <button type="submit" id="buttonId">ADD</button>-->

    <!--    </form>-->

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
      this.$emit('addEntry', this.stripHTMLContent(this.userTitle), this.stripHTMLContent(this.userDesc))
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
  color: #E0E0E0;
  font-family: 'Rubik', sans-serif;
  background-color: #04052E;
  margin: 30px;
  height: auto;
  resize: vertical;
}

#desc-text-area {
  padding: 20px;
  text-align: left;
  border: 2px solid #02C3BD;
  font-size: 24px;
  min-height: 500px;
  max-width: 100%;
  border-radius: 5px;
  margin: 30px;
  resize: vertical;
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
