export const selectQuestions = (state) => state.questions.collection;

export const selectQuestionsFetch = (state) => state.questions.fetch;
export const selectQuestionsFetchSuccess = (state) => state.questions.fetchSuccess;
export const selectQuestionsFetchError = (state) => state.questions.fetchError;

export const selectQuestionsStore = (state) => state.questions.store;
export const selectQuestionsStoreSuccess = (state) => state.questions.storeSuccess;
export const selectQuestionsStoreError = (state) => state.questions.storeError;

