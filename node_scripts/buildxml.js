/**
 * Runs Doxygen to generate XML data for a project.
 */

'use strict';

import config from './config.js';
import DocsUtility from './classes/docsutility.js';

DocsUtility.buildXML(config.getDoxygenConfig(process.argv[2]));