<template>
  <editor-content :editor="editor"/>
</template>

<script>
import {Editor, EditorContent} from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'

export default {
  components: {
    EditorContent,
  },

  props: {
    value: String
  },

  data() {
    return {
      editor: null,
    }
  },

  watch: {
    value(value)
    {
      // HTML
      const isSame = this.editor.getHTML() === value

      // JSON
      // const isSame = this.editor.getJSON().toString() === value.toString()

      if (isSame) {
        return
      }

      this.editor.commands.setContent(this.value, false)
    }

  },


  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        Placeholder,
        Paragraph,
        Text
      ],
      content: this.value,
      editable: false
    })
  },

  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>


