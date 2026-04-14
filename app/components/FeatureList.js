import { html } from 'emmy-dom'
import './Row'

function useFeatureStatus(el) {
  const [features, setFeatures] = el.useState([])

  el.useEffect(async () => {
    const res = await fetch('https://raw.githubusercontent.com/emmyjs/emmy-dom/refs/heads/main/docs/feature-status.json')
    const data = await res.json()
    setFeatures(data.features)
  }, ['didMount'])
  
  return features
}

export function featureList({ el }) {
  const features = useFeatureStatus(el)

  return () => {
    if (features().length === 0) {
      return html`
        <p class='text-lg'>Loading status...</p>
      `
    }
    return html`
      <ul role='list' class='max-w-lg w-full divide-y divide-gray-200 dark:divide-gray-700'>
        ${features().map(f => html`
          <Row status='${f.status}'>${f.name}</Row>
        `)}
        <Row status='experimental'>CLI create-emmy</Row>
      </ul>
    `
  }
}
