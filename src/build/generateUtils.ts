/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import { format, Options as PrettierOptions } from 'prettier';
import * as path from 'path';
import { promises as fs } from 'fs';
import { prettier as defaultPrettierOpts } from '../../package.json';

export function writeCodeToFile(
  code: string,
  relativeFilePath: string,
  prettierOpts: PrettierOptions = {},
) {
  const fileName = path.join(__dirname, '..', '..', '..', relativeFilePath);
  return fs.writeFile(
    fileName,
    format(code, {
      parser: 'typescript',
      ...defaultPrettierOpts,
      ...prettierOpts,
    }),
    { encoding: 'utf-8' },
  );
}

export const autoGeneratedFileHeader = (autogenerationScriptName: string) =>
  [
    `// Copyright (c) Microsoft Corporation.`,
    `// Licensed under the MIT license.`,
    ``,
    `/****************************************************************`,
    ` * Auto-generated by ${autogenerationScriptName}, do not edit manually. *`,
    ` ****************************************************************/`,
    ``,
  ].join('\n');
