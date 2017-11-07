import cities from './data/cities.json'
import activities from './data/activities.json'
import adjectives from './data/adjectives.json'
import fonts from './data/fonts.json'
import bobRossQuotes from './data/bobRossQuotes.json'

const preloadDiv = document.getElementById('bgpreload')
const rossDiv = document.getElementById('bgrosspreload')
let imageUrl = ''
let rossurl = ''

/**
 * Retourne une entré au hasard d'un tableau
 * Ou exacte si renseigne et existe
 */
function randomFromTable (table, pos) {
  if (typeof pos !== 'undefined' && table[pos]) return table.pos

  const rngPos = Math.floor(Math.random() * table.length)
  return table[rngPos]
}

/**
 * Retourne une année au hasard
 */
function year (max = 6, min = 0) {
  // When we are retarded, swap value so anyway it's ok
  if (min > max) {
    let tmp = max
    max = min
    min = tmp
  }
  const yearDepth = Math.floor(Math.random() * (max - min)) + min
  const year = new Date().getFullYear()
  return year - yearDepth
}

/**
 * Change la police, au hasard
 */
function font (id) {
  const rngFont = randomFromTable(fonts, id)
  document.querySelector('#badPractice').innerHTML = `@import url('${rngFont.url}'); .fontastique { font-family: ${rngFont.family};}`
  return rngFont
}

/**
 * Charge une image random depuis unsplash
 * L'image chargé est mis a "preload" dans une div hidden,
 * et on retourne l'url de l'image dans le preload actuel
 * Noïce :^)
 */
function background () {
  let timestamp = new Date().getTime()
  let bgimg = `url(https://source.unsplash.com/random?sig=${timestamp})`

  // Si c'est le premier appel, imageUrl est vide
  if (!imageUrl) {
    let bis = `url(https://source.unsplash.com/random?sig=${timestamp}wololo)`
    preloadDiv.style['background-image'] = bis
    imageUrl = bis
    return { 'background-image': bgimg }
  }

  // Si on arrive là, c'est que c'est pas le premier appel
  let url = imageUrl
  preloadDiv.style['background-image'] = bgimg
  imageUrl = bgimg
  return { 'background-image': url }
}

function bgross () {
  let timestamp = new Date().getTime()
  let bgimg = `url(https://source.unsplash.com/random?$mountains&sig=${timestamp})`

  // Si c'est le premier appel, imageUrl est vide
  if (!rossurl) {
    let bis = `url(https://source.unsplash.com/random?$mountains&sig=${timestamp}wololo)`
    rossDiv.style['background-image'] = bis
    rossurl = bis
    return { 'background-image': bgimg }
  }

  // Si on arrive là, c'est que c'est pas le premier appel
  let url = rossurl
  rossDiv.style['background-image'] = bgimg
  rossurl = bgimg
  return { 'background-image': url }
}

export default {
  city: () => randomFromTable(cities),
  activity: () => randomFromTable(activities),
  adjective: () => randomFromTable(adjectives),
  bobRossQuote: () => randomFromTable(bobRossQuotes),
  year,
  font,
  background,
  bgross
}
