import { createClient } from '@/utils/supabase/client'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient()

  const { data: todos } = await supabase.from('todos').select()

  return (
    <ul>
      {todos?.map((todo) => (
        <li>{todo}</li>
      ))}
    </ul>
  )
}
