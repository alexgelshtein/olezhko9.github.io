<template lang="pug">
  .container
    .row
      .col-lg-12
        h1
          | Создать новый документ
        form
          .form-group
            input.form-control( type="text", name="title", id="title", placeholder="Заголовок", v-model.trim="markdown.title" )
          .form-group
            textarea.form-control( type="text", rows="5", name="description", id="description", placeholder="Описание", v-model.trim="markdown.description" )
          .form-group
            textarea.form-control( type="text", rows="30", name="content", id="content", v-model.trim="markdown.content" )
          .form-group
            button.btn.btn-block.btn-primary( type="button", name="createMarkdownFile", id="createMarkdownFile", @click="createMarkdownFile()" )
              | Создать
          section
            button.btn.btn-success.btn-block( type="button", @click="goBack()" )
              | На главную
</template>

<script>
import MarkdownService from '@/services/MarkdownService'
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
  }
}
</script>

<style scoped>

</style>
