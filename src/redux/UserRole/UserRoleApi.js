import {API_URL} from '../../constants'

export const getUserRole = async (id = null) => {
    const url = `${API_URL}/userrole/crud${id !== null ? `?id=${id}` : ''}`
    
    const res = await fetch(url)
    const data = res.json()
    return data

}

