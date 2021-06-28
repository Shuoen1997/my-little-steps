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
      <div class="col" id="entry-list">
        <EntryList :entries="journalEntries"></EntryList>
      </div>
      <div class="col" id="add-entry">
        <JournalEntry @addEntry="addEntry"></JournalEntry>

      </div>

    </div>

  </div>


</template>

<script>
import JournalEntry from "@/components/JournalEntry.vue"
import EntryList from "@/components/EntryList.vue"

export default {
  name: 'Main',
  components: {EntryList, JournalEntry},
  created() {
    console.log('Main is created!')
  },
  props: {
    msg: String,
    entries: Array
  },
  data() {
    return {journalEntries: []}
  },
  methods: {
    addEntry(title, desc) {
      this.journalEntries.push({title: title, desc: desc})
      for (const entry of this.journalEntries) {
        console.log('title: ' + entry.title)
        console.log('description: ' + entry.desc)
      }
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

#entry-list, #add-entry{
  border-style: solid;
}


</style>
