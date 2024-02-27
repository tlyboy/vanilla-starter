import { toggleDark } from './utils/dark'

export function setupToggleDark(element: HTMLElement) {
  element.addEventListener('click', toggleDark)
}
