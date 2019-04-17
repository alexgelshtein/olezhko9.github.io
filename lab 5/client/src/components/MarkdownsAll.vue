<template lang="pug">
  .container
    .row
      .col-lg-12
        h1
          | MEVN markdown-редактор
        section.panel.panel-success( v-if="markdowns.length" )
          .panel-heading
            | Список файлов
          table.table.table-striped
            tr
              th Название
              th Описание
              th Действие
            tr( v-for="(md, index) in markdowns", :key="md.title" )
              td {{ md.title }}
              td {{ md.description }}

        section.panel.panel-danger( v-if="markdowns.length<1" )
        p
        | Здесь нет ни одного файла. Добавьте свой!
        div
        router-link( :to="{ name: 'NewPost' }" )
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
      console.log(this.markdowns)
    }
  },
  mounted () {
    this.getAllMarkdowns()
  }
}
</script>

<style scoped>

</style>
