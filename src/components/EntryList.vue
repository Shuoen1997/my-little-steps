<!--https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea-->
<template>
  <div id="entry-list">
    <div id="no-entry-text" v-if="entries.length===0">
      <h3>No entries yet</h3>
    </div>
    <ul>
      <li v-for="entry in entries" :key="entries.indexOf(entry)">
        <div id="entry-item" @click="displayJournalContent(entry)">
          <div class="container">
            <div class="row align-items-start">
              <div class="col-3">
                <p>{{formatEntryIndex(entries.indexOf(entry))}}</p>
              </div>
              <div class="col-8">
                <span style="font-weight: bold; text-align: left">{{ entry.title }}</span> <br>
                <span style="color: #E0E0E0;">{{ truncateDescription(entry.description) }}</span>
              </div>

            </div>
        </div>


        </div>

        <hr>
      </li>
    </ul>
    <button @click="editModeIsOn()" id="buttonId">NEW MAIN STEP</button>
  </div>


</template>

<script>

export default {
  name: 'EntryList',
  updated() {
    console.log("I am updated!")
  },
  props: {
    entries: Array
  },
  computed: {},
  methods: {
    truncateDescription(description) {
      if (description.length > 30) {
        return (description.substring(0, 30) + '...')
      }
      return description
    },

    formatEntryIndex(theIndex){
      return '#00' + (++theIndex).toString()
    },

    displayJournalContent(entry){
      this.$emit('displayJournalContent', entry)
    },

    editModeIsOn() {
      this.$emit('editModeIsOn', true)
    }

  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,900;1,800;1,900&display=swap');

#entry-item {
  text-align: left;
  font-family: 'Rubik', sans-serif;
  margin: 30px 5px 30px 10px;

}

#buttonId {
  border-radius: 5em;
  border-color: #FF96AD;
  background-color: #04052E;
  color: #FF96AD;
  padding: 10px 30px;

  font-weight: bold;

}

ul {
  list-style-type: none;
}

#no-entry-text {
  text-align: center;
  color: dimgrey;
  font-style: italic;
  font-family: 'Rubik', sans-serif;
}
</style>
