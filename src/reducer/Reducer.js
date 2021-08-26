const reducer = (state, action) => {
    if (action.obj === '1' && action.diya === '+'){
        return {...state, a: state.a++}
    }else if (action.obj === '1' && action.diya === '-'){
        return {...state, a: state.a--}
    }else if (action.obj === '2' && action.diya === '+'){
        return {...state, b: state.b+5}
    }else if (action.obj === '2' && action.diya === '-'){
        return {...state, b: state.b-10}
    }else if (action.obj === '3' && action.diya === '+'){
        return {...state, c: state.c+10}
    }else if (action.obj === '3' && action.diya === '-'){
        return {...state, c: state.c-5}
    return {...state};}
}

export default reducer;