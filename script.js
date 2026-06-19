'use strict';

/* ═══════════════════════════════════════════════════
   DADOS DAS ETAPAS
   Cada etapa possui: metadados, textos e ilustração SVG
═══════════════════════════════════════════════════ */

const STEPS = [
  /* ── ETAPA 1: PLANTIO ── */
  {
    id:          1,
    icon:        '🌱',
    label:       'Plantio',
    title:       'Plantando Milho',
    subtitle:    'Preparação do Solo e Plantio',
    description: 'Tudo começa com a terra. O solo é preparado com aração e gradagem para garantir aeração e estrutura ideais. Sementes selecionadas são depositadas em sulcos com profundidade e espaçamento precisos, prontas para germinar com vigor sob o sol brasileiro.',
    facts: [
      'Solo arado entre 30 e 40 cm de profundidade',
      'Plantio concentrado de outubro a dezembro no Sul do Brasil',
      'Espaçamento padrão de 70 a 80 cm entre fileiras',
    ],
    visualBg: '#DFF0E3',
    svg: `<svg viewBox="0 0 300 230" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"   stop-color="#A8D8B9"/>
      <stop offset="100%" stop-color="#CEEDC7"/>
    </linearGradient>
    <linearGradient id="soil1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"   stop-color="#8B5E3C"/>
      <stop offset="100%" stop-color="#5C3A1E"/>
    </linearGradient>
  </defs>
  <!-- Céu -->
  <rect width="300" height="230" fill="url(#sky1)" rx="14"/>
  <!-- Sol -->
  <circle cx="256" cy="42" r="30" fill="#FDD835" opacity=".85"/>
  <circle cx="256" cy="42" r="22" fill="#FFEE58" opacity=".95"/>
  <!-- Raios do sol -->
  <g stroke="#FDD835" stroke-width="2.5" stroke-linecap="round" opacity=".55">
    <line x1="256" y1="4"  x2="256" y2="13"/>
    <line x1="256" y1="71" x2="256" y2="80"/>
    <line x1="218" y1="42" x2="227" y2="42"/>
    <line x1="285" y1="42" x2="294" y2="42"/>
    <line x1="229" y1="15" x2="236" y2="22"/>
    <line x1="276" y1="62" x2="283" y2="69"/>
    <line x1="229" y1="69" x2="236" y2="62"/>
    <line x1="276" y1="22" x2="283" y2="15"/>
  </g>
  <!-- Nuvens -->
  <ellipse cx="72"  cy="44" rx="33" ry="14" fill="white" opacity=".82"/>
  <ellipse cx="94"  cy="36" rx="23" ry="13" fill="white" opacity=".82"/>
  <ellipse cx="52"  cy="40" rx="19" ry="11" fill="white" opacity=".82"/>
  <ellipse cx="178" cy="28" rx="25" ry="11" fill="white" opacity=".70"/>
  <ellipse cx="196" cy="22" rx="17" ry="10" fill="white" opacity=".70"/>
  <!-- Terra -->
  <path d="M0 152 Q75 144 150 152 Q225 160 300 152 L300 230 L0 230 Z" fill="url(#soil1)"/>
  <path d="M0 152 Q75 144 150 152 Q225 160 300 152" fill="none" stroke="#5D4037" stroke-width="2"/>
  <!-- Fileiras do solo -->
  <path d="M20 168 Q70 164 120 168" stroke="#6D4C41" stroke-width="1.5" stroke-linecap="round" fill="none" opacity=".45"/>
  <path d="M180 172 Q230 167 280 172" stroke="#6D4C41" stroke-width="1.5" stroke-linecap="round" fill="none" opacity=".45"/>
  <!-- Sementes visíveis no solo -->
  <ellipse cx="96"  cy="166" rx="5" ry="3.5" fill="#BCAAA4" opacity=".7"/>
  <ellipse cx="203" cy="170" rx="5" ry="3.5" fill="#BCAAA4" opacity=".7"/>
  <!-- Broto 1 (esquerda, pequeno) -->
  <line x1="55" y1="152" x2="55" y2="116" stroke="#388E3C" stroke-width="3.5" stroke-linecap="round"/>
  <ellipse cx="42"  cy="124" rx="13" ry="7" fill="#4CAF50" transform="rotate(-32 42 124)"/>
  <ellipse cx="68"  cy="120" rx="13" ry="7" fill="#66BB6A" transform="rotate(32 68 120)"/>
  <!-- Broto 2 (centro, maior) -->
  <line x1="150" y1="152" x2="150" y2="88" stroke="#2E7D32" stroke-width="4.5" stroke-linecap="round"/>
  <ellipse cx="131" cy="112" rx="16" ry="8.5" fill="#388E3C" transform="rotate(-38 131 112)"/>
  <ellipse cx="169" cy="106" rx="16" ry="8.5" fill="#43A047" transform="rotate(38 169 106)"/>
  <ellipse cx="150" cy="81"  rx="12" ry="22"  fill="#2E7D32"/>
  <!-- Broto 3 (direita, pequeno) -->
  <line x1="244" y1="152" x2="244" y2="118" stroke="#388E3C" stroke-width="3.5" stroke-linecap="round"/>
  <ellipse cx="231" cy="126" rx="13" ry="7" fill="#4CAF50" transform="rotate(-28 231 126)"/>
  <ellipse cx="257" cy="122" rx="13" ry="7" fill="#66BB6A" transform="rotate(28 257 122)"/>
  <!-- Minhoca decorativa -->
  <path d="M 30 170 Q40 165 50 170 Q60 175 70 170" fill="none" stroke="#A1887F" stroke-width="3" stroke-linecap="round" opacity=".55"/>
</svg>`,
  },

  /* ── ETAPA 2: FERTILIZANTE ── */
  {
    id:          2,
    icon:        '🌿',
    label:       'Fertilizante',
    title:       'Nutrição da Plantação',
    subtitle:    'Adubação e Cuidados Agronômicos',
    description: 'Com as plântulas em pleno desenvolvimento, inicia-se o manejo nutricional. Fertilizantes nitrogenados, fosfatados e potássicos são aplicados em doses calculadas. O monitoramento da lavoura garante saúde vegetal e produtividade máxima da safra.',
    facts: [
      'Adubação de base seguida de cobertura no estádio V4/V6',
      'Crescente adoção de biofertilizantes e fertilizantes foliares',
      'Monitoramento contínuo de pragas, doenças e plantas daninhas',
    ],
    visualBg: '#E0EED5',
    svg: `<svg viewBox="0 0 300 230" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"   stop-color="#B8DEBA"/>
      <stop offset="100%" stop-color="#A5D6A7"/>
    </linearGradient>
    <linearGradient id="soil2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"   stop-color="#6D4C41"/>
      <stop offset="100%" stop-color="#4E342E"/>
    </linearGradient>
  </defs>
  <rect width="300" height="230" fill="url(#sky2)" rx="14"/>
  <!-- Terra -->
  <path d="M0 172 Q150 164 300 172 L300 230 L0 230 Z" fill="url(#soil2)"/>
  <path d="M0 172 Q150 164 300 172" fill="none" stroke="#5D4037" stroke-width="1.5"/>
  <!-- Planta 1 (esquerda) -->
  <line x1="38"  y1="172" x2="38"  y2="58"  stroke="#1B5E20" stroke-width="5"   stroke-linecap="round"/>
  <ellipse cx="18"  cy="98"  rx="19" ry="9"   fill="#2E7D32" transform="rotate(-40 18 98)"/>
  <ellipse cx="58"  cy="88"  rx="19" ry="9"   fill="#388E3C" transform="rotate(40 58 88)"/>
  <ellipse cx="38"  cy="50"  rx="13" ry="24"  fill="#1B5E20"/>
  <rect x="30" y="120" width="16" height="26" rx="7" fill="#F9A825" opacity=".92"/>
  <!-- Planta 2 (centro) -->
  <line x1="130" y1="172" x2="130" y2="38"  stroke="#1B5E20" stroke-width="5.5" stroke-linecap="round"/>
  <ellipse cx="106" cy="80"  rx="22" ry="10"  fill="#2E7D32" transform="rotate(-40 106 80)"/>
  <ellipse cx="154" cy="70"  rx="22" ry="10"  fill="#388E3C" transform="rotate(40 154 70)"/>
  <ellipse cx="130" cy="30"  rx="15" ry="28"  fill="#1B5E20"/>
  <rect x="121" y="105" width="18" height="30" rx="8" fill="#FBC02D"/>
  <!-- Planta 3 (direita) -->
  <line x1="222" y1="172" x2="222" y2="55"  stroke="#1B5E20" stroke-width="5"   stroke-linecap="round"/>
  <ellipse cx="202" cy="94"  rx="19" ry="9"   fill="#2E7D32" transform="rotate(-36 202 94)"/>
  <ellipse cx="242" cy="86"  rx="19" ry="9"   fill="#388E3C" transform="rotate(36 242 86)"/>
  <ellipse cx="222" cy="47"  rx="13" ry="24"  fill="#1B5E20"/>
  <rect x="214" y="118" width="16" height="26" rx="7" fill="#F9A825" opacity=".92"/>
  <!-- Bico pulverizador -->
  <rect x="12"  y="24" width="58" height="17" rx="7" fill="#546E7A"/>
  <rect x="12"  y="24" width="58" height="17" rx="7" fill="none" stroke="#455A64" stroke-width="1"/>
  <rect x="64"  y="28" width="22" height="9"  rx="4" fill="#455A64"/>
  <polygon points="86,32.5 98,26 98,39" fill="#37474F"/>
  <!-- Gotas de fertilizante -->
  <g fill="#81D4FA" opacity=".9">
    <circle cx="102" cy="28"  r="3.2"/>
    <circle cx="109" cy="42"  r="2.5"/>
    <circle cx="116" cy="20"  r="2.2"/>
    <circle cx="122" cy="34"  r="2.8"/>
    <circle cx="130" cy="48"  r="2.0"/>
    <circle cx="137" cy="24"  r="2.4"/>
    <circle cx="144" cy="38"  r="2.0"/>
    <circle cx="151" cy="14"  r="1.8"/>
    <circle cx="157" cy="44"  r="2.2"/>
    <circle cx="165" cy="30"  r="1.6"/>
    <circle cx="172" cy="52"  r="1.4"/>
    <circle cx="180" cy="20"  r="1.8"/>
  </g>
  <!-- Cabo do bico -->
  <rect x="20" y="41" width="9" height="28" rx="4" fill="#455A64"/>
  <circle cx="24" cy="70" r="7" fill="#546E7A"/>
</svg>`,
  },

  /* ── ETAPA 3: COLHEITA ── */
  {
    id:          3,
    icon:        '🌽',
    label:       'Colheita',
    title:       'Colhendo o Milho',
    subtitle:    'Colheita Mecanizada de Grãos',
    description: 'O milho atinge a maturidade fisiológica no momento certo. Colheitadeiras de última geração percorrem os talhões, separando os grãos das espigas com precisão industrial. A velocidade da máquina preserva a qualidade e garante menor perda no campo.',
    facts: [
      'Ponto ideal de colheita: 14 a 15% de umidade dos grãos',
      'Rendimento médio de 6 a 12 toneladas por hectare',
      'Colheitadeiras modernas colhem até 40 hectares por dia',
    ],
    visualBg: '#FDF5D8',
    svg: `<svg viewBox="0 0 300 230" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sky3" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"   stop-color="#FFF9C4"/>
      <stop offset="100%" stop-color="#FFEE58" stop-opacity=".6"/>
    </linearGradient>
    <linearGradient id="field3" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"   stop-color="#8D6E63"/>
      <stop offset="100%" stop-color="#5D4037"/>
    </linearGradient>
  </defs>
  <rect width="300" height="230" fill="url(#sky3)" rx="14"/>
  <!-- Sol grande -->
  <circle cx="262" cy="38" r="26" fill="#FFD600" opacity=".8"/>
  <!-- Espigas douradas ao fundo -->
  <g opacity=".65">
    <line x1="10"  y1="175" x2="12"  y2="82"  stroke="#C8A000" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="12"  cy="74"  rx="9"  ry="17" fill="#D4B000"/>
    <rect x="6"   y="112" width="12" height="20" rx="5" fill="#FFC107"/>
    <line x1="38"  y1="175" x2="40"  y2="76"  stroke="#C8A000" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="40"  cy="68"  rx="9"  ry="17" fill="#D4B000"/>
    <rect x="34"  y="105" width="12" height="20" rx="5" fill="#FFB300"/>
    <line x1="260" y1="175" x2="262" y2="84"  stroke="#C8A000" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="262" cy="76"  rx="9"  ry="17" fill="#D4B000"/>
    <rect x="256" y="112" width="12" height="20" rx="5" fill="#FFC107"/>
    <line x1="285" y1="175" x2="287" y2="80"  stroke="#C8A000" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="287" cy="72"  rx="9"  ry="17" fill="#D4B000"/>
    <rect x="281" y="108" width="12" height="20" rx="5" fill="#FFB300"/>
  </g>
  <!-- Terra -->
  <path d="M0 175 Q150 167 300 175 L300 230 L0 230 Z" fill="url(#field3)"/>
  <!-- COLHEITADEIRA -->
  <!-- Corpo principal -->
  <rect x="58" y="118" width="178" height="58" rx="6" fill="#E65100"/>
  <!-- Cabine -->
  <rect x="158" y="92"  width="72"  height="52" rx="6" fill="#BF360C"/>
  <!-- Vidro da cabine -->
  <rect x="166" y="99"  width="56"  height="34" rx="4" fill="#80DEEA" opacity=".75"/>
  <!-- Reflete no vidro -->
  <rect x="168" y="101" width="18"  height="10" rx="2" fill="white" opacity=".25"/>
  <!-- Plataforma de corte -->
  <rect x="18"  y="132" width="62"  height="28" rx="4" fill="#FF6D00"/>
  <line x1="31"  y1="132" x2="31"  y2="160" stroke="#E64A19" stroke-width="2"/>
  <line x1="44"  y1="132" x2="44"  y2="160" stroke="#E64A19" stroke-width="2"/>
  <line x1="57"  y1="132" x2="57"  y2="160" stroke="#E64A19" stroke-width="2"/>
  <rect x="10"   y="136" width="14"  height="8"  rx="3" fill="#E64A19"/>
  <!-- Tubo do graneleiro -->
  <rect x="116" y="100" width="22"  height="20" rx="4" fill="#FF8F00"/>
  <path d="M127 100 L108 74" stroke="#FF8F00" stroke-width="10" stroke-linecap="round"/>
  <!-- Espigas colhidas caindo -->
  <rect x="68" y="148" width="14" height="24" rx="6" fill="#FDD835" opacity=".9"/>
  <rect x="88" y="152" width="12" height="20" rx="5" fill="#FBC02D" opacity=".8"/>
  <!-- Rodas -->
  <circle cx="92"  cy="184" r="18" fill="#3E2723"/>
  <circle cx="92"  cy="184" r="11" fill="#5D4037"/>
  <circle cx="92"  cy="184" r="5"  fill="#8D6E63"/>
  <circle cx="210" cy="186" r="22" fill="#3E2723"/>
  <circle cx="210" cy="186" r="14" fill="#5D4037"/>
  <circle cx="210" cy="186" r="6"  fill="#8D6E63"/>
  <!-- Chaminé de escape -->
  <rect x="223" y="78"  width="9"   height="18" rx="4" fill="#424242"/>
  <ellipse cx="227" cy="76" rx="12" ry="5" fill="#757575" opacity=".5"/>
</svg>`,
  },

  /* ── ETAPA 4: TRANSPORTE ── */
  {
    id:          4,
    icon:        '🚛',
    label:       'Transporte',
    title:       'Rumo à Cidade',
    subtitle:    'Logística Rodoviária de Grãos',
    description: 'Os grãos colhidos são carregados em caminhões-graneleiros de alta capacidade. Pelas rodovias do Paraná e do Brasil afora, a carga percorre centenas de quilômetros até cooperativas, portos e indústrias processadoras, com temperatura e qualidade monitoradas.',
    facts: [
      'Cada caminhão-graneleiro transporta até 30 toneladas',
      'O Brasil escoou 70% de sua produção agrícola pelo modal rodoviário',
      'Temperatura e umidade dos grãos monitoradas durante o percurso',
    ],
    visualBg: '#FFF0E0',
    svg: `<svg viewBox="0 0 300 230" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sky4" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"   stop-color="#87CEEB"/>
      <stop offset="100%" stop-color="#B0E0FF"/>
    </linearGradient>
    <linearGradient id="road4" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"   stop-color="#607D8B"/>
      <stop offset="100%" stop-color="#455A64"/>
    </linearGradient>
  </defs>
  <!-- Céu -->
  <rect width="300" height="230" fill="url(#sky4)" rx="14"/>
  <!-- Sol -->
  <circle cx="258" cy="38" r="22" fill="#FFD600" opacity=".78"/>
  <!-- Nuvem -->
  <ellipse cx="85"  cy="40" rx="30" ry="13" fill="white" opacity=".8"/>
  <ellipse cx="105" cy="33" rx="20" ry="12" fill="white" opacity=".8"/>
  <ellipse cx="65"  cy="36" rx="17" ry="10" fill="white" opacity=".8"/>
  <!-- Colinas verdes -->
  <ellipse cx="55"  cy="172" rx="95" ry="55" fill="#6FAD60" opacity=".7"/>
  <ellipse cx="255" cy="175" rx="85" ry="50" fill="#5E9E52" opacity=".65"/>
  <!-- Plantações nas colinas -->
  <rect x="15"  y="130" width="90"  height="38" rx="5" fill="#8BC34A" opacity=".45"/>
  <rect x="200" y="135" width="85"  height="36" rx="5" fill="#7CB342" opacity=".45"/>
  <!-- Rodovia -->
  <path d="M0 205 Q150 188 300 205 L300 230 L0 230 Z" fill="url(#road4)"/>
  <path d="M0 205 Q150 188 300 205" fill="none" stroke="#90A4AE" stroke-width="1.5" opacity=".5"/>
  <!-- Faixa central tracejada -->
  <path d="M0 214 Q150 198 300 214" fill="none" stroke="#FFD54F" stroke-width="2.5" stroke-dasharray="20,14"/>
  <!-- Faixa lateral -->
  <path d="M0 206 Q150 190 300 206" fill="none" stroke="#ECEFF1" stroke-width="1.5" opacity=".5"/>
  <!-- CAMINHÃO GRANELEIRO -->
  <!-- Carroceria/baú -->
  <rect x="18"  y="148" width="170" height="52" rx="5" fill="#F5E6C8"/>
  <rect x="18"  y="148" width="170" height="52" rx="5" fill="none" stroke="#C49A6C" stroke-width="1.5"/>
  <line x1="72"  y1="148" x2="72"  y2="200" stroke="#C49A6C" stroke-width="1"   opacity=".5"/>
  <line x1="122" y1="148" x2="122" y2="200" stroke="#C49A6C" stroke-width="1"   opacity=".5"/>
  <line x1="172" y1="148" x2="172" y2="200" stroke="#C49A6C" stroke-width="1"   opacity=".5"/>
  <!-- Ícone do produto na carroceria -->
  <text x="95" y="182" font-size="24" text-anchor="middle" font-family="serif" opacity=".35">🌽</text>
  <!-- Cabine do caminhão -->
  <rect x="183" y="143" width="84"  height="57" rx="7" fill="#1565C0"/>
  <!-- Parabrisa -->
  <rect x="190" y="151" width="58"  height="30" rx="4" fill="#B3E5FC" opacity=".82"/>
  <!-- Reflexo no parabrisa -->
  <rect x="192" y="153" width="18"  height="8"  rx="2" fill="white" opacity=".2"/>
  <!-- Painel inferior da cabine -->
  <rect x="190" y="184" width="58"  height="8"  rx="2" fill="#0D47A1"/>
  <!-- Faróis -->
  <circle cx="266" cy="160" r="5.5" fill="#FFD740" opacity=".9"/>
  <circle cx="266" cy="174" r="4.5" fill="#FF6D00" opacity=".75"/>
  <!-- Grade frontal -->
  <rect x="263" y="153" width="4"   height="35" rx="2" fill="#0D47A1"/>
  <!-- Chaminé de escape -->
  <rect x="257" y="128" width="8"   height="18" rx="3" fill="#455A64"/>
  <ellipse cx="261" cy="127" rx="10" ry="4" fill="#90A4AE" opacity=".6"/>
  <!-- Rodas da carroceria -->
  <circle cx="50"  cy="205" r="14" fill="#212121"/>
  <circle cx="50"  cy="205" r="9"  fill="#424242"/>
  <circle cx="50"  cy="205" r="4"  fill="#616161"/>
  <circle cx="96"  cy="205" r="14" fill="#212121"/>
  <circle cx="96"  cy="205" r="9"  fill="#424242"/>
  <circle cx="96"  cy="205" r="4"  fill="#616161"/>
  <circle cx="143" cy="205" r="14" fill="#212121"/>
  <circle cx="143" cy="205" r="9"  fill="#424242"/>
  <circle cx="143" cy="205" r="4"  fill="#616161"/>
  <!-- Rodas da cabine -->
  <circle cx="201" cy="207" r="15" fill="#212121"/>
  <circle cx="201" cy="207" r="9"  fill="#424242"/>
  <circle cx="201" cy="207" r="4"  fill="#616161"/>
  <circle cx="247" cy="207" r="15" fill="#212121"/>
  <circle cx="247" cy="207" r="9"  fill="#424242"/>
  <circle cx="247" cy="207" r="4"  fill="#616161"/>
  <!-- Placa da rodovia -->
  <rect x="5"   y="143" width="3"   height="40" fill="#90A4AE"/>
  <rect x="-4"  y="138" width="22"  height="16" rx="3" fill="#388E3C"/>
  <text x="7" y="150" font-size="5.5" fill="white" font-weight="bold" font-family="sans-serif">BR-376</text>
</svg>`,
  },

  /* ── ETAPA 5: INDÚSTRIA ── */
  {
    id:          5,
    icon:        '🏭',
    label:       'Indústria',
    title:       'Nas Indústrias',
    subtitle:    'Recebimento e Processamento Industrial',
    description: 'Na plataforma industrial, o milho é pesado, amostrado e rigorosamente analisado. Passa por silos de secagem e armazenamento antes de ser transformado em ração animal, etanol, amido, fubá e mais de 3.500 derivados que chegam à mesa dos brasileiros.',
    facts: [
      'Análise laboratorial de umidade, impurezas e aflatoxinas',
      'Silos verticais com capacidade de até 50.000 toneladas',
      'O milho é insumo de mais de 3.500 produtos industrializados no Brasil',
    ],
    visualBg: '#EAECEF',
    svg: `<svg viewBox="0 0 300 230" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sky5" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"   stop-color="#B0BEC5"/>
      <stop offset="100%" stop-color="#CFD8DC"/>
    </linearGradient>
    <linearGradient id="piso5" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"   stop-color="#78909C"/>
      <stop offset="100%" stop-color="#546E7A"/>
    </linearGradient>
  </defs>
  <!-- Céu industrial -->
  <rect width="300" height="230" fill="url(#sky5)" rx="14"/>
  <!-- Prédio da fábrica -->
  <rect x="12"  y="90"  width="276" height="120" rx="5" fill="#ECEFF1"/>
  <rect x="12"  y="90"  width="276" height="120" rx="5" fill="none" stroke="#B0BEC5" stroke-width="1.5"/>
  <!-- Janelas da fábrica -->
  <rect x="28"  y="106" width="32"  height="22"  rx="3" fill="#80DEEA" opacity=".58"/>
  <rect x="74"  y="106" width="32"  height="22"  rx="3" fill="#80DEEA" opacity=".58"/>
  <rect x="120" y="106" width="32"  height="22"  rx="3" fill="#80DEEA" opacity=".58"/>
  <rect x="166" y="106" width="32"  height="22"  rx="3" fill="#80DEEA" opacity=".58"/>
  <rect x="212" y="106" width="32"  height="22"  rx="3" fill="#80DEEA" opacity=".58"/>
  <rect x="258" y="106" width="25"  height="22"  rx="3" fill="#80DEEA" opacity=".58"/>
  <!-- Portão de entrada -->
  <rect x="118" y="155" width="64"  height="55"  rx="4" fill="#90A4AE"/>
  <rect x="120" y="157" width="60"  height="53"  rx="3" fill="#607D8B"/>
  <!-- Plataforma de descarga -->
  <rect x="82"  y="192" width="136" height="18"  rx="3" fill="#546E7A"/>
  <rect x="88"  y="194" width="42"  height="14"  rx="2" fill="#455A64"/>
  <rect x="170" y="194" width="42"  height="14"  rx="2" fill="#455A64"/>
  <!-- SILO 1 (esquerda) -->
  <rect x="16"  y="30"  width="42"  height="62"  rx="5" fill="#90A4AE"/>
  <ellipse cx="37"  cy="30"  rx="21" ry="9"  fill="#B0BEC5"/>
  <ellipse cx="37"  cy="92"  rx="21" ry="8"  fill="#78909C"/>
  <line x1="27"  y1="36"  x2="27"  y2="91"  stroke="#78909C" stroke-width="1.2"/>
  <line x1="37"  y1="36"  x2="37"  y2="91"  stroke="#78909C" stroke-width="1.2"/>
  <line x1="47"  y1="36"  x2="47"  y2="91"  stroke="#78909C" stroke-width="1.2"/>
  <!-- SILO 2 (direita, maior) -->
  <rect x="243" y="24"  width="50"  height="68"  rx="5" fill="#90A4AE"/>
  <ellipse cx="268" cy="24"  rx="25" ry="10" fill="#B0BEC5"/>
  <ellipse cx="268" cy="92"  rx="25" ry="9"  fill="#78909C"/>
  <line x1="256" y1="30"  x2="256" y2="91"  stroke="#78909C" stroke-width="1.2"/>
  <line x1="268" y1="30"  x2="268" y2="91"  stroke="#78909C" stroke-width="1.2"/>
  <line x1="280" y1="30"  x2="280" y2="91"  stroke="#78909C" stroke-width="1.2"/>
  <!-- SILO 3 (centro, menor) -->
  <rect x="130" y="50"  width="40"  height="42"  rx="4" fill="#BDBDBD"/>
  <ellipse cx="150" cy="50"  rx="20" ry="8"  fill="#E0E0E0"/>
  <ellipse cx="150" cy="92"  rx="20" ry="7"  fill="#9E9E9E"/>
  <!-- Chaminé 1 -->
  <rect x="76"  y="62"  width="13"  height="30"  rx="4" fill="#78909C"/>
  <ellipse cx="82"  cy="61"  rx="15" ry="5.5" fill="#90A4AE" opacity=".7"/>
  <ellipse cx="80"  cy="50"  rx="9"  ry="7"   fill="#CFD8DC" opacity=".58"/>
  <ellipse cx="86"  cy="41"  rx="7"  ry="5.5" fill="#CFD8DC" opacity=".42"/>
  <ellipse cx="82"  cy="33"  rx="5"  ry="4"   fill="#CFD8DC" opacity=".3"/>
  <!-- Chaminé 2 -->
  <rect x="208" y="68"  width="11"  height="24"  rx="3" fill="#78909C"/>
  <ellipse cx="213" cy="58"  rx="8"  ry="5.5" fill="#CFD8DC" opacity=".5"/>
  <ellipse cx="217" cy="50"  rx="6"  ry="4.5" fill="#CFD8DC" opacity=".38"/>
  <!-- Chão -->
  <rect x="0"   y="210" width="300" height="20"  fill="url(#piso5)" rx="0"/>
  <!-- Esteira transportadora -->
  <path d="M68 210 Q150 204 232 210" stroke="#546E7A" stroke-width="9" stroke-linecap="round" fill="none"/>
  <path d="M68 210 Q150 204 232 210" stroke="#607D8B" stroke-width="6" stroke-linecap="round" fill="none" stroke-dasharray="10,8"/>
  <!-- Placa da empresa -->
  <rect x="98"  y="72"  width="104" height="20"  rx="3" fill="#1A3B25"/>
  <text x="150" y="86" font-size="8" text-anchor="middle" fill="#F5D876" font-weight="bold" font-family="sans-serif" letter-spacing="0.5">AGRO INDÚSTRIA</text>
</svg>`,
  },
];

/* ═══════════════════════════════════════════════════
   ESTADO DA APLICAÇÃO
═══════════════════════════════════════════════════ */
let currentStep = 0;

/* ═══════════════════════════════════════════════════
   REFERÊNCIAS AO DOM
═══════════════════════════════════════════════════ */
const progressFill   = document.getElementById('progressFill');
const progressSteps  = document.getElementById('progressSteps');
const cardVisual     = document.getElementById('cardVisual');
const cardBody       = document.getElementById('cardBody');
const stepCard       = document.getElementById('stepCard');
const btnBack        = document.getElementById('btnBack');
const btnNext        = document.getElementById('btnNext');
const btnNextIcon    = document.getElementById('btnNextIcon');
const stepCounter    = document.getElementById('stepCounter');

/* ═══════════════════════════════════════════════════
   CONSTRUÇÃO DOS DOTS (executa uma vez no início)
═══════════════════════════════════════════════════ */
function buildProgressDots() {
  progressSteps.innerHTML = '';

  STEPS.forEach((step, i) => {
    const item = document.createElement('div');
    item.className = 'prog-item';
    item.setAttribute('role', 'listitem');
    item.setAttribute('aria-label', `Etapa ${step.id}: ${step.label}`);

    item.innerHTML = `
      <div class="prog-dot" id="prog-dot-${i}">
        <span class="prog-dot-inner" id="prog-dot-inner-${i}">${i + 1}</span>
      </div>
      <span class="prog-label">${step.label}</span>
    `;
    progressSteps.appendChild(item);
  });
}

/* ═══════════════════════════════════════════════════
   ATUALIZAÇÃO DOS DOTS (executada em cada mudança)
═══════════════════════════════════════════════════ */
function updateProgressDots() {
  STEPS.forEach((step, i) => {
    const dot   = document.getElementById(`prog-dot-${i}`);
    const inner = document.getElementById(`prog-dot-inner-${i}`);
    const item  = dot.parentElement;

    // Limpa classes anteriores
    dot.className  = 'prog-dot';
    item.className = 'prog-item';

    if (i < currentStep) {
      // Concluído
      dot.classList.add('prog-dot--done');
      item.classList.add('prog-item--done');
      inner.textContent = '✓';
    } else if (i === currentStep) {
      // Ativo
      dot.classList.add('prog-dot--active');
      item.classList.add('prog-item--active');
      inner.textContent = step.icon;
    } else {
      // Futuro
      inner.textContent = i + 1;
    }
  });
}

/* ═══════════════════════════════════════════════════
   ATUALIZAÇÃO DA BARRA DE PROGRESSO
═══════════════════════════════════════════════════ */
function updateProgressBar() {
  const pct = STEPS.length <= 1
    ? 100
    : (currentStep / (STEPS.length - 1)) * 100;
  progressFill.style.width = `${pct}%`;
}

/* ═══════════════════════════════════════════════════
   ATUALIZAÇÃO DO CONTEÚDO DO CARD
═══════════════════════════════════════════════════ */
function setCardContent() {
  const step = STEPS[currentStep];

  // Atualiza a área visual
  cardVisual.style.backgroundColor = step.visualBg;
  cardVisual.innerHTML = step.svg;

  // Gera os fatos
  const factsHTML = step.facts.map(fact => `
    <li class="fact-item">
      <span class="fact-check" aria-hidden="true">✓</span>
      ${fact}
    </li>
  `).join('');

  // Atualiza o body
  cardBody.innerHTML = `
    <div class="meta-row">
      <span class="meta-tag">Etapa ${step.id} de ${STEPS.length}</span>
    </div>
    <h2 class="card-title">${step.title}</h2>
    <p class="card-subtitle">${step.subtitle}</p>
    <div class="card-divider" aria-hidden="true"></div>
    <p class="card-desc">${step.description}</p>
    <ul class="card-facts" aria-label="Informações técnicas">${factsHTML}</ul>
  `;
}

/* ═══════════════════════════════════════════════════
   ATUALIZAÇÃO DA NAVEGAÇÃO
═══════════════════════════════════════════════════ */
function updateNav() {
  const isFirst = currentStep === 0;
  const isLast  = currentStep === STEPS.length - 1;

  // Botão Voltar: oculto (mantém espaço) na primeira etapa
  if (isFirst) {
    btnBack.classList.add('hidden');
    btnBack.setAttribute('aria-hidden', 'true');
  } else {
    btnBack.classList.remove('hidden');
    btnBack.setAttribute('aria-hidden', 'false');
  }

  // Botão Avançar → vira Reiniciar na última etapa
  if (isLast) {
    btnNext.classList.add('btn--restart');
    btnNext.setAttribute('aria-label', 'Reiniciar do início');
    // Ícone de reload
    btnNextIcon.innerHTML = '<polyline points="14 4 8 10 14 16"/><path d="M6 10 H18" />';
    // Troca o texto (mantendo o ícone)
    btnNext.childNodes.forEach(node => {
      if (node.nodeType === 3) node.textContent = 'Reiniciar ';
    });
    // Abordagem mais segura: re-render do botão
    btnNext.innerHTML = `
      Reiniciar
      <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
        <path d="M3 3v5h5"/>
      </svg>`;
  } else {
    btnNext.classList.remove('btn--restart');
    btnNext.setAttribute('aria-label', 'Avançar para a próxima etapa');
    btnNext.innerHTML = `
      Avançar
      <svg class="btn-icon" id="btnNextIcon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="8 4 14 10 8 16"/>
      </svg>`;
  }

  // Contador
  stepCounter.textContent = `${currentStep + 1} / ${STEPS.length}`;
}

/* ═══════════════════════════════════════════════════
   ATUALIZAÇÃO GERAL (sem animação ou com animação)
═══════════════════════════════════════════════════ */
function updateAll(animate = true) {
  updateProgressDots();
  updateProgressBar();
  setCardContent();
  updateNav();

  if (animate) {
    // Dispara animação de entrada
    cardVisual.classList.add('anim-in');
    cardBody.classList.add('anim-in');

    // Remove a classe após o fim da animação
    const cleanup = () => {
      cardVisual.classList.remove('anim-in');
      cardBody.classList.remove('anim-in');
      cardVisual.removeEventListener('animationend', cleanup);
    };
    cardVisual.addEventListener('animationend', cleanup, { once: true });
  }
}

/* ═══════════════════════════════════════════════════
   NAVEGAÇÃO: IR PARA UMA ETAPA
═══════════════════════════════════════════════════ */
async function goTo(index) {
  // 1. Anima saída do conteúdo atual
  stepCard.classList.add('card--exit');

  // 2. Aguarda a transição de saída (220ms → combina com transition no CSS)
  await new Promise(resolve => setTimeout(resolve, 240));

  // 3. Atualiza o estado
  currentStep = index;

  // 4. Renderiza o novo conteúdo (ainda invisível)
  stepCard.classList.remove('card--exit');

  // 5. Pequeno delay para o browser redesenhar antes de animar entrada
  await new Promise(resolve => requestAnimationFrame(resolve));

  // 6. Atualiza tudo com animação de entrada
  updateAll(true);
}

/* ═══════════════════════════════════════════════════
   EVENT LISTENERS
═══════════════════════════════════════════════════ */
btnNext.addEventListener('click', () => {
  if (currentStep < STEPS.length - 1) {
    goTo(currentStep + 1);
  } else {
    // Última etapa → reinicia
    goTo(0);
  }
});

btnBack.addEventListener('click', () => {
  if (currentStep > 0) {
    goTo(currentStep - 1);
  }
});

// Suporte a teclado (← →)
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    btnNext.click();
  } else if ((e.key === 'ArrowLeft' || e.key === 'ArrowUp') && currentStep > 0) {
    btnBack.click();
  }
});

/* ═══════════════════════════════════════════════════
   INICIALIZAÇÃO
═══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  buildProgressDots();
  updateAll(false); // primeira renderização sem animação
});