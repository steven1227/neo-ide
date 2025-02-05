let logId = 0;

function getTime() {
    const timestamp = Date.now();

    return new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        // dayPeriod: "",
    }).format(timestamp).slice(0, -3);
}

const loggerReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_LOG": {
            logId++;

            // switch logger tab
            action.asyncDispatch({type: "TAB_SELECTED", tab: action.group, index: 0});

            return [
                ...state,
                {
                    id: logId,
                    group: action.group,
                    date: getTime(),
                    text: action.text,
                },
            ];
        }
        default:
            return state;
    }
};

export default loggerReducer;
