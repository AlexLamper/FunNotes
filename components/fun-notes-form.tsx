'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { callAPI } from '@/app/actions';

export default function FunNotesForm() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setOutput(''); // Clear previous output

    try {
      const result = await callAPI(input);
      setOutput(result);
    } catch (error) {
      setOutput('Error: ' + (error instanceof Error ? error.message : 'An unknown error occurred'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      alert('Note copied to clipboard!');
    }
  };

  if (!mounted) return null;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your note here..."
        className="w-full"
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Processing...' : 'Make My Note Fun!'}
      </Button>
      {output && (
        <Card className="mt-4">
          <CardContent className="p-4">
            <pre className={`overflow-auto ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              {output}
            </pre>
            <Button onClick={handleCopy} className="mt-2">
              Copy Note
            </Button>
          </CardContent>
        </Card>
      )}
    </form>
  );
}

