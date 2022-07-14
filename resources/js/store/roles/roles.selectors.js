
export const selectFetch = (state) => state.roles.fetch;

export const selectFetchSuccess = (state) => state.roles.fetchSuccess;

export const selectRoles = (state) => state.roles.collection;

export const selectRolesOther = (state, id) => {
  const roleOther = state.roles.collection.find((role) => role.role.toLowerCase() === 'other');
  return roleOther && (roleOther.id == id);
};

export const selectRole = (state, id) => state.roles.collection.find((role) => (role.id == id));
