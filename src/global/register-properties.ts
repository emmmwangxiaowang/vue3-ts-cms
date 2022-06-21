import { App } from 'vue'

import { formatUtcString } from '@/utils/date-format'

export default function registerProperties(app:App){
  app.config.globalProperties.$filters={
    formatDate(date:string){
      return formatUtcString(date)
    }
  }
}
