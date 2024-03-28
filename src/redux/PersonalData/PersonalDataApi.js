import {API_URL} from '../../constants'


export const createPersonalData = async (personal_data)  => {
    const url = `${API_URL}personal_informations/crud`
    const requestOptions = {
        "method" : 'POST',
        "body" : personal_data
    }

    const res = await fetch(url , requestOptions)
    const data = res.json()
    return data
}

export const getPersonalDataById = async (pd_id) => {
    const url = `${API_URL}personal_informations/crud?pd_id=${pd_id}`
    const requestOptions = {
        "method" : 'GET',
    }

    const res = await fetch(url , requestOptions)
    const data = res.json()
    return data
}

export const getPersonalData = async () => {
    const url = `${API_URL}personal_informations/crud`
    const requestOptions = {
        "method" : 'GET',
    }

    const res = await fetch(url , requestOptions)
    const data = res.json()
    return data
}