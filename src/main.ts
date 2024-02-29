import './assets/styles/main.css'
import nProgress from 'nprogress'

nProgress.start()
nProgress.done()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* HTML */ `
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <div>
      <p>🚀 Vanilla starter</p>
    </div>
    <nav class="mt-6 flex justify-center gap-2 text-xl">
      <button
        id="darker"
        class="icon-btn i-carbon-sun dark:i-carbon-moon"
        title="切换深色模式"
      ></button>

      <a
        class="icon-btn i-carbon-logo-github"
        href="https://github.com/tlyboy/vanilla-starter"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      ></a>
    </nav>
  </main>
`

setupDarker(document.querySelector('#darker')!)
