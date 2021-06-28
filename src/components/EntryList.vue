<!--https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea-->
<template>
  <div id="entry-list-item">
    <div id="no-entry-text" v-if="entries.length===0">
      <h3>No entries yet</h3>
    </div>
    <ul>
      <li v-for="entry in entries" :key="entries.indexOf(entry)">
        <span style="font-weight: bold; text-align: left" >{{ entry.title }}</span> <br>
        <span style="color: #E0E0E0;">{{ truncateDescription(entry.desc) }}</span>
        <hr>
      </li>
    </ul>

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
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,900;1,800;1,900&display=swap');

#entry-list-item {
  text-align: center;
  font-family: 'Rubik', sans-serif;
  margin: 30px auto auto;
  width: 360px;

}

ul {
  list-style-type: none;
}

#no-entry-text {
  text-align: center;
  color: dimgrey;
  font-family: 'Rubik', sans-serif;
}
</style>
