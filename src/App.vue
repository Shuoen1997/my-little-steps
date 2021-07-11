<template>
  <v-app>
    <v-app-bar elevation="5"
               app
    >
      <v-toolbar-title>My Little Steps (Of turning dreams into reality) </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn depressed>
        Home
      </v-btn>
      <v-btn depressed>
        Browse
      </v-btn>
      <v-btn depressed>
        Profile
      </v-btn>


    </v-app-bar>

    <v-main>
      <Main/>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Main from './components/Main'

export default {
  name: 'App',

  components: {
    Main,
  },

  data: () => ({
    //
  }),
};
</script>
<style>

.ProseMirror:focus {
  outline: none;
}

</style>
