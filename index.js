

// Prevent form submission
$("form").submit(function(e) {
    e.preventDefault();
});

// Handle form submission
$("form").on("submit", function() {
    var inputElements = $("input");
    var username = inputElements[0].value;
    var password = inputElements[1].value;

    if (username === password) {
        var obj = {};
        obj.username = username;
        obj.password = password;
        alert("Login Successful");
            location.replace("./orders.html");
            localStorage.setItem("loginStatus", true);
    }else{
        alert(" Username And Password don't match")
    }
})



// =================================================================================

