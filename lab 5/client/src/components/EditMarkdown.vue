<template lang="pug">
  .container
    h1
      | Создать новый документ
    form(@submit.prevent="updateMarkdownFile()")
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
        button.btn.btn-block.btn-primary( type="submit", name="updateMarkdownFile" )
          | Редактировать
    section
      button.btn.btn-success.btn-block( type="button", @click="goBack()" )
        | На главную
</template>

<script>
import MarkdownService from '@/services/MarkdownService'
const marked = require('marked')

export default {
  name: 'EditMarkdown',
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
    async getMarkdownFile () {
      const response = await MarkdownService.getMarkdown({ id: this.$route.params.id })
      this.markdown.title = response.data.title
      this.markdown.description = response.data.description
      this.markdown.content = response.data.content
    },
    async updateMarkdownFile () {
      if (this.markdown.title !== '' && this.markdown.content !== '') {
        await MarkdownService.updateMarkdown({
          id: this.$route.params.id,
          title: this.markdown.title,
          description: this.markdown.description,
          content: this.markdown.content
        })
        this.$router.push({ name: 'Markdown Files' })
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
  },
  mounted () {
    this.getMarkdownFile()
  }
}
</script>

<style scoped>
  .marked-html {
    border: 1px solid #ced4da;
    text-align: left;
  }

  form .row {
    margin-right: 0;
  }
</style>
