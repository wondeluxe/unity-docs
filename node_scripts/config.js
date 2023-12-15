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
		}),
		build: new ProjectConfig({
			name: 'Wondeluxe Build',
			sourceInputPaths: sourcepaths.build,
			xmlSubPath: 'Wondeluxe Build',
			siteSubPath: 'build'
		}),
		android: new ProjectConfig({
			name: 'Wondeluxe Android',
			sourceInputPaths: sourcepaths.android,
			xmlSubPath: 'Wondeluxe Android',
			siteSubPath: 'android'
		}),
		ios: new ProjectConfig({
			name: 'Wondeluxe iOS',
			sourceInputPaths: sourcepaths.ios,
			xmlSubPath: 'Wondeluxe iOS',
			siteSubPath: 'ios'
		})
	}
});