import * as Types from './../constants/ActionType'

var initialState = [
    {
        id : 1,
        name : 'Iphone 6',
        price : 800000,
        status : true
    },
    {
        id : 2,
        name : 'Samsung galaxy S6',
        price : 700000,
        status : false
    },
    {
        id : 3,
        name : 'Oppo 6',
        price : 100000,
        status : true
    }
];

var myReducer = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
}


export default myReducer;