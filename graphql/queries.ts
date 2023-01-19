import { gql } from "@apollo/client";

export const GET_NOVELS = gql`
	query Novels {
		novels {
			id
			image
			createdAt
			title
			updatedAt
			authors {
				id
				name
				novelId
			}
		}
	}
`;

export const GET_NOVEL = gql`
	query Novel($id: ID!) {
		novel(id: $id) {
			authors {
				id
				name
				novelId
			}
			id
			image
			title
		}
	}
`;
