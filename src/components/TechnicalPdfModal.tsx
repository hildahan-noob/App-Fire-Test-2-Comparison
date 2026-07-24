import React, { useState } from 'react';
import { X, Download, Printer, CheckCircle2, ShieldAlert, FileText, Share2 } from 'lucide-react';

interface TechnicalPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechnicalPdfModal: React.FC<TechnicalPdfModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
    }, 4000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 animate-in fade-in">
      <div className="bg-[#e0e3e4] rounded-xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-[#c4c9b0]">
        {/* Top Control Bar */}
        <div className="bg-[#181c1d] text-white p-3.5 px-5 flex items-center justify-between font-['JetBrains_Mono'] text-xs">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-[#96c115]" />
            <span className="font-bold tracking-wide">
              ARMACELL-ULTRA-FIRE-DATASHEET-2026.PDF
            </span>
            <span className="bg-[#006591] text-white text-[10px] px-2 py-0.5 rounded font-semibold">
              OFFICIAL CERTIFIED
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-1.5 rounded hover:bg-white/20 text-[#e6e9ea] transition-colors flex items-center gap-1 text-[11px]"
              title="Print Specification"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={handleDownload}
              className={`px-3 py-1.5 rounded font-bold transition-all flex items-center gap-1.5 text-[11px] ${
                downloaded
                  ? 'bg-[#96c115] text-[#384b00]'
                  : 'bg-[#006591] text-white hover:bg-[#004c6e]'
              }`}
            >
              <Download className="w-4 h-4" />
              {downloaded ? 'Downloaded!' : 'Download PDF'}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded hover:bg-white/20 text-white transition-colors ml-2"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Document Canvas View */}
        <div className="flex-grow p-6 sm:p-8 overflow-y-auto bg-white font-['Work_Sans'] text-[#181c1d] space-y-6">
          {/* Datasheet Header */}
          <div className="border-b-2 border-[#4e6700] pb-4 flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 bg-[#96c115] rounded-xs rotate-45" />
                <span className="font-['Work_Sans'] font-bold text-xl text-[#4e6700]">
                  ARMACELL INDUSTRIAL
                </span>
              </div>
              <h1 className="text-2xl font-bold text-[#181c1d]">
                ArmaFlex Ultra Fire Standards Technical Datasheet
              </h1>
              <p className="text-xs text-[#5c5e67] font-['JetBrains_Mono'] mt-1">
                Cross-Regulatory Comparative Analysis: ASTM E84 & EN 13501-1
              </p>
            </div>
            <div className="text-right font-['JetBrains_Mono'] text-[11px] text-[#5c5e67]">
              <div>Doc Ref: TS-APAC-2026-F1</div>
              <div>Issue Date: July 2026</div>
              <div className="text-[#4e6700] font-bold">Status: APPROVED</div>
            </div>
          </div>

          {/* Product Overview Box */}
          <div className="bg-[#f1f4f5] p-4 rounded-lg border border-[#c4c9b0] space-y-2">
            <h3 className="font-bold text-sm text-[#4e6700] uppercase font-['JetBrains_Mono']">
              1. Product Identification & Fire Classification Summary
            </h3>
            <p className="text-xs text-[#444936] leading-relaxed">
              ArmaFlex Ultra is a flexible closed-cell elastomeric foam insulation engineered with advanced micro-cell flame-retardant matrix technology. It delivers exceptional flame spread resistance, ultra-low smoke density, and zero flaming droplets during standard fire exposure tests.
            </p>
          </div>

          {/* Test Performance Table */}
          <div className="space-y-2">
            <h3 className="font-bold text-sm text-[#006591] uppercase font-['JetBrains_Mono']">
              2. Laboratory Test Performance Metrics
            </h3>
            <table className="w-full text-xs font-['JetBrains_Mono'] border border-[#c4c9b0] rounded overflow-hidden">
              <thead className="bg-[#e0e3e4] text-[#181c1d]">
                <tr>
                  <th className="p-2.5 text-left border-b border-[#c4c9b0]">Test Parameter</th>
                  <th className="p-2.5 text-left border-b border-[#c4c9b0]">ASTM E84 (USA)</th>
                  <th className="p-2.5 text-left border-b border-[#c4c9b0]">EN 13501-1 (EU)</th>
                  <th className="p-2.5 text-left border-b border-[#c4c9b0]">ArmaFlex Ultra Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c4c9b0]">
                <tr className="hover:bg-[#f1f4f5]">
                  <td className="p-2.5 font-bold">Flame Spread Index (FSI)</td>
                  <td className="p-2.5">FSI ≤ 25 (Class A)</td>
                  <td className="p-2.5">FIGRA ≤ 120 W/s</td>
                  <td className="p-2.5 text-[#4e6700] font-bold">15 - 25 (PASS)</td>
                </tr>
                <tr className="hover:bg-[#f1f4f5]">
                  <td className="p-2.5 font-bold">Smoke Development Index (SDI)</td>
                  <td className="p-2.5">SDI ≤ 50</td>
                  <td className="p-2.5">SMOGRA ≤ 30 m²/s² (s1)</td>
                  <td className="p-2.5 text-[#4e6700] font-bold">25 - 50 (PASS)</td>
                </tr>
                <tr className="hover:bg-[#f1f4f5]">
                  <td className="p-2.5 font-bold">Flaming Droplets</td>
                  <td className="p-2.5">N/A</td>
                  <td className="p-2.5">d0 (No droplets in 600s)</td>
                  <td className="p-2.5 text-[#4e6700] font-bold">d0 (PASS)</td>
                </tr>
                <tr className="hover:bg-[#f1f4f5]">
                  <td className="p-2.5 font-bold">Operating Temperature Range</td>
                  <td className="p-2.5">-50°C to +110°C</td>
                  <td className="p-2.5">-50°C to +110°C</td>
                  <td className="p-2.5 text-[#006591] font-bold">Full Range Certified</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Regional Accreditation Stamps */}
          <div className="pt-2 border-t border-[#c4c9b0] grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-['JetBrains_Mono'] text-[11px]">
            <div className="p-2 bg-[#f1f4f5] border border-[#c4c9b0] rounded">
              <div className="font-bold text-[#4e6700]">SCDF (Singapore)</div>
              <div className="text-[10px] text-[#5c5e67]">CP 13 / SS 567</div>
            </div>
            <div className="p-2 bg-[#f1f4f5] border border-[#c4c9b0] rounded">
              <div className="font-bold text-[#006591]">NCC (Australia)</div>
              <div className="text-[10px] text-[#5c5e67]">AS 1530.3 Group 1</div>
            </div>
            <div className="p-2 bg-[#f1f4f5] border border-[#c4c9b0] rounded">
              <div className="font-bold text-[#4e6700]">MLIT (Japan)</div>
              <div className="text-[10px] text-[#5c5e67]">JIS A 9511 Grade 1</div>
            </div>
            <div className="p-2 bg-[#f1f4f5] border border-[#c4c9b0] rounded">
              <div className="font-bold text-[#006591]">QCVN (Vietnam)</div>
              <div className="text-[10px] text-[#5c5e67]">QCVN 06:2022/BXD</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#f1f4f5] p-3 border-t border-[#c4c9b0] text-center text-xs font-['JetBrains_Mono'] text-[#5c5e67]">
          © 2026 Armacell Industrial. All rights reserved. Registered trademark of Armacell Group.
        </div>
      </div>
    </div>
  );
};
