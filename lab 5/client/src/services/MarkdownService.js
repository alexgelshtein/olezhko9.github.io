import api from '@/services/api'

export default {
  fetchMarkdowns () {
    return api().get('markdowns')
  },
  createNewMarkdown (params) {
    return api().post('markdowns', params)
  }
}
