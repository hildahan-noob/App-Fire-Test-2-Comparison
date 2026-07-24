import React, { useState, useEffect } from 'react';
import { ViewMode } from './types';
import { Header } from './components/Header';
import { OriginalPanel } from './components/OriginalPanel';
import { ReengineeredPanel } from './components/ReengineeredPanel';
import { FooterBar } from './components/FooterBar';
import { ConsultationModal } from './components/ConsultationModal';
import { TechnicalPdfModal } from './components/TechnicalPdfModal';
import { SearchModal } from './components/SearchModal';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('split');
  const [showHotspots, setShowHotspots] = useState<boolean>(true);
  const [activeHotspotId, setActiveHotspotId] = useState<number | null>(null);

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Keyboard shortcut listener (Cmd/Ctrl + K for search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectHotspotByIssue = (hotspotId: number) => {
    if (viewMode === 'original') {
      setViewMode('split');
    }
    setShowHotspots(true);
    setActiveHotspotId(hotspotId);
  };

  return (
    <div className="min-h-screen bg-[#f7fafb] text-[#181c1d] flex flex-col font-['Work_Sans'] overflow-hidden">
      {/* Top Fixed Header */}
      <Header
        viewMode={viewMode}
        setViewMode={setViewMode}
        showHotspots={showHotspots}
        setShowHotspots={setShowHotspots}
        activeHotspotId={activeHotspotId}
        setActiveHotspotId={setActiveHotspotId}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Split / Comparative Area */}
      <main className="flex h-screen pt-16 pb-12 overflow-hidden w-full">
        {/* Left Panel: BEFORE (Original Legacy Site) */}
        {(viewMode === 'split' || viewMode === 'original') && (
          <div
            className={`h-full transition-all duration-300 ${
              viewMode === 'split' ? 'w-full md:w-1/2' : 'w-full'
            }`}
          >
            <OriginalPanel onSelectHotspotByIssue={handleSelectHotspotByIssue} />
          </div>
        )}

        {/* Right Panel: AFTER (Re-Engineered Screen_41) */}
        {(viewMode === 'split' || viewMode === 'reengineered') && (
          <div
            className={`h-full transition-all duration-300 ${
              viewMode === 'split' ? 'w-full md:w-1/2' : 'w-full'
            }`}
          >
            <ReengineeredPanel
              showHotspots={showHotspots}
              activeHotspotId={activeHotspotId}
              setActiveHotspotId={setActiveHotspotId}
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onOpenPdf={() => setIsPdfOpen(true)}
            />
          </div>
        )}
      </main>

      {/* Bottom Instruction Bar */}
      <FooterBar
        activeHotspotId={activeHotspotId}
        setActiveHotspotId={setActiveHotspotId}
        showHotspots={showHotspots}
        setShowHotspots={setShowHotspots}
      />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <TechnicalPdfModal
        isOpen={isPdfOpen}
        onClose={() => setIsPdfOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={(type, id) => {
          setViewMode('reengineered');
        }}
      />
    </div>
  );
}
