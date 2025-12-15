import React from 'react';
import NetworkGraph from './components/NetworkGraph';
import Legend from './components/Legend';

function App() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 10,
        color: 'white',
        pointerEvents: 'none'
      }}>
        <h1 style={{
          margin: 0,
          fontSize: '2rem',
          fontWeight: '300',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          textShadow: '0 0 10px rgba(255,255,255,0.5)'
        }}>
          Feminist Network
        </h1>
        <p style={{ margin: '5px 0 0 0', opacity: 0.7, fontSize: '0.9rem' }}>
          Interactive Visualization of Activists & Concepts
        </p>
      </div>

      <NetworkGraph />
      <Legend />
    </div>
  );
}

export default App;
