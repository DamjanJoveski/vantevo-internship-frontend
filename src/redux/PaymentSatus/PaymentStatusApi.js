import {API_URL} from '../../constants'

export const getPaymentStatuses = async (token) => {
    const url = `${API_URL}payment_status/crud`
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

export const getPaymentStatusById = async (ps_id,token) => {
    const url = `${API_URL}payment_status/crud?ps_id=${ps_id}`
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

