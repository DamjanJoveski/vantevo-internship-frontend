import {API_URL} from '../../constants'

export const getListings = async (token) => {
    const url = `${API_URL}/listing/crud`
    
    const requestOptions = {
        "method" : "GET",
        "headers" : {
            "Authorization" : `Bearer ${token}`
        } 
    }

    const res = await fetch(url , requestOptions)
    const data = res.json()
    return data

}

export const getListingById = async (id, token) => {
    const url = `${API_URL}/listing/crud?L_ID=${id}`
    
    const requestOptions = {
        "method" : "GET",
        "headers" : {
            "Authorization" : `Bearer ${token}`
        } 
    }

    const res = await fetch(url , requestOptions)
    const data = res.json()
    return data

}


export const createListing = async (listing , token) => {
    const url = `${API_URL}/listing/crud`

    const requestOptions = {
        "method" : "POST",
        "body" : listing,
        "headers" : {
            "Authorization" : `Bearer ${token}`
        } }

    const res = await fetch(url , requestOptions)
    const data = res.json()
    return data

}

export const updateListing = async (listing , token) => {
    const url = `${API_URL}/listing/crud`

    const requestOptions = {
        "method" : "PUT",
        "body" : listing,
        "headers" : {
            "Authorization" : `Bearer ${token}`
        } }

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