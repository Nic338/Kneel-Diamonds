import { getJewelries, setJewelry } from "./database.js";

const jewelries = getJewelries()

document.addEventListener("change",(event) => {
    if (event.target.name === "jewelry") {
        setJewelry(parseInt(event.target.value))
    }
    }
)
export const Jewelry = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = jewelries.map(jewelry => {
        return `<li>
        <input type="radio" name="jewelry" value="${jewelry.id}" /> ${jewelry.name}
    </li>`
    })


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}
