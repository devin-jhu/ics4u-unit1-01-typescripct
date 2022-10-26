/**
 * the truck weight program
 *
 * By:      Devin Jhu
 * Version: 1.0
 * Since:   2022 09 27
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()
// let logSize: number
const logWeight = 20
const maxTruckWeight = 1100

const inputString = prompt('Enter log length (0.25, 0.5, or 1) (M): ')
const logLenght = parseFloat(inputString)
const totalWeight = logLenght * logWeight
const logNumber = maxTruckWeight / totalWeight
console.log(` ${logNumber} logs will fit`)

console.log('\nDone.')
