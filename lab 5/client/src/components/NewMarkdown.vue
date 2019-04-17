<template lang="pug">
  .container
    h1
      | Создать новый документ
    form
      .form-group
        input.form-control( type="text", name="title", id="title", placeholder="Заголовок", v-model.trim="markdown.title" )
      .form-group
        textarea.form-control( type="text", rows="2", name="description", id="description", placeholder="Описание", v-model.trim="markdown.description" )
      .form-group.row
        .col-lg-6
          textarea.form-control( type="text", rows="20", name="content", id="content", v-model.trim="markdown.content" )
        .col-lg-6.marked-html( v-html="compiledMarkdown" )
          h3
            | Здесь будет разметка
      .form-group
        button.btn.btn-block.btn-primary( type="button", name="createMarkdownFile", id="createMarkdownFile", @click="createMarkdownFile()" )
          | Создать
    section
      button.btn.btn-success.btn-block( type="button", @click="goBack()" )
        | На главную
</template>

<script>
import MarkdownService from '@/services/MarkdownService'
const marked = require('marked')

export default {
  name: 'newMarkdown',
  data () {
    return {
      markdown: {
        title: '',
        description: '',
        content: ''
      }
    }
  },
  methods: {
    async createMarkdownFile () {
      if (this.markdown.title !== '' && this.markdown.content !== '') {
        await MarkdownService.createNewMarkdown({
          title: this.markdown.title,
          description: this.markdown.description,
          content: this.markdown.content
        })
        this.$router.push({ name: 'Markdown Files' })
      } else {
        alert('Empty fields!')
      }
    },
    goBack () {
      this.$router.push({ name: 'Markdown Files' })
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.markdown.content, { sanitize: true })
    }
  }
}
</script>

<style>
  .marked-html {
    border: 1px solid #ced4da;
    text-align: left;
  }

  form .row {
    margin-right: 0;
  }
</style>
