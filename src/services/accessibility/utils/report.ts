import type { AccessibilityReport } from '../../../types/accessibility';
import type { AuditResponse } from '../types';
import { processLighthouseResults } from '../lighthouse/processor';

export function createWebpageReport(url: string, auditResult: AuditResponse): AccessibilityReport {
  return {
    url,
    timestamp: new Date().toISOString(),
    score: Math.round(auditResult.categories.accessibility.score * 100),
    violations: processLighthouseResults(auditResult.audits),
    documentType: 'webpage'
  };
}

export function createDocumentReport(
  url: string, 
  type: 'pdf' | 'word',
  imageAnalysis: any[] = []
): AccessibilityReport {
  return {
    url,
    timestamp: new Date().toISOString(),
    score: 0,
    violations: [],
    documentType: type,
    imageAnalysis
  };
}