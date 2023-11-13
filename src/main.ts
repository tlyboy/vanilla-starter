import '@unocss/reset/tailwind.css'
import './styles/main.css'
import './styles/nprogress.css'
import 'uno.css'
import nProgress from 'nprogress'

nProgress.start()
nProgress.done()

document.querySelector<HTMLButtonElement>('#toggle-dark')?.addEventListener('click', toggleDark)
