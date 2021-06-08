
export const userReducer = (state, action) => {

    switch (action.type) {
        case 'guardar':
            return {
                ...state,
                nombre: action.payload.nombre,
                correo: action.payload.correo,
                tel: action.payload.tel
            }
        case 'usarNombreBD':
            return {
                ...state,
                nombre: action.payload.nombre
            }
        case 'usarCorreoBD':
            return {
                ...state,
                correo: action.payload.correo
            }
        case 'usarTelBD':
            return {
                ...state,
                tel: action.payload.tel
            }
    
        default:
            return state;
    }
}