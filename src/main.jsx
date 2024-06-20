import { I18nextProvider } from 'react-i18next'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import i18n from './utils/i18n/i18n.js'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HelmetProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </HelmetProvider>
  </BrowserRouter>
)
