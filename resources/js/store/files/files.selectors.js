export const selectFiles = (state) => state.files.collection;
export const selectPinnedFiles = (state) => state.files.collection.filter(each => each.pinned);
export const selectFilesFetch = (state) => state.files.fetch;
export const selectFilesFetchSuccess = (state) => state.files.fetchSuccess;
export const selectFilesFetchError = (state) => state.files.fetchError;
