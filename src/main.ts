import '@unocss/reset/tailwind.css'
import './assets/styles/main.css'
import './assets/styles/nprogress.css'
import 'uno.css'

NProgress.start()
NProgress.done()

document.querySelector<HTMLButtonElement>('#toggle-dark')?.addEventListener('click', toggleDark)
