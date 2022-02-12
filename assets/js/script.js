let searchBtn = document.querySelector("#searchBtn");
let clearBtn = document.querySelector("#clearBtn");
let recNames = document.querySelector("#recNames");
let burgerBtn = $("#burgers");
let pizzaBtn = $("#pizza");
let kebabBtn = $("#kebab");
let dessertsBtn = $("#desserts");
let somethingdiffBtn = $("#somethingdiff");
let makeyourownBtn = $("#makeyourown");
let postcodeSearch = $("#postcodeSearch");
let info = $("fetchInfo");
let boxed = $("#boxed");
let modal = document.querySelector("#myModal");
let modalBtn = document.querySelector("#modalBtn");
let mod = document.querySelectorAll("mod");
let something = document.getElementById("#somethinggg");

modalBtn.addEventListener("click", () => {
  console.log("modal");
  modal.style.display = "block";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
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
        // let listEl = $("<li>");
        // let listDetail = name.concat("");
        // listEl.addClass("list-group-item").text(listDetail);

        var createTableRow = document.createElement("tr");
        var tableData = document.createElement("td");
        var link = document.createElement("a");

        // listEl.appendTo("#fetchInfo");

        link.textContent =
          data.restaurants[i].restaurant.name +
          " - Address: " +
          data.restaurants[i].restaurant.location.address +
          data.restaurants[i].restaurant.thumb;
        link.href = "stuff.html";

        // $("#somethinggg").append(
        //   data.restaurants[i].restaurant.location.address
        // );

        // $("#fetchInfo").append(data.restaurants[i].restaurant.featured_image);

        // data.restaurants[i].restaurant.location.address +
        // "  Opening times : " +
        // data.restaurants[i].restaurant.timings +
        // " - Customer Rating : " +
        // data.restaurants[i].restaurant.user_rating.rating_text;

        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        fetchInfo.appendChild(createTableRow);

        // $("#fetchInfo").append(data.restaurants[i].restaurant.thumb);
        // Bring Data in the info box..................

        // Rest Name
        // $("#fetchInfo").append(
        //   data.restaurants[i].restaurant.name + " - Address: "
        // );
        // Rest address
        // let something1 = document.getElementById("#someID");

        // let buttonmod = document.createElement("button");
        // buttonmod.innerHTML = "modeling";
        // ("modelingg");
        // document.fetchInfo.appendChild(buttonmod);
        // <button>somethingmod</button>;
        // buttonmod.addEventListener("click", () => {
        //   console.log("somethinggggg");
        // });

        // let modaling = $("<button>").attr("id", "modz");

        // // let something = name.concat("More details");

        // modaling.addClass("mod").text(something);
        // modaling.appendTo("#fetchInfo");

        // let blabtn = document.querySelector("#modz");

        // blabtn.onclick = function () {
        //   console.log("modal");
        //   modal.style.display = "block";
        // };

        // // something1.addEventListener("click", () => {
        // //   console.log("modling worked");
        // //   modal.style.display = "block";
        // // });

        // // -----------------------------------------------------------------------------

        // $("#myModal").append(data.restaurants[i].restaurant.location.address);

        // Rest opening times
        $("#myModal").append(
          "  Opening times : " + data.restaurants[i].restaurant.timings
        );
        // // Rest rating
        // $("#fetchInfo").append(
        //   " - Customer Rating : " +
        //     data.restaurants[i].restaurant.user_rating.rating_text
        // );
        // // Get customer phone number
        // $("#fetchInfo").append(
        //   " - Phone number  " + data.restaurants[i].restaurant.phone_numbers
        // );

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

function menu() {
  var menuurl = `https://documenu.p.rapidapi.com/restaurants/search/fields?restaurant_name=dixy&zip_code=b8iph`;

  fetch(menuurl)
    .then(
      function (response) {
        if (response.ok) {
          response.json().then(function (data) {});
        }
      },
      {
        method: "GET",
        headers: {
          "x-api-key": "<REQUIRED>",
          "x-rapidapi-host": "documenu.p.rapidapi.com",
          "x-rapidapi-key":
            "99487931c9msh09e061c599bd40dp1e25e6jsn37d27e63886d",
        },
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);

      $("#fetchInfo").append(data.url);
    });
}
// POST CODE FUNCTION NOT WORKING - FURTHER DEVELOPMENT...

function postcode(data1) {
  // let lat = data1.result[0].lat;
  // let lon = data1.result[0].lon;

  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(async function (data1) {
  //     console.log(data1.coords.latitude);
  //     console.log(data1.coords.longitude);

  //     let latitude = data1.coords.latitude;
  //     let longitude = data1.coords.longitude;

  var URL = `https://api.getAddress.io/autocomplete/${postcodeSearch.value}`;
  fetch(URL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        // var loc = data.result[0].postcode;

        // var custom = data.result[0].postcode;

        // $("#fetchInfo").append(custom);
        // $("#location").append("  " + data.result[0].postcode);
        console.log(data);
        console.log(URL);
        // console.log(loc);
        console.log(postcodeSearch.value);
        // console.log(latitude);
      });
    }
  });
}
//     );
//   }
// }

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
        $(".modal").append(
          data.restaurants[i].restaurant.name + " - Address: "
        );
        // Rest Address
        $("#fetchInfo").append(data.restaurants[i].restaurant.location.address);

        // Rest opening times
        $("#myModal").append(
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

makeyourownBtn.on("click", fetchmakeyourown);
async function fetchmakeyourown(event) {
  event.preventDefault();

  const response = await fetch(
    `https://yummly2.p.rapidapi.com/feeds/auto-complete?q=chicken%20soup`,

    {
      "x-rapidapi-host": "yummly2.p.rapidapi.com",
      "x-rapidapi-key": "99487931c9msh09e061c599bd40dp1e25e6jsn37d27e63886d",
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

    console.log(data);
    // // Bring Data in the info box
    // $("#fetchInfo").append(
    //   data.restaurants[i].restaurant.name + " - Address: "
    // );
    // // Rest Address
    // $("#fetchInfo").append(data.restaurants[i].restaurant.location.address);
    // console.log("some desserts");

    // // Rest opening times
    // $("#fetchInfo").append(
    //   "  Opening times : " + data.restaurants[i].restaurant.timings
    // );
    // // Rest rating
    // $("#fetchInfo").append(
    //   " - Customer Rating : " +
    //     data.restaurants[i].restaurant.user_rating.rating_text
    // );
    // // Get customer phone number
    // $("#fetchInfo").append(
    //   " - Phone number  " + data.restaurants[i].restaurant.phone_numbers
    // );
  }
}

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
