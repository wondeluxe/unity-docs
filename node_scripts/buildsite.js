/**
 * Builds the documentation site for a project using previously generated XML from Doxygen.
 */

'use strict';

import config from './config.js';
import DocsUtility from './classes/docsutility.js';

DocsUtility.buildSite(config.getSiteConfig(process.argv[2]));