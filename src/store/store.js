import { createStore, applyMiddleware, combineReducers} from 'redux';
import * as designer from './designer/reducer';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

// 调用日志打印方法， collapsed是让action折叠，看起来舒服
const loggerMiddleware = createLogger({ collapsed: true });

// 创建中间件集合
const middlewares = [ ReduxThunk, loggerMiddleware ];

let store = createStore(
    combineReducers({ ...designer, }),
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
);

export default store;