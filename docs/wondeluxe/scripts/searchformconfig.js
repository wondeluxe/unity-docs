'use strict';

import searchdata from './searchdata.js';
import SearchProvider from '../../scripts/searchprovider.js';
import SearchForm from '../../scripts/searchform.js';

(function()
{
	let searchFormElement = document.getElementById('documentation-search-form');
	let searchProvider = new SearchProvider(searchdata);
	let searchSuggestionLimit = 10;

	new SearchForm(searchFormElement, searchProvider, searchSuggestionLimit);
})();