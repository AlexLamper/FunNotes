import { ReactNode } from 'react';

export default function EditorLayout({ children }: { children: ReactNode }) {
  return (
    <div className="editor-layout">
      <header className="editor-header">
        <h1>Editor</h1>
      </header>
      <main className="editor-main">
        {children}
      </main>
      <footer className="editor-footer">
        <h1>Footer</h1>
      </footer>
    </div>
  );
}
