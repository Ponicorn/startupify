import cities from './data/cities.json'
import activities from './data/activities.json'
import adjectives from './data/adjectives.json'
import fonts from './data/fonts.json'

const preloadDiv = document.getElementById('bgpreload')
let imageUrl = ''

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
function background (sel) {
  let timestamp = new Date().getTime()
  let bgimg = `url(https://source.unsplash.com/random?sig=${timestamp}${sel})`
  preloadDiv.style['background-image'] = bgimg
  let res = { 'background-image': imageUrl }
  imageUrl = bgimg
  return res
}

background()

export default {
  city: () => randomFromTable(cities),
  activity: () => randomFromTable(activities),
  adjective: () => randomFromTable(adjectives),
  year,
  font,
  background
}
