import React from 'react';
import { ChevronDown, FileText } from 'lucide-react';

// For this test, we are using simple, hard-coded data.
const testToc = [
  { id: 'p1', title: 'Part I: The Foundation', chapters: [
      { id: 'c1', title: '01 - Introduction'},
      { id: 'c2', title: '02 - Core Principles'},
  ]},
  { id: 'p2', title: 'Part II: The Atoms', chapters: [
      { id: 'c3', title: '03 - Fragments'},
  ]}
];

export const ChapterExplorer: React.FC = () => {
  return (
    <aside style={{ width: '256px', backgroundColor: '#1e293b', padding: '8px', flexShrink: 0, borderRight: '1px solid #334155', color: '#cbd5e1' }}>
      <div style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', padding: '4px 8px' }}>Explorer</div>
      <div style={{ marginTop: '8px', spaceY: '4px' }}>
        {testToc.map((part) => (
          <div key={part.id}>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', fontWeight: '600', padding: '4px 0' }}>
              <ChevronDown size={16} style={{ marginRight: '4px' }} />
              <span>{part.title}</span>
            </div>
            <div style={{ paddingLeft: '16px', marginLeft: '8px', borderLeft: '1px solid #475569' }}>
              {part.chapters.map((chapter) => (
                <div key={chapter.id} style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', padding: '4px 8px', borderRadius: '4px' }}>
                  <FileText size={14} style={{ marginRight: '8px', color: '#94a3b8' }} />
                  <span>{chapter.title}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
