import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import SiteRoot from './SiteRoot.tsx'

const rootElement = document.getElementById('root')!
const app = (
  <StrictMode>
    <SiteRoot />
  </StrictMode>
)

// ?preview= deliberately renders the page the prerendered HTML is not, so
// hydrating it would always mismatch. Render those from scratch instead; the
// real routes still hydrate their prerendered markup.
const isPreview = new URLSearchParams(window.location.search).has('preview')

if (rootElement.hasChildNodes() && !isPreview) {
  hydrateRoot(rootElement, app)
} else {
  rootElement.replaceChildren()
  createRoot(rootElement).render(app)
}
