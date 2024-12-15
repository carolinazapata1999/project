export interface LighthouseConfig {
  extends: string;
  settings: {
    onlyCategories: string[];
    formFactor: string;
    throttling: {
      cpuSlowdownMultiplier: number;
    };
  };
}

export interface AuditResponse {
  categories: {
    accessibility: {
      score: number;
    };
  };
  audits: Record<string, AuditResult>;
}

export interface AuditResult {
  id: string;
  score: number | null;
  details?: {
    items?: Array<{
      element?: string;
    }>;
  };
  description: string;
  title: string;
}