import { resolve } from 'path';
import { runTypeChain, glob } from 'typechain';

async function main() {
  const cwd = resolve(__dirname, '../contracts');
  const allFiles = glob(cwd, [`./*.json`])

  const result = await runTypeChain({
    cwd,
    filesToProcess: allFiles,
    allFiles,
    outDir: resolve(__dirname, '../types/sm'),
    target: 'ethers-v5',
  })

  console.log('result:', result);
}

main().catch(console.error)
