import React from 'react';
import { Info, Sparkles, ChevronRight } from 'lucide-react';
import { HOTSPOTS } from '../data/mockData';

interface FooterBarProps {
  activeHotspotId: number | null;
  setActiveHotspotId: (id: number | null) => void;
  showHotspots: boolean;
  setShowHotspots: (show: boolean) => void;
}

export const FooterBar: React.FC<FooterBarProps> = ({
  activeHotspotId,
  setActiveHotspotId,
  showHotspots,
  setShowHotspots,
}) => {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-40 flex justify-between items-center px-4 sm:px-6 h-12 bg-[#5c5e67] text-white font-['Work_Sans'] text-xs border-t border-[#44464f] shadow-lg">
      {/* Left Instruction */}
      <div className="flex items-center gap-2.5">
        <div className="w-5 h-5 rounded-full bg-[#96c115] text-[#384b00] flex items-center justify-center shrink-0 font-bold">
          <Info className="w-3.5 h-3.5" />
        </div>
        <span className="font-['Work_Sans'] text-xs text-[#e1e2ec] font-medium hidden sm:inline">
          Click the numbered hotspots (1–5) on the "AFTER" side to view redesigned UX rationale.
        </span>
        <span className="font-['Work_Sans'] text-xs text-[#e1e2ec] font-medium sm:hidden">
          Tap hotspots 1-5 for UX Rationale.
        </span>
      </div>

      {/* Right Hotspot Quick Bar */}
      <div className="flex items-center gap-1.5 font-['JetBrains_Mono']">
        <span className="text-[10px] text-[#c5c6d0] uppercase hidden lg:inline mr-1">
          Hotspot Rationales:
        </span>
        {HOTSPOTS.map((h) => {
          const isActive = activeHotspotId === h.id;
          const isGreen = h.color === 'primary';

          return (
            <button
              key={h.id}
              onClick={() => {
                setShowHotspots(true);
                if (activeHotspotId === h.id) {
                  setActiveHotspotId(null);
                } else {
                  setActiveHotspotId(h.id);
                }
              }}
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                isActive
                  ? 'ring-2 ring-yellow-300 scale-110 shadow-md font-extrabold ' +
                    (isGreen ? 'bg-[#96c115] text-[#384b00]' : 'bg-[#4ebdff] text-[#004a6c]')
                  : isGreen
                  ? 'bg-[#4e6700] text-white hover:bg-[#96c115]'
                  : 'bg-[#006591] text-white hover:bg-[#4ebdff]'
              }`}
              title={`Hotspot #${h.id}: ${h.title}`}
            >
              {h.id}
            </button>
          );
        })}
      </div>
    </footer>
  );
};
