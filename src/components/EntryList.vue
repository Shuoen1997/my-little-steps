<!--https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea-->
<template>
  <!--  <div id="entry-list">-->
  <!--    <div id="no-entry-text" v-if="entries.length===0">-->
  <!--      <h3>No entries yet</h3>-->
  <!--    </div>-->
  <!--    <ul>-->
  <!--      <li v-for="entry in entries" :key="entries.indexOf(entry)">-->
  <!--        <div id="entry-item" @click="displayJournalContent(entry)">-->
  <!--          <div class="container">-->
  <!--            <div class="row align-items-start">-->
  <!--              <div class="col-3" id="entry-index">-->
  <!--                <p>{{ formatEntryIndex(entries.indexOf(entry)) }}</p>-->
  <!--              </div>-->
  <!--              <div class="col-8">-->
  <!--                <span style="font-weight: bold; text-align: left"><ReadOnlyEditor-->
  <!--                    :value="truncateDescription(entry.title)"/></span>-->
  <!--&lt;!&ndash;                <span style="color: #E0E0E0"><ReadOnlyEditor&ndash;&gt;-->
  <!--&lt;!&ndash;                    :value="truncateDescription(entry.description)"/></span>&ndash;&gt;-->

  <!--              </div>-->

  <!--            </div>-->
  <!--          </div>-->


  <!--        </div>-->

  <!--        <hr>-->
  <!--      </li>-->
  <!--    </ul>-->
  <!--    <button @click="editModeIsOn()" id="buttonId">NEW MAIN STEP</button>-->
  <!--  </div>-->
  <v-card>
    <v-list two-line>
      <!--      <v-subheader>List of Step Zs</v-subheader>-->
      <v-list-item-group color="blue">
        <v-list-item v-for="entry in entries" :key="entries.indexOf(entry)" @click="displayJournalContent(entry)">
          <v-list-item-icon>
            <v-icon>mdi-star-three-points</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <ReadOnlyEditor
                  :value="truncateDescription(entry.title)" id="readonly-editor-title-in-list"/>
            </v-list-item-title>
            <v-list-item-subtitle>
              <ReadOnlyEditor
                  :value="truncateDescription(entry.description)" id="readonly-editor-desc-in-list" />
            </v-list-item-subtitle>
          </v-list-item-content>


        </v-list-item>
        <v-divider></v-divider>

      </v-list-item-group>
    </v-list>
    <v-btn id="button-new-main-step" block elevation="2" color="yellow" @click="editModeIsOn()">NEW STEP Z</v-btn>
  </v-card>


</template>

<script>

import ReadOnlyEditor from "@/components/ReadOnlyEditor"

export default {
  name: 'EntryList',
  components: {ReadOnlyEditor},
  updated() {
    console.log("I am updated!")
  },
  props: {
    entries: Array
  },
  computed: {},
  methods: {
    truncateDescription(description) {
      const maxDisplayLength = 25
      if (description.length > maxDisplayLength) {
        return (description.substring(0, maxDisplayLength) + '..')
      }
      return this.stripHTMLContent(description)
    },

    formatEntryIndex(theIndex) {
      return '#00' + (++theIndex).toString()
    },

    displayJournalContent(entry) {
      this.$emit('displayJournalContent', entry)
    },

    editModeIsOn() {
      this.$emit('editModeIsOn', true)
    },
    stripHTMLContent(theString) {
      let firstHalf = theString.replaceAll('<p>', '')
      return firstHalf.replaceAll('</p>', '')
    },

  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,900;1,800;1,900&display=swap');

#entry-list {
  overflow-y: scroll;
  border-right: solid 1px #02C3BD;
}

#entry-index {
  /*background-color: #02C3BD;*/
  color: #02C3BD;
  font-weight: bold;
  text-align: center;
  max-height: 200px;
}

#entry-item {
  text-align: left;
  font-family: 'Rubik', sans-serif;
  margin: 10px 5px 10px 10px;
  padding: 10px;
  border-style: inset;
  border-color: #02C3BD;
  border-radius: 5px;
  cursor: pointer;
  /*background-color: #02031A;*/

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
  margin-top: 30px;
  font-family: 'Rubik', sans-serif;
}
</style>
