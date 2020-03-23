import { gql } from "apollo-server";

const typeDefs = gql`
  type Verse {
    id: String!
    chapterId: String!
    number: Int!
    text: String!
    title: String!
    shortTitle: String!
    chapter: Chapter!
    book: Book!
    volume: Volume!
    marks: [Mark!]!
  }

  type Chapter {
    id: String!
    bookId: String!
    volumeId: String!
    number: String!
    verses: [Verse]!
    book: Book!
    volume: Volume!
    prev: Chapter
    next: Chapter
  }

  type Book {
    id: String!
    volumeId: String!
    title: String!
    longTitle: String!
    subtitle: String!
    shortTitle: String!
    chapters: [Chapter!]!
    volume: Volume!
    sortPosition: Int!
  }

  type Volume {
    id: String!
    title: String!
    longTitle: String!
    subtitle: String!
    shortTitle: String!
    books: [Book!]!
    sortPosition: Int!
  }

  type Mark {
    id: String!
    type: String!
    verseId: String!
    range: [Int!]
    speakerId: String!
    verse: Verse!
    speaker: Person!
  }

  type Person {
    id: String!
    name: String!
    marks: [Mark!]!
  }

  type MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  input NewMark {
    type: String!
    verseId: String!
    range: [Int!]
    speakerId: String!
  }

  input MarkUpdate {
    id: String!
    speakerId: String!
  }

  type Query {
    volumes: [Volume!]!
    volume(title: String!): Volume
    book(volumeTitle: String!, bookTitle: String!): Book
    chapter(volumeTitle: String!, bookTitle: String!, number: Int!): Chapter
    verse(
      volumeTitle: String!
      bookTitle: String!
      chapterNumber: Int!
      verseNumber: Int!
    ): Verse
    people: [Person!]!
    marks(verseIds: [ID!]!): [Mark!]!
  }

  type Mutation {
    createMarks(marks: [NewMark!]): MutationResponse
    deleteMarks(ids: [String!]!): MutationResponse
    updateMarks(marks: [MarkUpdate!]): MutationResponse
  }
`;

export default typeDefs;
