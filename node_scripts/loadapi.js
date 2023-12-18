/**
 * Loads Doxygen generated XML into JSON for inspection.
 */

'use strict';

import config from './config.js';
import DocsUtility from './classes/docsutility.js';

DocsUtility.loadAPI(config.getDoxygenConfig(process.argv[2]).outputPath);