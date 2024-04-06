export const isDark = {
  get value() {
    return document.documentElement.classList.contains('dark')
  },
  set value(v) {
    const modeVal = v ? 'dark' : 'light'
    const systemValue =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'

    document.documentElement.classList.toggle('dark', v)

    if (systemValue === modeVal) {
      localStorage.setItem('color-schema', 'auto')
    } else {
      localStorage.setItem('color-schema', modeVal)
    }
  },
}

export function toggleDark(event: MouseEvent) {
  const isAppearanceTransition =
    // @ts-expect-error experimental API
    document.startViewTransition &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!isAppearanceTransition) {
    isDark.value = !isDark.value
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  // @ts-expect-error experimental API
  const transition = document.startViewTransition(() => {
    isDark.value = !isDark.value
  })
  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 400,
        easing: 'ease-out',
        pseudoElement: isDark.value
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
  })
}
