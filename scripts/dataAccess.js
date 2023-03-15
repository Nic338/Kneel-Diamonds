import { getDatabase } from "./database.js"

const database = getDatabase()

export const getMetals = () => {
    return database.metals.map(metal => ({...metal}))
}
export const getStyles = () => {
    return database.styles.map(style => ({...style}))
}
export const getSizes = () => {
    return database.sizes.map(size => ({...size}))
}
export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}
export const getJewelries = () => {
    return database.jewelries.map(jewelry => ({...jewelry}))
}
export const getOrderBuilder = () => {
    return {...database.orderBuilder}
}

export const setMetal = (id) => {
    database.orderBuilder.metalId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setSize = (id) => {
    database.orderBuilder.sizeId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setStyle = (id) => {
    database.orderBuilder.styleId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setJewelry = (id) => {
    database.orderBuilder.jewelryId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders.length === 0 ? 1 : database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}