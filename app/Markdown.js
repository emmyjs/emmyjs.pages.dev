import { Emmy } from 'emmy-dom'

export function index ({ el }) {
  el.className = 'flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border'
  return Emmy.markdown.index
}

export function rails ({ el }) {
  el.className = 'flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border'
  return Emmy.markdown.rails
}

export function vite ({ el }) {
  el.className = 'flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border'
  return Emmy.markdown.vite
}

export function cli ({ el }) {
  el.className = 'flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border'
  return Emmy.markdown.cli
}

export function typescript ({ el }) {
  el.className = 'flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border'
  return Emmy.markdown.typescript
}

export function ssr ({ el }) {
  el.className = 'flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border'
  return Emmy.markdown.ssr
}
