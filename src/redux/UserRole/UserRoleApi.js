import {API_URL} from '../../constants'

export const getUserRole = async (token) => {
    const url = `${API_URL}user_role/crud`
    const requestOptions = {
        "method" : 'GET',
        "headers" : {
            "Authorization" : `Bearer ${token}`
        }
    }

    const res = await fetch(url , requestOptions)
    const data = res.json()
    return data

}

