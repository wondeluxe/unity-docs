'use strict';

/**
 * Configuration options used to build a documentation site for a project.
 */

export default class SiteConfig
{
	/**
	 * Display name of the project.
	 * @type {String}
	 */

	name;

	/**
	 * Path to XML generated by Doxygen.
	 * @type {String}
	 */

	xmlPath;

	/**
	 * Path to the templates JSON file.
	 * @type {String}
	 */

	templatesFile;

	/**
	 * Root path of the local generated site.
	 * @type {String}
	 */

	outputPath;

	/**
	 * URL path to site root on the server/hosting environment.
	 * @type {String}
	 */

	urlRootPath;

	/**
	 * URL path to the project root on the server/hosting environment.
	 * @type {String}
	 */

	urlProjectPath;

	/**
	 * Relative path from the project root where API documentation pages will be created.
	 * @type {String}
	 */

	apiSubPath;

	/**
	 * Relative path from the project root where searchdata.js will be created.
	 * @type {String}
	 */

	searchdataSubPath;

	/**
	 * Initializes a new SiteConfig.
	 * @param {Object} config - Object containing the values to initialize the SiteConfig with.
	 * @param {String} config.name - Display name of the project.
	 * @param {String} config.xmlPath - Path to XML generated by Doxygen.
	 * @param {String} config.templatesFile  - Path to the templates JSON file.
	 * @param {String} config.outputPath - Root path of the local generated site.
	 * @param {String} config.urlRootPath - URL path to site root on the server/hosting environment.
	 * @param {String} config.urlProjectPath - URL path to the project root on the server/hosting environment.
	 * @param {String} config.apiSubPath - Relative path from the project root where API documentation pages will be created.
	 * @param {String} config.searchdataSubPath - Relative path from the project root where searchdata.js will be created.
	 */

	constructor(config)
	{
		if (config)
		{
			this.name = config.name;
			this.xmlPath = config.xmlPath;
			this.templatesFile = config.templatesFile;
			this.outputPath = config.outputPath;
			this.urlRootPath = config.urlRootPath;
			this.urlProjectPath = config.urlProjectPath;
			this.apiSubPath = config.apiSubPath;
			this.searchdataSubPath = config.searchdataSubPath;
		}
	}
}