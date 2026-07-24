import React, { useState } from 'react';
import { AlertTriangle, ExternalLink, Info } from 'lucide-react';

interface OriginalPanelProps {
  onSelectHotspotByIssue?: (hotspotId: number) => void;
}

export const OriginalPanel: React.FC<OriginalPanelProps> = ({ onSelectHotspotByIssue }) => {
  const [activeIssue, setActiveIssue] = useState<string | null>(null);

  const issues = [
    {
      id: "dropoff",
      title: "68% Heatmap Bounce",
      description: "Users left before scrolling past the 1,200-word intro text block.",
      solutionHotspotId: 1,
      badge: "High Drop-off"
    },
    {
      id: "buried",
      title: "Buried Class A vs A1 Warning",
      description: "Critical safety mapping between ASTM E84 and EN 13501-1 was hidden in paragraph 6.",
      solutionHotspotId: 2,
      badge: "Hidden Risk"
    },
    {
      id: "deadclicks",
      title: "1,400 Dead Clicks/Mo",
      description: "Users repeatedly clicked on static ratings expecting interactive comparison tools.",
      solutionHotspotId: 3,
      badge: "No Interactivity"
    },
    {
      id: "unformatted",
      title: "Unformatted Regional Specs",
      description: "APAC engineers struggled to find Singapore SCDF and Australia NCC compliance rules.",
      solutionHotspotId: 4,
      badge: "Poor Hierarchy"
    }
  ];

  return (
    <section className="w-full h-full border-r border-[#c4c9b0] bg-[#f1f4f5] flex flex-col relative overflow-hidden select-none">
      {/* Header bar */}
      <div className="p-3.5 bg-[#ebeeef] border-b border-[#c4c9b0] flex justify-between items-center shadow-2xs">
        <span className="font-['JetBrains_Mono'] text-[#444936] text-xs font-semibold tracking-wider uppercase">
          SOURCE: ORIGINAL WEBSITE
        </span>
        <span className="px-2.5 py-0.5 bg-[#ba1a1a] text-white text-[11px] rounded font-bold uppercase tracking-wide flex items-center gap-1 shadow-2xs">
          <AlertTriangle className="w-3 h-3" />
          LEGACY UI
        </span>
      </div>

      {/* Main Canvas Scroll Area */}
      <div className="flex-grow bg-white m-3 sm:m-4 rounded border border-[#747964]/40 shadow-inner overflow-y-auto scrollbar-hide relative flex flex-col">
        {/* Content Preview Container */}
        <div className="p-6 max-w-2xl mx-auto space-y-6 opacity-75">
          {/* Skeleton Header */}
          <div className="space-y-2">
            <div className="h-7 bg-[#d7dadb] w-5/6 rounded" />
            <div className="flex gap-3">
              <div className="w-1/3 h-3.5 bg-[#d7dadb] rounded" />
              <div className="w-1/4 h-3.5 bg-[#d7dadb] rounded" />
            </div>
          </div>

          {/* Actual Hotlinked Original Website Image */}
          <div className="relative group rounded overflow-hidden border border-[#c4c9b0] shadow-sm bg-[#f1f4f5]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgjjat95xaD1f7-sa1_ZEr6wXXnmst0lyh4wwIk9S89-2N6cBds0kNADasXu_N9dDNAQEJjgilFqUPOyF9nxGMHhZgZV0IC0H8_OaArrkSA90vIhEHri5GBITFQYhHICzKEf3Baf5Cv_WWsTY0G5205u1k326BwnmT9j8lGRcfFmkuus7Hxd-JKv-e9fZR36TIDrVysLHHmBum9EWdpH41TsM4GSMvO9dqnCUu3Nguazc1e-2R_XYM_QHTaNZCz2nlKWPhAIa-_5c"
              alt="Original Website Screenshot - ASTM E84 Fire Standards"
              className="w-full object-cover rounded filter contrast-95"
            />
            <div className="absolute top-2 right-2 bg-black/70 text-white text-[10px] font-['JetBrains_Mono'] px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1">
              <span>Original Article Asset</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          </div>

          {/* Skeleton Paragraph Blocks */}
          <div className="space-y-3 pt-2">
            <div className="h-3.5 bg-[#d7dadb] w-full rounded" />
            <div className="h-3.5 bg-[#d7dadb] w-11/12 rounded" />
            <div className="h-3.5 bg-[#d7dadb] w-4/5 rounded" />
            <div className="h-3.5 bg-[#d7dadb] w-full rounded" />
            <div className="h-3.5 bg-[#d7dadb] w-3/4 rounded" />
          </div>

          {/* Legacy Table Mockup */}
          <div className="border border-[#c4c9b0] rounded p-4 space-y-3 bg-[#f7fafb]">
            <div className="h-5 bg-[#e0e3e4] w-1/2 rounded font-['JetBrains_Mono'] text-xs text-[#5c5e67] px-2 flex items-center">
              Legacy Table Layout
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-9 bg-[#ebeeef] rounded p-2 text-[10px] font-['JetBrains_Mono'] text-[#5c5e67]">ASTM E84 25/50</div>
              <div className="h-9 bg-[#ebeeef] rounded p-2 text-[10px] font-['JetBrains_Mono'] text-[#5c5e67]">EN 13501-1 Class B</div>
              <div className="h-9 bg-[#ebeeef] rounded p-2 text-[10px] font-['JetBrains_Mono'] text-[#5c5e67]">Non-interactive</div>
            </div>
          </div>

          {/* Legacy Pain Point Callout Badges */}
          <div className="pt-4 border-t border-[#c4c9b0]">
            <div className="flex items-center gap-1.5 mb-2 text-xs font-['JetBrains_Mono'] text-[#ba1a1a] font-bold">
              <Info className="w-4 h-4" />
              <span>INSPECT LEGACY UX DEFECTS (CLICK TO HIGHLIGHT FIX):</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {issues.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveIssue(item.id);
                    if (onSelectHotspotByIssue) {
                      onSelectHotspotByIssue(item.solutionHotspotId);
                    }
                  }}
                  className={`text-left p-2.5 rounded border transition-all ${
                    activeIssue === item.id
                      ? 'bg-[#ffdad6] border-[#ba1a1a] ring-1 ring-[#ba1a1a]'
                      : 'bg-[#f1f4f5] border-[#c4c9b0] hover:bg-white hover:border-[#ba1a1a]/50'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#181c1d]">
                      {item.title}
                    </span>
                    <span className="text-[9px] font-['JetBrains_Mono'] bg-[#ba1a1a]/10 text-[#93000a] px-1.5 py-0.5 rounded font-semibold">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#444936] leading-tight">
                    {item.description}
                  </p>
                  <div className="mt-1.5 text-[10px] font-['JetBrains_Mono'] text-[#006591] font-medium flex items-center gap-1">
                    <span>Solved by Hotspot #{item.solutionHotspotId}</span>
                    <span>→</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* URL overlay footer */}
        <div className="sticky bottom-0 bg-[#e0e3e4]/95 p-2.5 text-center border-t border-[#c4c9b0] backdrop-blur-xs mt-auto">
          <code className="text-[10px] font-['JetBrains_Mono'] text-[#444936] break-all">
            https://www.armacell.com/en-SG/astm-e84-and-en-13501-1-fire-standards...
          </code>
        </div>
      </div>

      {/* Watermark BEFORE label */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="rotate-[-45deg] opacity-[0.03] select-none text-[120px] font-bold text-[#181c1d] font-['Work_Sans']">
          BEFORE
        </div>
      </div>
    </section>
  );
};
