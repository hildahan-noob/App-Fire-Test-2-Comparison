import React, { useState } from 'react';
import { X, Search, FileText, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { APAC_COMPLIANCE_DATA, TAB_CONTENT } from '../data/mockData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (type: string, id: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = APAC_COMPLIANCE_DATA.filter((item) =>
    item.region.toLowerCase().includes(query.toLowerCase()) ||
    item.localCode.toLowerCase().includes(query.toLowerCase()) ||
    item.testedStandard.toLowerCase().includes(query.toLowerCase()) ||
    item.classification.toLowerCase().includes(query.toLowerCase()) ||
    item.applicationNote.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-xs p-4 pt-20 animate-in fade-in">
      <div className="bg-white rounded-xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#c4c9b0] font-['Work_Sans'] flex flex-col">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#c4c9b0] flex items-center gap-3 bg-[#f7fafb]">
          <Search className="w-5 h-5 text-[#006591]" />
          <input
            type="text"
            autoFocus
            placeholder="Search standards (e.g. ASTM E84, EN 13501-1, Singapore SCDF, Australia NCC)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-sm font-['Work_Sans'] text-[#181c1d]"
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-[#5c5e67] hover:text-[#181c1d] hover:bg-[#ebeeef]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 max-h-96 overflow-y-auto space-y-2 text-xs font-['Work_Sans']">
          <div className="text-[10px] font-['JetBrains_Mono'] font-bold text-[#5c5e67] uppercase tracking-wider mb-2">
            Regional Fire Standards ({results.length} Matches)
          </div>

          {results.length === 0 ? (
            <div className="p-6 text-center text-[#5c5e67]">
              No direct matches found for "{query}". Try searching "ASTM", "Euroclass", "Singapore", or "25/50".
            </div>
          ) : (
            results.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectResult('compliance', item.id);
                  onClose();
                }}
                className="p-3 bg-[#f1f4f5] hover:bg-[#96c115]/10 rounded-lg border border-[#c4c9b0] transition-colors cursor-pointer flex justify-between items-center group"
              >
                <div className="space-y-1">
                  <div className="font-['JetBrains_Mono'] font-bold text-[#4e6700] text-sm flex items-center gap-2">
                    <span>{item.region}</span>
                    <span className="text-xs text-[#006591] font-normal">({item.localCode})</span>
                  </div>
                  <div className="text-[#181c1d] font-medium">{item.testedStandard} - {item.classification}</div>
                  <div className="text-[#5c5e67] text-[11px]">{item.applicationNote}</div>
                </div>

                <ArrowRight className="w-4 h-4 text-[#006591] group-hover:translate-x-1 transition-transform shrink-0" />
              </div>
            ))
          )}
        </div>

        {/* Search Footer */}
        <div className="p-3 bg-[#e0e3e4] border-t border-[#c4c9b0] text-[11px] font-['JetBrains_Mono'] text-[#5c5e67] flex justify-between">
          <span>Press ESC or click X to dismiss</span>
          <span className="text-[#4e6700] font-bold">Armacell APAC Database</span>
        </div>
      </div>
    </div>
  );
};
