import axios from 'axios';

export function getInventory() {
    return axios.get('http://localhost:3001/inventory')
    .then(res => res.data)
    console.log(res.data)
    .catch(err => {
        throw err
        return [];
    })
}

export function getPayments() {
    return axios.get('http://localhost:3001/payment')
    .then(res => res.data)
    .catch(err => {
        throw err
        return {}
    })
}

export function getProducts() {
    return axios.get('http://localhost:3001/product')
    .then(res => res.data)
    .catch(err => {
        throw err
        return [];
    })
}

export function getSales() {
    return axios.get('http://localhost:3001/sales')
    .then(res => res.data)
    .catch(err => {
        throw err
        return {}
       })
} 

export function getVisitors() {
    return axios.get('http://localhost:3001/visitors')
    .then(res => res.data)
    .catch(err => {
        throw err
        return {}
       })
} 