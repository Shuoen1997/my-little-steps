<!--https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea-->
<template>
  <div id="main-div">

    <form @submit.prevent="userSubmitEntry(userTitle, userDesc)">
      <label for="titleId">
      </label><br>
      <textarea v-model="userTitle" name="dreamTitle" id="titleId" cols="60" rows="1" placeholder="Title"></textarea>
      <label for="descId">
      </label><br><textarea v-model="userDesc" name="dreamDesc" id="descId" cols="60" rows="15"
                            placeholder="Write your journal...">
    </textarea><br>
      <button type="submit" id="buttonId">ADD</button>

    </form>

  </div>

</template>

<script>
export default {
  name: 'JournalEntry',
  data() {
    return { userTitle: '', userDesc: '' }
  },
  methods: {
    userSubmitEntry(title, desc) {
      this.$emit('addEntry', title, desc)
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea {
  border: 2px solid #02C3BD;
  border-radius: 5px;
  padding: 20px;
  font-size: 20px;
  color: #E0E0E0;
  resize: none;
  outline: none;
  font-family: 'Rubik', sans-serif;
  background-color: #04052E;
}

textarea::placeholder {
  color: #02C3BD;
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
