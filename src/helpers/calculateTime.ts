type CalculateTime = (numberOfBooks: number) => string

export const calculateTime: CalculateTime = (numberOfBooks) => {
  const SECONDS_PER_BOOK = 4
  const seconds = numberOfBooks * SECONDS_PER_BOOK

  if (seconds < 60) {
    return `aproximadamente ${seconds} segundos`
  }

  return `aproximadamente ${Math.ceil(seconds / 60)} minutos`
}
