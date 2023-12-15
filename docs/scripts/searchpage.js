'use strict';

import SearchProvider from './searchprovider.js';

export default class SearchPage
{
	/**
	 * Display search results on a search page.
	 * @param {HTMLElement} element - Element to populate with search results.
	 * @param {SearchProvider} searchProvider - Search provider used to provide search results.
	 */

	static display(element, searchProvider)
	{
		let params = new URLSearchParams(window.location.search);
		let searchValue = params.get('q');

		if (searchValue)
		{
			let results = searchProvider.search(searchValue);

			// let html = '<h1>' + results.length + ' ' + (results.length == 1 ? ' result' : 'results') + ' found for "' + searchValue + '".</h1>';
			let html = `<h1>${results.length} ${(results.length == 1 ? 'result' : 'results')} found for "${searchValue}".</h1>`;

			for (let i = 0; i < results.length; i++)
			{
				let result = results[i];

				html += '<div class="search-result">';
				// html += '<a href="' + result.url + '">' + result.value + '</a>';// TODO pre-format value into link?
				html += `<a href="${result.url}">${result.value}</a>`;// TODO pre-format value into link?
				html += result.description;// Pre-formatted.
				html += '</div>';
			}

			element.innerHTML = html;
		}
		else
		{
			element.innerHTML = '';
		}
	}
}