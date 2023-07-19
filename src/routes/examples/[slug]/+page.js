import { getExampleData } from '../../../lib/getExampleData.js';

function getCategory(params) {
  return getExampleData(`${params.slug}/category.md`);
}

async function getExamples(params) {
  const modules = import.meta.glob('/src/examples/**/index.md');

  // Find all examples whose paths have the category slug
  const examples = await Promise.all(Object.entries(modules)
    .filter(([path]) => path.startsWith(`/src/examples/${params.slug}`))
    .map(([path, resolver]) =>
      resolver().then(post => post.metadata)
    ));

    console.log(examples);
  return examples
    .filter(example => !example.hidden)
    .sort((a, b) => a.order - b.order);
}

export async function load({ params }) {
  const category = await getCategory(params);
  const examples = await getExamples(params);

  return {
    ...category,
    examples
  };
}