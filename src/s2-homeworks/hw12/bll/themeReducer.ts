const initState = {
    themeId: 1
}

export type ThemeType = {
    themeId: number
}


export const themeReducer = (state = initState, action: ActionsType): ThemeType => {
    debugger
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {
                ...state,
                themeId: action.id}
        }
        default:
            return state
    }
}

export type ActionsType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id} as const)
