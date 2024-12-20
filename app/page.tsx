import FunNotesForm from '@/components/fun-notes-form'
import { ThemeSwitcher } from '@/components/theme-switcher'

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <div className='mb-4'>
        <ThemeSwitcher />
      </div>
      <div id='content'>
        <h1 className="text-2xl font-bold mb-4">API Test</h1>
        <FunNotesForm />
      </div>
    </main>
  )
}

