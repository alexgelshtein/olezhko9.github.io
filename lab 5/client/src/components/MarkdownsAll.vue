<template lang="pug">
  .container
    .row
      .col-lg-12
        h1
          | MEVN markdown-редактор
        section.panel.panel-success( v-if="markdowns.length" )
          div
            router-link( :to="{ name: 'New Markdown' }" )
              | Создать файл
          .panel-heading
            | Список файлов
          table.table.table-striped
            tr
              th Название
              th Описание
              th Обновлено
              th Действие
            tr( v-for="(md, index) in markdowns", :key="md.title" )
              td {{ md.title }}
              td {{ md.description }}
              td {{ md.lastUpdate }}
              td
                router-link( :to="{ name: 'Edit Markdown', params: { id: md._id } }" )
                  | Редактировать
                button.btn( type="button", @click="removeMarkdownFile(md._id)" )
                  | Удалить

        section.panel.panel-danger( v-if="!markdowns.length" )
          p
          | Здесь нет ни одного файла. Добавьте свой!
          div
            router-link( :to="{ name: 'New Markdown' }" )
              | Создать файл
</template>

<script>
import MarkdownService from '@/services/MarkdownService'
export default {
  name: 'MarkdownsAll',
  data () {
    return {
      markdowns: []
    }
  },
  methods: {
    async getAllMarkdowns () {
      const response = await MarkdownService.fetchMarkdowns()
      this.markdowns = response.data.markdowns
    },
    async removeMarkdownFile (mdid) {
      await MarkdownService.deleteMarkdown(mdid)
      this.getAllMarkdowns()
    }
  },
  mounted () {
    this.getAllMarkdowns()
  }
}
</script>

<style scoped>

</style>
