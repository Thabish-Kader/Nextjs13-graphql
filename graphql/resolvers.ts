import { Context } from "@/pages/api/graphql";

export const resolvers = {
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

		// delete novel
		deleteNovel: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.novel.delete({
				where: {
					id: args.id,
				},
			});
		},

		// Author Mutations

		// add author
		addAuthor: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.author.create({
				data: {
					novelId: args.novelId,
					name: args.name,
				},
			});
		},
		// delete author
		deleteAuthor: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.author.delete({
				where: {
					id: args.id,
				},
			});
		},
	},
};
