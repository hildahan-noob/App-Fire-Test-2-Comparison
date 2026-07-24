import React, { useState } from 'react';
import { Menu, Search, Layers, Eye, HelpCircle, CheckCircle2, ShieldAlert } from 'lucide-react';
import { ViewMode } from '../types';

interface HeaderProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  showHotspots: boolean;
  setShowHotspots: (show: boolean) => void;
  activeHotspotId: number | null;
  setActiveHotspotId: (id: number | null) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  viewMode,
  setViewMode,
  showHotspots,
  setShowHotspots,
  activeHotspotId,
  setActiveHotspotId,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-6 h-16 bg-[#f7fafb] border-b border-[#c4c9b0] shadow-xs">
      {/* Left side: Menu & Logo */}
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1.5 rounded-md hover:bg-[#ebeeef] text-[#4e6700] transition-colors"
          title="Toggle Navigation Menu"
          aria-label="Toggle Navigation Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 bg-[#96c115] rounded-xs transform rotate-45 border border-[#384b00]" />
          <span className="font-['Work_Sans'] font-bold text-lg sm:text-xl text-[#4e6700] tracking-tight uppercase">
            ARMACELL INDUSTRIAL
          </span>
        </div>
      </div>

      {/* Middle/Right: View Switcher & Actions */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* View Mode Selector */}
        <div className="hidden md:flex items-center bg-[#e0e3e4] p-1 rounded-lg border border-[#c4c9b0] text-xs font-['JetBrains_Mono']">
          <button
            onClick={() => setViewMode('split')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 font-medium ${
              viewMode === 'split'
                ? 'bg-white text-[#181c1d] shadow-xs font-bold'
                : 'text-[#444936] hover:text-[#181c1d]'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-[#4e6700]" />
            Split View (50/50)
          </button>
          <button
            onClick={() => setViewMode('reengineered')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 font-medium ${
              viewMode === 'reengineered'
                ? 'bg-white text-[#4e6700] shadow-xs font-bold'
                : 'text-[#444936] hover:text-[#181c1d]'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-[#96c115]" />
            Re-Engineered
          </button>
          <button
            onClick={() => setViewMode('original')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 font-medium ${
              viewMode === 'original'
                ? 'bg-white text-[#ba1a1a] shadow-xs font-bold'
                : 'text-[#444936] hover:text-[#181c1d]'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5 text-[#ba1a1a]" />
            Original Legacy
          </button>
        </div>

        {/* Hotspots Toggle */}
        <button
          onClick={() => setShowHotspots(!showHotspots)}
          className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-['JetBrains_Mono'] border transition-all ${
            showHotspots
              ? 'bg-[#96c115]/15 border-[#96c115] text-[#384b00] font-bold'
              : 'bg-white border-[#c4c9b0] text-[#5c5e67]'
          }`}
          title="Toggle UX Hotspot Overlay"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Hotspots {showHotspots ? 'ON (5)' : 'OFF'}</span>
        </button>

        {/* Section Title Label */}
        <div className="hidden lg:flex flex-col text-right border-l border-[#c4c9b0] pl-4">
          <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-[#444936] font-medium">
            COMPARATIVE PERFORMANCE ANALYTICS
          </span>
          <span className="text-[11px] text-[#006591] font-semibold">
            ASTM E84 vs EN 13501-1
          </span>
        </div>

        {/* Search trigger */}
        <button
          onClick={onOpenSearch}
          className="p-2 rounded-md bg-[#ebeeef] hover:bg-[#e0e3e4] text-[#444936] transition-colors border border-[#c4c9b0] flex items-center gap-2"
          title="Search Standards & Code Compliance"
          aria-label="Search Standards"
        >
          <Search className="w-4 h-4 text-[#006591]" />
          <span className="hidden xl:inline text-xs font-['JetBrains_Mono'] text-[#444936]">
            Search (Cmd+K)
          </span>
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-[#c4c9b0] shadow-lg p-4 z-50 flex flex-col gap-3 font-['Work_Sans'] text-sm">
          <div className="text-xs font-['JetBrains_Mono'] font-bold text-[#4e6700] uppercase tracking-wider mb-1">
            View Settings
          </div>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => { setViewMode('split'); setMobileMenuOpen(false); }}
              className={`p-2 rounded text-xs font-['JetBrains_Mono'] text-center border ${
                viewMode === 'split' ? 'bg-[#96c115] text-[#384b00] font-bold border-[#4e6700]' : 'bg-[#f1f4f5] border-[#c4c9b0]'
              }`}
            >
              Split View
            </button>
            <button
              onClick={() => { setViewMode('reengineered'); setMobileMenuOpen(false); }}
              className={`p-2 rounded text-xs font-['JetBrains_Mono'] text-center border ${
                viewMode === 'reengineered' ? 'bg-[#96c115] text-[#384b00] font-bold border-[#4e6700]' : 'bg-[#f1f4f5] border-[#c4c9b0]'
              }`}
            >
              Re-engineered
            </button>
            <button
              onClick={() => { setViewMode('original'); setMobileMenuOpen(false); }}
              className={`p-2 rounded text-xs font-['JetBrains_Mono'] text-center border ${
                viewMode === 'original' ? 'bg-[#ffdad6] text-[#93000a] font-bold border-[#ba1a1a]' : 'bg-[#f1f4f5] border-[#c4c9b0]'
              }`}
            >
              Original
            </button>
          </div>
          <button
            onClick={() => { setShowHotspots(!showHotspots); setMobileMenuOpen(false); }}
            className="w-full py-2 bg-[#ebeeef] border border-[#c4c9b0] rounded text-xs font-['JetBrains_Mono'] flex items-center justify-center gap-2"
          >
            <Eye className="w-4 h-4 text-[#006591]" />
            Hotspots Overlay: {showHotspots ? 'ACTIVE' : 'HIDDEN'}
          </button>
        </div>
      )}
    </header>
  );
};
