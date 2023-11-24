import '@unocss/reset/tailwind.css'
import './assets/styles/main.css'
import 'uno.css'
import nProgress from 'nprogress'

nProgress.start()
nProgress.done()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* html */`
  <main
    px-4 py-10
    text="center gray-700 dark:gray-200"
  >
    <div>
      <p>
        🚀 Vanilla starter
      </p>
    </div>
    <nav mt-6 flex justify-center gap-2 text-xl>
      <button id="toggle-dark" icon-btn title="切换深色模式">
        <div i-carbon-sun dark:i-carbon-moon></div>
      </button>

      <a icon-btn rel="noreferrer" href="https://github.com/tlyboy/vanilla-starter" target="_blank" title="GitHub">
        <div i-carbon-logo-github></div>
      </a>
    </nav>
  </main>
`

document.querySelector<HTMLButtonElement>('#toggle-dark')!.addEventListener('click', toggleDark)
