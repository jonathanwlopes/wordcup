export const randomFigures = (arr: any) => {
  return arr.slice(0, Math.floor(Math.random() * 3 + 1))
}

export const sortFigures = (data: any) => {
  const figures = data?.figures.data
  const win = randomFigures(figures)

  return win
}
