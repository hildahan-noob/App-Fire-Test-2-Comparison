import { Hotspot, ComplianceRecord, FlameSpreadPoint, SmokeTestData } from '../types';

export const HOTSPOTS: Hotspot[] = [
  {
    id: 1,
    title: "Sticky Jump-Links Navigation",
    category: "Navigation & Information Architecture",
    shortLabel: "Standards Jump-Links",
    targetId: "target-1",
    xPercent: 50,
    yPercent: 7,
    color: "primary",
    rationale: "Navigation: Sticky jump-links provide instant access to deep technical data, solving the high drop-off rate seen in heatmaps.",
    heatmapInsight: "Original heatmap showed 68% drop-off before reaching technical compliance tables due to dense wall of text."
  },
  {
    id: 2,
    title: "'Did You Know?' High-Impact Callout",
    category: "Engagement & Contextual Guidance",
    shortLabel: "Key Standard Differentiation",
    targetId: "target-2",
    xPercent: 88,
    yPercent: 24,
    color: "secondary",
    rationale: "Engagement: The 'Did You Know?' callout is moved above the fold to capture engineers' interest before they bounce.",
    heatmapInsight: "Critical classification mismatch between US ASTM E84 Class A and EU EN 13501-1 Class A1 was previously buried on line 42."
  },
  {
    id: 3,
    title: "Interactive Smoke & Flame Data Visualizer",
    category: "Interactive Data & Visual Analytics",
    shortLabel: "Interactive Data Section",
    targetId: "target-3",
    xPercent: 30,
    yPercent: 49,
    color: "primary",
    rationale: "Interaction: Static data is transformed into interactive charts, addressing the 'dead clicks' where users expected interactivity.",
    heatmapInsight: "Analytics registered over 1,400 dead clicks per month on static rating numbers in the original legacy layout."
  },
  {
    id: 4,
    title: "APAC Regional Compliance Matrix",
    category: "Authority & Localized Technical Specs",
    shortLabel: "Compliance Matrix Table",
    targetId: "target-4",
    xPercent: 50,
    yPercent: 74,
    color: "secondary",
    rationale: "Authority: The APAC Compliance table is elevated and reformatted for clarity, establishing regional technical authority.",
    heatmapInsight: "Engineers in Singapore, Australia, and Vietnam spent 3x longer scanning static text to verify regional code adherence."
  },
  {
    id: 5,
    title: "High-Intent Dual Conversion CTAs",
    category: "Conversion Rate Optimization",
    shortLabel: "Action CTAs",
    targetId: "target-5",
    xPercent: 48,
    yPercent: 93,
    color: "primary",
    rationale: "Conversion: Dual CTAs offer both high-intent 'Contact' and low-friction 'Download' paths to improve lead generation.",
    heatmapInsight: "Primary contact link was buried in footer text; adding direct Technical PDF download increased conversion rate by +142%."
  }
];

export const APAC_COMPLIANCE_DATA: ComplianceRecord[] = [
  {
    id: "sg-01",
    region: "Singapore",
    localCode: "SCDF CP 13 / SS 567",
    testedStandard: "EN 13501-1 (B-s1, d0)",
    classification: "Class 0 / B-s1, d0",
    status: "COMPLIANT",
    flameSpreadIndex: "< 25 (FSI)",
    smokeDensityIndex: "< 50 (SDI)",
    applicationNote: "Mandatory for chilled water pipe insulation in public facilities and MRT underground stations."
  },
  {
    id: "au-02",
    region: "Australia",
    localCode: "NCC 2022 Part C / AS 1530.3",
    testedStandard: "AS/NZS 1530.3",
    classification: "Group 1 Standard Material",
    status: "COMPLIANT",
    flameSpreadIndex: "Index 0 (0-10 scale)",
    smokeDensityIndex: "Index 2-3 (0-10 scale)",
    applicationNote: "Fully compliant for commercial HVAC duct lining and multi-residential ductwork."
  },
  {
    id: "jp-03",
    region: "Japan",
    localCode: "Building Standards Law Act 108",
    testedStandard: "JIS A 9511 / ISO 5660-1",
    classification: "Non-Combustible Grade 1",
    status: "CERTIFIED",
    flameSpreadIndex: "Heat Release < 8MJ/m²",
    smokeDensityIndex: "Smoke Toxicity Pass",
    applicationNote: "MLIT approved insulation for cleanroom air handling and pharmaceutical processing units."
  },
  {
    id: "kr-04",
    region: "South Korea",
    localCode: "MOIS Notice 2021-22",
    testedStandard: "KS M 3808 / ISO 1182",
    classification: "Flame-Retardant Level 2",
    status: "COMPLIANT",
    flameSpreadIndex: "< 20 (FSI)",
    smokeDensityIndex: "< 45 (SDI)",
    applicationNote: "Required for high-rise residential riser shafts and semiconductor plant HVAC systems."
  },
  {
    id: "vn-05",
    region: "Vietnam",
    localCode: "QCVN 06:2022/BXD",
    testedStandard: "EN 13501-1",
    classification: "Category Ch - B-s1, d0",
    status: "COMPLIANT",
    flameSpreadIndex: "< 25 (FSI)",
    smokeDensityIndex: "< 50 (SDI)",
    applicationNote: "Approved for industrial park manufacturing plants and commercial office towers."
  },
  {
    id: "th-06",
    region: "Thailand",
    localCode: "EIT Standard 2001-64",
    testedStandard: "ASTM E84 25/50",
    classification: "Class A Interior Finish",
    status: "COMPLIANT",
    flameSpreadIndex: "15 (FSI)",
    smokeDensityIndex: "35 (SDI)",
    applicationNote: "Recommended for chilled water lines in shopping complexes and hotel HVAC."
  },
  {
    id: "my-07",
    region: "Malaysia",
    localCode: "UBBL 1984 By-law 134",
    testedStandard: "BS 476 Part 6 & 7",
    classification: "Class 0 Fire Rating",
    status: "CERTIFIED",
    flameSpreadIndex: "Sub-index i1 < 6",
    smokeDensityIndex: "Pass Low Smoke",
    applicationNote: "BOMBA certified elastomeric foam insulation for industrial facilities."
  },
  {
    id: "id-08",
    region: "Indonesia",
    localCode: "SNI 03-1738-2000",
    testedStandard: "ASTM E84 / ISO 5659-2",
    classification: "Class 1 Surface Spread",
    status: "PENDING",
    flameSpreadIndex: "20 (FSI)",
    smokeDensityIndex: "45 (SDI)",
    applicationNote: "Annual re-verification cycle underway with BSN testing authorities."
  }
];

export const FLAME_SPREAD_CURVE: FlameSpreadPoint[] = [
  { timeMinutes: 0, armaflexIndex: 0, competitorIndex: 0 },
  { timeMinutes: 1, armaflexIndex: 2, competitorIndex: 8 },
  { timeMinutes: 2, armaflexIndex: 5, competitorIndex: 24 },
  { timeMinutes: 3, armaflexIndex: 12, competitorIndex: 55 },
  { timeMinutes: 4, armaflexIndex: 18, competitorIndex: 85 },
  { timeMinutes: 5, armaflexIndex: 22, competitorIndex: 110 },
  { timeMinutes: 6, armaflexIndex: 24, competitorIndex: 125 },
  { timeMinutes: 7, armaflexIndex: 25, competitorIndex: 135 },
  { timeMinutes: 8, armaflexIndex: 25, competitorIndex: 142 },
  { timeMinutes: 9, armaflexIndex: 25, competitorIndex: 148 },
  { timeMinutes: 10, armaflexIndex: 25, competitorIndex: 150 }
];

export const SMOKE_TEST_DATA: Record<number, SmokeTestData> = {
  13: {
    thicknessMm: 13,
    temperatureC: 20,
    armaflexSmoke: 20,
    competitorSmoke: 110,
    armaflexFlame: 10,
    competitorFlame: 120
  },
  19: {
    thicknessMm: 19,
    temperatureC: 20,
    armaflexSmoke: 25,
    competitorSmoke: 120,
    armaflexFlame: 15,
    competitorFlame: 135
  },
  25: {
    thicknessMm: 25,
    temperatureC: 20,
    armaflexSmoke: 30,
    competitorSmoke: 140,
    armaflexFlame: 20,
    competitorFlame: 150
  },
  32: {
    thicknessMm: 32,
    temperatureC: 20,
    armaflexSmoke: 38,
    competitorSmoke: 165,
    armaflexFlame: 24,
    competitorFlame: 175
  }
};

export const TAB_CONTENT = {
  standards: {
    title: "Fire Standards Matrix (ASTM E84 vs EN 13501-1)",
    description: "Comparison of testing parameters, sample orientations, air velocity, and rating limits across North American and European fire codes.",
    benchmarks: [
      { parameter: "Test Method", astm: "ASTM E84 Steiner Tunnel (24 ft length)", en: "EN 13823 Single Burning Item (SBI) + EN ISO 11925-2" },
      { parameter: "Primary Metrics", astm: "Flame Spread Index (FSI) & Smoke Developed Index (SDI)", en: "Heat Release (FIGRA), Smoke Production (SMOGRA), Flaming Droplets (d0-d2)" },
      { parameter: "Class A / B-s1,d0 Limit", astm: "FSI ≤ 25, SDI ≤ 50", en: "FIGRA ≤ 120 W/s, SMOGRA ≤ 30 m²/s², d0 (No droplets in 600s)" },
      { parameter: "Sample Mounting", astm: "Horizontal overhead specimen with underside flame exposure", en: "Vertical corner sample geometry with 30 kW propane burner" },
      { parameter: "Key Industrial Advantage", astm: "ArmaFlex Ultra satisfies strict 25/50 standard across all wall thicknesses up to 32mm", en: "Achieves B-s1, d0 non-dripping certification preventing vertical fire spread" }
    ]
  },
  testing: {
    title: "Steiner Tunnel & SBI Testing Procedures",
    description: "Detailed breakdown of laboratory testing protocols for closed-cell elastomeric insulation materials.",
    benchmarks: [
      { parameter: "Tunnel Pre-Conditioning", astm: "73.4°F ± 5°F (23°C ± 2.8°C), 50% ± 5% RH for 24h", en: "23°C ± 2°C, 50% ± 5% RH for minimum 14 days" },
      { parameter: "Ignition Source", astm: "Two gas burners generating 89 kW flame intensity", en: "Main corner burner delivering 30 kW heat output" },
      { parameter: "Photometric Measuring", astm: "Light obscuration meter at exhaust duct exit", en: "White light beam attenuation system in exhaust plenum" },
      { parameter: "Airflow Velocity", astm: "240 ft/min (73.2 m/min) controlled forced draft", en: "0.60 m³/s exhaust fan volumetric flow rate" },
      { parameter: "Observation Duration", astm: "10 Minutes Continuous Exposure", en: "20 Minutes Total SBI Exposure Duration" }
    ]
  },
  safety: {
    title: "Material Safety & Toxic Smoke Emission Profiles",
    description: "Analysis of halogen-free flame retardants, smoke density attenuation, and optical safety in closed spaces.",
    benchmarks: [
      { parameter: "Toxic Gas Species", astm: "CO, CO2, HCl, HBr emission quantification", en: "EN 45545-2 / ISO 5659-2 Toxicity Index CIT G < 0.75" },
      { parameter: "Cellular Structure", astm: "Built-in micro-cell vapor barrier, 98%+ closed cell ratio", en: "High water vapor resistance factor μ ≥ 10,000" },
      { parameter: "Smoke Obscuration Speed", astm: "Peak SDI reached at 3.5 min; self-extinguishing", en: "SMOGRA rating s1 (< 30 m²/s² max production rate)" },
      { parameter: "Environmental Safety", astm: "Zero ODP (Ozone Depletion Potential), GWP < 1", en: "REACH SVHC Compliant, RoHS Directive 2011/65/EU" },
      { parameter: "Fungal/Mold Resistance", astm: "ASTM G21 Zero Growth Rating (0 Rating)", en: "Microban® antimicrobial protection integrated" }
    ]
  },
  global: {
    title: "Global Project Compliance & Regional Cross-Mapping",
    description: "How ArmaFlex Ultra maps across North America, Europe, Middle East, and Asia-Pacific regional codes.",
    benchmarks: [
      { parameter: "Middle East (Civil Defense)", astm: "Dubai Civil Defense (DCD) Class A 25/50 Approved", en: "Civil Defense Qatar & Saudi Aramco Standard SAES-N-001" },
      { parameter: "European Union", astm: "Accepted via EN equivalents under CPR 305/2011", en: "CE Marked Euroclass B-s1, d0 across all EU member states" },
      { parameter: "North America (US & CA)", astm: "NFPA 90A/90B Compliant, UL 723 Listed, CAN/ULC S102", en: "FM Approved (Factory Mutual Class 4880 Building Panels)" },
      { parameter: "Asia-Pacific Region", astm: "Singapore CP 13, Australia NCC Group 1, Japan MLIT Approved", en: "China GB 8624 B1-B Grade, Vietnam QCVN 06 certified" },
      { parameter: "Marine & Offshore", astm: "US Coast Guard Approval No. 164.112", en: "IMO FTP Code 2010 Part 2 & Part 5 MED Module B" }
    ]
  }
};
