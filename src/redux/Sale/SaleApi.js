import {API_URL} from '../../constants'

export const getSales = async (id = null) => {
    const url = `${API_URL}/sale/crud${id !== null ? `?id=${id}` : ''}`
    
    const res = await fetch(url)
    const data = res.json()
    return data

}

export const createSale = async (sale) => {
    const url = `${API_URL}/sale/crud`

    const requestOptions = {
        "method" : "POST",
        "body" : sale
    }

    const res = await fetch(url , requestOptions)
    const data = res.json()
    return data

}

export const updateSale = async (sale) => {
    const url = `${API_URL}/sale/crud`

    const requestOptions = {
        "method" : "PUT",
        "body" : sale
    }

    const res = await fetch(url , requestOptions)
    const data = res.json()
    return data
    
}

export const deleteSale = async (sale) => {
    const url = `${API_URL}/sale/crud`

    const requestOptions = {
        "method" : "PUT",
        "body" : sale
    }

    const res = await fetch(url , requestOptions)
    const data = res.json()
    return data
}