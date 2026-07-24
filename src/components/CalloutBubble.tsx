import React from 'react';
import { X, ChevronLeft, ChevronRight, Lightbulb, Compass, BarChart3, ShieldCheck, Zap } from 'lucide-react';
import { Hotspot } from '../types';

interface CalloutBubbleProps {
  hotspot: Hotspot;
  totalHotspots: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const CalloutBubble: React.FC<CalloutBubbleProps> = ({
  hotspot,
  totalHotspots,
  onClose,
  onPrev,
  onNext,
}) => {
  const isGreen = hotspot.color === 'primary';
  const accentColor = isGreen ? '#96c115' : '#006591';
  const textColor = isGreen ? '#384b00' : '#004a6c';

  const getIcon = () => {
    switch (hotspot.id) {
      case 1: return <Compass className="w-4 h-4 text-[#4e6700]" />;
      case 2: return <Lightbulb className="w-4 h-4 text-[#006591]" />;
      case 3: return <BarChart3 className="w-4 h-4 text-[#4e6700]" />;
      case 4: return <ShieldCheck className="w-4 h-4 text-[#006591]" />;
      case 5: return <Zap className="w-4 h-4 text-[#4e6700]" />;
      default: return <Lightbulb className="w-4 h-4 text-[#4e6700]" />;
    }
  };

  return (
    <div
      className="z-50 w-80 sm:w-96 p-4 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border-2 transition-all duration-300 font-['Work_Sans'] text-left animate-in fade-in zoom-in-95"
      style={{ borderColor: accentColor }}
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#ebeeef]">
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center font-['JetBrains_Mono'] font-bold text-xs text-white shadow-xs"
            style={{ backgroundColor: isGreen ? '#4e6700' : '#006591' }}
          >
            {hotspot.id}
          </div>
          <div>
            <span
              className="text-[10px] font-['JetBrains_Mono'] font-bold uppercase tracking-widest block"
              style={{ color: textColor }}
            >
              UX Rationale #{hotspot.id} of {totalHotspots}
            </span>
            <span className="text-xs font-semibold text-[#181c1d]">
              {hotspot.category}
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1 text-[#5c5e67] hover:text-[#181c1d] hover:bg-[#ebeeef] rounded transition-colors"
          title="Close rationale popup"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Title & Icon */}
      <div className="flex items-start gap-2 mb-2">
        <div className="mt-0.5 p-1 rounded bg-[#f1f4f5]">{getIcon()}</div>
        <h4 className="font-['Work_Sans'] font-bold text-sm text-[#181c1d] leading-snug">
          {hotspot.title}
        </h4>
      </div>

      {/* Main Rationale Text */}
      <div className="bg-[#f1f4f5] p-3 rounded-lg border border-[#c4c9b0]/50 mb-3 text-xs text-[#181c1d] leading-relaxed">
        <p className="font-medium">{hotspot.rationale}</p>
      </div>

      {/* Heatmap/User Research Insight */}
      <div className="flex items-start gap-2 p-2 bg-[#e0e3e4]/40 rounded text-[11px] text-[#444936] mb-3 border border-[#c4c9b0]/30">
        <span className="font-['JetBrains_Mono'] font-semibold text-[10px] text-[#006591] shrink-0 uppercase">
          Data Insight:
        </span>
        <span className="leading-tight">{hotspot.heatmapInsight}</span>
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between pt-2 border-t border-[#ebeeef]">
        <div className="flex items-center gap-1">
          <button
            onClick={onPrev}
            className="px-2 py-1 bg-[#ebeeef] hover:bg-[#e0e3e4] rounded text-xs font-['JetBrains_Mono'] flex items-center gap-1 text-[#444936] transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            Prev
          </button>
          <button
            onClick={onNext}
            className="px-2 py-1 bg-[#ebeeef] hover:bg-[#e0e3e4] rounded text-xs font-['JetBrains_Mono'] flex items-center gap-1 text-[#444936] transition-colors"
          >
            Next
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <button
          onClick={onClose}
          className="text-xs font-['JetBrains_Mono'] font-bold px-3 py-1 bg-[#96c115] text-[#384b00] rounded hover:bg-[#96c115]/80 transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
};
