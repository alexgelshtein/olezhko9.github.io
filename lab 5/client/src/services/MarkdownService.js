import api from '@/services/api'

export default {
  fetchMarkdowns () {
    return api().get('markdowns')
  }
}
