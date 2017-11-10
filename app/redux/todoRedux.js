import {generateId} from "../helpers/todoHelpers";

const types = {
    ADD_ITEM: 'ADD_ITEM'
}

export const actionCreators = {
    addItem: (item) => {
        return {
            type: types.ADD_ITEM,
            payload: {
                id: generateId(),
                text: item,
                completed: false
            }
        }
    }
};

const initialState = {
    items: [],
}

export const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case types.ADD_ITEM: {
            return {
                ...state,
                todos: [payload, ...todos]
            }
        }
    }
    return state;
}
