import { createApp } from 'vue'
import 'reset-css/reset.css'
import './assets/custom-reset.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faStar as fasStar, faMagnifyingGlass, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar, faStarHalfStroke} from '@fortawesome/free-regular-svg-icons'
/* add icons to the library */
library.add(fasStar, farStar, faStarHalfStroke, faMagnifyingGlass, faChevronRight)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
