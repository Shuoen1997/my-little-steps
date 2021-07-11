<template>
  <div>
    <editor-content :editor="editor"/>
  </div>


</template>

<script>
import {Editor, EditorContent} from '@tiptap/vue-2'
import Placeholder from '@tiptap/extension-placeholder'
import CharacterCount from '@tiptap/extension-character-count'
import StarterKit from '@tiptap/starter-kit'

export default {
  components: {
    EditorContent,

  },

  props: {
    value: {
      type: String,
      default: '',
    },
    placeholderValue: String
  },

  data() {
    return {
      editor: null, limit: 60
    }
  },

  watch: {
    value(value) {
      // HTML
      const isSame = this.editor.getHTML() === value

      // JSON
      // const isSame = this.editor.getJSON().toString() === value.toString()

      if (isSame) {
        return
      }

      this.editor.commands.setContent(this.value, false)
    },
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        Placeholder.configure({
          placeholder: this.placeholderValue
        }),
        CharacterCount.configure({
          limit: this.limit,
        }),
      ],
      content: this.value,
      onUpdate: () => {
        // HTML
        this.$emit('input', this.editor.getHTML())
        console.log(this.editor.getHTML())

        // JSON
        // this.$emit('input', this.editor.getJSON())
      },
      placeholder: 'Say something...'
    })
  },

  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>


<style scoped>
/* This one saved me: https://stackoverflow.com/questions/48032006/how-do-i-use-deep-or-or-v-deep-in-vue-js*/
>>> .ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #ced4da;
  pointer-events: none;
  height: 0;
}
</style>
