<!--https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea-->
<template>
  <div class="container-fluid">
    <div id="title-text">
      <h1>{{ msg }}</h1>
      <h4>
        Of turning dream into reality...
      </h4>
    </div>
    <div class="row">
      <div class="col-4" id="entry-list">
        <EntryList :entries="journalEntries"
                   @displayJournalContent="displayJournalContent"
                   @editModeIsOn="toggleEditMode"></EntryList>
      </div>
      <div class="col-8" id="add-entry">
        <JournalEntry
            v-if="editMode===true"
            @addEntry="addEntry"
            @displayJournalEntry="displayJournalContent">
        </JournalEntry>
        <JournalDisplay
            v-if="editMode===false && currentDisplayedContent"
            :entry="currentDisplayedContent"
        >

        </JournalDisplay>


      </div>

    </div>

  </div>


</template>

<script>
import JournalEntry from "@/components/JournalEntry.vue"
import EntryList from "@/components/EntryList.vue"
import JournalDisplay from "@/components/JournalDisplay.vue"
import EntryData from "@/data/EntryData"
import dayjs from "dayjs"

export default {
  name: 'Main',
  components: {EntryList, JournalEntry, JournalDisplay},
  created() {
    console.log('Main is created!')
  },
  props: {
    msg: String
  },
  data() {
    return {journalEntries: [], editMode: false, currentDisplayedContent: null}
  },
  methods: {
    addEntry(title, desc) {
      const newEntry = new EntryData(
          this.journalEntries.length,
          title, desc, dayjs().format('YYYY/MM/DD HH:mm:ss'))
      console.log(newEntry)
      this.journalEntries.push(newEntry)
      for (const entry of this.journalEntries) {
        console.log('title: ' + entry.title)
        console.log('description: ' + entry.description)
      }
      this.displayJournalContent(newEntry)
    },
    toggleEditMode(isOn) {
      this.editMode = isOn
    },
    displayJournalContent(entry) {
      this.toggleEditMode(false)
      this.currentDisplayedContent = entry
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,900;1,800;1,900&display=swap');

h1 {
  font-size: 72px;
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
}


h4 {
  color: #FF96AD;
  font-family: 'Rubik', sans-serif;
  margin-top: -20px;
  font-style: italic;
  font-size: 24px;
}

#entry-list, #add-entry {
  min-height: 800px;
}


</style>
