import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const receitas = defineCollection({
  loader: glob({ base: './src/content/receitas', pattern: '**/*.md' }),
  schema: ({ image }) => z.object({
    titulo: z.string(),
    descricao: z.string(),
    porcoes: z.number(),
    destaque: z.boolean(),                              // Destaque Pagina inicial
    tags: z.array(z.string()),                          // ["sobremesa", "rápido"]
    cozinha: z.string(),                                 // "Brasileira"
    ingredientesPrincipais: z.array(z.string()),         // pra preview/cards ["leite condensado", "ovos"]
    utensilios: z.array(z.string()),
    tempoTotal: z.number(),                              // em minutos
    tempoAtivo: z.number(),
    tempoEspera: z.number(),
    dificuldade: z.enum(['Fácil', 'Médio', 'Difícil']),
    video: z.string().url(),
    serieVideo: z.string().optional(),
    imagem: image(),
    ingredientes: z.array(z.object({
      grupo: z.string().optional(),
      itens: z.array(z.object({
        quantidade: z.string(),
        nome: z.string(),
      })),
    })),
    passos: z.array(z.string()),
    dica: z.array(z.string()),
  }),
});

export const collections = { receitas };