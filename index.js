const https = require('https');

/**
 * Fetches the definition of the given word, along with the POS (part of speech)
 * @async
 * @param {string} word The word to lookup
 * @param {string} [language=en] Language to use (defaults to en (English))
 * @returns {Promise<Array>} Promise containing the definition
 */
async function getDefinition(word, language) {
	return new Promise((resolve, reject) => {

		let err = new TypeError('"word" must be defined.');
		if (!(word)) throw err;;
		err = new TypeError('"word" must be a valid string.');
		if (typeof word !== 'string') throw err;;

		if (!(language)) language = "en";

		err = new TypeError('"language" must be a valid string.');
		if (typeof language !== 'string') throw err;;

		let options = {
			hostname: 'api.dictionaryapi.dev',
			port: 443,
			method: 'GET',
			path: `/api/v2/entries/${language}/${word}`
		};


		const req = https.request(options, res => {

			res.on('data', d => {

				let json = JSON.parse(d);
				if (json.title) {
					err = new Error(json.title);
					throw err;;
				}
				let json2 = json[0];

				let meaningArray = [];

				json2.meanings.forEach(item => {
					let newDefinitions = [];
					item.definitions.forEach((item2, index) => {
						newDefinitions.push({
							num: index,
							definition: item2.definition
						});
					});

					meaningArray.push({
						pos: item.partOfSpeech,
						definition: newDefinitions
					})
				});

				let definition = (meaningArray.length < 2 ? meaningArray[0] : meaningArray);
				resolve(definition);
			});
		});

		req.end();
	})
}

/**
 * Fetches synonyms of the word
 * @async
 * @param {string} word The word to lookup
 * @param {string} [language=en] Language to use (defaults to en (English))
 * @returns {Promise<Array>} Promise containing synonyms or array of synonyms
 */
async function getSynonyms(word, language) {
	return new Promise((resolve, reject) => {

		let err = new TypeError('"word" must be defined.');
		if (!(word)) throw err;;
		err = new TypeError('"word" must be a valid string.');
		if (typeof word !== 'string') throw err;;

		if (!(language)) language = "en";

		err = new TypeError('"language" must be a valid string.');
		if (typeof language !== 'string') throw err;;

		let options = {
			hostname: 'api.dictionaryapi.dev',
			port: 443,
			method: 'GET',
			path: `/api/v2/entries/${language}/${word}`
		};

		let synonyms = null;

		const req = https.request(options, res => {

			res.on('data', d => {

				let json = JSON.parse(d);
				if (json.title) {
					err = new Error(json.title);
					throw err;;
				}
				let json2 = json[0];

				let synonymArray = [];

				json2.meanings.forEach(item => {
					item.definitions.forEach((item2, index) => {
						synonymArray.push({
							num: index,
							type: item2.definition,
							synonyms: item2.synonyms,
						});
					});
				});
				synonyms = synonymArray;
				resolve((synonyms.length < 2 ? synonyms[0] : synonyms));
			});
		});

		req.end();
	});
}

/**
 * Fetches antonyms of the word
 * @async
 * @param {string} word The word to lookup
 * @param {string} [language=en] Language to use (defaults to en (English))
 * @returns {Promise<Array|Object>} Promise containing antonyms or array of anytonyms
 */
async function getAntonyms(word, language) {
	return new Promise((resolve, reject) => {

		let err = new TypeError('"word" must be defined.');
		if (!(word)) throw err;;
		err = new TypeError('"word" must be a valid string.');
		if (typeof word !== 'string') throw err;;

		if (!(language)) language = "en";

		err = new TypeError('"language" must be a valid string.');
		if (typeof language !== 'string') throw err;;

		let options = {
			hostname: 'api.dictionaryapi.dev',
			port: 443,
			method: 'GET',
			path: `/api/v2/entries/${language}/${word}`
		};

		let antonyms = null;

		const req = https.request(options, res => {

			res.on('data', d => {

				let json = JSON.parse(d);
				if (json.title) {
					err = new Error(json.title);
					throw err;;
				}
				let json2 = json[0];

				let antonymArray = [];

				json2.meanings.forEach(item => {
					item.definitions.forEach((item2, index) => {
						antonymArray.push({
							num: index,
							type: item2.definition,
							antonyms: item2.antonyms,
						});
					});
				});
				antonyms = antonymArray;
				resolve((antonyms.length < 2 ? antonyms[0] : antonyms));
			});
		});

		req.end();
	});
}

/**
 * Get phonetic information of a word
 * @async
 * @param {string} word The word to lookup
 * @param {string} [language=en] Language to use (defaults to en (English))
 * @returns {Promise<Object>} Promise containing phonetic data (pronunciation and audio)
 */
async function getPhonetics(word, language) {
	return new Promise((resolve, reject) => {

		let err = new TypeError('"word" must be defined.');
		if (!(word)) throw err;;
		err = new TypeError('"word" must be a valid string.');
		if (typeof word !== 'string') throw err;;

		if (!(language)) language = "en";

		err = new TypeError('"language" must be a valid string.');
		if (typeof language !== 'string') throw err;;

		let options = {
			hostname: 'api.dictionaryapi.dev',
			port: 443,
			method: 'GET',
			path: `/api/v2/entries/${language}/${word}`
		};

		let phonetics = null;

		const req = https.request(options, res => {

			res.on('data', d => {

				let json = JSON.parse(d);
				if (json.title) {
					err = new Error(json.title);
					throw err;;
				}
				let json2 = json[0];

				let phoneticsArray = [];

				json2.phonetics.forEach((item, index) => {
					phoneticsArray.push({
						num: index,
						pronunciation: item.text,
						audio: item.audio ? item.audio : null
					})
				});

				phonetics = phoneticsArray;
				resolve((phonetics.length < 2 ? phonetics[0] : phonetics)) 
			});
		});

		req.end();
	});
}

/**
 * Fetch raw data of the word
 * @async
 * @param {string} word Word to lookup
 * @param {string} [language=en] Langauge to use (defualts to en (English))
 * @returns Promise<Object> Raw JSON Data 
 */
async function getInformation(word, language) {
	return new Promise((resolve, reject) => {

		let err = new TypeError('"word" must be defined.');
		if (!(word)) throw err;;
		err = new TypeError('"word" must be a valid string.');
		if (typeof word !== 'string') throw err;;

		if (!(language)) language = "en";

		err = new TypeError('"language" must be a valid string.');
		if (typeof language !== 'string') throw err;;

		let options = {
			hostname: 'api.dictionaryapi.dev',
			port: 443,
			method: 'GET',
			path: `/api/v2/entries/${language}/${word}`
		};

		const req = https.request(options, res => {

			res.on('data', d => {
				resolve(JSON.parse(d));
			});
		});

		req.end();
	})
}

getSynonyms('nice').then(data => {
	console.log(data);
})

module.exports = {
	getDefinition,
	getSynonyms,
	getAntonyms,
	getPhonetics,
	getInformation
}