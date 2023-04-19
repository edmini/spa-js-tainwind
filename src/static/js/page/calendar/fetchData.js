
import { arrToObj } from "../../core/Creators.js"

export const getData = async (url) => {
    const res = await fetch(url)
    const result = await res.json()
    let events = []
    const menu = result.datas.data.values[0]
    result.datas.data.values.shift()
    const type = result.datas.data.values[0]
    result.datas.data.values.shift()
    result.datas.data.values.map((value) => {
        events.push(arrToObj(menu, type, value))
    })
    return events
}

export const putData = async (url, data) => {
    const res = await fetch(url, {
        method : "PUT",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({data})
    })
    const {result} = await res.json()
    return result
}

export const delData = async (url) => {
    const res = await fetch(url, {method : "DELETE"})
    const result = await res.json()
    console.log(result)
}

export const postData = async (url, data) => {
    const res = await fetch(url, {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({data})
    })
    const {result} = await res.json()
    return result
}