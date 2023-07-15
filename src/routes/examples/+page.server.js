export async function load() {
  const modules = import.meta.glob('/src/examples/**/category.md');

  const examplePromises = Object.entries(modules).map(([path, resolver]) =>
    resolver().then(post => post.metadata)
  );

  const examples = await Promise.all(examplePromises);
  return { examples };
}
