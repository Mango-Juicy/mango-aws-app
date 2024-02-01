/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
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
export const onCreateItems = /* GraphQL */ `
  subscription OnCreateItems(
    $filter: ModelSubscriptionItemsFilterInput
    $owner: String
  ) {
    onCreateItems(filter: $filter, owner: $owner) {
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
export const onUpdateItems = /* GraphQL */ `
  subscription OnUpdateItems(
    $filter: ModelSubscriptionItemsFilterInput
    $owner: String
  ) {
    onUpdateItems(filter: $filter, owner: $owner) {
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
export const onDeleteItems = /* GraphQL */ `
  subscription OnDeleteItems(
    $filter: ModelSubscriptionItemsFilterInput
    $owner: String
  ) {
    onDeleteItems(filter: $filter, owner: $owner) {
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
