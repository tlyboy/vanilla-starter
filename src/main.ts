import '@unocss/reset/tailwind.css'
import 'uno.css'
import './assets/styles/main.css'
import nProgress from 'nprogress'

nProgress.start()
nProgress.done()

document.querySelector<HTMLButtonElement>('#toggle-dark')!.addEventListener('click', toggleDark)
