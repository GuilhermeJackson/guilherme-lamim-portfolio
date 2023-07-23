import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.less'
import AppRouter from './routes/AppRouter.tsx'
import Layout from './pages/Layout/Layout.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout children={<AppRouter />} />
  </React.StrictMode>,
)
