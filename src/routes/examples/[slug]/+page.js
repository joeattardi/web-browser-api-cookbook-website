async function getCategory(params) {
  const modules = import.meta.glob('/src/examples/**/category.md');
  const exampleModule = Object.entries(modules).find(([path, resolver]) => {
    return path.endsWith(`${params.slug}/category.md`);
  });

  if (exampleModule) {
    const [path, resolver] = exampleModule;
    const { default: component, metadata } = await resolver();

    return {
      component,
      metadata
    };
  }
}

async function getExamples(params) {
  const modules = import.meta.glob('/src/examples/**/index.md');
  const examplePromises = Object.entries(modules)
    .filter(([path]) => path.includes(params.slug))
    .map(([path, resolver]) =>
      resolver().then(post => post.metadata)
    );

  const examples = await Promise.all(examplePromises);
  console.log(examples);
  examples.sort((a, b) => a.order - b.order);
  return examples;
}

export async function load({ params }) {
  const category = await getCategory(params);
  const examples = await getExamples(params);

  return {
    ...category,
    examples
  };
}