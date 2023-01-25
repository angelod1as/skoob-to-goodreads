export type SkoobBook = {
  id: number
  livro_id: number
  ranking: number
  tipo: number
  favorito: number
  desejado: number
  troco: number
  tenho: number
  emprestei: number
  paginas: number
  dt_resenha: string
  paginas_lidas: number
  dt_leitura: string
  meta: number
  spoiler: number
  media: number
  edicao: {
    id: number
    livro_id: number
    titulo: string
    nome_portugues: string
    subtitulo: string
    subtitulo_portugues: string
    idioma: string
    mes: string
    ano: number
    volume: string
    serie: string
    autor: string
    isbn: number
    paginas: number
    edicao: number
    editora: string
    sinopse: string
    capitulo_url: string
    capa_grande: string
    capa_media: string
    capa_pequena: string
    capa_mini: string
    capa_micro: string
    capa_nano: string
    img_url: string
    url: string
    tempo_leitura: { horas: number; minutos: number; segundos: number }
  }
}

export type GoodreadsBook = {
  Title: string
  Author: string
  ISBN: string
  "My Rating": string
  "Average Rating": string
  Publisher: string
  Binding: string
  "Year Published": string
  "Original Publication Year": string
  "Date Read": string
  "Date Added": string
  Shelves: string
  Bookshelves: string
  "My Review": string
}
