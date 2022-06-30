import { createApp } from 'vue'
import { createStore } from 'vuex'
import 'reset-css/reset.css'
import './assets/custom-reset.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faStar as fasStar, faMagnifyingGlass, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar, faStarHalfStroke } from '@fortawesome/free-regular-svg-icons'
/* add icons to the library */
library.add(fasStar, farStar, faStarHalfStroke, faMagnifyingGlass, faChevronRight)

const store = createStore({
  state() {
    return {
      chosenGame: {
        id: '',
        title: 'Twitch Live Games',
      }
    }
  },
  mutations: {
    SET_CHOSEN_GAME(state, payload) {
      state.chosenGame.id = payload.gameId,
      state.chosenGame.title = payload.gameTitle
    }
  },
  actions: {
    setChosenGame({ commit }, payload) {
      commit('SET_CHOSEN_GAME', payload)
    }
  }
})

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .mount('#app')
