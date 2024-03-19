import {API_URL} from '../../constants'

export const getListing = async (id = null) => {
    const url = `${API_URL}/listing/crud${id !== null ? `?id=${id}` : ''}`
    
    const res = await fetch(url)
    const data = res.json()
    return data

}

export const createListing = async (listing) => {
    const url = `${API_URL}/listing/crud`

    const requestOptions = {
        "method" : "POST",
        "body" : listing
    }

    const res = await fetch(url , requestOptions)
    const data = res.json()
    return data

}

export const updateListing = async (listing) => {
    const url = `${API_URL}/listing/crud`

    const requestOptions = {
        "method" : "PUT",
        "body" : listing
    }

    const res = await fetch(url , requestOptions)
    const data = res.json()
    return data
    
}

export const deleteListing = async (listing) => {
    const url = `${API_URL}/listing/crud`

    const requestOptions = {
        "method" : "PUT",
        "body" : listing
    }

    const res = await fetch(url , requestOptions)
    const data = res.json()
    return data
}