<template>
  <editor-content :editor="editor" />
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
// import Paragraph from '@tiptap/extension-paragraph'
// import Text from '@tiptap/extension-text'

export default {
  components: {
    EditorContent,

  },

  props: {
    value: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      editor: null,
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
        Placeholder,
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
  .ProseMirror p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    color: #ced4da;
    pointer-events: none;
    height: 0;
  }

  .ProseMirror p {
    padding: 10px;
    font-size: 30px;
  }

  .ProseMirror:focus {
    outline: none;
  }
</style>
