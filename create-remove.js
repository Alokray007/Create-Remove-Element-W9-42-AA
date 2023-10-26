/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        const parts = url.split("/");
        const breed = parts[parts.length - 2];

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */

        const elem = document.getElementsByClassName("gallery");
        const newDogCard = elem[0].querySelector("ul");
        const newItem = document.createElement("li");
        newItem.innerHTML = `
            <figure>
                <img src="${url}" />
                <figcaption>${breed}</figcaption>
            </figure>
        `;
        // Append the new item to the gallery list
        newDogCard.appendChild(newItem);
    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    const mainElem = document.getElementsByClassName("gallery");
    const firstItem = mainElem[0].querySelector("ul>li:first-child");

    /*-------------------- Remove the first dog card --------------------- */
    firstItem.remove()
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    const mainElem = document.getElementsByClassName("gallery");
    const lastItem = mainElem[0].querySelector("ul>li:last-child");

    /*-------------------- Remove the last dog card ----------------------- */
    lastItem.remove();
});
