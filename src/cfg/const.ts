import * as path from "path";

// path
export const currentExecPath = process.cwd();

export const packageSrcPath = path.dirname(require.main!.filename);
export const packageRootPath = path.resolve(packageSrcPath, '../');

export const dappTemplatePath = path.resolve(packageRootPath, './template');
export const targetEnvironmentPath = path.resolve(packageRootPath, './target'); 

export const devnetSourcePath = path.resolve(packageRootPath, './docker/devnet');
export const devnetPath = path.resolve(targetEnvironmentPath, `devnet`);
export const ckbFolderPath = path.resolve(targetEnvironmentPath, 'ckb'); 
export const ckbBinPath = path.resolve(ckbFolderPath, 'ckb');

// Version
export const minimalRequiredCKBVersion = "0.113.1";



