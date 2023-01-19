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
