import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export const GET = async () => {
	try {
		const query = gql`
			query Posts {
				posts {
					title
					slug
					date
					excerpt
					tags
					coverImage {
						url
					}
				}
			}
		`;
		const { posts } = await client.request(query);

		return {
			status: 200,
			body: { posts },
		};
    } catch (error) {
        return {
            status: 500,
            body: 'there was a server error'
        }
    }
};
