function durationTransform(duration) {
  const hour = Math.trunc(duration / 60)
  const minute = duration - (hour * 60)
  return `${hour} ч. ${minute} мин.`
}

export default durationTransform
