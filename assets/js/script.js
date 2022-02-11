let searchBtn = document.querySelector("#searchBtn");
let clearBtn = document.querySelector("#clearBtn");
let recNames = document.querySelector("#recNames");
let burgerBtn = $("#burgers");
let pizzaBtn = $("#pizza");
let kebabBtn = $("#kebab");
let dessertsBtn = $("#desserts");
let postcodeSearch = document.getElementById("postcodeSearch");
let info = $("fetchInfo");
let boxed = $("#boxed");
// Job of the clear button
clearBtn.addEventListener("click", () => {
  $("#fetchInfo").html("");

  console.log("clear clicked");
});

// Job and functions linked to search button
searchBtn.addEventListener("click", fetchFood, postcode);

async function fetchFood(event) {
  event.preventDefault();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async function (position) {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);

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

        // Bring Data in the info box

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

function postcode(data1) {
  // let lat = data1.result[0].lat;
  // let lon = data1.result[0].lon;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async function (data1) {
      console.log(data1.coords.latitude);
      console.log(data1.coords.longitude);

      let latitude = data1.coords.latitude;
      let longitude = data1.coords.longitude;

      var URL = `https://api.postcodes.io/postcodes?${postcodeSearch.value}&lon=${data1.coords.longitude}&lat=${data1.coords.latitude}`;
      fetch(URL).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            var loc = data.result[0].postcode;

            $("#location").append("  " + data.result[0].postcode);
            console.log(data);
            console.log(URL);
            console.log(loc);
            console.log(postcodeSearch.value);
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

        $("#fetchInfo").append(data.restaurants[i].restaurant.location.address);

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

        $("#fetchInfo").append(data.restaurants[i].restaurant.location.address);
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

        $("#fetchInfo").append(data.restaurants[i].restaurant.location.address);
        console.log("kebabs");
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

        $("#fetchInfo").append(data.restaurants[i].restaurant.location.address);
        console.log("some desserts");
      }
    });
  }
}

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

mapboxgl.accessToken = 'pk.eyJ1IjoiYWJiZXp6enoiLCJhIjoiY2t6N2J6YjB6MGsxMDJwczhreXJtY2J4MyJ9.GL4WPa1EtVSHSW5eMtzVPA';
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(async function (position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
// navigator.geolocation.getCurrentPosition(successLocation,
// errorLocation, {
  // enableHighAccuracy: true
// })

 function successLocation(position) {
   setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {}
 
function setupMap(center) {
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: center,
zoom: 15
})
const userposition = new mapboxgl.GeolocateControl({
  positionOptions: {
  enableHighAccuracy: true
  },
  trackUserLocation: true
  })
map.addControl(userposition)
//  const nav = new mapboxgl.NavigatorControl()
//  map.addControl(nav)

 const directions = new MapboxDirections({
   accessToken: mapboxgl.accessToken
  });
  
  map.addControl(directions, "top-left")
  
}


  

  })}
