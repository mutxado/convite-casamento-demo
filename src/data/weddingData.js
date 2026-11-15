const base = import.meta.env.BASE_URL || '/';

export const weddingData = {
  googleSheetsUrl: "",
  adminPassword: "carlos2027",
  storagePrefix: "carlos_nadia_demo",

  couple: {
    groom: {
      name: "Carlos",
      fullName: "Carlos Eduardo Tembe",
      role: "O Noivo",
      bio: "Engenheiro civil apaixonado pela família, música e boas conversas ao fim da tarde. No primeiro sorriso da Nádia, o Carlos encontrou a sua casa e a sua melhor amiga.",
      quote: "Amar é caminhar na mesma direção, com paciência, fé e alegria.",
      image: `${base}images/groom_portrait.jpg`
    },
    bride: {
      name: "Nádia",
      fullName: "Nádia Sofia Mondlane",
      role: "A Noiva",
      bio: "Arquiteta de coração generoso, sorriso sereno e olhar atento aos detalhes. A Nádia vê no Carlos a força tranquila, o cuidado diário e o amor que sempre sonhou.",
      quote: "O amor tudo sofre, tudo crê, tudo espera, tudo suporta.",
      image: `${base}images/bride_portrait.jpg`
    },
    heroBg: `${base}images/hero_couple.jpg`,
    hashtag: "#CarlosENadia2027",
    tagline: "CASAMENTO EM MAPUTO, MOÇAMBIQUE",
    dateText: "Sábado, 15 de Maio de 2027",
    rsvpDeadline: "15 de Abril de 2027",
    targetDate: "2027-05-15T09:00:00",
    whatsappPhone: "258864232917",
    flyerImage: `${base}images/hero_couple.jpg`
  },

  story: [
    {
      year: "2023",
      title: "O Primeiro Encontro",
      description: "Cruzámo-nos num evento de amigos em comum na Polana. Uma conversa descontraída sobre arquitetura e viagens transformou-se em horas de risos e na vontade de nos voltarmos a ver.",
      image: `${base}images/hero_couple.jpg`
    },
    {
      year: "2025",
      title: "Crescendo Lado a Lado",
      description: "Entre passeios pela Marginal, jantares em família e projetos partilhados, percebemos que juntos somos mais fortes, mais leves e profundamente felizes.",
      image: `${base}images/story_2.jpg`
    },
    {
      year: "2027",
      title: "O Nosso Grande Sim",
      description: "Com a bênção das nossas famílias e de Deus, convidamos cada pessoa especial da nossa caminhada para celebrar connosco o início da nossa família.",
      image: `${base}images/story_3.jpg`
    }
  ],

  events: [
    {
      id: "ceremony",
      title: "Registo Civil & Cerimónia",
      time: "09:00 H",
      place: "Igreja Central da Polana",
      address: "Avenida Julius Nyerere, Nº 940, Maputo",
      details: "Celebração do nosso matrimónio civil e bênção religiosa diante de Deus, familiares e amigos.",
      mapUrl: "https://maps.google.com/?q=Avenida+Julius+Nyerere+Maputo",
      appleMapUrl: "https://maps.apple.com/?q=Avenida+Julius+Nyerere+Maputo"
    },
    {
      id: "reception",
      title: "Copo de Água & Recepção",
      time: "13:30 H",
      place: "Salão de Eventos Costa do Sol",
      address: "Avenida da Marginal, Zona da Costa do Sol, Maputo",
      details: "Almoço festivo à beira-mar, brinde dos noivos, música ao vivo e muita celebração.",
      mapUrl: "https://maps.google.com/?q=Avenida+da+Marginal+Costa+do+Sol+Maputo",
      appleMapUrl: "https://maps.apple.com/?q=Avenida+da+Marginal+Costa+do+Sol+Maputo"
    }
  ],

  gallery: [
    {
      id: 1,
      title: "Carlos Tembe & Nádia Mondlane",
      url: `${base}images/hero_couple.jpg`
    },
    {
      id: 2,
      title: "Caminhando Juntos",
      url: `${base}images/story_2.jpg`
    },
    {
      id: 3,
      title: "O Pedido & As Alianças",
      url: `${base}images/story_3.jpg`
    },
    {
      id: 4,
      title: "Noite de Celebração",
      url: `${base}images/gallery_4.jpg`
    },
    {
      id: 5,
      title: "Carlos Eduardo Tembe",
      url: `${base}images/groom_portrait.jpg`
    },
    {
      id: 6,
      title: "Nádia Sofia Mondlane",
      url: `${base}images/bride_portrait.jpg`
    }
  ],

  gifts: {
    intro: "A vossa presença no nosso casamento é o maior presente que poderíamos desejar. Para quem desejar nos abençoar nesta nova etapa, disponibilizamos as opções de contribuição abaixo:",
    paymentInfo: {
      mpesa: "M-Pesa: 84 000 0000 (Carlos Tembe)",
      emola: "e-Mola: 86 000 0000 (Nádia Mondlane)",
      bankAccount: "Millennium BIM: NIB 0001 0000 0000 0000 0000 0"
    }
  },

  musicPlaylist: [
    { title: "Perfect", artist: "Ed Sheeran" },
    { title: "A Thousand Years", artist: "Christina Perri" },
    { title: "Deus de Promessas", artist: "Gospel" },
    { title: "You Are The Reason", artist: "Calum Scott" }
  ]
};
