const yearInMilliseconds = 31557600000

export const calculateAge = dateString => {
  const [day, mounth, year] = dateString.split('/')
  let birthday = +new Date(`${mounth}-${day}-${year}`)
  return ~~((Date.now() - birthday) / yearInMilliseconds)
}
