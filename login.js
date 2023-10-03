
if (localStorage.getItem("loginStatus")) {
    var status1 = localStorage.getItem("loginStatus");
    if (!JSON.parse(status1)) {
        location.replace("./index.html");
    }
} else {
    location.replace("./index.html");
}


$("#right-part > a").click(function() {
    var status1 = localStorage.getItem("loginStatus") ? localStorage.getItem("loginStatus") : 0;
    if (JSON.parse(status1)) {
        localStorage.setItem("loginStatus", false);
    }
});

// $("#order").click(function(){
//     location.replace("http://127.0.0.1:5500/orders.html#");
// });

// $("#products").click(function(){
//     location.replace("http://127.0.0.1:5500/product.html");
// });

// $("#users").click(function(){
//     location.replace("http://127.0.0.1:5500/users.html");
// });

$("#loGin").click(function(){
    location.replace("http://127.0.0.1:5500/index.html");
});

        