import constants from "./constants"

function durationTransform(duration) {
  const hour = Math.trunc(duration / constants.sixtyMinutes)
  const minute = duration - (hour * constants.sixtyMinutes)
  return `${hour} ч. ${minute} мин.`
}

export default durationTransform
