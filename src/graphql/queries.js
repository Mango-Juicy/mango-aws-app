/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      description
      category
      date
      note
      teamMembers
      items {
        items {
          id
          name
          description
          tag
          category
          value
          date
          note
          teamMembers
          createdAt
          updatedAt
          projectItemsId
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        category
        date
        note
        teamMembers
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getItems = /* GraphQL */ `
  query GetItems($id: ID!) {
    getItems(id: $id) {
      id
      name
      description
      tag
      category
      value
      date
      note
      teamMembers
      createdAt
      updatedAt
      projectItemsId
      owner
      __typename
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        tag
        category
        value
        date
        note
        teamMembers
        createdAt
        updatedAt
        projectItemsId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
