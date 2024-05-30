let allTours = [
    Tour_1 = {
        displayName: "Kinkaku-ji Temple",
        description: "Kinkaku-ji, or the Golden Pavilion, is a stunning Zen Buddhist temple in Kyoto, Japan, renowned for its golden exterior and serene gardens.",
        image: "../images/img-obj-1.png",
        rightCardImages: [
            "https://theworldtravelguy.com/wp-content/uploads/2020/04/DSCF5510.jpg",
            "https://wallpapercrafter.com/desktop1/504548-Kyoto-Autumnal-Leaves-autumn-autumnal-leaves-shirakawa.jpg",
            "https://media.timeout.com/images/106011221/image.jpg"
        ],
        displayRating: "4.9",
        rating: "Best offers",
        location: "Kyoto, Japan",
        price: 625,
        duration: "long"
    },
    Tour_2 = {
        displayName: "Amalfi Coast",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        image: "https://www.renetimmermans.com/blog/wp-content/uploads/2016/10/20150806-Amalfi-Italy-0534.jpg",
        rightCardImages: [
            "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220815-taliban-kabul-mn-1015-0f80da.jpg",
            "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220815-taliban-kabul-mn-1015-0f80da.jpg",
            "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220815-taliban-kabul-mn-1015-0f80da.jpg"
        ],
        displayRating: "4.5",
        rating: "Standart",
        location: "Amalfi, Italy",
        price: 350,
        duration: "medium"
    },
    Tour_3 = {
        displayName: "Grand Canion",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        image: "https://w.forfun.com/fetch/8e/8eb9154a28a90faf1c09ba81267560e7.jpeg",
        rightCardImages: [
            "https://i.ytimg.com/vi/pEW2AyzxlVg/maxresdefault.jpg",
            "https://i.ytimg.com/vi/pEW2AyzxlVg/maxresdefault.jpg",
            "https://i.ytimg.com/vi/pEW2AyzxlVg/maxresdefault.jpg"
        ],
        displayRating: "2.0",
        rating: "Good offers",
        location: "Arizona, USA",
        price: 500,
        duration: "short"
    },
    Tour_4 = {
        displayName: "Bavaria",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        image: "https://rare-gallery.com/uploads/posts/887020-Bamberg-Germany-Houses-Bavaria.jpg",
        rightCardImages: [
            "https://i.ytimg.com/vi/pEW2AyzxlVg/maxresdefault.jpg",
            "https://i.ytimg.com/vi/pEW2AyzxlVg/maxresdefault.jpg",
            "https://i.ytimg.com/vi/pEW2AyzxlVg/maxresdefault.jpg"
        ],
        displayRating: "2.0",
        rating: "Good offers",
        location: "Bavaria, Germany",
        price: 500,
        duration: "short"
    },
    Tour_5 = {
        displayName: "Big Ben Tower",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        image: "https://media.baamboozle.com/uploads/images/273013/1612897124_672393",
        rightCardImages: [
            "https://i.ytimg.com/vi/pEW2AyzxlVg/maxresdefault.jpg",
            "https://i.ytimg.com/vi/pEW2AyzxlVg/maxresdefault.jpg",
            "https://i.ytimg.com/vi/pEW2AyzxlVg/maxresdefault.jpg"
        ],
        displayRating: "2.0",
        rating: "Good offers",
        location: "London, UK",
        price: 500,
        duration: "short"
    },
    Tour_6 = {
        displayName: "Eifel Tower",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        image: "https://lovetoeatandtravel.com/wp-content/uploads/2020/10/eiffel-tower-768501_1920.pixabay.jpg",
        rightCardImages: [
            "https://i.ytimg.com/vi/pEW2AyzxlVg/maxresdefault.jpg",
            "https://i.ytimg.com/vi/pEW2AyzxlVg/maxresdefault.jpg",
            "https://i.ytimg.com/vi/pEW2AyzxlVg/maxresdefault.jpg"
        ],
        displayRating: "2.0",
        rating: "Good offers",
        location: "Paris, France",
        price: 500,
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
    tours.className = "w-fit grid grid-cols-3 grid-rows-3 gap-[20px] max-2xl:grid-cols-2 max-xl:grid-cols-1"
    tours.id = "tours"

    document.querySelector("#toursContainer").appendChild(tours)

    for (let i = 0; i < toursToShow.length; i++) {
        let tour = `
        <div onclick="curentProd(${i})" class="w-[320px] h-fit flex flex-col bg-white rounded-3xl shadow-xl hover:scale-105 duration-300 max-2xl:w-[370px] max-xl:w-[500px] max-lg:w-[250px]">
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

function curentProd(i) {
    document.querySelector('#sideCard').remove()

    let sideCard = document.createElement("div")
    sideCard.className = "p-10 w-[500px] h-[800px] bg-white rounded-3xl shadow-xl flex flex-col justify-between"
    sideCard.id = "sideCard"

    document.querySelector("#sideCardContainer").appendChild(sideCard)

    sideCard.innerHTML = `
        <div class="flex justify-between">
            <div>
                <h3 class="text-3xl font-semibold">${admisibleTours[i].displayName}</h3>
                <div class="flex gap-x-3 items-center">
                    <img src="../images/location.png">
                    <p class="text-slate-600">${admisibleTours[i].location}</p>
                </div>
            </div>

            <div class="w-[50px] h-[50px] bg-white rounded-full shadow-lg flex justify-center items-center">
                <img src="../images/favorite 1.png">
            </div>
        </div>

        <div>
            <p class="text-lg font-semibold">Description:</p>
            <p class="text-slate-600">${admisibleTours[i].description}</p>
        </div>

        <div>
            <p class="text-lg font-semibold">Photos/Gallery:</p>
            <div class="flex flex-col gap-y-[10px]">
                <div class="flex justify-between">
                    <div class="w-[100px] h-[100px] bg-white rounded-3xl shadow-lg">
                        <img src="${admisibleTours[i].rightCardImages[0]}" class="rounded-3xl object-cover w-full h-full">
                    </div>
                    <div class="w-[200px] h-[100px] bg-white rounded-3xl shadow-lg">
                        <img src="${admisibleTours[i].rightCardImages[1]}" class="rounded-3xl object-cover w-full h-full">
                    </div>
                    <div class="w-[100px] h-[100px] bg-white rounded-3xl shadow-lg">
                        <img src="${admisibleTours[i].rightCardImages[2]}" class="rounded-3xl object-cover w-full h-full">
                    </div>
                </div>

                <div class="w-full h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
                    <p class="text-white font-semibold">More images</p>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-y-[10px]">
            <p class="text-lg font-semibold">Recent reviews:</p>
            <div class="w-full h-fit bg-white rounded-3xl shadow-md p-6 flex flex-col gap-y-6">
                <div class="flex items-center">
                    <div class="w-[45px] h-[45px] bg-white rounded-full flex justify-center items-center">
                        <img src="../images/user1.png">
                    </div>
                    <div class="w-full pl-2">
                        <div class="flex items-center justify-between">
                            <p class="font-semibold text-lg">John Lee</p>
                            <img src="../images/rating.png">
                        </div>
                        <p class="text-sm">Kinkaku-ji Temple</p>
                    </div>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
            </div>
            <p class="text-slate-600 font-semibold underline">More reviews</p>
        </div>
    `
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