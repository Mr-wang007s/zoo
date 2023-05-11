import { v4 as uuidv4 } from "uuid";

const MODELS = [
  {
    id: 3,
    owner: "stability-ai",
    name: "stable-diffusion 1.5",
    version: "328bd9692d29d6781034e3acab8cf3fcb122161e6f5afb896a4ca9fd57090577",
    checked: false,
    source: "replicate",
    url: "https://replicate.com/stability-ai/stable-diffusion",
    description:
      "A latent text-to-image diffusion model capable of generating photo-realistic images given any text input",
    links: [
      {
        name: "replicate",
        url: "https://replicate.com/stability-ai/stable-diffusion",
      },
      {
        name: "github",
        url: "https://github.com/replicate/cog-stable-diffusion",
      },
    ],
  },
  {
    id: 1,
    owner: "stability-ai",
    name: "stable-diffusion 2.1",
    version: "db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
    checked: false,
    url: "https://replicate.com/stability-ai/stable-diffusion",
    description:
      "A latent text-to-image diffusion model capable of generating photo-realistic images given any text input",
    links: [
      {
        name: "replicate",
        url: "https://replicate.com/stability-ai/stable-diffusion",
      },
      {
        name: "github",
        url: "https://github.com/replicate/cog-stable-diffusion",
      },
    ],
    source: "replicate",
  },
  {
    id: 4,
    owner: "ai-forever",
    name: "kandinsky-2",
    version: "601eea49d49003e6ea75a11527209c4f510a93e2112c969d548fbb45b9c4f19f",
    checked: false,
    description:
      "text2img model trained on LAION HighRes and fine-tuned on internal datasets",
    url: "https://replicate.com/ai-forever/kandinsky-2",
    links: [
      {
        name: "replicate",
        url: "https://replicate.com/ai-forever/kandinsky-2",
      },
      {
        name: "github",
        url: "https://github.com/chenxwh/Kandinsky-2",
      },
    ],
    source: "replicate",
  },
  {
    id: 5,
    owner: "tstramer",
    name: "material-diffusion",
    version: "a42692c54c0f407f803a0a8a9066160976baedb77c91171a01730f9b0d7beeff",
    checked: false,
    description:
      "Stable diffusion fork for generating tileable outputs using v1.5 model",
    url: "https://replicate.com/tstramer/material-diffusion",
    links: [
      {
        name: "replicate",
        url: "https://replicate.com/tstramer/material-diffusion",
      },
    ],
    source: "replicate",
  },
  // NOTE: DALL-E runs synchronously, so it should always be the last model!
  {
    id: 6,
    owner: "OpenAI",
    name: "DALL-E",
    version: "dall-e",
    checked: true,
    description:
      "DALL·E 2 is an AI system that can create realistic images and art from a description in natural language.",
    url: "https://openai.com/product/dall-e-2",
    links: [
      {
        name: "openai",
        url: "https://openai.com/product/dall-e-2",
      },
    ],
    source: "openai",
  },
];

export default MODELS;