<!--https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea-->
<template>
  <div>

  <v-card elevation="5">
    <v-list two-line>
      <v-list-item-group color="green">
        <v-list-item v-for="entry in entries" :key="entries.indexOf(entry)" @click="displayJournalContent(entry)">

            <v-list-item-icon>
              <v-icon v-if="entry.isPublic">mdi-earth</v-icon>
              <v-icon v-if="!entry.isPublic">mdi-lock</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <ReadOnlyEditor
                    :value="truncateDescription(entry.title)" id="readonly-editor-title-in-list"/>
              </v-list-item-title>
              <v-list-item-subtitle>
                <ReadOnlyEditor
                    :value="truncateDescription(entry.description)" id="readonly-editor-desc-in-list"/>
              </v-list-item-subtitle>
            </v-list-item-content>





        </v-list-item>


      </v-list-item-group>
    </v-list>

  </v-card>
    <v-divider></v-divider>
  <v-btn id="button-new-main-step" block color="green" @click="editModeIsOn()">NEW STEP Z</v-btn>

  </div>

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
      const maxDisplayLength = 40
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

#no-entry-text {
  text-align: center;
  color: dimgrey;
  font-style: italic;
  margin-top: 30px;
  font-family: 'Rubik', sans-serif;
}
#readonly-editor-title-in-list {
  font-size: 18px
}
</style>
