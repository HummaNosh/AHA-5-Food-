let searchBtn = document.querySelector("#searchBtn");
let clearBtn = document.querySelector("#clearBtn");
let recNames = document.querySelector("#recNames");
let burgerBtn = $("#burgers");
let pizzaBtn = $("#pizza");
let kebabBtn = $("#kebab");
let dessertsBtn = $("#desserts");
let somethingdiffBtn = $("#somethingdiff");
let postcodeSearch = document.getElementById("#postcodeSearch");
let info = $("fetchInfo");
let boxed = $("#boxed");
let searchedList = document.getElementById("#searchedlist");
let Storage = localStorage.getItem("searchedlist")
  ? JSON.parse(localStorage.getItem("searchedlist"))
  : [];

// Job of the clear button
clearBtn.addEventListener("click", () => {
  // Clears fetch info box
  $("#fetchInfo").html("");
  console.log("clear clicked");
});

// Job and functions linked to search button
searchBtn.addEventListener("click", fetchFood, postcode);

async function fetchFood(event) {
  event.preventDefault();

  // Grabs current location..
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async function (position) {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);

      // A few parameters used here...Value of what user puts in, Reviews, Lat/Lon, Count, Sort by distance..
      const response = await fetch(
        `https://developers.zomato.com/api/v2.1/search?q=${recNames.value}&reviews=rating&dailymenu&lat=${position.coords.latitude}&lon=${position.coords.longitude}&count=10&sort=real_distance`,

        {
          headers: { "user-key": "207a0c5b1b9e7e8ba746b09b4ecdbd80" },
        }
      );

      const data = await response.json();
      $("#fetchInfo").html("");
      // Give me 10 bits of data
      for (i = 0; i < 10; i++) {
        // create it in a list
        let listEl = $("<li>");
        let listDetail = name.concat("");
        listEl.addClass("list-group-item").text(listDetail);
        listEl.appendTo("#fetchInfo");

        // Bring Data in the info box..................

        // Rest Name
        $("#fetchInfo").append(
          data.restaurants[i].restaurant.name + " - Address: "
        );
        // Rest address
        $("#fetchInfo").append(data.restaurants[i].restaurant.location.address);
        // Rest opening times
        $("#fetchInfo").append(
          "  Opening times : " + data.restaurants[i].restaurant.timings
        );
        // Rest rating
        $("#fetchInfo").append(
          " - Customer Rating : " +
            data.restaurants[i].restaurant.user_rating.rating_text
        );
        // Get customer phone number
        $("#fetchInfo").append(
          " - Phone number  " + data.restaurants[i].restaurant.phone_numbers
        );

        console.log(data);
        console.log("button clicked");

        // ---------------------------------------------------------------------------------------------------
        // PYTHAGGGGG

        // let sumlat =
        //   // get current locations latitude....
        //   position.coords.latitude -
        //   // minus each restaurants latitude....
        //   data.restaurants[i].restaurant.location.latitude;

        // let sumlon =
        //   // get current locations longitude....
        //   position.coords.longitude -
        //   // minus each restaurants lon....
        //   data.restaurants[i].restaurant.location.longitude;

        // // use pythag thearom.....so 'a*a + b*b = c squared..'

        // let C = Math.sqrt(sumlat * sumlat + sumlon * sumlon);

        // console.log(data.restaurants[i].restaurant.location.address);
        // console.log(sumlat);
        // console.log(sumlon);
        // console.log(C);
      }
    });
  }
}

// POST CODE FUNCTION NOT WORKING - FURTHER DEVELOPMENT...

function postcode(data1) {
  // let lat = data1.result[0].lat;
  // let lon = data1.result[0].lon;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async function (data1) {
      console.log(data1.coords.latitude);
      console.log(data1.coords.longitude);

      let latitude = data1.coords.latitude;
      let longitude = data1.coords.longitude;

      var URL = `https://api.postcodes.io/postcodes?q=${postcodeSearch}&lon=${data1.coords.longitude}&lat=${data1.coords.latitude}`;
      fetch(URL).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            var loc = data.result[0].postcode;

            $("#location").append("  " + data.result[0].postcode);
            console.log(data);
            console.log(URL);
            console.log(loc);
            console.log(postcodeSearch);
            console.log(latitude);
          });
        }
      });
    });
  }
}

postcode();

// ------------------------------------------------------------------------------------------------------------

// GIVE ME PIZZAS ONLY WHEN I CLICK THE PIZZA BUTTON....................

pizzaBtn.on("click", fetchPizzas);

async function fetchPizzas(event) {
  event.preventDefault();

  // Grab geolocation and sort by distance....

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async function (position) {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);

      console.log("some pizzas");

      const response = await fetch(
        `https://developers.zomato.com/api/v2.1/search?q=pizza&lat=${position.coords.latitude}&lon=${position.coords.longitude}&count=10&sort=real_distance`,

        {
          headers: { "user-key": "207a0c5b1b9e7e8ba746b09b4ecdbd80" },
        }
      );

      const data = await response.json();

      // clear out HTML every time user clicks search..

      $("#fetchInfo").html("");

      // Give me 10 bits of data
      for (i = 0; i < 10; i++) {
        // create it in a list
        var listEl = $("<li>");
        var listDetail = name.concat("");
        listEl.addClass("list-group-item").text(listDetail);
        listEl.appendTo("#fetchInfo");

        // Bring Data in the info box
        $("#fetchInfo").append(
          data.restaurants[i].restaurant.name + " - Address: "
        );
        // Rest Address
        $("#fetchInfo").append(data.restaurants[i].restaurant.location.address);

        // Rest opening times
        $("#fetchInfo").append(
          "  Opening times : " + data.restaurants[i].restaurant.timings
        );
        // Rest rating
        $("#fetchInfo").append(
          " - Customer Rating : " +
            data.restaurants[i].restaurant.user_rating.rating_text
        );
        // Get customer phone number
        $("#fetchInfo").append(
          " - Phone number  " + data.restaurants[i].restaurant.phone_numbers
        );

        console.log(data);
      }
    });
  }
}

// GIVE ME BURGERS ONLY WHEN I CLICK THE BURGER BUTTON....................

burgerBtn.on("click", fetchBurgers);

async function fetchBurgers(event) {
  event.preventDefault();

  // Grab geolocation, sort by burger and sort by distance....

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async function (position) {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);

      console.log("some Burgers");

      const response = await fetch(
        `https://developers.zomato.com/api/v2.1/search?q=burger&lat=${position.coords.latitude}&lon=${position.coords.longitude}&count=10&sort=real_distance`,

        {
          headers: { "user-key": "207a0c5b1b9e7e8ba746b09b4ecdbd80" },
        }
      );
      const data = await response.json();
      $("#fetchInfo").html("");
      // Give me 10 bits of data
      for (i = 0; i < 10; i++) {
        // create it in a list
        var listEl = $("<li>");
        var listDetail = name.concat("");
        listEl.addClass("list-group-item").text(listDetail);
        listEl.appendTo("#fetchInfo");

        // Bring Data in the info box
        $("#fetchInfo").append(
          data.restaurants[i].restaurant.name + " - Address: "
        );
        // Rest Address
        $("#fetchInfo").append(data.restaurants[i].restaurant.location.address);

        // Rest opening times
        $("#fetchInfo").append(
          "  Opening times : " + data.restaurants[i].restaurant.timings
        );
        // Rest rating
        $("#fetchInfo").append(
          " - Customer Rating : " +
            data.restaurants[i].restaurant.user_rating.rating_text
        );
        // Get customer phone number
        $("#fetchInfo").append(
          " - Phone number  " + data.restaurants[i].restaurant.phone_numbers
        );
      }
    });
  }
}

// GIVE ME KEBABS ONLY WHEN I CLICK THE KEBAB BUTTON....................

kebabBtn.on("click", fetchKebab);

async function fetchKebab(event) {
  event.preventDefault();

  // Grab geolocation, sort by kebab and sort by distance....

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async function (position) {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);

      const response = await fetch(
        `https://developers.zomato.com/api/v2.1/search?q=kebab&lat=${position.coords.latitude}&lon=${position.coords.longitude}&count=10&sort=real_distance`,

        {
          headers: { "user-key": "207a0c5b1b9e7e8ba746b09b4ecdbd80" },
        }
      );
      const data = await response.json();
      $("#fetchInfo").html("");
      // Give me 10 bits of data
      for (i = 0; i < 10; i++) {
        // create it in a list
        var listEl = $("<li>");
        var listDetail = name.concat("");
        listEl.addClass("list-group-item").text(listDetail);
        listEl.appendTo("#fetchInfo");

        // Bring Data in the info box
        $("#fetchInfo").append(
          data.restaurants[i].restaurant.name + " - Address: "
        );
        // Rest Address
        $("#fetchInfo").append(data.restaurants[i].restaurant.location.address);
        console.log("kebabs");

        // Rest opening times
        $("#fetchInfo").append(
          "  Opening times : " + data.restaurants[i].restaurant.timings
        );
        // Rest rating
        $("#fetchInfo").append(
          " - Customer Rating : " +
            data.restaurants[i].restaurant.user_rating.rating_text
        );
        // Get customer phone number
        $("#fetchInfo").append(
          " - Phone number  " + data.restaurants[i].restaurant.phone_numbers
        );
      }
    });
  }
}

// GIVE ME DESSERTS ONLY WHEN I CLICK THE DESSERTS BUTTON....................

dessertsBtn.on("click", fetchDesserts);

async function fetchDesserts(event) {
  event.preventDefault();

  // Grab geolocation, sort by dessert and sort by distance....

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async function (position) {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);

      const response = await fetch(
        `https://developers.zomato.com/api/v2.1/search?q=desserts&lat=${position.coords.latitude}&lon=${position.coords.longitude}&count=10&sort=real_distance`,

        {
          headers: { "user-key": "207a0c5b1b9e7e8ba746b09b4ecdbd80" },
        }
      );
      const data = await response.json();
      $("#fetchInfo").html("");
      // Give me 10 bits of data
      for (i = 0; i < 10; i++) {
        // create it in a list
        var listEl = $("<li>");
        var listDetail = name.concat("");
        listEl.addClass("list-group-item").text(listDetail);
        listEl.appendTo("#fetchInfo");

        // Bring Data in the info box
        $("#fetchInfo").append(
          data.restaurants[i].restaurant.name + " - Address: "
        );
        // Rest Address
        $("#fetchInfo").append(data.restaurants[i].restaurant.location.address);
        console.log("some desserts");

        // Rest opening times
        $("#fetchInfo").append(
          "  Opening times : " + data.restaurants[i].restaurant.timings
        );
        // Rest rating
        $("#fetchInfo").append(
          " - Customer Rating : " +
            data.restaurants[i].restaurant.user_rating.rating_text
        );
        // Get customer phone number
        $("#fetchInfo").append(
          " - Phone number  " + data.restaurants[i].restaurant.phone_numbers
        );
      }
    });
  }
}

somethingdiffBtn.on("click", fetchSomething);
async function fetchSomething(event) {
  event.preventDefault();

  // Grab geolocation, sort by dessert and sort by distance....

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async function (position) {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);

      const response = await fetch(
        `https://developers.zomato.com/api/v2.1/search?q=&lat=${position.coords.latitude}&lon=${position.coords.longitude}&count=10&sort=real_distance`,

        {
          headers: { "user-key": "207a0c5b1b9e7e8ba746b09b4ecdbd80" },
        }
      );
      const data = await response.json();
      $("#fetchInfo").html("");
      // Give me 10 bits of data
      for (i = 0; i < 10; i++) {
        // create it in a list
        var listEl = $("<li>");
        var listDetail = name.concat("");
        listEl.addClass("list-group-item").text(listDetail);
        listEl.appendTo("#fetchInfo");

        // Bring Data in the info box
        $("#fetchInfo").append(
          data.restaurants[i].restaurant.name + " - Address: "
        );
        // Rest Address
        $("#fetchInfo").append(data.restaurants[i].restaurant.location.address);
        console.log("some desserts");

        // Rest opening times
        $("#fetchInfo").append(
          "  Opening times : " + data.restaurants[i].restaurant.timings
        );
        // Rest rating
        $("#fetchInfo").append(
          " - Customer Rating : " +
            data.restaurants[i].restaurant.user_rating.rating_text
        );
        // Get customer phone number
        $("#fetchInfo").append(
          " - Phone number  " + data.restaurants[i].restaurant.phone_numbers
        );
      }
    });
  }
}

// LOCAL STORAGE

// function history() {
//   Storage.push(recNames.value);
//   localStorage.setItem("searchedlist", JSON.stringify(Storage));
//   listBuilder(recNames.value);
//   recNames.value = "";
// }

// let listBuilder = (text) => {
//   let favelist = document.createElement("li");
//   favelist.innerHTML = text + '<button onclick="deletebtn(this)"> x </button>';
//   searchedlist.append(favelist);
// };

// let getsearched = JSON.parse(localStorage.getItem("searchedlist"));
// getsearched.forEach((favelist) => {
//   listBuilder(favelist);
// });

// let deletebtn = (btn) => {
//   let btnEl = btn.parentNode;
//   let index = [...btnEl.parentElement.children].indexOf(btnEl);
//   Storage.splice(index, 10);
//   localStorage.setItem("searchedlist", JSON.stringify(Storage));
//   btnEl.remove();
// };

// $(document).on("click", "li", function () {
//   let pick = $(this).text();
//   fetchFood(pick);
// });

// history();
// Get slideshow of food pics..

let myFoodImg = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  // Loop through the pics from html class my slides..
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myFoodImg++;
  if (myFoodImg > x.length) {
    myFoodImg = 1;
  }
  x[myFoodImg - 1].style.display = "block";
  // Change pics after 2 secs
  setTimeout(carousel, 2000);
}
