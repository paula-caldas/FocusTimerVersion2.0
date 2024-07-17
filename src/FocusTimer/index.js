import { minutes, seconds } from './elements.js'
import * as events from './events.js'
import state from './state.js'
import * as timer from './timer.js'

export function start(initialMinutes, initialSeconds) {
  state.minutes = initialMinutes;
  state.seconds = initialSeconds;

  timer.updateDisplay(initialMinutes, initialSeconds);
  
   events.registerControls();
}