export const stats = [
  { value: 150, suffix: '+', label: 'Projetos Concluídos' },
  { value: 2.5, suffix: ' MW', label: 'Energia Instalada' },
  { value: 98, suffix: '%', label: 'Satisfação dos Clientes' },
  { value: 4, suffix: ' anos', label: 'de Experiência' },
];

export const services = [
  {
    id: 1,
    title: 'Residencial',
    description: 'Soluções personalizadas para sua casa. Reduza sua conta de energia em até 95% e valorize seu imóvel com painéis solares de alta eficiência.',
    icon: 'home',
    features: ['Projeto personalizado', 'Instalação rápida', 'Garantia de 25 anos', 'Monitoramento online'],
    color: '#F5A623',
  },
  {
    id: 2,
    title: 'Comercial',
    description: 'Reduza custos operacionais e aumente a competitividade do seu negócio com energia solar fotovoltaica de alta performance.',
    icon: 'building',
    features: ['Análise de viabilidade', 'ROI garantido', 'Sistema escalável', 'Suporte dedicado'],
    color: '#00C9FF',
  },
  {
    id: 3,
    title: 'Industrial',
    description: 'Projetos de grande porte para indústrias e condomínios. Energia limpa, eficiente e economicamente viável em escala.',
    icon: 'factory',
    features: ['Grandes instalações', 'Financiamento facilitado', 'Equipe especializada', 'Manutenção preventiva'],
    color: '#10B981',
  },
  {
    id: 4,
    title: 'Agronegócio',
    description: 'Energia solar para irrigação, armazenamento e toda operação rural. Autonomia energética no campo com sustentabilidade.',
    icon: 'sun',
    features: ['Bombeamento solar', 'Off-grid e on-grid', 'Resistência climática', 'Alta durabilidade'],
    color: '#8B5CF6',
  },
];

export const projects = [
  { id: 1, title: 'Residência - Curitiba', type: 'Residencial', power: '8 kWp', savings: 'R$ 650/mês', location: 'Anápolis, GO', img: null },
  { id: 2, title: 'Supermercado Verdes', type: 'Comercial', power: '75 kWp', savings: 'R$ 8.200/mês', location: 'Goiânia, GO', img: null },
  { id: 3, title: 'Fazenda Boa Vista', type: 'Agronegócio', power: '120 kWp', savings: 'R$ 14.000/mês', location: 'Aparecida de Goiânia, GO', img: null },
  { id: 4, title: 'Condomínio Solar', type: 'Comercial', power: '45 kWp', savings: 'R$ 5.100/mês', location: 'Caldas Novas, GO', img: null },
  { id: 5, title: 'Indústria Metalfer', type: 'Industrial', power: '300 kWp', savings: 'R$ 32.000/mês', location: 'Rio Verde, GO', img: null },
  { id: 6, title: 'Casa Verde', type: 'Residencial', power: '12 kWp', savings: 'R$ 980/mês', location: 'Itumbiara, GO', img: null },
];

export const testimonials = [
  {
    id: 1,
    name: 'Carlos Mendonça',
    role: 'Proprietário Residencial',
    text: 'A Mais Solar transformou minha conta de luz. Em menos de 4 anos vou recuperar o investimento e nos próximos 20 anos tenho energia praticamente gratuita. Equipe excelente!',
    rating: 5,
    location: 'Anápolis, GO',
    savings: 'R$ 720/mês de economia',
  },
  {
    id: 2,
    name: 'Ana Paula Lima',
    role: 'Proprietária Comercial',
    text: 'Minha padaria reduziu 87% da conta de energia. O sistema de monitoramento é incrível, acompanho tudo pelo celular. Recomendo demais a Mais Solar!',
    rating: 5,
    location: 'Goiânia, GO',
    savings: 'R$ 3.200/mês de economia',
  },
  {
    id: 3,
    name: 'Roberto Farias',
    role: 'Produtor Rural',
    text: 'Instalamos na fazenda para o sistema de irrigação. Serviço profissional do início ao fim, prazo cumprido e o sistema funciona perfeitamente. Vale cada centavo!',
    rating: 5,
    location: 'Aparecida de Goiânia, GO',
    savings: 'R$ 8.500/mês de economia',
  },
];

export const howItWorks = [
  { step: 1, title: 'Análise Gratuita', description: 'Nossa equipe visita seu imóvel e analisa o consumo, estrutura e melhor solução para você.', icon: 'search' },
  { step: 2, title: 'Projeto Personalizado', description: 'Desenvolvemos um projeto completo dimensionado especificamente para a sua necessidade.', icon: 'pencil' },
  { step: 3, title: 'Instalação Profissional', description: 'Equipe certificada realiza a instalação com segurança e agilidade, geralmente em 1 a 3 dias.', icon: 'wrench' },
  { step: 4, title: 'Ativação e Monitoramento', description: 'Sistema ativado com app de monitoramento em tempo real para acompanhar sua geração de energia.', icon: 'activity' },
];
