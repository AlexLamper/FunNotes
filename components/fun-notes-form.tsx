'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { callAPI } from '@/app/actions'

export default function FunNotesForm() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const result = await callAPI(input)
      setOutput(JSON.stringify(result, null, 2))
    } catch (error) {
      setOutput('Error: ' + (error instanceof Error ? error.message : String(error)))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text here..."
        className="w-full"
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Calling API...' : 'Call API'}
      </Button>
      <pre className="mt-4 p-4 bg-gray-100 rounded overflow-auto">
        {output}
      </pre>
    </form>
  )
}

