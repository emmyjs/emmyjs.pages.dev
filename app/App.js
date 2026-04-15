import { html, Emmy } from 'emmy-dom'
import './components/Header'
import './components/Footer'

export function app ({ el }) {
  el.className = 'flex flex-col justify-space-between gap-2 text-center w-full h-full box-border'

  return html`
  hola
    <Header />
    <Route href='/' to='Home' />
    <Route href='/our-story' to='About' />
    <Route href='/getting-started' to='GettingStarted' />
    <Route href='/status' to='Status' />
    ${Emmy.markdownRoutes}
    <Route href='/404' to='Code404' />
    <Router />
    <Footer />
  `
}

app.static = true
