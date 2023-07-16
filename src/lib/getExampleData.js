export async function getExampleData(pattern) {
  const modules = import.meta.glob('/src/examples/**/*.md');
  const exampleModule = Object.entries(modules).find(([path, resolver]) => {
    return path.endsWith(pattern);
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
