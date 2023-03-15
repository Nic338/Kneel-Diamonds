import { getOrders, getMetals, getStyles, getSizes, getJewelries } from "./dataAccess.js"

const metals = getMetals()
const styles = getStyles()
const sizes = getSizes()
const jewelries = getJewelries()

const buildOrderListItem = (order) => {
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    
    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )
    
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
    const foundJewelry = jewelries.find(
        (jewelry) => {
            return jewelry.id === order.jewelryId
        }
    )
    
    let totalCost = 0
        if (foundMetal && foundSize && foundStyle && foundJewelry) {
            totalCost = (foundMetal.price + foundSize.price + foundStyle.price)*foundJewelry.price
        }
 
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
    Order #${order.id} cost ${costString}
    </li>`
    
}



export const Orders = () => {
    /*
    Can you explain why the state variable has to be inside
    the component function for Orders, but not the others?
    */
   const orders = getOrders()
   
   let html = "<ul>"
   
   const listItems = orders.map(buildOrderListItem)


    html += listItems.join("")
    html += "</ul>"
   
    return html
}

