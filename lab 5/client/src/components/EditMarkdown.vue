<template lang="pug">
  .container
    .row
      .col-lg-12
        h1
          | Редактировние файла
        form( @submit.prevent="updateMarkdownFile()" )
          .form-group
            input.form-control( type="text", name="title", id="title", placeholder="Заголовок", v-model.trim="markdown.title" )
          .form-group
            textarea.form-control( type="text", rows="5", name="description", id="description", placeholder="Описание", v-model.trim="markdown.description" )
          .form-group
            textarea.form-control( type="text", rows="30", name="content", id="content", v-model.trim="markdown.content" )
          .form-group
            button.btn.btn-block.btn-primary( type="submit", name="updateMarkdownFile" )
              | Редактировать
        section
          button.btn.btn-success.btn-block( type="button", @click="goBack()" )
            | На главную
</template>

<script>
import MarkdownService from '@/services/MarkdownService'
export default {
  name: 'EditMarkdown',
  data () {
    return {
      markdown: {
        title: '',
        description: ''
      }
    }
  },
  methods: {
    async getMarkdownFile () {
      const response = await MarkdownService.getMarkdown({ id: this.$route.params.id })
      console.log(response)
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
  mounted () {
    this.getMarkdownFile()
  }
}
</script>

<style scoped>

</style>
