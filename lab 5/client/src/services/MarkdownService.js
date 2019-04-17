import api from '@/services/api'

export default {
  fetchMarkdowns () {
    return api().get('markdowns')
  },
  createNewMarkdown (params) {
    return api().post('markdowns', params)
  },
  getMarkdown (params) {
    return api().get(`markdowns/${params.id}`)
  },
  updateMarkdown (params) {
    return api().put(`markdowns/${params.id}`, params)
  },
  deleteMarkdown (id) {
    return api().delete(`markdowns/${id}`)
  }
}
