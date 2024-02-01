/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      name
      description
      category
      date
      note
      teamMembers
      items {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      name
      description
      category
      date
      note
      teamMembers
      items {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      name
      description
      category
      date
      note
      teamMembers
      items {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createItems = /* GraphQL */ `
  mutation CreateItems(
    $input: CreateItemsInput!
    $condition: ModelItemsConditionInput
  ) {
    createItems(input: $input, condition: $condition) {
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
export const updateItems = /* GraphQL */ `
  mutation UpdateItems(
    $input: UpdateItemsInput!
    $condition: ModelItemsConditionInput
  ) {
    updateItems(input: $input, condition: $condition) {
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
export const deleteItems = /* GraphQL */ `
  mutation DeleteItems(
    $input: DeleteItemsInput!
    $condition: ModelItemsConditionInput
  ) {
    deleteItems(input: $input, condition: $condition) {
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
