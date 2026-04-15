import { build, javascript, Emmy } from 'emmy-dom/server'
import { about } from './app/About'
import { app, App } from './app/App'
import { counter } from './app/components/Counter'
import { header } from './app/components/Header'
import { pill } from './app/components/Pill'
import { row } from './app/components/Row'
import { search } from './app/components/Search'
import { underConstruction } from './app/components/UnderConstruction'
import { gettingStarted } from './app/GettingStarted'
import { home } from './app/Home'
import { status } from './app/Status'
import { saveMarkdown } from './emmydocs'
import * as markdown from './app/Markdown'
import { footer } from './app/components/Footer'
import { featureList } from './app/components/FeatureList'

await saveMarkdown(Emmy, Object.keys(markdown))

build({
  app: App,
  dependencies: javascript`
    import { load, html, jsx, Router, Route, Emmy, loadGlobalEmmy as lge } from 'emmy-dom'
    lge(${JSON.stringify(Emmy)})
    import Toastify from 'toastify-js'
    import 'toastify-js/src/toastify.css'
    import MiniSearch from 'minisearch'
    function useRef(value) {
      return { current: value }
    }

    function useFeatureStatus(el) {
      const [features, setFeatures] = el.useState([])
      el.useEffect(async () => {
        const res = await fetch('https://raw.githubusercontent.com/emmyjs/emmy-dom/refs/heads/main/docs/feature-status.json')
        const data = await res.json()
        setFeatures(data.features)
      }, ['didMount'])
      return features
    }
    window.useFeatureStatus = useFeatureStatus
  `,
  generators: {
    about, app, gettingStarted, home, ...markdown, status,
    counter, header, pill, row, search, underConstruction, footer, featureList
  },
  template: './template.html'
})
