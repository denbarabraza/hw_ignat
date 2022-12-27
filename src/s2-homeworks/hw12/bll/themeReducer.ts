export type ThemeType = {
    themeId: number
}
export type ActionsType = ReturnType<typeof changeThemeId>

const initState: ThemeType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionsType): ThemeType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {
                ...state,
                themeId: action.id
            }
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdACType => ({type: 'SET_THEME_ID', id}) // fix any

type changeThemeIdACType = {
    type:  'SET_THEME_ID'
    id: number
}