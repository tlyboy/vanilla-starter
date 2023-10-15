import '@unocss/reset/tailwind.css'
import './assets/styles/main.css'
import './assets/styles/nprogress.css'
import 'uno.css'
import nProgress from 'nprogress'
import { toggleDark } from './utils/dark'

nProgress.start()
nProgress.done()

document.querySelector<HTMLButtonElement>('#toggle-dark')?.addEventListener('click', toggleDark)
