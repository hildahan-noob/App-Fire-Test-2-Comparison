import React, { useState } from 'react';
import {
  HelpCircle,
  Lightbulb,
  CheckCircle2,
  Download,
  Headphones,
  Sliders,
  ChevronDown,
  Search,
  Filter,
  Sparkles,
  Info,
  ExternalLink
} from 'lucide-react';
import {
  TabCategory,
  Hotspot,
  ComplianceRecord
} from '../types';
import {
  HOTSPOTS,
  APAC_COMPLIANCE_DATA,
  FLAME_SPREAD_CURVE,
  SMOKE_TEST_DATA,
  TAB_CONTENT
} from '../data/mockData';
import { CalloutBubble } from './CalloutBubble';

interface ReengineeredPanelProps {
  showHotspots: boolean;
  activeHotspotId: number | null;
  setActiveHotspotId: (id: number | null) => void;
  onOpenConsultation: () => void;
  onOpenPdf: () => void;
}

export const ReengineeredPanel: React.FC<ReengineeredPanelProps> = ({
  showHotspots,
  activeHotspotId,
  setActiveHotspotId,
  onOpenConsultation,
  onOpenPdf,
}) => {
  const [activeTab, setActiveTab] = useState<TabCategory>('standards');
  const [thicknessMm, setThicknessMm] = useState<number>(25);
  const [testStandardMode, setTestStandardMode] = useState<'ASTM' | 'EN'>('ASTM');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [selectedRecord, setSelectedRecord] = useState<ComplianceRecord | null>(null);
  const [didYouKnowExpanded, setDidYouKnowExpanded] = useState(false);
  const [activeFlameSpreadPoint, setActiveFlameSpreadPoint] = useState<number | null>(null);

  const currentSmokeData = SMOKE_TEST_DATA[thicknessMm] || SMOKE_TEST_DATA[25];

  // Filter compliance records
  const filteredCompliance = APAC_COMPLIANCE_DATA.filter((record) => {
    const matchesSearch =
      record.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.localCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.testedStandard.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || record.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleHotspotClick = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeHotspotId === id) {
      setActiveHotspotId(null);
    } else {
      setActiveHotspotId(id);
    }
  };

  const currentHotspot = HOTSPOTS.find((h) => h.id === activeHotspotId);

  const handlePrevHotspot = () => {
    if (!activeHotspotId) setActiveHotspotId(1);
    else setActiveHotspotId(activeHotspotId === 1 ? 5 : activeHotspotId - 1);
  };

  const handleNextHotspot = () => {
    if (!activeHotspotId) setActiveHotspotId(1);
    else setActiveHotspotId(activeHotspotId === 5 ? 1 : activeHotspotId + 1);
  };

  return (
    <section className="w-full h-full bg-[#f7fafb] flex flex-col relative overflow-hidden select-none">
      {/* Panel Top Header Bar */}
      <div className="p-3.5 bg-[#96c115]/25 border-b border-[#96c115]/40 flex justify-between items-center shadow-xs z-10">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#4e6700]" />
          <span className="font-['JetBrains_Mono'] text-[#384b00] text-xs font-bold tracking-wider uppercase">
            RE-ENGINEERED EXPERIENCE (SCREEN_41)
          </span>
        </div>
        <span className="px-2.5 py-0.5 bg-[#006591] text-white text-[11px] rounded font-bold uppercase tracking-tight shadow-2xs">
          OPTIMIZED
        </span>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow relative bg-white m-3 sm:m-4 rounded-xl border border-[#96c115]/30 shadow-xl overflow-hidden flex flex-col">
        <div className="flex-grow overflow-y-auto scrollbar-hide p-4 sm:p-6 space-y-6 relative">

          {/* 1. STICKY JUMP-LINKS NAVIGATION (HOTSPOT 1 TARGET) */}
          <div
            id="target-1"
            className="sticky top-0 z-20 flex items-center gap-2 overflow-x-auto pb-3 pt-1 glass-panel -mx-4 sm:-mx-6 px-4 sm:px-6 mb-4 border-b border-[#c4c9b0]/50"
          >
            <button
              onClick={() => setActiveTab('standards')}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-xs sm:text-sm font-medium transition-all font-['Work_Sans'] ${
                activeTab === 'standards'
                  ? 'bg-[#4e6700] text-white font-bold shadow-sm'
                  : 'bg-[#e6e9ea] text-[#444936] hover:bg-[#d7dadb]'
              }`}
            >
              Standards Matrix
            </button>
            <button
              onClick={() => setActiveTab('testing')}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-xs sm:text-sm font-medium transition-all font-['Work_Sans'] ${
                activeTab === 'testing'
                  ? 'bg-[#4e6700] text-white font-bold shadow-sm'
                  : 'bg-[#e6e9ea] text-[#444936] hover:bg-[#d7dadb]'
              }`}
            >
              Testing Procedures
            </button>
            <button
              onClick={() => setActiveTab('safety')}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-xs sm:text-sm font-medium transition-all font-['Work_Sans'] ${
                activeTab === 'safety'
                  ? 'bg-[#4e6700] text-white font-bold shadow-sm'
                  : 'bg-[#e6e9ea] text-[#444936] hover:bg-[#d7dadb]'
              }`}
            >
              Material Safety
            </button>
            <button
              onClick={() => setActiveTab('global')}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-xs sm:text-sm font-medium transition-all font-['Work_Sans'] ${
                activeTab === 'global'
                  ? 'bg-[#4e6700] text-white font-bold shadow-sm'
                  : 'bg-[#e6e9ea] text-[#444936] hover:bg-[#d7dadb]'
              }`}
            >
              Global Compliance
            </button>
          </div>

          {/* HERO SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#96c115]/15 text-[#384b00] rounded-full text-xs font-['JetBrains_Mono'] font-bold border border-[#96c115]/40">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4e6700]" />
                <span>Class 0 / Euroclass B-s1, d0 Fire Rating</span>
              </div>
              <h1 className="font-['Work_Sans'] font-extrabold text-2xl sm:text-3xl text-[#4e6700] leading-tight tracking-tight">
                Navigating Fire Standards: ASTM E84 & EN 13501-1
              </h1>
              <p className="text-sm sm:text-base text-[#444936] leading-relaxed">
                Understanding the technical differentiation between US and European fire safety benchmarks for mission-critical industrial insulation.
              </p>
            </div>

            {/* 2. "DID YOU KNOW?" CALLOUT CARD (HOTSPOT 2 TARGET) */}
            <div
              id="target-2"
              className="lg:col-span-4 bg-[#4ebdff]/15 border border-[#4ebdff] p-5 rounded-xl relative overflow-hidden transition-all shadow-xs"
            >
              <HelpCircle className="w-20 h-20 text-[#006591] absolute -right-4 -bottom-4 opacity-10 pointer-events-none" />

              <h3 className="font-['Work_Sans'] font-bold text-base text-[#006591] mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-[#006591]" />
                Did You Know?
              </h3>
              <p className="text-xs text-[#004a6c] leading-relaxed font-['Work_Sans']">
                Class A materials in E84 are not automatically equivalent to Class A1/A2 in EN standards. Standardized mapping is critical for APAC projects.
              </p>

              <button
                onClick={() => setDidYouKnowExpanded(!didYouKnowExpanded)}
                className="mt-3 text-[11px] font-['JetBrains_Mono'] font-bold text-[#006591] hover:underline flex items-center gap-1"
              >
                <span>{didYouKnowExpanded ? 'Hide Classification Map' : 'View Standards Mapping'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${didYouKnowExpanded ? 'rotate-180' : ''}`} />
              </button>

              {/* Expandable Mapping Info */}
              {didYouKnowExpanded && (
                <div className="mt-3 p-2.5 bg-white/90 rounded border border-[#006591]/30 text-[11px] font-['JetBrains_Mono'] space-y-1.5 text-[#004a6c] animate-in fade-in">
                  <div className="font-bold border-b border-[#006591]/20 pb-1">Standards Equivalence:</div>
                  <div className="flex justify-between">
                    <span>ASTM E84 Class A:</span>
                    <span className="font-bold">FSI ≤ 25 / SDI ≤ 50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>EN 13501-1 Euroclass:</span>
                    <span className="font-bold">B-s1, d0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Flaming Droplets:</span>
                    <span className="font-bold text-[#4e6700]">d0 (Zero droplets)</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* DYNAMIC TAB SPECIFICATION DRAWER */}
          <div className="bg-[#f1f4f5] p-4 rounded-xl border border-[#c4c9b0] space-y-3">
            <div className="flex justify-between items-center border-b border-[#c4c9b0] pb-2">
              <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#4e6700] uppercase tracking-wider">
                {TAB_CONTENT[activeTab].title}
              </span>
              <span className="text-[10px] font-['JetBrains_Mono'] text-[#5c5e67]">
                Active Technical Context
              </span>
            </div>
            <p className="text-xs text-[#444936] font-['Work_Sans']">
              {TAB_CONTENT[activeTab].description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-['JetBrains_Mono']">
              {TAB_CONTENT[activeTab].benchmarks.map((item, idx) => (
                <div key={idx} className="bg-white p-2.5 rounded border border-[#c4c9b0]/60 space-y-1">
                  <div className="text-[#006591] font-bold text-[11px]">{item.parameter}</div>
                  <div className="text-[10px] text-[#444936]">
                    <strong>ASTM:</strong> {item.astm}
                  </div>
                  <div className="text-[10px] text-[#4e6700]">
                    <strong>EN Benchmark:</strong> {item.en}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. INTERACTIVE DATA SECTION (HOTSPOT 3 TARGET) */}
          <div id="target-3" className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-2">
            {/* Smoke Development Comparison */}
            <div className="bg-[#f1f4f5] border border-[#c4c9b0] p-5 rounded-xl flex flex-col justify-between space-y-4">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-['JetBrains_Mono'] text-xs font-bold text-[#444936] uppercase tracking-wider">
                    SMOKE DEVELOPMENT COMPARISON
                  </h4>

                  {/* Standard Parameter Toggle */}
                  <div className="flex bg-[#e0e3e4] p-0.5 rounded text-[10px] font-['JetBrains_Mono']">
                    <button
                      onClick={() => setTestStandardMode('ASTM')}
                      className={`px-2 py-0.5 rounded ${
                        testStandardMode === 'ASTM'
                          ? 'bg-[#4e6700] text-white font-bold'
                          : 'text-[#444936]'
                      }`}
                    >
                      ASTM E84
                    </button>
                    <button
                      onClick={() => setTestStandardMode('EN')}
                      className={`px-2 py-0.5 rounded ${
                        testStandardMode === 'EN'
                          ? 'bg-[#006591] text-white font-bold'
                          : 'text-[#444936]'
                      }`}
                    >
                      EN 13501-1
                    </button>
                  </div>
                </div>

                {/* Thickness Selector */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[11px] font-['JetBrains_Mono'] text-[#5c5e67] flex items-center gap-1">
                    <Sliders className="w-3 h-3" /> Thickness:
                  </span>
                  {[13, 19, 25, 32].map((mm) => (
                    <button
                      key={mm}
                      onClick={() => setThicknessMm(mm)}
                      className={`px-2.5 py-1 rounded text-xs font-['JetBrains_Mono'] border transition-all ${
                        thicknessMm === mm
                          ? 'bg-[#96c115] text-[#384b00] font-bold border-[#4e6700]'
                          : 'bg-white border-[#c4c9b0] text-[#5c5e67] hover:bg-[#ebeeef]'
                      }`}
                    >
                      {mm}mm
                    </button>
                  ))}
                </div>

                {/* Animated Bars */}
                <div className="space-y-4 font-['Work_Sans']">
                  {/* ArmaFlex Ultra */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-[#4e6700] font-bold flex items-center gap-1">
                        ArmaFlex Ultra ({thicknessMm}mm)
                      </span>
                      <span className="font-['JetBrains_Mono'] font-bold text-[#4e6700]">
                        {testStandardMode === 'ASTM'
                          ? `${currentSmokeData.armaflexSmoke} / 50 Max SDI`
                          : `s1 Class (< 30 m²/s²)`}
                      </span>
                    </div>
                    <div className="h-2.5 bg-[#c4c9b0] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#96c115] rounded-full transition-all duration-700 shadow-xs"
                        style={{
                          width: `${
                            testStandardMode === 'ASTM'
                              ? (currentSmokeData.armaflexSmoke / 150) * 100
                              : 20
                          }%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Competitor */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-[#006591]">Competitor High-Temp</span>
                      <span className="font-['JetBrains_Mono'] font-bold text-[#ba1a1a]">
                        {testStandardMode === 'ASTM'
                          ? `${currentSmokeData.competitorSmoke} / 150 SDI`
                          : `s2/s3 Class (> 120 m²/s²)`}
                      </span>
                    </div>
                    <div className="h-2.5 bg-[#c4c9b0] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#006591] rounded-full transition-all duration-700 shadow-xs"
                        style={{
                          width: `${
                            testStandardMode === 'ASTM'
                              ? (currentSmokeData.competitorSmoke / 180) * 100
                              : 85
                          }%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-[#444936] italic font-['Work_Sans'] border-t border-[#c4c9b0]/60 pt-2">
                *Interactive graph: Toggle between ASTM E84 and EN 13501-1 parameters to observe low smoke emission dynamics.
              </p>
            </div>

            {/* Flame Spread Dynamics SVG Chart */}
            <div className="bg-[#f1f4f5] border border-[#c4c9b0] p-5 rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-['JetBrains_Mono'] text-xs font-bold text-[#444936] uppercase tracking-wider">
                    FLAME SPREAD DYNAMICS (10-MIN STEINER TUNNEL)
                  </h4>
                  <span className="text-[10px] font-['JetBrains_Mono'] text-[#4e6700] font-bold bg-[#96c115]/20 px-2 py-0.5 rounded">
                    ArmaFlex Ceiling ≤ 25
                  </span>
                </div>

                {/* SVG Line Graph */}
                <div className="relative h-36 bg-white rounded border border-dashed border-[#747964]/50 p-2 overflow-hidden flex items-end">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between p-2 pointer-events-none opacity-20">
                    <div className="border-b border-[#181c1d] w-full" />
                    <div className="border-b border-[#181c1d] w-full" />
                    <div className="border-b border-[#181c1d] w-full" />
                  </div>

                  {/* SVG Curves */}
                  <svg className="w-full h-full overflow-visible z-10" viewBox="0 0 300 120">
                    {/* Competitor Curve */}
                    <path
                      d="M 0,120 Q 50,110 100,60 T 200,20 T 300,5"
                      fill="none"
                      stroke="#006591"
                      strokeWidth="2.5"
                      strokeDasharray="4 2"
                    />
                    {/* ArmaFlex Curve */}
                    <path
                      d="M 0,120 Q 60,115 120,102 T 240,98 T 300,98"
                      fill="none"
                      stroke="#4e6700"
                      strokeWidth="3"
                    />

                    {/* Data Points */}
                    {FLAME_SPREAD_CURVE.map((pt, i) => {
                      const cx = (i / 10) * 300;
                      const cyArma = 120 - (pt.armaflexIndex / 160) * 110;
                      return (
                        <circle
                          key={i}
                          cx={cx}
                          cy={cyArma}
                          r={activeFlameSpreadPoint === i ? 5 : 3}
                          fill="#96c115"
                          stroke="#384b00"
                          strokeWidth="1.5"
                          className="cursor-pointer hover:r-6 transition-all"
                          onMouseEnter={() => setActiveFlameSpreadPoint(i)}
                          onMouseLeave={() => setActiveFlameSpreadPoint(null)}
                        />
                      );
                    })}
                  </svg>

                  {/* Legend Overlay */}
                  <div className="absolute top-2 left-2 flex gap-3 text-[10px] font-['JetBrains_Mono'] bg-white/80 p-1 rounded backdrop-blur-xs">
                    <span className="flex items-center gap-1 text-[#4e6700] font-bold">
                      <span className="w-2.5 h-0.5 bg-[#4e6700]" /> ArmaFlex Ultra
                    </span>
                    <span className="flex items-center gap-1 text-[#006591]">
                      <span className="w-2.5 h-0.5 bg-[#006591]" /> Competitor
                    </span>
                  </div>
                </div>

                {/* Point Hover Tooltip */}
                {activeFlameSpreadPoint !== null && (
                  <div className="mt-2 text-[11px] font-['JetBrains_Mono'] bg-white p-1.5 rounded border border-[#c4c9b0] flex justify-between text-[#181c1d]">
                    <span>Time: <strong>{FLAME_SPREAD_CURVE[activeFlameSpreadPoint].timeMinutes} min</strong></span>
                    <span className="text-[#4e6700] font-bold">ArmaFlex: {FLAME_SPREAD_CURVE[activeFlameSpreadPoint].armaflexIndex} FSI</span>
                    <span className="text-[#006591]">Competitor: {FLAME_SPREAD_CURVE[activeFlameSpreadPoint].competitorIndex} FSI</span>
                  </div>
                )}
              </div>

              <div className="text-[11px] text-[#5c5e67] font-['JetBrains_Mono'] mt-2 flex justify-between">
                <span>0 min (Ignition)</span>
                <span>5 min (Peak Obscuration)</span>
                <span>10 min (End Test)</span>
              </div>
            </div>
          </div>

          {/* 4. APAC REGIONAL COMPLIANCE MATRIX TABLE (HOTSPOT 4 TARGET) */}
          <div id="target-4" className="rounded-xl border border-[#747964]/40 overflow-hidden shadow-xs">
            {/* Table Control Header */}
            <div className="bg-[#5c5e67] text-white px-5 py-3.5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <h4 className="font-['JetBrains_Mono'] font-bold text-xs uppercase tracking-wider text-white">
                  APAC REGIONAL COMPLIANCE MATRIX
                </h4>
                <p className="text-[11px] text-[#e1e2ec] font-['Work_Sans'] mt-0.5">
                  Localized code compliance across Asia-Pacific jurisdictions
                </p>
              </div>

              {/* Search & Status Filter */}
              <div className="flex items-center gap-2 w-full sm:w-auto text-xs font-['JetBrains_Mono']">
                <div className="relative flex-grow sm:flex-grow-0">
                  <Search className="w-3.5 h-3.5 text-white/60 absolute left-2.5 top-2" />
                  <input
                    type="text"
                    placeholder="Search region or code..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8 pr-3 py-1 bg-white/10 hover:bg-white/20 focus:bg-white text-white focus:text-[#181c1d] rounded border border-white/20 text-xs w-full sm:w-44 transition-all"
                  />
                </div>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-2 py-1 bg-white/10 hover:bg-white/20 text-white rounded border border-white/20 text-xs cursor-pointer"
                >
                  <option value="ALL" className="text-black">All Statuses</option>
                  <option value="COMPLIANT" className="text-black">COMPLIANT</option>
                  <option value="CERTIFIED" className="text-black">CERTIFIED</option>
                  <option value="PENDING" className="text-black">PENDING</option>
                </select>
              </div>
            </div>

            {/* Table Content */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse font-['JetBrains_Mono'] text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#e6e9ea] border-b border-[#747964]/40 text-[#181c1d]">
                    <th className="p-3.5 font-bold">Region</th>
                    <th className="p-3.5 font-bold">Local Building Code</th>
                    <th className="p-3.5 font-bold">Tested Standard</th>
                    <th className="p-3.5 font-bold">Status</th>
                    <th className="p-3.5 font-bold text-right">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c4c9b0]">
                  {filteredCompliance.map((row) => (
                    <tr
                      key={row.id}
                      onClick={() => setSelectedRecord(row)}
                      className="hover:bg-[#f1f4f5] transition-colors cursor-pointer group"
                    >
                      <td className="p-3.5 font-bold text-[#181c1d] flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#96c115]" />
                        {row.region}
                      </td>
                      <td className="p-3.5 text-[#444936]">{row.localCode}</td>
                      <td className="p-3.5 text-[#006591] font-medium">{row.testedStandard}</td>
                      <td className="p-3.5">
                        <span
                          className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-tight inline-block ${
                            row.status === 'COMPLIANT'
                              ? 'bg-[#96c115]/20 text-[#384b00]'
                              : row.status === 'CERTIFIED'
                              ? 'bg-[#006591]/20 text-[#004a6c]'
                              : 'bg-[#ffdad6] text-[#93000a]'
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="p-3.5 text-right text-[#006591] group-hover:underline text-xs">
                        View Note →
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Selected Compliance Drawer */}
            {selectedRecord && (
              <div className="p-4 bg-[#f1f4f5] border-t border-[#c4c9b0] text-xs font-['Work_Sans'] flex justify-between items-center animate-in fade-in">
                <div className="space-y-1">
                  <div className="font-['JetBrains_Mono'] font-bold text-[#4e6700] flex items-center gap-2">
                    <span>{selectedRecord.region} Code Details:</span>
                    <span className="text-[#006591]">{selectedRecord.classification}</span>
                  </div>
                  <p className="text-[#444936]">{selectedRecord.applicationNote}</p>
                </div>
                <button
                  onClick={() => setSelectedRecord(null)}
                  className="px-3 py-1 bg-white border border-[#c4c9b0] rounded text-xs font-['JetBrains_Mono'] hover:bg-[#ebeeef]"
                >
                  Close
                </button>
              </div>
            )}
          </div>

          {/* 5. DUAL CONVERSION CTAs (HOTSPOT 5 TARGET) */}
          <div
            id="target-5"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 py-8 border-t border-[#c4c9b0] mt-4"
          >
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#4e6700] text-white px-8 py-3.5 rounded-lg font-['Work_Sans'] font-bold text-base shadow-lg hover:bg-[#3a4d00] active:scale-95 transition-all"
            >
              <Headphones className="w-5 h-5 text-[#c4f34c]" />
              Consult Specialist
            </button>

            <button
              onClick={onOpenPdf}
              className="w-full sm:w-auto flex items-center justify-center gap-3 border-2 border-[#006591] text-[#006591] px-8 py-3.5 rounded-lg font-['Work_Sans'] font-bold text-base hover:bg-[#006591]/10 active:scale-95 transition-all"
            >
              <Download className="w-5 h-5 text-[#006591]" />
              Technical PDF
            </button>
          </div>

        </div>

        {/* OVERLAY HOTSPOT BUTTONS (1 TO 5) */}
        {showHotspots && (
          <>
            {HOTSPOTS.map((hotspot) => {
              const isSelected = activeHotspotId === hotspot.id;
              const isGreen = hotspot.color === 'primary';

              return (
                <div
                  key={hotspot.id}
                  onClick={(e) => handleHotspotClick(hotspot.id, e)}
                  style={{
                    left: `${hotspot.xPercent}%`,
                    top: `${hotspot.yPercent}%`,
                  }}
                  className="absolute z-30 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  title={`Click to view UX Rationale #${hotspot.id}`}
                >
                  <div className="relative w-9 h-9 flex items-center justify-center">
                    {/* Pulsing ring */}
                    <div
                      className={`absolute inset-0 rounded-full animate-hotspot-ping ${
                        isGreen ? 'bg-[#96c115]/60' : 'bg-[#006591]/60'
                      }`}
                    />

                    {/* Main Circle Badge */}
                    <div
                      className={`relative w-7 h-7 text-white rounded-full flex items-center justify-center font-['JetBrains_Mono'] font-bold text-xs shadow-lg transition-transform group-hover:scale-125 ${
                        isGreen ? 'bg-[#4e6700]' : 'bg-[#006591]'
                      } ${isSelected ? 'ring-4 ring-yellow-400 scale-125' : ''}`}
                    >
                      {hotspot.id}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}

        {/* CALLOUT BUBBLE OVERLAY POPUP */}
        {showHotspots && activeHotspotId && currentHotspot && (
          <div
            className="absolute z-50 transition-all duration-300"
            style={{
              left: `${Math.min(Math.max(currentHotspot.xPercent - 15, 5), 55)}%`,
              top: `${Math.min(Math.max(currentHotspot.yPercent + 2, 8), 60)}%`,
            }}
          >
            <CalloutBubble
              hotspot={currentHotspot}
              totalHotspots={HOTSPOTS.length}
              onClose={() => setActiveHotspotId(null)}
              onPrev={handlePrevHotspot}
              onNext={handleNextHotspot}
            />
          </div>
        )}
      </div>
    </section>
  );
};
