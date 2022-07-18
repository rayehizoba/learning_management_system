import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createBrowserHistory} from 'history';
import {applyMiddleware, combineReducers, createStore} from 'redux';
// import {connectRouter, routerMiddleware} from 'connected-react-router';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import app from "./app/app.reducer";
import course from "./course/course.reducer";
import courses from "./courses/courses.reducer";
import quiz from "./quiz/quiz.reducer";
import quizzes from "./quizzes/quizzes.reducer";
import roles from "./roles/roles.reducer";
import section from "./section/section.reducer";
import sections from "./sections/sections.reducer";
import user from "./user/user.reducer";
import users from "./users/users.reducer";

export const history = createBrowserHistory();

const reducers = combineReducers({
    // router: connectRouter(history),
    app,
    course,
    courses,
    quiz,
    quizzes,
    roles,
    section,
    sections,
    user,
    users,
});

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [
        'course',
        'courses',
        'section',
        'sections',
        'quiz',
        'quizzes',
    ],
    // whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewareComponents = [
    thunk,
    // routerMiddleware(history)
];

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    middlewareComponents.push(logger);
}

const middleware = applyMiddleware(...middlewareComponents);

const store = createStore(persistedReducer, middleware);

export const persistor = persistStore(store);

export default store;
