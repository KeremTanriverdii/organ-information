import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar.tsx'
import AppSidebar from './components/AppSidebar.tsx'
import { ThemeProvider } from './components/Context/theme-provider.tsx'


function RootApp() {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <SidebarProvider className=''>
        <AppSidebar onSelect={setSelected} />
        <main className='w-screen h-screen overflow-hidden'>
          <SidebarTrigger />
          <App select={selected} />
        </main>
      </SidebarProvider>
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootApp />
  </StrictMode>
)
