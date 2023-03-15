import { getSizes, setSize, getOrderBuilder } from "./dataAccess.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"
const orderBuilder = getOrderBuilder()
    // Use .map() for converting objects to <li> elements
    const listItemsArray = sizes.map(size => {
       if(orderBuilder.sizeId === size.id) {

           return `<li>
               <input type="radio" name="size" value="${size.id}" checked /> ${size.carets}
           </li>`
       } 
       else {
        return `<li>
               <input type="radio" name="size" value="${size.id}" /> ${size.carets}
           </li>`
       }
    })

    html += listItemsArray.join("")
    
    html += "</ul>"
    return html
}

