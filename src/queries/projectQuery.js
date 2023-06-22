import { gql } from '@apollo/client';

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      status
    }
  }
`;

const GET_PROJECT_BY_ID = gql`
  query getProjectById($id: ID!) {
    project(id: $id) {
      id
      name
      description
      status
      clientId {
        name
        email
        phone
      }
    }
  }
`;

export { GET_PROJECTS, GET_PROJECT_BY_ID };
