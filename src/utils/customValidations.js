import { calculateAge } from './date'

export const secondNameValidation = value =>
  value.split(' ').length >= 2 && value.split(' ')[1].length >= 1

export const minAge = value => calculateAge(value) > 18

export const maxAge = value => calculateAge(value) < 65
