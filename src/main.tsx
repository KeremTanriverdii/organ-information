import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar.tsx'
import AppSidebar from './components/AppSidebar.tsx'
import { ThemeProvider } from './components/Context/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          <App />
        </main>
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode>,
)
