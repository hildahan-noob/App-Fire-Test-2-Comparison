import React, { useState } from 'react';
import { X, Send, ShieldCheck, CheckCircle2, User, Mail, Building, Phone } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [region, setRegion] = useState('Singapore');
  const [thickness, setThickness] = useState('25');
  const [application, setApplication] = useState('Chilled Water Pipe');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Technical Engineer',
    email: 'engineer@industrial-project.com',
    company: 'APAC Engineering Group',
    phone: '+65 6100 1234',
    notes: 'Requiring EN 13501-1 B-s1, d0 compliance verification for underground MRT station HVAC.'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in">
      <div className="bg-white rounded-xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#c4c9b0] font-['Work_Sans']">
        {/* Header */}
        <div className="bg-[#4e6700] text-white p-5 flex justify-between items-center relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#96c115] text-[#384b00] rounded-lg flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-['Work_Sans'] font-bold text-lg leading-tight">
                Consult Fire Safety Specialist
              </h3>
              <p className="text-xs text-[#c4f34c] font-['JetBrains_Mono']">
                Armacell APAC Engineering Support
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/20 text-white transition-colors"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#96c115]/20 text-[#4e6700] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-bold text-xl text-[#181c1d]">Request Received!</h4>
            <p className="text-sm text-[#444936] leading-relaxed">
              An Armacell Senior Fire Protection Engineer in <strong>{region}</strong> will contact you at <strong>{formData.email}</strong> within 2 business hours with certified documentation.
            </p>
            <div className="bg-[#f1f4f5] p-4 rounded-lg text-left text-xs font-['JetBrains_Mono'] space-y-1 border border-[#c4c9b0]">
              <div><strong>Project Region:</strong> {region}</div>
              <div><strong>Insulation Thickness:</strong> {thickness}mm ArmaFlex Ultra</div>
              <div><strong>Application:</strong> {application}</div>
              <div><strong>Target Standard:</strong> EN 13501-1 (B-s1, d0) / ASTM E84 (25/50)</div>
            </div>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-6 py-2.5 bg-[#4e6700] text-white rounded-lg font-bold text-sm hover:bg-[#4e6700]/90 transition-colors"
            >
              Close Consultation Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Quick Specs Configurator */}
            <div className="bg-[#f1f4f5] p-3.5 rounded-lg border border-[#c4c9b0] space-y-3">
              <div className="text-xs font-['JetBrains_Mono'] font-bold text-[#4e6700] uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                1. Project Technical Parameters
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs font-['JetBrains_Mono']">
                <div>
                  <label className="block text-[10px] text-[#444936] mb-1 font-semibold">Region</label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full p-2 bg-white border border-[#c4c9b0] rounded text-[#181c1d]"
                  >
                    <option value="Singapore">Singapore (SCDF)</option>
                    <option value="Australia">Australia (NCC Part C)</option>
                    <option value="Japan">Japan (JIS A 9511)</option>
                    <option value="Vietnam">Vietnam (QCVN 06)</option>
                    <option value="Thailand">Thailand (EIT)</option>
                    <option value="Middle East">UAE / Middle East</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] text-[#444936] mb-1 font-semibold">Thickness</label>
                  <select
                    value={thickness}
                    onChange={(e) => setThickness(e.target.value)}
                    className="w-full p-2 bg-white border border-[#c4c9b0] rounded text-[#181c1d]"
                  >
                    <option value="13">13mm (1/2")</option>
                    <option value="19">19mm (3/4")</option>
                    <option value="25">25mm (1")</option>
                    <option value="32">32mm (1-1/4")</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] text-[#444936] mb-1 font-semibold">Application</label>
                  <select
                    value={application}
                    onChange={(e) => setApplication(e.target.value)}
                    className="w-full p-2 bg-white border border-[#c4c9b0] rounded text-[#181c1d]"
                  >
                    <option value="Chilled Water Pipe">Chilled Water Pipe</option>
                    <option value="Ductwork Lining">HVAC Duct Lining</option>
                    <option value="Cleanroom HVAC">Cleanroom Unit</option>
                    <option value="Riser Shaft">Riser Shaft</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 pt-1">
              <div className="text-xs font-['JetBrains_Mono'] font-bold text-[#006591] uppercase tracking-wider">
                2. Contact Information
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-[#444936] mb-1 font-medium flex items-center gap-1">
                    <User className="w-3 h-3 text-[#5c5e67]" /> Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2 border border-[#c4c9b0] rounded text-[#181c1d]"
                  />
                </div>
                <div>
                  <label className="block text-[#444936] mb-1 font-medium flex items-center gap-1">
                    <Mail className="w-3 h-3 text-[#5c5e67]" /> Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2 border border-[#c4c9b0] rounded text-[#181c1d]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-[#444936] mb-1 font-medium flex items-center gap-1">
                    <Building className="w-3 h-3 text-[#5c5e67]" /> Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full p-2 border border-[#c4c9b0] rounded text-[#181c1d]"
                  />
                </div>
                <div>
                  <label className="block text-[#444936] mb-1 font-medium flex items-center gap-1">
                    <Phone className="w-3 h-3 text-[#5c5e67]" /> Phone Number
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-2 border border-[#c4c9b0] rounded text-[#181c1d]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#444936] mb-1 font-medium">
                  Project Requirements & Standards
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-2 border border-[#c4c9b0] rounded text-xs text-[#181c1d]"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#ebeeef]">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-[#c4c9b0] rounded-lg text-xs font-['JetBrains_Mono'] text-[#5c5e67] hover:bg-[#f1f4f5]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#4e6700] text-white rounded-lg font-bold text-xs font-['JetBrains_Mono'] hover:bg-[#3a4d00] transition-all flex items-center gap-2 shadow-md active:scale-95"
              >
                <Send className="w-3.5 h-3.5" />
                Submit Consultation Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
