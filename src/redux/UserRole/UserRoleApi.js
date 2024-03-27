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

export const getUserRoleById = async (ur_id,token) => {
    const url = `${API_URL}user_role/crud?ur_id=${ur_id}`
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

