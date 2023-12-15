'use strict';

import { Doxsite, APILoader, DocBuilder, DocBuilderTemplates } from 'doxsite';
import DoxygenConfig from './doxygenconfig.js';
import SiteConfig from './siteconfig.js';
import fs from 'fs';

/**
 * Utility methods for building documentation sites for the Wondeluxe Unity packages.
 */

export default class DocsUtility
{
	/**
	 * Runs Doxygen to generate XML data for a project. This extends the implementation of `Doxsite.runDoxygen`
	 * by writing project specific properties to the Doxyfile.
	 * @param {DoxygenConfig} config - The configuration values for the project.
	 */

	static buildXML(config)
	{
		let matches = null;
		let content = fs.readFileSync(config.doxyfile, {encoding: 'utf8'});

		matches = content.match(/(\n\s*INPUT\s*=)([^\n]*)/);
		content = content.replace(matches[0], `${matches[1]} "${config.inputPaths.join(`" "`)}"`);

		matches = content.match(/(\n\s*XML_OUTPUT\s*=)([^\n]*)/);
		content = content.replace(matches[0], `${matches[1]} "${config.outputPath}"`);

		fs.writeFileSync(config.doxyfile, content);
		fs.mkdirSync(config.outputPath, {recursive: true});

		Doxsite.runDoxygen(config.doxyfile);
	}

	/**
	 * Builds the documentation site for a project using previously generated XML from Doxygen.
	 * This method should be used in place of `Doxsite.buildDocs` in order to handle unique project paths.
	 * 
	 * Occurences of the variable `$rootpath` in the HTML templates will be replaced with the given `config.urlRootPath`,
	 * and occurrences of `$projectpath` will be replaced with `config.urlProjectPath`.
	 * 
	 * `config.urlProjectPath` will be assigned to `DocBuilder.urlRootPath`, as that's the base path used for page URLs.
	 * @param {SiteConfig} config - The configuration values for the project.
	 */

	static buildSite(config)
	{
		let apiLoader = new APILoader();
		apiLoader.xmlPath = config.xmlPath;
		apiLoader.xmlIndexFile = 'index.xml';
		apiLoader.load();

		let templates = DocBuilderTemplates.fromFile(config.templatesFile);

		let pages = ['index', 'search', 'page'];

		let projectnameRegExp = /\$projectname(?![a-z])/g;
		let projectpathRegExp = /\$projectpath(?![a-z])/g;
		let rootpathRegExp = /\$rootpath(?![a-z])/g;

		pages.forEach((page) => {
			templates[page] = templates[page].replace(projectnameRegExp, config.name);
			templates[page] = templates[page].replace(projectpathRegExp, config.urlProjectPath);
			templates[page] = templates[page].replace(rootpathRegExp, config.urlRootPath);
		});

		let docBuilder = new DocBuilder();
		docBuilder.namespaces = apiLoader.namespaces;
		docBuilder.definitions = apiLoader.definitions;
		docBuilder.templates = templates;
		docBuilder.outputPath = config.outputPath;
		docBuilder.outputFileExtension = 'html';
		docBuilder.urlRootPath = config.urlProjectPath;
		docBuilder.apiSubPath = config.apiSubPath;
		docBuilder.searchdataSubPath = config.searchdataSubPath;
		docBuilder.buildDocs();
	}
}