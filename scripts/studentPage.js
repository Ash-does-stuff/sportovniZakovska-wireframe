let atletikaSector = null;
let gymnastikaSector = null;
let micSector = null;
let plavaniSector = null;

let currentPage = 0

window.onload = () => {
    atletikaSector = document.getElementById("Atletika")
    gymnastikaSector = document.getElementById("Gymnastika")
    micSector = document.getElementById("micSporty")
    plavaniSector = document.getElementById("Plavani")
}

const pageSetter = (id, state) => {
    console.log(state, id)
    switch (id) {
        case 0:
            atletikaSector.style.visibility = state
            return
        case 1:
            gymnastikaSector.style.visibility = state
            return
        case 2:
            micSector.style.visibility = state
            return
        case 3:
            plavaniSector.style.visibility = state
            return
    }
}

const changePage = (pageId) => {
    console.log(pageId)
    console.log(atletikaSector.style.visibility)

    pageSetter(currentPage,"hidden");
    pageSetter(pageId,"visible");
    currentPage = pageId;
}