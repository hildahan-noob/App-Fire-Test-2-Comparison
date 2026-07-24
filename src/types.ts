export type TabCategory = 'standards' | 'testing' | 'safety' | 'global';

export type ViewMode = 'split' | 'reengineered' | 'original';

export interface Hotspot {
  id: number;
  title: string;
  category: string;
  shortLabel: string;
  targetId: string;
  xPercent: number; // For absolute positioning on After canvas
  yPercent: number;
  color: 'primary' | 'secondary';
  rationale: string;
  heatmapInsight: string;
}

export interface ComplianceRecord {
  id: string;
  region: string;
  localCode: string;
  testedStandard: string;
  classification: string;
  status: 'COMPLIANT' | 'CERTIFIED' | 'PENDING' | 'EXEMPT';
  flameSpreadIndex: string;
  smokeDensityIndex: string;
  applicationNote: string;
}

export interface SmokeTestData {
  thicknessMm: number;
  temperatureC: number;
  armaflexSmoke: number;
  competitorSmoke: number;
  armaflexFlame: number;
  competitorFlame: number;
}

export interface FlameSpreadPoint {
  timeMinutes: number;
  armaflexIndex: number;
  competitorIndex: number;
}
