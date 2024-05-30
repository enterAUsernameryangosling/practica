let allTours = [
    Kinkaku_ji_Temple = {
        displayName: "Kinkaku-ji Temple",
        image: "../images/img-obj-1.png",
        rightCardImages: [
            "../images/img-obj-1.png",
            "../images/img-obj-1.png",
            "../images/img-obj-1.png"
        ],
        displayRating: "5.0",
        rating: "Best offers",
        location: "Kyoto Japan",
        price: 625,
        duration: "long"
    },
    Tour_2 = {
        displayName: "Afganistan trip",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220815-taliban-kabul-mn-1015-0f80da.jpg",
        rightCardImages: [
            "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220815-taliban-kabul-mn-1015-0f80da.jpg",
            "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220815-taliban-kabul-mn-1015-0f80da.jpg",
            "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220815-taliban-kabul-mn-1015-0f80da.jpg"
        ],
        displayRating: "3.5",
        rating: "Standart",
        location: "Afganistan",
        price: 350,
        duration: "medium"
    },
    Tour_3 = {
        displayName: "Moldova trip",
        image: "https://i.ytimg.com/vi/pEW2AyzxlVg/maxresdefault.jpg",
        rightCardImages: [
            "https://i.ytimg.com/vi/pEW2AyzxlVg/maxresdefault.jpg",
            "https://i.ytimg.com/vi/pEW2AyzxlVg/maxresdefault.jpg",
            "https://i.ytimg.com/vi/pEW2AyzxlVg/maxresdefault.jpg"
        ],
        displayRating: "2.0",
        rating: "Bellow standard",
        location: "Moldova",
        price: 100,
        duration: "short"
    },
]

function showSort(action) {
    if (action === "close") {
        document.querySelector("#sortCard").style.visibility = "hidden"
        document.querySelector("#darkenScreen").style.visibility = "hidden"
    }
    else {
        document.querySelector("#sortCard").style.visibility = "visible"
        document.querySelector("#darkenScreen").style.visibility = "visible"
    }
}

var admisibleToursSearch = allTours
var admisibleToursRating = allTours
var admisibleToursLocation = allTours
var admisibleToursPriceFrom = allTours
var admisibleToursPriceTo = allTours
var admisibleToursDuration = allTours

var admisibleTours = []

function getOccurrence(array, value) {
    let count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}

function verifyAndShow() {
    let concatTours = [].concat(admisibleToursSearch, admisibleToursRating, admisibleToursLocation, admisibleToursPriceFrom, admisibleToursPriceTo, admisibleToursDuration)
    let duplicates = []

    for (i in concatTours) {
        if (getOccurrence(concatTours, concatTours[i]) === 6 && !(duplicates.includes(concatTours[i]))) {
            duplicates.push(concatTours[i])
        }
    }

    admisibleTours = duplicates
    showTours(admisibleTours)
}
verifyAndShow()

function showTours(toursToShow) {
    document.querySelector('#tours').remove()

    let tours = document.createElement("div")
    tours.className = "w-fit grid grid-cols-3 grid-rows-3 gap-[20px]"
    tours.id = "tours"

    document.querySelector("#toursContainer").appendChild(tours)

    for (let i = 0; i < toursToShow.length; i++) {
        let tour = `
        <div onclick="curentProd(${i})" class="w-[320px] h-fit flex flex-col bg-white rounded-3xl shadow-xl hover:scale-105 duration-300">
            <div><img src="${toursToShow[i].image}" class="rounded-t-3xl object-cover h-[160px] w-full"></div>
            <div class="p-4 flex flex-col gap-y-[20px]">
                <div class="flex flex-col">
                    <div class="flex justify-between items-center">
                        <h3 class="font-semibold text-xl">${toursToShow[i].displayName}</h3>

                        <div class="flex items-center gap-x-1">
                            <p class="text-slate-600">${toursToShow[i].displayRating}</p>
                            <img src="../images/star 1.png">
                        </div>
                    </div>

                    <div class="flex gap-x-3 items-center">
                        <img src="../images/location.png">
                        <p>${toursToShow[i].location}</p>
                    </div>
                </div>

                <div class="flex justify-between items-center">
                    <button
                        class="w-[120px] h-[40px] px-8 py-2 font-semibold bg-blue-500 text-white rounded-full max-md:hidden">Order</button>
                    <h3 class="font-semibold text-xl text-emerald-600">$${toursToShow[i].price}</h3>
                </div>
            </div>
        </div>
        `

        tours.innerHTML += tour
    }
}

function curentProd(i){
    
}

function sortSearch(value) {
    admisibleToursSearch = []

    for (let i = 0; i < allTours.length; i++) {
        if (allTours[i].displayName.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
            admisibleToursSearch.push(allTours[i])
        }
    }

    if (value === '') {
        admisibleToursSearch = allTours
    }

    verifyAndShow()
}

function sortRating(rating) {
    admisibleToursRating = []

    for (let i = 0; i < allTours.length; i++) {
        if (allTours[i].rating === rating) {
            admisibleToursRating.push(allTours[i])
        }
    }

    verifyAndShow()
}

function sortLocation(location) {
    admisibleToursLocation = []

    for (let i = 0; i < allTours.length; i++) {
        if (allTours[i].location === location) {
            admisibleToursLocation.push(allTours[i])
        }
    }

    verifyAndShow()
}

function sortDuration(duration) {
    admisibleToursDuration = []

    for (let i = 0; i < allTours.length; i++) {
        if (allTours[i].duration === duration) {
            admisibleToursDuration.push(allTours[i])
        }
    }

    verifyAndShow()
}

function sortPriceFrom(price) {
    admisibleToursPriceFrom = []

    for (let i = 0; i < allTours.length; i++) {
        if (parseInt(allTours[i].price) > price) {
            admisibleToursPriceFrom.push(allTours[i])
        }
    }

    if (price === '') {
        admisibleToursPriceFrom = allTours
    }

    verifyAndShow()
}

function sortPriceTo(price) {
    admisibleToursPriceTo = []

    for (let i = 0; i < allTours.length; i++) {
        if (parseInt(allTours[i].price) < price) {
            admisibleToursPriceTo.push(allTours[i])
        }
    }

    if (price === '') {
        admisibleToursPriceTo = allTours
    }

    verifyAndShow()
}