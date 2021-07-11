<!--https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea-->
<template>
  <div>
    <v-card elevation="5" v-if="entries.length!==0">
      <v-list two-line max-height="600" class="overflow-y-auto">
        <v-list-item-group color="primary">
          <template v-for="(entry, index) in entries">
            <v-list-item :key="entries.indexOf(entry)" @click="displayJournalContent(entry)">
              <v-avatar color="accent"
              >
                <div id="bump-value-text-in-list"> {{ entry.bumpValue }}</div>
              </v-avatar>
              <!--                <v-list-item-icon>-->
              <!--                  <v-icon v-text="entry.isPublic ? 'mdi-earth': 'mdi-lock' "></v-icon>-->
              <!--                </v-list-item-icon>-->
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
            <v-divider inset v-if="index < entries.length - 1" :key="index"></v-divider>
          </template>


        </v-list-item-group>
      </v-list>

    </v-card>
    <v-divider></v-divider>
    <v-btn color="primary" id="button-new-main-step" block outlined @click="editModeIsOn()">NEW STEP Z</v-btn>

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
  font-size: 24px;
  padding-inline-start: 20px;
  font-weight: bold;
}

#readonly-editor-desc-in-list {
  padding-inline-start: 20px;
}

#bump-value-text-in-list {
  font-weight: bold;
}

</style>
