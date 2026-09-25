// Regenerates README.md from the public data feed behind
// https://laya-ai.com/system-one-models. Run: node scripts/build-readme.mjs
import { writeFile } from 'node:fs/promises';

const FEED = process.env.FEED_URL ?? 'https://laya-ai.com/system-one-models.json';

const res = await fetch(FEED, { headers: { 'user-agent': 'awesome-system-one' } });
if (!res.ok) throw new Error(`Feed returned ${res.status}`);
const data = await res.json();
if (!Array.isArray(data.models) || data.models.length === 0) {
  throw new Error('Feed has no models; refusing to overwrite README.');
}

const cell = (value) => String(value ?? '').replaceAll('|', '\\|').replaceAll('\n', ' ');
const links = (m) =>
  [`[Source](${m.sourceUrl})`, m.guideUrl ? `[Guide](${m.guideUrl})` : null]
    .filter(Boolean)
    .join(' · ');

const table = [
  '| Model | Maker | Approach | Size | License | Jev API | Links |',
  '|---|---|---|---|---|---|---|',
  ...data.models.map(
    (m) =>
      `| **${cell(m.name)}** | ${cell(m.maker)} | ${cell(m.kind)} | ${cell(m.size)} | ${cell(m.license)} | ${cell(m.jevApi)} | ${links(m)} |`
  ),
].join('\n');

const details = data.models
  .map(
    (m) =>
      `### ${m.name}\n\n${m.description}\n\n- **Runs on:** ${m.runsOn}\n- **Languages:** ${m.languages}\n- ${links(m)}`
  )
  .join('\n\n');

const readme = `# Awesome System One Models

A curated list of **System One decision models**: models that answer typed questions about an input (pick an option, answer yes/no, rate on a scale) and return probabilities or a single chosen option instead of free-form text.

TypeSafe named the category with Jev on September 15, 2026. Within days, open models appeared that you can download, fine-tune and self-host, several of them behind the same \`POST /v1/systemone\` API.

- **${data.models.length} models**, last checked against each project's own pages on **${data.verified}**.
- Facts come from each project's README or model card. Benchmarks are self-reported and not directly comparable.
- The list is generated from the [System One models comparison](${data.source}) on laya-ai.com and refreshed automatically.

## Models

${table}

## Details

${details}

## Choosing a model

- **Replacing Jev without changing client code:** pick a model that serves \`POST /v1/systemone\`. See [Jev alternatives](https://laya-ai.com/jev-alternatives).
- **CPU-only or low latency:** the encoder models (Laya, Von, GLiNER2.5-Decide) are the smallest.
- **Highest accuracy with a GPU:** the larger fine-tuned LLMs, such as Kev-27B or Decider 35B MoE.

Always test on your own labelled data before switching production traffic.

## Contributing

Know a System One model that is missing, or a fact that changed? [Open an issue](../../issues/new) with a link to the project's own page, or submit it at [laya-ai.com/submit](https://laya-ai.com/submit).

## License

[CC0 1.0](LICENSE). The listed projects keep their own licenses.
`;

await writeFile(new URL('../README.md', import.meta.url), readme);
console.log(`README.md written with ${data.models.length} models.`);
