import {API_URL} from '../../constants'

export const getCompanies = async () => {
    const url = `${API_URL}/company/crud`   
    const res = await fetch(url)
    const data = res.json()
    return data
}

export const getCompanyById = async (co_id, token) => {
    const url = `${API_URL}/company/crud?CO_ID=${co_id}`

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

export const createCompany = async (company , token) => {
    const url = `${API_URL}/company/crud`
    const requestOptions = {
        "method" : "POST",
        "body" : company,
        "headers" : {
            "Authorization" : `Bearer ${token}`
        }
    }
    const res = await fetch(url , requestOptions)
    const data = await res.json()
    return data
}

export const updateCompany = async (company , token) => {
    const url = `${API_URL}/company/crud`
    const requestOptions = {
        "method" : "PUT",
        "body" : company,
        "headers" : {
            "Authorization" : `Bearer ${token}`
        } 
    }

    const res = await fetch(url , requestOptions)
    const data = await res.json()
    return data

}

export const deleteCompany = async (co_id , token) => {
    const url = `${API_URL}/company/crud?CO_ID=${co_id}`
    const requestOptions = {
        "method" : "PUT",
        "headers" : {
            "Authorization" : `Bearer ${token}`
        } 
    }

    const res = await fetch(url , requestOptions)
    const data = await res.json()
    return data
}