import state from './state.js'
import * as actions from './actions.js'
import * as el from './elements.js'


export function registerControls() {
  el.btFlorest.addEventListener('click',actions.florestMusicOn)
  el.btRain.addEventListener('click', actions.rainMusicOn)
  el.btCoffeeshop.addEventListener('click', actions.coffeeshopMusicOn)
  el.btFireplace.addEventListener('click', actions.fireplaceMusicOn)
  
  el.btPlay.addEventListener('click', actions.toggleRunning)
  el.btStop.addEventListener('click', actions.reset)
  el.btPlus.addEventListener('click', actions.increaseMinutes)
  el.btMinus.addEventListener('click', actions.decreaseMinutes)
}
