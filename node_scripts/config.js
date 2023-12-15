'use strict';

import sourcepaths from './sourcepaths.js';
import DocsConfig from './classes/docsconfig.js';
import ProjectConfig from './classes/projectconfig.js';

export default new DocsConfig({
	doxyfile: 'doxygen/Doxyfile',
	xmlOutputPath: 'doxygen/XML',
	templatesFile: 'templates/templates.json',
	siteOutputPath: 'docs',
	urlRootPath: 'https://wondeluxe.github.io/unity-docs',
	apiSubPath: 'API',
	searchdataSubPath: 'scripts',
	projects: {
		wondeluxe: new ProjectConfig({
			name: 'Wondeluxe',
			sourceInputPaths: sourcepaths.wondeluxe,
			xmlSubPath: 'Wondeluxe',
			siteSubPath: 'wondeluxe'
		})
	}
});