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

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}
