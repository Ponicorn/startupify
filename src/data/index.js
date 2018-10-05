import fonts from '@/data/fonts.json'
import activities from '@/data/activities.json'
import adjectives from '@/data/adjectives.json'
import cities from '@/data/cities.json'
import bobrossquotes from '@/data/bobrossquotes.json'

let preloadDiv = document.querySelector('#preload')
let bobDiv = document.querySelector('#bobpreload')
let fontelement = document.querySelector('#badPractice')
let imageUrl = 'url(https://source.unsplash.com/random)'
let mountainUrl = 'url(https://source.unsplash.com/random?$mountains)'

// Does it really need to be commented ?
function randomFromTable (table, pos) {
  if (typeof pos !== 'undefined' && table[pos]) return table.pos
  const rngPos = Math.floor(Math.random() * table.length)
  return table[rngPos]
}

// Set a random or selected font as actual font
function font (id) {
  const rngFont = randomFromTable(fonts, id)
  fontelement.innerHTML = `@import url('${rngFont.url}'); .fontastique { font-family: ${rngFont.family};}`
  console.log(document.querySelector('#badPractice'))
  return rngFont
}

/**
 * Preload image from unsplash
 * Take old loaded image for the background
 * all gud
 */
function background () {
  // using timestamp for unique url, so we don't get cached
  let timestamp = new Date().getTime()
  let bgimg = `url(https://source.unsplash.com/random?sig=${timestamp})`
  let loadedimg = imageUrl
  preloadDiv.style['background-image'] = imageUrl = bgimg
  return { 'background-image': loadedimg }
}

function mountains () {
  // using timestamp for unique url, so we don't get cached
  let timestamp = new Date().getTime()
  let mtnimg = `url(https://source.unsplash.com/random?$mountains&sig=${timestamp})`
  let loadedmountains = mountainUrl
  bobDiv.style['background-image'] = mountainUrl = mtnimg
  return { 'background-image': loadedmountains }
}

// Get a random year, from min 0 year before to max 6 year before
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

function name () {
  let activitie = randomFromTable(activities)
  let adjective = randomFromTable(adjectives)
  let city = randomFromTable(cities)

  return `${city} ${activitie} ${adjective}`
}

export default {
  bobrossquotes: () => randomFromTable(bobrossquotes),
  font,
  background,
  mountains,
  name,
  year
}
