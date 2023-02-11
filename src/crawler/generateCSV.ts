import { GoodreadsBook } from "@/types"

export const generateCSV = async (data: GoodreadsBook[]) => {
  const sampleData = data[0]
  const columns = Object.keys(sampleData) as Array<keyof typeof sampleData>
  const headers = columns.join(";") + "\r\n"

  const books = data
    .map((book) => {
      return columns
        .map((column) => {
          return book[column] || ""
        })
        .join(";")
    })
    .join("\r\n")

  const csvData = headers + books

  return csvData
}
