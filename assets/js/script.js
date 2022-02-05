var searchBtn = document.querySelector("#searchBtn");
let recNames = document.querySelector("#recNames");
let burgerBtn = $("#burgers");
let pizzaBtn = $("#pizza");
let kebabBtn = $("#kebab");
let dessertsBtn = $("#desserts");
let postcodeSearch = document.querySelector("#postcodeSearch");

$(function () {
  var Restaurant = [
    "Dixy Chicken",
    "Aberdeen",
    "Liverpool",
    "Glasgow",
    "Birmingham",
    "Manchester",
    "Essex",
    "Tokyo",
    "London",
    "New York, USA",
    "Paris",
    "Islamabad",
    "New Delhi",
    "Chicago",
    "Rome",
    "San Francisco",
    "Denver",
  ];
  $("#restNames").autocomplete({
    source: Restaurant,
  });
});

searchBtn.addEventListener("click", fetchFood);
console.log("button clicked");

async function fetchFood(event) {
  event.preventDefault();

  const response = await fetch(
    `https://developers.zomato.com/api/v2.1/search?q=${recNames.value}&count=10`,

    {
      headers: { "user-key": "207a0c5b1b9e7e8ba746b09b4ecdbd80" },
    }
  );

  const data = await response.json();

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

    $("#fetchInfo").append(data.restaurants[i].restaurant.location.address);
    // $("#fetchInfo").append(
    //   "    Menu URL : " + data.restaurants[i].restaurant.url
    // );

    $("#fetchInfo").append(
      "  Opening times : " + data.restaurants[i].restaurant.timings
    );
    console.log(data);
  }
}

function postcode() {
  var URL = `https://api.postcodes.io/postcodes?q=b81ph`;

  fetch(URL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        var loc = data.result[0].postcode;

        $("#location").append(data.result.postcode);
        console.log(data);
        console.log(URL);
        // console.log(loc);
      });
    }
  });
}
// ${postcodeSearch.value}
postcode();

// function geo() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//       console.log(position);
//       $.get(
//         "http://maps.googleapis.com/maps/api/geocode/json?latlng=" +
//           position.coords.latitude +
//           "," +
//           position.coords.longitude,
//         function (data1) {
//           console.log(data1);
//         }
//       );
//     });
//   }
// }

//developers.zomato.com/api/v2.1/search?q=${recNames.value}&lat=${data1.coords.latitude}&lon=${data1.coords.longitude}&count=10
// CLEAR APPENDED STUFF ---

// ------------------------------------------------------------------------------------------------------------
// GIVE ME PIZZAS ONLY WHEN I CLICK THE PIZZA BUTTON....................
// https:

pizzaBtn.on("click", fetchPizzas);

async function fetchPizzas(event) {
  event.preventDefault();

  console.log("some pizzas");
  const response = await fetch(
    `https://developers.zomato.com/api/v2.1/search?q=pizza&count=20`,

    {
      headers: { "user-key": "207a0c5b1b9e7e8ba746b09b4ecdbd80" },
    }
  );
  const data = await response.json();

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

    $("#fetchInfo").append(data.restaurants[i].restaurant.location.address);

    console.log(data);
  }
}

// GIVE ME BURGERS ONLY WHEN I CLICK THE BURGER BUTTON....................

burgerBtn.on("click", fetchBurgers);

async function fetchBurgers(event) {
  event.preventDefault();

  console.log("some Burgers");
  const response = await fetch(
    `https://developers.zomato.com/api/v2.1/search?q=burger&count=20`,

    {
      headers: { "user-key": "207a0c5b1b9e7e8ba746b09b4ecdbd80" },
    }
  );
  const data = await response.json();

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

    $("#fetchInfo").append(data.restaurants[i].restaurant.location.address);
  }
}

// GIVE ME KEBABS ONLY WHEN I CLICK THE KEBAB BUTTON....................

kebabBtn.on("click", fetchKebab);

async function fetchKebab(event) {
  event.preventDefault();

  const response = await fetch(
    `https://developers.zomato.com/api/v2.1/search?q=kebab&count=20`,

    {
      headers: { "user-key": "207a0c5b1b9e7e8ba746b09b4ecdbd80" },
    }
  );
  const data = await response.json();

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

    $("#fetchInfo").append(data.restaurants[i].restaurant.location.address);
    console.log("kebabs");
  }
}

// GIVE ME DESSERTS ONLY WHEN I CLICK THE DESSERTS BUTTON....................

dessertsBtn.on("click", fetchDesserts);

async function fetchDesserts(event) {
  event.preventDefault();

  const response = await fetch(
    `https://developers.zomato.com/api/v2.1/search?q=dessert+waffles&count=20`,

    {
      headers: { "user-key": "207a0c5b1b9e7e8ba746b09b4ecdbd80" },
    }
  );
  const data = await response.json();

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

    $("#fetchInfo").append(data.restaurants[i].restaurant.location.address);
    console.log("some desserts");
  }
}
