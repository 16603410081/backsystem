import router from '@/router'
import store from '@/store'
import { App, Plugin} from 'vue'
import componentsPlugin from './component'

const plugins:Plugin[]=[
  store,
  router,
  componentsPlugin
]
const usePlugins=(app: App)=>plugins.forEach(app.use,app)

export default usePlugins