export interface Chapter {
  id: string;
  title: string;
}

export interface Part {
  id: string;
  title: string;
  chapters: Chapter[];
}

export type Toc = Part[];
