import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { PrismaClient } from "@prisma/client";
import { argsToArgsConfig } from "graphql/type/definition";
import { addEmitHelpers } from "typescript";
import { prisma } from "../../prisma/db";

export type Context = {
	prisma: PrismaClient;
};

const typeDefs = `#graphql 
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
  }
`;

const resolvers = {
	Query: {
		//get novel by id
		novel: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.novel.findUnique({
				where: {
					id: args.id,
				},
			});
		},
		// get all novels
		novels: async (_parent: any, _args: any, context: Context) => {
			return await context.prisma.novel.findMany({
				include: { author: true },
			});
		},
		// get all authors
		authors: async (_parent: any, _args: any, context: Context) => {
			return await context.prisma.author.findMany();
		},
	},
	// nested resolve function to get auhtors in novels
	Novel: {
		authors: async (_parent: any, _args: any, context: Context) => {
			return await context.prisma.author.findMany();
		},
	},
	Mutation: {
		// add novel
		addNovel: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.novel.create({
				data: {
					title: args.title,
					image: args.image,
				},
			});
		},
		// update novel
		updateNovel: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.novel.update({
				where: {
					id: args.id,
				},
				data: {
					title: args.title,
					image: args.image,
				},
			});
		},
		addAuthor: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.author.create({
				data: {
					novelId: args.novelId,
					name: args.name,
				},
			});
		},
		deleteNovel: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.novel.delete({
				where: {
					id: args.id,
				},
			});
		},
	},
};

const apolloServer = new ApolloServer<Context>({ typeDefs, resolvers });

export default startServerAndCreateNextHandler(apolloServer, {
	context: async (req, res) => ({ req, res, prisma }),
});
