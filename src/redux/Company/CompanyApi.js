import {API_URL} from '../../constants'

export const getCompanies = async (id = null) => {
    const url = `${API_URL}/company/crud${id !== null ? `?id=${id}` : ''}`
    const res = await fetch(url)
    const data = res.json()
    return data
}

export const createCompany = async (company) => {
    const url = `${API_URL}/company/crud`
    const requestOptions = {
        "method" : "POST",
        "body" : company
    }
    const res = await fetch(url , requestOptions)
    const data = await res.json()
    return data
}

export const updateCompany = async company => {
    const url = `${API_URL}/company/crud`
    const requestOptions = {
        "method" : "PUT",
        "body" : company
    }

    const res = await fetch(url , requestOptions)
    const data = await res.json()
    return data

}

export const deleteCompany = async company => {
    const url = `${API_URL}/company/crud`
    const requestOptions = {
        "method" : "PUT",
        "body" : company
    }

    const res = await fetch(url , requestOptions)
    const data = await res.json()
    return data
}