export const site = {
  instagram: "https://www.instagram.com/tostegranola/",
  instagramHandle: "@tostegranola",
  whatsapp: "https://api.whatsapp.com/send?phone=5513982323753",
  whatsappDisplay: "WhatsApp",
  shopeeUrl: "https://shopee.com.br/tostegranolas",
  comprarUrl: "https://shopee.com.br/tostegranolas",
  cidade: "Eldorado/SP",
  cnpj: "63.944.554/0001-67",
};

export type Flavor = {
  slug: string;
  nome: string;
  subtitulo: string;
  descricao: string;
  cor: string;
  corClara: string;
  imagemPack: string;
  imagemLifestyle: string;
  imagemDetalhe: string;
  ingredientes: string[];
  destaques: string[];
  peso: string;
  tamanhos: string;
  bestSeller?: boolean;
  nutricional: {
    porcao: string;
    calorias: string;
    proteinas: string;
    carboidratos: string;
    fibras: string;
    gordurasTotais: string;
    gordurasSaturadas: string;
    sodio: string;
  };
};

export const flavors: Flavor[] = [
  {
    slug: "tradicional",
    nome: "Tradicional",
    subtitulo: "Amêndoas e Lascas de Coco Caramelizado",
    descricao:
      "Mix nobre de nuts, amêndoas, lascas generosas de coco caramelizado, Castanhas-do-Brasil, mix de sementes e uvas-passas.\n\nO resultado é uma granola bem crocante, aromática e cheia de textura, com o sabor delicado das amêndoas e o toque especial do nosso coco caramelizado.",
    cor: "#2d4a68",
    corClara: "#e8eef4",
    imagemPack: "/images/pack-tradicional.png",
    imagemLifestyle: "/images/tra-1.png",
    imagemDetalhe: "/images/tra-2.png",
    ingredientes: [
      "Aveia em flocos",
      "Castanhas de caju",
      "Amêndoas",
      "Sementes de girassol",
      "Chia",
      "Linhaça",
      "Flocos de milho sem açúcar",
      "Coco em lascas caramelizadas",
      "Uvas passas",
      "Flocos de arroz",
      "Leite de coco",
      "Azeite",
      "Açúcar mascavo",
      "Água e sal",
    ],
    destaques: ["Rico em fibras", "Fonte de proteínas", "100% natural"],
    peso: "300g",
    tamanhos: "70g · 300g · 600g",
    nutricional: {
      porcao: "45g (1 xícara de chá)",
      calorias: "198 kcal",
      proteinas: "4,7g",
      carboidratos: "25g",
      fibras: "3,3g",
      gordurasTotais: "8,8g",
      gordurasSaturadas: "2,7g",
      sodio: "67mg",
    },
  },
  {
    slug: "frutas-vermelhas",
    nome: "Frutas Vermelhas",
    subtitulo: "Cranberry, Morango, Cereja e Amêndoas",
    descricao:
      "Uma combinação generosa de morangos, Cranberry e cerejas desidratados, mix de castanhas, amêndoas e um toque de baunilha.\n\nA Frutas Vermelhas Tosté foi feita para quem gosta de encontrar ingredientes de verdade em cada colherada. Trazem um contraste delicioso com a crocância das castanhas e das sementes, enquanto a baunilha completa o sabor com um aroma delicado.",
    cor: "#97283f",
    corClara: "#f8e8ec",
    imagemPack: "/images/pack-frutas.png",
    imagemLifestyle: "/images/fv-1.png",
    imagemDetalhe: "/images/fv-2.png",
    ingredientes: [
      "Aveia em flocos",
      "Sementes de chia",
      "Linhaça dourada e marrom",
      "Flocos de milho sem açúcar",
      "Flocos de milho com açúcar mascavo",
      "Cerejas",
      "Cranberry",
      "Morango desidratado",
      "Flocos de arroz",
      "Amêndoas",
      "Castanha de caju",
      "Leite de coco",
      "Açúcar mascavo",
      "Água, sal e essência de baunilha",
    ],
    destaques: ["Rico em fibras", "Antioxidantes naturais", "100% natural"],
    peso: "300g",
    tamanhos: "70g · 300g · 600g",
    bestSeller: true,
    nutricional: {
      porcao: "45g (1 unidade)",
      calorias: "174 kcal",
      proteinas: "3,8g",
      carboidratos: "25g",
      fibras: "2,8g",
      gordurasTotais: "6,5g",
      gordurasSaturadas: "2,3g",
      sodio: "54mg",
    },
  },
  {
    slug: "chocolate-intenso",
    nome: "Chocolate Intenso",
    subtitulo: "Pedaços de Chocolate, Cacau e Castanhas",
    descricao:
      "Mix crocante de castanhas, amêndoas e lascas de coco, bastante cacau e pedaços de chocolate nobre (amargo e ao leite).\n\nFeitos para os chocólatras de plantão que acreditam que café da manhã também pode ter chocolate! O resultado é uma granola intensa, crocante e cheia de textura.",
    cor: "#5c3623",
    corClara: "#f2ebe6",
    imagemPack: "/images/pack-chocolate.png",
    imagemLifestyle: "/images/cho-1.png",
    imagemDetalhe: "/images/cho-2.png",
    ingredientes: [
      "Aveia em flocos",
      "Castanha de caju",
      "Amêndoas",
      "Sementes de girassol",
      "Chia",
      "Linhaça",
      "Coco em lascas",
      "Cacau em pó 100%",
      "Flocos de milho sem açúcar",
      "Pedaços de chocolate nobre meio amargo e ao leite",
      "Leite de coco",
      "Azeite",
      "Açúcar mascavo",
      "Flocos de arroz e sal",
    ],
    destaques: ["Rico em fibras", "Chocolate de verdade", "100% natural"],
    peso: "300g",
    tamanhos: "70g · 300g · 600g",
    bestSeller: true,
    nutricional: {
      porcao: "45g (1 xícara de chá)",
      calorias: "210 kcal",
      proteinas: "4,5g",
      carboidratos: "28g",
      fibras: "3,2g",
      gordurasTotais: "8,9g",
      gordurasSaturadas: "3,1g",
      sodio: "62mg",
    },
  },
  {
    slug: "salgada",
    nome: "Ervas Finas",
    subtitulo: "Quem disse que granola não pode ser salgada?",
    descricao:
      "A Tosté Ervas Finas é nossa versão salgada: crocante, aromática e feita para acompanhar muito além do seu café da manhã.\n\nUma mistura generosa de sementes nutritivas, amêndoas e ervas finas. O resultado é um snack crocante e cheio de sabor, perfeito para quem gosta de ter uma opção diferente e prática à mão.",
    cor: "#5c6b3f",
    corClara: "#eef0e8",
    imagemPack: "/images/pack-salgada.png",
    imagemLifestyle: "/images/sal-1.png",
    imagemDetalhe: "/images/sal-2.png",
    ingredientes: [
      "Aveia",
      "Sementes (girassol, chia, linhaça, abóbora, gergelim branco e preto)",
      "Castanhas de caju",
      "Amêndoas",
      "Shoyu",
      "Azeite",
      "Alho em pó",
      "Melado de cana",
      "Limão desidratado",
      "Pimenta calabresa",
      "Ervas finas",
      "Açafrão",
      "Sal",
    ],
    destaques: ["Rico em fibras", "Versátil", "Perfeito como snack salgado"],
    peso: "300g",
    tamanhos: "70g · 300g · 600g",
    nutricional: {
      porcao: "45g (1 unidade)",
      calorias: "210 kcal",
      proteinas: "7,4g",
      carboidratos: "18g",
      fibras: "5g",
      gordurasTotais: "12g",
      gordurasSaturadas: "1,8g",
      sodio: "450mg",
    },
  },
];

export const nav = [
  { href: "#diferenciais", label: "Por que tosté" },
  { href: "#sabores", label: "Sabores" },
  { href: "#nossa-historia", label: "Nossa história" },
  { href: "#contato", label: "Contato" },
];
