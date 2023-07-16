import { getExampleData } from '../../../../lib/getExampleData.js';

async function getExample(params) {
  return await getExampleData(`${params.slug}/index.md`);
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
  
  return sourceFiles.reduce((result, current) => ({
    ...result,
    [current.path.split('.')[1]]: current.content
  }), {});
}

export async function load({ params }) {
  const example = await getExample(params);
  const sourceFiles = await getSourceFiles(params);

  return {
    ...example,
    sourceFiles
  };
}
