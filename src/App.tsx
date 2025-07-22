import { ChapterExplorer } from './components/ChapterExplorer';

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor: '#0f172a', color: '#d1d5db', display: 'flex' }}>
      {/* Our Synthia UI is starting to take shape! */}
      <ChapterExplorer />

      <main style={{ flex: 1, padding: '32px' }}>
        <h1 style={{ fontSize: '1.5rem', color: 'white' }}>Workbench Area</h1>
      </main>
    </div>
  )
}

export default App
