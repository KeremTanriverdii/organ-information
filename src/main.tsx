<<<<<<< HEAD
import { StrictMode, useState } from 'react'
=======
import { StrictMode } from 'react'
>>>>>>> 1815cc33d88c9d18a5d772735bcbd841de523fa8
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar.tsx'
import AppSidebar from './components/AppSidebar.tsx'
import { ThemeProvider } from './components/Context/theme-provider.tsx'

<<<<<<< HEAD

function RootApp() {
  const [selected, setSelected] = useState<string | null>(null);
  console.log(selected)
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
=======
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <SidebarProvider>
        <AppSidebar />
        <main className='w-screen'>
          <SidebarTrigger />
          <App />
        </main>
      </SidebarProvider>
    </ThemeProvider>
>>>>>>> 1815cc33d88c9d18a5d772735bcbd841de523fa8
  </StrictMode>,
)
