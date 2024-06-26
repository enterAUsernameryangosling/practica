function showCard(product) {
    document.querySelector('#cardDiv').remove()

    let prod = document.createElement("div")
    prod.className = "container py-[100px] flex flex-col items-center gap-y-[50px]"
    prod.id = "cardDiv"

    document.querySelector("#cardContainer").appendChild(prod)


        prod.innerHTML = `
        <div class="flex flex-col items-center">
                <h1 class="max-w-[600px] text-3xl font-bold xl:max-w-[750px] xl:text-4xl text-center">Welcome to the product page</h1>
                <p class="max-w-[560px] text-base font-bold text-slate-600 xl:text-md text-center">Here you are able to read the details of the selected offer</p>
            </div>

            <div class="w-[1000px] h-fit p-[10px] rounded-3xl bg-white shadow-xl flex max-lg:flex-col">
                <div class="flex gap-x-[30px]">
                    <div class="bg-[url('${product.image}')] bg-center bg-cover w-[300px] h-[450px] rounded-2xl" style="background-image: url('${product.image}')"></div>

                    <div class="flex flex-col gap-y-10 justify-center">
                        <div>
                            <h3 class="text-2xl font-semibold">Tour name: ${product.displayName}
                            <div class="flex gap-x-[10px] items-center">  
                                <div class="flex gap-x-[5px] items-center">
                                    <img src="../images/location.png">
                                    <p class="text-slate-600">Location: </p>
                                </div>                  
                                
                                <p class="text-slate-600">${product.location}</p>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-2xl font-semibold">Tour price: <span class="text-emerald-600">$${product.price}</span></h3>
                        </div>

                        <form class="w-full flex flex-col gap-y-5">
                            <div class="max-w-[700px] flex gap-x-10 max-md:flex-wrap max-lg:gap-y-10">
                                <div class="w-full">
                                    <p class="text-slate-950 font-semibold text-md">Insert your card number</p>
                                    <input type="text" placeholder="xxx xxx xxx xxx" class="p-6 w-full max-w-[400px] h-[50px] bg-white rounded-full shadow-sm">
                                </div>
                
                                <div class="w-full">
                                    <p class="text-slate-950 font-semibold text-md">Insert card pin</p>
                                    <input type="text" placeholder="xx/20" class="p-6 w-full max-w-[400px] h-[50px] bg-white rounded-full shadow-sm">
                                </div> 
                            </div>

                            <div class="flex justify-between items-center">
                                <div class="flex items-center ps-4">
                                    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="bordered-checkbox-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-slate-600">I have read the terms and conditions...</label>
                                </div>

                                <p class="text-sm font-medium text-blue-500 underline">Read about our rules</p>
                            </div>

                            <div class="flex gap-5">
                                <button class="w-[150px] h-[45px] px-8 py-2 font-semibold bg-white text-blue-500 rounded-full max-md:hidden shadow-lg">Use coupon</button>
                                <button class="w-[150px] h-[45px] px-8 py-2 font-semibold bg-blue-500 text-white rounded-full max-md:hidden shadow-lg">Purchase</button>
                            </div>
                        </form>  
                    </div>
                </div>
            </div>
        `
}

showCard(JSON.parse(localStorage.getItem("prodStorage")))
