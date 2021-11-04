import { gql, GraphQLClient } from "graphql-request";
import { RequestDocument } from "graphql-request/dist/types";

interface RequestParams {
  query: RequestDocument;
  variables?: any;
  preview?: boolean;
}

function request({ query, variables, preview }: RequestParams) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
    },
  });
  return client.request(query, variables);
}

export async function getProjects(first: number = 16, skip?: number) {
  return request({
    query: gql`
      query ($first: IntType, $skip: IntType) {
        allProjects(first: $first, skip: $skip) {
          id
          name
          image
          liveLink
          srcLink
          tecnologies {
            id
            name
          }
        }
      }
    `,
    variables: {
      first,
      skip,
    },
  }).then((result) => result.allProjects);
}

export async function getSkills() {
  return request({
    query: gql`
      {
        allSkills {
          id
          name
          image
        }
      }
    `,
  }).then((result) => result.allSkills);
}
