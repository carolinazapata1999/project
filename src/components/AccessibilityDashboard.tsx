import React from 'react';
import { useAccessibilityStore } from '../store/accessibilityStore';
import { ResultCard } from './ResultCard';
import { ViolationsList } from './ViolationsList';
import { DocumentAnalysis } from './DocumentAnalysis';
import { LoadingSpinner } from './LoadingSpinner';

export function AccessibilityDashboard() {
  const { currentReport, isLoading, error } = useAccessibilityStore();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-700">{error}</p>
      </div>
    );
  }

  if (!currentReport) {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <p className="text-blue-700 text-lg">
          Enter a URL or upload a document to start the accessibility analysis
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <ResultCard report={currentReport} />
      <ViolationsList violations={currentReport.violations} />
      {currentReport.documentType !== 'webpage' && (
        <DocumentAnalysis report={currentReport} />
      )}
    </div>
  );
}