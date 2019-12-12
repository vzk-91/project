const reducer = (state, action) => {
    switch (action.type) {
        case "Fetch_Blogers":
            return {
                ...state,
                blogers: action.payload
            }
            case "Fetch_Posts":
                return {
                    ...state,
                    posts: action.payload
                }
                case "Login":
                    return {
                        ...state,
                        loginData: action.payload
                    }
                    case "Registration":
                        return {
                            ...state,
                            registrationData: action.payload
                        }
                        case "GetName":
                            return {
                                ...state,
                                name: action.payload
                            }
                            case "New_Post":
                                return {
                                    ...state,
                                    newPost: action.payload
                                }
                                case "Spinner" :
                                    return{
                                        ...state,
                                        loading : false,
                                    }
                                    case "Modal_Show" :
                                    return{
                                        ...state,
                                        modalShow : true,
                                    }
                                    case "Modal_Hide" :
                                            return{
                                                ...state,
                                                modalShow : false,
                                            }
                                case "ID" :
                                    return{
                                        ...state,
                                        id : action.payload
                                    }
                                    case "LOGOUT" :
                                        return{
                                            ...state,
                                            id : ''
                                        }
                                default:
                                    return state;
    }
}

export default reducer;