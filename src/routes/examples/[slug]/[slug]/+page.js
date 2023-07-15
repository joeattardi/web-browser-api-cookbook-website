import fs from 'fs/promises';

async function getExample(params) {
  const modules = import.meta.glob('/src/examples/**/index.md');
  const exampleModule = Object.entries(modules).find(([path, resolver]) => {
    return path.endsWith(`${params.slug}/index.md`);
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

async function getSourceFiles(params) {
  const modules = import.meta.glob('/src/examples/**/*.{js,html,css}', { as: 'raw' });
  const sourcePromises = Object.entries(modules)
    .filter(([path]) => path.includes(params.slug))
    .map(([path, resolver]) => resolver().then(content => ({
      path: path.split('/').slice(-1)[0],
      content
    })));

  const sourceFiles = await Promise.all(sourcePromises);

  // const sourceFiles = Object.keys(modules)
  //   .filter(path => path.includes(params.slug));
  
  //   console.log(sourceFiles);
  // const sourcePromises = Object.entries(modules)
  //   .filter(([path]) => path.includes(params.slug))
  //   .map(([path, resolver]) => resolver());
  
  //   const sourceFiles = await Promise.all(sourcePromises);
  //   console.log(sourceFiles);

  return sourceFiles;
}

export async function load({ params }) {
  const example = await getExample(params);
  const sourceFiles = await getSourceFiles(params);

  return {
    ...example,
    sourceFiles
  };
}
