'use strict';

import searchdata from './searchdata.js';
import SearchProvider from '../../scripts/searchprovider.js';
import SearchForm from '../../scripts/searchform.js';
import SearchPage from '../../scripts/searchpage.js';

(function()
{
	let searchFormElement = document.getElementById('documentation-search-form');
	let searchProvider = new SearchProvider(searchdata);
	let searchSuggestionLimit = 10;

	new SearchForm(searchFormElement, searchProvider, searchSuggestionLimit);

	let contentElement = document.getElementById('content');

	SearchPage.display(contentElement, searchProvider);
})();