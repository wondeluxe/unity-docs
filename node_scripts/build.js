/**
 * Runs Doxygen and builds the documentation site for a project.
 */

'use strict';

import config from './config.js';
import DocsUtility from './classes/docsutility.js';

let id = process.argv[2];

DocsUtility.buildXML(config.getDoxygenConfig(id));
DocsUtility.buildSite(config.getSiteConfig(id));