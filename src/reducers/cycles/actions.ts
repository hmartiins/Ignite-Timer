import { Cycle } from './reducers'

export enum ActionTypes {
  addNewCycle = 'addNewCycle',
  interruptCurrentCycle = 'interruptCurrentCycle',
  markCurrentCycleAsFinish = 'markCurrentCycleAsFinish',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.addNewCycle,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinishAction() {
  return {
    type: ActionTypes.markCurrentCycleAsFinish,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.interruptCurrentCycle,
  }
}
