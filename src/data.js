import fonts from './data/fonts.json'
import cities from './data/cities.json'
import activities from './data/activities.json'
import adjectives from './data/adjectives.json'
import subjects from './data/subjects.json'

/**
 * Return id or random cell from table
 * @param {array} table - Target array
 * @param {integer} [id] - Target cell
 * @return {Object} Cell
 */
const randomFromTable = (table,id) => {
	// If we have an id, we return the good table cell
	if (typeof id !== 'undefined' && table[id]) {
		return fonts[id];
	}

	// Else we retrun a random cell
	const rngCell = Math.floor(Math.random() * table.length);
	return table[rngCell];
}

export default {

	/**
	 * put font where it need to be put
	 * @param {integer} [id] - Target font, by id
	 * @return {Object} Font
	 */
	font (id) {
		// Fetch Font
		const fontres = randomFromTable (fonts, id);

		// Put it crappy-style in #badPractice
		document.querySelector('#badPractice').innerHTML =
		`@import url('${fontres.url}'); .fontOfTheDay { font-family: ${fontres.family};}`;
		return fontres;
	},

	/**
	 * Return random or choosen city name
	 * @param {integer} [id] - Target city
	 * @return {String} City name
	 */
	 city (id) { return randomFromTable(cities, id); },

	 /**
 	 * Return random or choosen activity name
 	 * @param {integer} [id] - Target activity
 	 * @return {String} activity name
 	 */
 	 activity (id) { return randomFromTable(activities, id); },

	 /**
 	 * Return random or choosen adjective name
 	 * @param {integer} [id] - Target adjective
 	 * @return {String} activity name
 	 */
 	 adjective (id) { return randomFromTable(adjectives, id); },

	 /**
	 * Return random or choosen subject
	 * @param {integer} [id] - Target subject
	 * @return {String} subject name
	 */
	 subject (id) { return randomFromTable(subjects, id); },

	 /**
	  * Return random year, between X date and now
	  * @param {integer} [max=6] - max year before
	  * @param {integer} [min=0] - min year before
	  * @return {integer} a random year
	  */
	  year (max = 6, min = 0) {
		  if (min > max) {
			 let tmp = max;
			 max = min;
			 min = tmp;
		  }
		  const yearDepth = Math.floor( Math.random() * (max-min) ) + min;
		  const year = new Date().getFullYear();
		  return year - yearDepth;
	  }
}
