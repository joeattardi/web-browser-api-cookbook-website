export async function load() {
  const modules = import.meta.glob('/src/examples/**/category.md');

  const chapters = await Promise.all(Object.entries(modules).map(([path, resolver]) =>
    resolver().then(post => post.metadata)
  ));

  return { chapters: chapters.sort((a, b) => a.chapter - b.chapter) };
}
