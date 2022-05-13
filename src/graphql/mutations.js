/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCandidate = /* GraphQL */ `
  mutation CreateCandidate(
    $input: CreateCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    createCandidate(input: $input, condition: $condition) {
      id
      name
      email
      resumeFile
      userIdentity
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCandidate = /* GraphQL */ `
  mutation UpdateCandidate(
    $input: UpdateCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    updateCandidate(input: $input, condition: $condition) {
      id
      name
      email
      resumeFile
      userIdentity
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCandidate = /* GraphQL */ `
  mutation DeleteCandidate(
    $input: DeleteCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    deleteCandidate(input: $input, condition: $condition) {
      id
      name
      email
      resumeFile
      userIdentity
      createdAt
      updatedAt
      owner
    }
  }
`;
