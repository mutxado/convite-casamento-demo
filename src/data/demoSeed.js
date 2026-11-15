// Dados pré-carregados de demonstração (12 mesas, ~55 RSVPs, 10 convidados manuais e mural)

export const DEMO_TABLES = [
  { id: 'table-1', name: 'Mesa 1 - Noivos & Pais', capacity: 8 },
  { id: 'table-2', name: 'Mesa 2 - Padrinhos & Damas', capacity: 10 },
  { id: 'table-3', name: 'Mesa 3 - Família Tembe (Noivo)', capacity: 10 },
  { id: 'table-4', name: 'Mesa 4 - Família Mondlane (Noiva)', capacity: 10 },
  { id: 'table-5', name: 'Mesa 5 - Tios & Anciãos', capacity: 10 },
  { id: 'table-6', name: 'Mesa 6 - Amigos de Infância', capacity: 10 },
  { id: 'table-7', name: 'Mesa 7 - Colegas de Engenharia', capacity: 10 },
  { id: 'table-8', name: 'Mesa 8 - Colegas de Arquitetura', capacity: 10 },
  { id: 'table-9', name: 'Mesa 9 - Igreja & Comunidade', capacity: 10 },
  { id: 'table-10', name: 'Mesa 10 - Amigos da Faculdade', capacity: 10 },
  { id: 'table-11', name: 'Mesa 11 - Convidados VIP & Honra', capacity: 10 },
  { id: 'table-12', name: 'Mesa 12 - Reserva & Extras', capacity: 10 },
];

export const DEMO_RSVPS = [
  { id: 'rsvp-1', name: 'Eduardo & Beatriz Tembe', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Que Deus abençoe grandemente o vosso lar!', createdDate: '02/11/2026, 09:15' },
  { id: 'rsvp-2', name: 'Armando & Fátima Mondlane', guests: 2, attending: 'sim', dietary: 'Sem sal em excesso', message: 'Orgulho imenso de ver a nossa filha tão feliz.', createdDate: '02/11/2026, 10:02' },
  { id: 'rsvp-3', name: 'Hélder & Tânia Sitoe', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Padrinhos prontos para celebrar o grande dia!', createdDate: '02/11/2026, 11:20' },
  { id: 'rsvp-4', name: 'Cláudio & Vanessa Mabunda', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Contem connosco na primeira fila!', createdDate: '02/11/2026, 14:40' },
  { id: 'rsvp-5', name: 'Zacarias & Rosa Macamo', guests: 3, attending: 'sim', dietary: 'Nenhuma', message: 'Muitas felicidades ao casal!', createdDate: '03/11/2026, 08:50' },
  { id: 'rsvp-6', name: 'Mateus & Lurdes Cossa', guests: 2, attending: 'sim', dietary: 'Sem carne de porco', message: 'Estaremos presentes com muita alegria.', createdDate: '03/11/2026, 09:30' },
  { id: 'rsvp-7', name: 'Sérgio & Amélia Nhantumbo', guests: 4, attending: 'sim', dietary: '1 menu infantil', message: 'A família toda vai celebrar convosco!', createdDate: '03/11/2026, 12:15' },
  { id: 'rsvp-8', name: 'Dinis & Carla Matsinhe', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Que o vosso amor cresça a cada ano.', createdDate: '03/11/2026, 16:05' },
  { id: 'rsvp-9', name: 'Bernardo & Júlia Chissano', guests: 2, attending: 'sim', dietary: 'Vegetariano (1 pessoa)', message: 'Parabéns Carlos e Nádia!', createdDate: '04/11/2026, 10:12' },
  { id: 'rsvp-10', name: 'Eusébio & Esperança Bila', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Bênçãos sem medida para vocês.', createdDate: '04/11/2026, 11:45' },
  { id: 'rsvp-11', name: 'Ivanildo Guambe', guests: 1, attending: 'sim', dietary: 'Nenhuma', message: 'Não falto por nada!', createdDate: '04/11/2026, 15:22' },
  { id: 'rsvp-12', name: 'Celina & Mauro Langa', guests: 2, attending: 'sim', dietary: 'Alergia a marisco', message: 'Ansiosos pela festa na Costa do Sol!', createdDate: '05/11/2026, 09:05' },
  { id: 'rsvp-13', name: 'Rafael & Sheila Mucavel', guests: 3, attending: 'sim', dietary: 'Nenhuma', message: 'Um brinde ao amor verdadeiro.', createdDate: '05/11/2026, 13:10' },
  { id: 'rsvp-14', name: 'Orlando & Teresa Zandamela', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Muitas felicidades!', createdDate: '05/11/2026, 17:40' },
  { id: 'rsvp-15', name: 'Bruno & Denise Nhabinde', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'A turma de engenharia marca presença!', createdDate: '06/11/2026, 08:30' },
  { id: 'rsvp-16', name: 'Valter & Patrícia Tivane', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Tudo de bom para esta nova jornada.', createdDate: '06/11/2026, 11:18' },
  { id: 'rsvp-17', name: 'Lúcia & Nelson Cuambe', guests: 2, attending: 'sim', dietary: 'Sem glúten (1 pessoa)', message: 'Mal podemos esperar!', createdDate: '06/11/2026, 14:55' },
  { id: 'rsvp-18', name: 'Edson & Tatiana Manjate', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Casal lindo! Parabéns!', createdDate: '07/11/2026, 09:42' },
  { id: 'rsvp-19', name: 'Gerson & Yolanda Mabote', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Que Deus seja o centro da vossa união.', createdDate: '07/11/2026, 12:30' },
  { id: 'rsvp-20', name: 'Vânia & Tiago Cumbe', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Presença confirmadíssima!', createdDate: '07/11/2026, 18:10' },
  { id: 'rsvp-21', name: 'Pastor Samuel & Eunice Ndlovu', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Será uma honra abençoar o vosso matrimónio.', createdDate: '08/11/2026, 08:20' },
  { id: 'rsvp-22', name: 'Diácono João & Marta Chongo', guests: 2, attending: 'sim', dietary: 'Sem carne de porco', message: 'Oramos por uma vida cheia de paz.', createdDate: '08/11/2026, 10:05' },
  { id: 'rsvp-23', name: 'Filipe & Sara Massingue', guests: 3, attending: 'sim', dietary: 'Nenhuma', message: 'Vamos dançar até tarde!', createdDate: '08/11/2026, 15:44' },
  { id: 'rsvp-24', name: 'Kátia & Rúben Muianga', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Felicidades eternas ao casal!', createdDate: '09/11/2026, 09:15' },
  { id: 'rsvp-25', name: 'Hélio & Marisa Machava', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Presentes para celebrar convosco!', createdDate: '09/11/2026, 11:30' },
  { id: 'rsvp-26', name: 'Danilo & Eunice Ngovene', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Grande abraço aos noivos!', createdDate: '09/11/2026, 16:20' },
  { id: 'rsvp-27', name: 'Sílvia & André Chivale', guests: 2, attending: 'sim', dietary: 'Vegetariano', message: 'Que seja um dia inesquecível!', createdDate: '10/11/2026, 09:00' },
  { id: 'rsvp-28', name: 'Rogério & Cláudia Mahumane', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Confirmados! Até Maio!', createdDate: '10/11/2026, 12:40' },
  { id: 'rsvp-29', name: 'Nélia & Tomás Mavie', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Muito amor e cumplicidade!', createdDate: '10/11/2026, 17:05' },
  { id: 'rsvp-30', name: 'Eng.º Alberto & Dra. Sofia Uamusse', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Parabéns pelo passo tão bonito.', createdDate: '11/11/2026, 08:45' },
  { id: 'rsvp-31', name: 'Dr. Mário & Isabel Mucache', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Honrados pelo convite.', createdDate: '11/11/2026, 10:50' },
  { id: 'rsvp-32', name: 'Arq.ª Beatriz & Paulo Baloi', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'A equipa de arquitetura vai em peso!', createdDate: '11/11/2026, 14:15' },
  { id: 'rsvp-33', name: 'Jéssica & Leandro Chauque', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Muitas felicidades Carlos e Nádia!', createdDate: '12/11/2026, 09:25' },
  { id: 'rsvp-34', name: 'Emanuel & Rosaura Banze', guests: 3, attending: 'sim', dietary: 'Nenhuma', message: 'Estaremos lá com certeza!', createdDate: '12/11/2026, 13:50' },
  { id: 'rsvp-35', name: 'Osvaldo & Catarina Matola', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Deus vos abençoe sempre.', createdDate: '12/11/2026, 18:00' },
  { id: 'rsvp-36', name: 'Dércio & Raquel Simbine', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Grande festa nos espera!', createdDate: '13/11/2026, 09:10' },
  { id: 'rsvp-37', name: 'Milena & Jorge Cavele', guests: 2, attending: 'sim', dietary: 'Sem lactose (1 pessoa)', message: 'Felicidades mil!', createdDate: '13/11/2026, 11:40' },
  { id: 'rsvp-38', name: 'Stélio & Bruna Moiane', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Amigos de sempre presentes!', createdDate: '13/11/2026, 15:30' },
  { id: 'rsvp-39', name: 'César & Helena Magaia', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Que a alegria deste dia dure para sempre.', createdDate: '14/11/2026, 09:05' },
  { id: 'rsvp-40', name: 'Natália & Elton Come', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Confirmado!', createdDate: '14/11/2026, 12:15' },
  // Convidados confirmados ainda por alocar a uma mesa (para demonstrar alocação ao vivo no #admin)
  { id: 'rsvp-41', name: 'Yara & Flávio Machel', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Chegamos da Beira especialmente para o casamento!', createdDate: '14/11/2026, 16:40' },
  { id: 'rsvp-42', name: 'Kléber & Samira Zimba', guests: 2, attending: 'sim', dietary: 'Nenhuma', message: 'Parabéns ao casal maravilhoso!', createdDate: '15/11/2026, 08:30' },
  { id: 'rsvp-43', name: 'Adilson & Neuza Chemane', guests: 2, attending: 'sim', dietary: 'Sem carne de porco', message: 'Estaremos presentes!', createdDate: '15/11/2026, 10:15' },
  { id: 'rsvp-44', name: 'Wilson Novela', guests: 1, attending: 'sim', dietary: 'Nenhuma', message: 'Presente!', createdDate: '15/11/2026, 11:50' },
  // Convidados que justificaram ausência (para mostrar métricas reais no painel)
  { id: 'rsvp-45', name: 'Tio Joaquim Tembe', guests: 2, attending: 'nao', dietary: 'Nenhuma', message: 'Infelizmente estarei em viagem na África do Sul, mas envio todo o meu carinho.', createdDate: '05/11/2026, 10:00' },
  { id: 'rsvp-46', name: 'Prima Mélanie Mondlane', guests: 1, attending: 'nao', dietary: 'Nenhuma', message: 'Estarei em exames fora do país, desejo tudo de bom!', createdDate: '07/11/2026, 14:20' },
  { id: 'rsvp-47', name: 'Gustavo & Lígia Panguene', guests: 2, attending: 'nao', dietary: 'Nenhuma', message: 'Não poderemos comparecer por motivos de trabalho.', createdDate: '10/11/2026, 16:00' },
  { id: 'rsvp-48', name: 'Fernanda & Rui Chilengue', guests: 2, attending: 'nao', dietary: 'Nenhuma', message: 'Muitas felicidades, acompanharemos pelas fotos!', createdDate: '12/11/2026, 11:00' },
];

export const DEMO_MANUAL_GUESTS = [
  { id: 'manual-1', name: 'Carlos & Nádia (Noivos)', guests: 2, isManual: true },
  { id: 'manual-2', name: 'Avó Celina Tembe', guests: 1, isManual: true },
  { id: 'manual-3', name: 'Avô Ernesto Mondlane', guests: 1, isManual: true },
  { id: 'manual-4', name: 'Dama de Honor — Soraia Tembe', guests: 1, isManual: true },
  { id: 'manual-5', name: 'Padrinho — Dário Mondlane', guests: 1, isManual: true },
  { id: 'manual-6', name: 'Menina das Alianças — Lara & Pais', guests: 3, isManual: true },
  { id: 'manual-7', name: 'Equipa Fotografia (Mesa Apoio)', guests: 2, isManual: true },
  { id: 'manual-8', name: 'Maestro & Coral (Mesa Apoio)', guests: 3, isManual: true },
];

export const DEMO_SEATING_ASSIGNMENTS = {
  // Mesa 1 - Noivos & Pais (8/8)
  'manual-1': 'table-1',
  'rsvp-1': 'table-1',
  'rsvp-2': 'table-1',
  'manual-2': 'table-1',
  'manual-3': 'table-1',
  // Mesa 2 - Padrinhos & Damas (9/10)
  'rsvp-3': 'table-2',
  'rsvp-4': 'table-2',
  'manual-4': 'table-2',
  'manual-5': 'table-2',
  'manual-6': 'table-2',
  // Mesa 3 - Família Tembe (9/10)
  'rsvp-5': 'table-3',
  'rsvp-6': 'table-3',
  'rsvp-7': 'table-3',
  // Mesa 4 - Família Mondlane (8/10)
  'rsvp-8': 'table-4',
  'rsvp-9': 'table-4',
  'rsvp-10': 'table-4',
  'rsvp-35': 'table-4',
  // Mesa 5 - Tios & Anciãos (9/10)
  'rsvp-13': 'table-5',
  'rsvp-14': 'table-5',
  'rsvp-34': 'table-5',
  'rsvp-11': 'table-5',
  // Mesa 6 - Amigos de Infância (8/10)
  'rsvp-12': 'table-6',
  'rsvp-18': 'table-6',
  'rsvp-24': 'table-6',
  'rsvp-38': 'table-6',
  // Mesa 7 - Colegas de Engenharia (8/10)
  'rsvp-15': 'table-7',
  'rsvp-16': 'table-7',
  'rsvp-26': 'table-7',
  'rsvp-36': 'table-7',
  // Mesa 8 - Colegas de Arquitetura (8/10)
  'rsvp-17': 'table-8',
  'rsvp-27': 'table-8',
  'rsvp-32': 'table-8',
  'rsvp-37': 'table-8',
  // Mesa 9 - Igreja & Comunidade (10/10)
  'rsvp-21': 'table-9',
  'rsvp-22': 'table-9',
  'rsvp-23': 'table-9',
  'manual-8': 'table-9',
  // Mesa 10 - Amigos da Faculdade (8/10)
  'rsvp-19': 'table-10',
  'rsvp-20': 'table-10',
  'rsvp-28': 'table-10',
  'rsvp-33': 'table-10',
  // Mesa 11 - Convidados VIP & Honra (8/10)
  'rsvp-25': 'table-11',
  'rsvp-29': 'table-11',
  'rsvp-30': 'table-11',
  'rsvp-31': 'table-11',
  // Mesa 12 - Reserva & Extras (6/10)
  'rsvp-39': 'table-12',
  'rsvp-40': 'table-12',
  'manual-7': 'table-12',
};

export const DEMO_MESSAGES = [
  {
    id: 'msg-1',
    name: 'Hélder & Tânia Sitoe',
    relation: 'Padrinhos',
    text: 'Carlos e Nádia, acompanhámos o vosso amor crescer desde o primeiro dia. Que Deus ilumine sempre a vossa nova família!',
    date: 'Hoje'
  },
  {
    id: 'msg-2',
    name: 'Armando & Fátima Mondlane',
    relation: 'Pais da Noiva',
    text: 'Nossa filha querida e nosso genro, que o respeito, a fé e o carinho nunca faltem na vossa casa.',
    date: 'Ontem'
  },
  {
    id: 'msg-3',
    name: 'Eduardo & Beatriz Tembe',
    relation: 'Pais do Noivo',
    text: 'Com o coração cheio de gratidão celebramos esta união abençoada. Sejam eternamente felizes!',
    date: 'Há 2 dias'
  },
  {
    id: 'msg-4',
    name: 'Arq.ª Beatriz Baloi',
    relation: 'Colega & Amiga',
    text: 'A nossa arquiteta favorita merece toda a felicidade do mundo! Contamos os dias para o grande sim na Polana.',
    date: 'Há 3 dias'
  },
  {
    id: 'msg-5',
    name: 'Bruno Nhabinde',
    relation: 'Amigo da Faculdade',
    text: 'Grande Carlos! Da faculdade para o altar. Muitas bênçãos e alegrias para vocês!',
    date: 'Há 4 dias'
  },
  {
    id: 'msg-6',
    name: 'Pastor Samuel Ndlovu',
    relation: 'Igreja Central da Polana',
    text: 'O cordão de três dobras não se quebra facilmente. Que o Senhor abençoe o vosso matrimónio!',
    date: 'Há 5 dias'
  }
];
