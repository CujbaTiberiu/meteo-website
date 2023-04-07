const initialState = {
    favs: {
        content: [],
    },
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAV":
            return {
                ...state,
                favs: {
                    content: [...state.favs.content, action.payload],
                },
            };
        case "REMOVE_FAV":
            return {
                ...state,
                favs: {
                    content: [
                        ...state.favs.content.filter((i) => i !== action.payload),
                    ],
                },
            };

        default:
            return state;
    }
};

export default mainReducer;
