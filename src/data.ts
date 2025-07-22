import { Toc } from './types';

// This const provides mock data for development.
// It uses the Toc type to ensure its shape is correct.
export const mockToc: Toc = [
  { 
    id: 'p1', 
    title: 'Part I: The Foundation', 
    chapters: [
      { id: 'c1', title: '01 - Introduction'},
      { id: 'c2', title: '02 - Core Principles'},
    ]
  },
  { 
    id: 'p2', 
    title: 'Part II: The Atoms', 
    chapters: [
      { id: 'c3', title: '03 - Fragments'},
      { id: 'c4', title: '04 - Linking'},
    ]
  }
];
