import state from './state.js'
import * as sounds from './sounds.js'
import * as timer from './timer.js'

export function florestMusicOn() {
  state.isMute = document.documentElement.classList.toggle('florest')

  
  if(state.isMute) {
    coffeeshopMusicOff()
    rainMusicOff()
    fireplaceMusicOff()
    sounds.florestAudio.play()
    return
  }

  sounds.florestAudio.pause()
}

function florestMusicOff() {
  state.isMute = document.documentElement.classList.remove('florest')
  sounds.florestAudio.pause()
}

export function rainMusicOn() {
  state.isMute = document.documentElement.classList.toggle('rain')

  if(state.isMute) {
    florestMusicOff()
    coffeeshopMusicOff()
    fireplaceMusicOff()
    sounds.rainAudio.play()
    return
  }

  sounds.rainAudio.pause()
}

function rainMusicOff(){
  state.isMute = document.documentElement.classList.remove('rain')

  sounds.rainAudio.pause()

}

export function coffeeshopMusicOn(){
  state.isMute = document.documentElement.classList.toggle('coffeeshop')

  if(state.isMute) {
    rainMusicOff()
    florestMusicOff()
    fireplaceMusicOff()
    sounds.coffeeshopAudio.play()
    return
  }

  sounds.coffeeshopAudio.pause()
}

function coffeeshopMusicOff(){
  state.isMute = document.documentElement.classList.remove('coffeeshop')

  sounds.coffeeshopAudio.pause()
}

export function fireplaceMusicOn() {
  state.isMute = document.documentElement.classList.toggle('fireplace')

  if(state.isMute) {
    rainMusicOff()
    florestMusicOff()
    coffeeshopMusicOff()
    sounds.fireplaceAudio.play()
    return
  }

  sounds.fireplaceAudio.pause()
}

function fireplaceMusicOff() {
  state.isMute = document.documentElement.classList.remove('fireplace')

  sounds.fireplaceAudio.pause()
}

export function toggleRunning() {
  state.isRunning = !state.isRunning;

  if (state.isRunning) {
    timer.countdown();
  } else {
    clearTimeout(state.countdownId);
  }
}

export function reset() {
  state.isRunning = false
  timer.updateDisplay()
}

export function increaseMinutes() {
  state.minutes += 5; 
  timer.updateDisplay(state.minutes, state.seconds); 
}

export function decreaseMinutes() {
  if (state.minutes > 0) {
    state.minutes -= 5; 
    if (state.minutes < 0) state.minutes = 0; 
    timer.updateDisplay(state.minutes, state.seconds); 
  }
}
