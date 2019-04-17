import Start from '@/components/HelloWorld'
import MarkdownsAll from '@/components/MarkdownsAll'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/markdowns',
    name: 'Markdown Files',
    component: MarkdownsAll
  }
]

export default routes
