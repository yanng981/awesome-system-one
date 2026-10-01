# Awesome System One Models

A curated list of **System One decision models**: models that answer typed questions about an input (pick an option, answer yes/no, rate on a scale) and return probabilities or a single chosen option instead of free-form text.

TypeSafe named the category with Jev on September 15, 2026. Within days, open models appeared that you can download, fine-tune and self-host, several of them behind the same `POST /v1/systemone` API.

- **26 models**, last checked against each project's own pages on **2026-10-01**.
- Facts come from each project's README or model card. Benchmarks are self-reported and not directly comparable.
- The list is generated from the [System One models comparison](https://laya-ai.com/system-one-models) on laya-ai.com and refreshed automatically.

## Models

| Model | Maker | Approach | Size | License | Jev API | Links |
|---|---|---|---|---|---|---|
| **TypeSafe Jev** | TypeSafe AI | Hosted model | Undisclosed | Proprietary | Reference API | [Source](https://docs.typesafe.ai/introduction) |
| **Liquid AI d1** | Liquid AI | Hosted model | Undisclosed | Proprietary | Yes, POST /decisions/v1/systemone; works with the TypeSafe SDKs | [Source](https://docs.liquid.ai/lfm/models/decision-models) |
| **OpenAI Decisions API** | OpenAI | Hosted model | Undisclosed (a version of GPT-6 Luna) | Proprietary | No, its own interface (not documented yet) | [Source](https://the-decoder.com/openai-expands-codex-and-its-api-at-devday-with-security-scans-a-decisions-api-and-ultrafast/) |
| **Laya** | Convai Innovations | Trained encoder with decision heads | 322M / 421M | Apache 2.0 | Yes, through laya-serve | [Source](https://github.com/NandhaKishorM/laya) · [Guide](https://laya-ai.com/models) |
| **Kev** | Jared Palmer | Fine-tuned Qwen models | 0.8B / 4B / 9B / 27B | Apache 2.0 | Yes, the TypeSafe SDK works unchanged | [Source](https://github.com/jaredpalmer/kev) · [Guide](https://laya-ai.com/system-one-models/kev) |
| **OpenDecider** | Manjunath Shiva | Trained encoder (nano); fine-tuned Qwen (small, medium) | ~400M / 4B / 30B MoE | Apache 2.0 | Yes, `opendecider serve` (0.2.0+): POST /v1/systemone and /batch | [Source](https://github.com/manjunathshiva/opendecider) |
| **Decider** | Mapika | Fine-tuned Qwen models | 2B / 4B / 35B MoE | Apache 2.0 | Yes, a /v1/systemone endpoint | [Source](https://github.com/Mapika/decider) |
| **Von** | wfzyx | Trained encoder, non-autoregressive | 395M | Apache 2.0 | Yes, a /v1/systemone server | [Source](https://github.com/wfzyx/von) · [Guide](https://laya-ai.com/system-one-models/von) |
| **Bespoke Nimble** | Bespoke Labs | Fine-tuned model with training recipe | 9B | Not stated in the repository | No, its own schema format | [Source](https://github.com/bespokelabsai/nimble) |
| **SemIf (formerly OpenJev)** | TheoLeeCJ | Training-free, reads option probabilities from open LLMs | Depends on the model (2B to 27B tested) | MIT | Reproduces the interface pattern | [Source](https://github.com/TheoLeeCJ/SemIf-OpenJev) |
| **Rizzo Flow** | Rizzo AI Academy | Fine-tuned LLM (Spark-X2.5) on llama.cpp | 1.7B / 4B | Apache 2.0 | Yes, POST /v1/systemone | [Source](https://github.com/Rizzo-AI-Academy/rizzo-flow) |
| **AnyJev** | Nokia Applied Research | Training-free library over existing LLMs | Depends on the model | Apache 2.0 | Serves its own decision endpoint | [Source](https://github.com/nokia-applied-research/AnyJev) |
| **NanoJev** | TianyuCodings | Small parallel decision model | 0.6B | MIT | Not stated | [Source](https://github.com/TianyuCodings/NanoJev) |
| **Tev1-4B-experimental** | Together AI | Fine-tuned LLM, answers with one option letter | 4B | Weights license being finalized; code MIT | No, chat completions with 2 to 24 options | [Source](https://huggingface.co/togethercomputer/Tev1-4B-experimental) · [Guide](https://laya-ai.com/system-one-models/tev1) |
| **GLiNER2.5-Decide** | Fastino | Encoder classifier | 340M (also 1B, and 287M multilingual) | Apache 2.0 | No, its own classify_text API | [Source](https://huggingface.co/fastino/GLiNER2.5-Decide) |
| **OpenThai-SystemOne** | iApp Technology | Fine-tuned model with a slot head | 0.8B | Apache 2.0 | Yes, mirrors POST /v1/systemone | [Source](https://github.com/iapp-technology/openthai-systemone) |
| **djev (DiffusionGemma-Jev)** | mmastrac | Training-free, reads decisions from a diffusion LLM | DiffusionGemma (26B-A4B in the DGX Spark recipe) | Apache 2.0 | Yes, POST /v1/systemone | [Source](https://github.com/mmastrac/djev) |
| **Jev-Omni** | akhilaaa3 | Fine-tuned multimodal model | 12B (Gemma 4 12B) | Apache 2.0 | Not stated | [Source](https://huggingface.co/akhilaaa3/Jev-Omni) |
| **Open-Jev** | Zefan Cai | LoRA adapter + scalar decision head | 2B, 9B, 27B (Qwen3.5) | Apache 2.0 | Yes, a local /v1/systemone server | [Source](https://github.com/Zefan-Cai/Open-Jev) |
| **JevK5** | alibiserikbay | Fine-tuned LLM with calibrated letter readout | 4B (Qwen3.5-4B) | Apache 2.0 | Yes, TypeSafe-style /v1/systemone runtime | [Source](https://github.com/allebee/jevk5) |
| **open-jev-deberta-v3-large** | kotoba-lang | Trained encoder, non-autoregressive | 434M (DeBERTa-v3-large) | Apache 2.0 | No, a Python library | [Source](https://huggingface.co/com-kotobalabs/open-jev-deberta-v3-large) |
| **AgentJev** | malevrigns | LLM backbone + order-invariant candidate head | 0.6B (Qwen3-0.6B) | Apache 2.0 | No, its own server and client | [Source](https://github.com/malevrigns/agent-jev) |
| **Jev-Style** | chaoliangUNSW | Fine-tuned LLM, one-token decision (GGUF) | 0.8B (v3); 2B (v1) | Apache 2.0 | No, chat completions with logprobs | [Source](https://jevstyle.com/) |
| **Anarkali** | ToufiqQureshi | Trained encoder (Ettin), non-autoregressive | 68M | Apache 2.0 | Yes, POST /v1/systemone | [Source](https://github.com/ToufiqQureshi/anarkali) |
| **Jeeves** | PostHog | Fine-tuned LLM (LoRA + pointer head) that reasons before deciding | 9B (Qwen3.5-9B) | MIT code, Apache 2.0 weights | Yes, a local /v1/systemone server | [Source](https://github.com/PostHog/jeeves) |
| **OpenJev-4B** | ejhshen (Junhao Shen) | LLM backbone + option-set decision head, non-autoregressive | 4B (Qwen3.5-4B) | MIT | Yes, a local /v1/systemone server | [Source](https://github.com/ejhshen/OpenJev) |

## Details

### TypeSafe Jev

The hosted model that introduced the System One name and the choice, score and noul question types. Generally available and billed per token.

- **Runs on:** TypeSafe cloud only
- **Languages:** Provider-dependent
- [Source](https://docs.typesafe.ai/introduction)

### Liquid AI d1

The first decision model from Liquid AI, released September 29, 2026 with a free tier (model name d1:free); paid pricing is not published yet. AlphaSignal reports it took first place on the Jev Decision Index on Hugging Face, ahead of Jev 1.13.

- **Runs on:** Liquid API only (no downloadable weights)
- **Languages:** Not stated
- [Source](https://docs.liquid.ai/lfm/models/decision-models)

### OpenAI Decisions API

Announced at DevDay on September 29, 2026: picks one answer from a list you define, 150 ms against 1.6 s for regular GPT-6 Luna (OpenAI figures). Limited preview; price and probability output not published.

- **Runs on:** OpenAI API only
- **Languages:** Not stated; accepts text or images
- [Source](https://the-decoder.com/openai-expands-codex-and-its-api-at-devday-with-security-scans-a-decisions-api-and-ultrafast/)

### Laya

Non-autoregressive choice, score and noul heads on ModernBERT and mmBERT encoders, with a Router, fine-tuning and many community runtimes.

- **Runs on:** CPU, CUDA, Apple Silicon
- **Languages:** English, plus a 100+ language checkpoint
- [Source](https://github.com/NandhaKishorM/laya) · [Guide](https://laya-ai.com/models)

### Kev

Small Jev-like models on Qwen3.5 and Qwen3.8 bases. Each checkpoint ships a fitted temperature, and a fine-tune and deploy loop runs on Modal.

- **Runs on:** Apple Silicon Mac (0.8B) up to one 80 GB GPU (27B)
- **Languages:** Not stated
- [Source](https://github.com/jaredpalmer/kev) · [Guide](https://laya-ai.com/system-one-models/kev)

### OpenDecider

Distilled from two open teacher models. The 400M nano model scores 0.796 on the typed-decisions benchmark, against 0.766 for Laya's fine-tuned checkpoint and 0.754 for Jev (author's measurements). Early release, updated often.

- **Runs on:** CPU, CUDA, Apple Silicon (MLX builds); 30B needs several NVIDIA GPUs
- **Languages:** English (only English evaluated so far)
- [Source](https://github.com/manjunathshiva/opendecider)

### Decider

One-pass typed decisions with calibrated probabilities, trained on public data and labels from a local Qwen3.5-27B teacher. Choice supports 2 to 255 options.

- **Runs on:** Local GPU, vLLM serving
- **Languages:** Not stated
- [Source](https://github.com/Mapika/decider)

### Von

Built on ModernBERT-Large. Version 1.2 scores each option independently, so the answer no longer depends on the order the options are listed in.

- **Runs on:** Local CPU or GPU
- **Languages:** English
- [Source](https://github.com/wfzyx/von) · [Guide](https://laya-ai.com/system-one-models/von)

### Bespoke Nimble

Publishes the data curation, training and serving recipe behind Bespoke-Nimble-9B, which now takes 8,192-token inputs and up to 255 choices per field.

- **Runs on:** Apple Silicon, NVIDIA GPU
- **Languages:** Not stated
- [Source](https://github.com/bespokelabsai/nimble)

### SemIf (formerly OpenJev)

Scores typed options directly from a frozen open model with no answer text or JSON parsing, with per-workload temperature calibration.

- **Runs on:** RTX 3090, Apple Silicon, browser (WebGPU demo)
- **Languages:** Depends on the model
- [Source](https://github.com/TheoLeeCJ/SemIf-OpenJev)

### Rizzo Flow

A local take on Jev with a LoRA fine-tune of Spark-X2.5. The project reports 0.648 on typed-decisions against 0.727 for Jev, and notes that probabilities are uncalibrated unless you calibrate them on your own data.

- **Runs on:** llama.cpp: CUDA, Metal, Vulkan, ROCm, SYCL or CPU
- **Languages:** Not stated
- [Source](https://github.com/Rizzo-AI-Academy/rizzo-flow)

### AnyJev

Turns an existing LLM into a Jev-style decision model by reading its hidden states, with debiasing and calibration levels and no task-specific training.

- **Runs on:** Hugging Face models, vLLM serving
- **Languages:** Depends on the model
- [Source](https://github.com/nokia-applied-research/AnyJev)

### NanoJev

A compact replica with an end-to-end training pipeline, evaluated on game tasks such as ViZDoom, a maze and Snake against Jev.

- **Runs on:** Local GPU
- **Languages:** Not stated
- [Source](https://github.com/TianyuCodings/NanoJev)

### Tev1-4B-experimental

An experimental supervised fine-tune of Qwen3.5-4B released on September 23, 2026, with the data recipe and a guide to training a similar classifier.

- **Runs on:** Together API, or self-hosted Transformers and GGUF
- **Languages:** Not stated
- [Source](https://huggingface.co/togethercomputer/Tev1-4B-experimental) · [Guide](https://laya-ai.com/system-one-models/tev1)

### GLiNER2.5-Decide

Takes label sets at call time and scores several heads in one pass. Built for operational decisions such as intent, routing, sentiment and priority.

- **Runs on:** CPU or GPU with the gliner2 package
- **Languages:** English, plus a multilingual variant
- [Source](https://huggingface.co/fastino/GLiNER2.5-Decide)

### OpenThai-SystemOne

A Qwen3.5-0.8B text tower whose output head is replaced by a 256-way slot softmax, continued-pretrained on Thai.

- **Runs on:** CUDA, MPS, CPU
- **Languages:** Thai, English
- [Source](https://github.com/iapp-technology/openthai-systemone)

### djev (DiffusionGemma-Jev)

Reads Jev-style decisions from DiffusionGemma, a discrete diffusion model, in one denoise step through vLLM. The djev-dev fork adds native image inputs and live camera sampling.

- **Runs on:** NVIDIA GPU with vLLM
- **Languages:** Not stated
- [Source](https://github.com/mmastrac/djev)

### Jev-Omni

A decision classifier for text, images, audio and video, fine-tuned on 30,000 questions: a probability per option instead of an explanation. Reports 86.15% on matched JevBench groups (self-reported).

- **Runs on:** NVIDIA GPU
- **Languages:** Not stated
- [Source](https://huggingface.co/akhilaaa3/Jev-Omni)

### Open-Jev

Scores the candidates you supply for choice, noul and score questions without generating an answer, using a trained head on top of Qwen3.5.

- **Runs on:** NVIDIA GPU
- **Languages:** Not stated
- [Source](https://github.com/Zefan-Cai/Open-Jev)

### JevK5

Qwen3.5-4B with a merged LoRA, read out with the SemIf protocol and one calibration temperature. Questions with more than 16 options are read in several passes.

- **Runs on:** Local GPU
- **Languages:** English
- [Source](https://github.com/allebee/jevk5)

### open-jev-deberta-v3-large

An independent reproduction of the Jev interface: choice (up to 255 options), score (2 to 10 levels) and noul in one forward pass, measured on public gold labels.

- **Runs on:** Local CPU or GPU
- **Languages:** English
- [Source](https://huggingface.co/com-kotobalabs/open-jev-deberta-v3-large)

### AgentJev

The language-model head is removed and a candidate head scores the options. The published checkpoint judges whether a coding task is actually finished.

- **Runs on:** Local CPU or GPU
- **Languages:** English, Chinese
- [Source](https://github.com/malevrigns/agent-jev)

### Jev-Style

GGUF decision models that return calibrated option probabilities from a single token. v3 reports 79.2% on 2,000 typed decisions and takes 25,600-token inputs.

- **Runs on:** llama.cpp, LM Studio (CPU or GPU)
- **Languages:** 51 (v3)
- [Source](https://jevstyle.com/)

### Anarkali

A 68M encoder that beats Jev on the public typed-decisions benchmark (74.0% vs 72.7%) and comes within 2.6 points of Laya at a sixth of the size, with the lowest calibration error of the three (author-reported).

- **Runs on:** CPU or GPU via a single 273 MB ONNX file
- **Languages:** English only
- [Source](https://github.com/ToufiqQureshi/anarkali)

### Jeeves

Thinks before it answers: 0.935 on the public JevBench items vs 0.866 for Jev (0.865 vs 0.730 on the hard tier), at about 0.3 s per request without thinking and a 3.3 s median with it on one H100. Jev still leads on MMLU-Pro (author-reported).

- **Runs on:** CUDA GPU (FP8 kernel needs Hopper)
- **Languages:** Not stated
- [Source](https://github.com/PostHog/jeeves)

### OpenJev-4B

Options and criteria are inputs, so the output follows whatever candidates a request supplies, and reordering them does not change the answer. Trained with SFT then RL on the public OpenJevData-140k set; training code included.

- **Runs on:** CUDA GPU
- **Languages:** Not stated
- [Source](https://github.com/ejhshen/OpenJev)

## Choosing a model

- **Replacing Jev without changing client code:** pick a model that serves `POST /v1/systemone`. See [Jev alternatives](https://laya-ai.com/jev-alternatives).
- **CPU-only or low latency:** the encoder models (Laya, Von, GLiNER2.5-Decide) are the smallest.
- **Highest accuracy with a GPU:** the larger fine-tuned LLMs, such as Kev-27B or Decider 35B MoE.

Always test on your own labelled data before switching production traffic.

## Contributing

Know a System One model that is missing, or a fact that changed? [Open an issue](../../issues/new) with a link to the project's own page, or submit it at [laya-ai.com/submit](https://laya-ai.com/submit).

## License

[CC0 1.0](LICENSE). The listed projects keep their own licenses.
