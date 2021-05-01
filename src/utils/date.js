const yearInMilliseconds = 31557600000

export const calculateAge = dateString => {
  let birthday = +new Date(dateString)
  return ~~((Date.now() - birthday) / yearInMilliseconds)
}
