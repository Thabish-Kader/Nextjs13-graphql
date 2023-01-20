export const typeDefs = `#graphql 
    type Novel {
    id: ID!
    title: String
    image: String
    createdAt: String
    updatedAt: String
    authors: [Author]
  }

    type Author {
    id: ID!
    name: String
    novelId: String
  }

  type Query {
	novel(id: ID!): Novel 
    novels: [Novel]
    authors: [Author]
  }

  type Mutation {
    addNovel (image:String, title:String) : Novel
    updateNovel(id:ID!, title:String, image:String) : Novel
    deleteNovel(id:ID!) : Novel
    addAuthor(novelId:ID!, name:String): Author
    deleteAuthor(novelId: ID!,id:ID!): Author
  }
`;
