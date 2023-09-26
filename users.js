const url = "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users"
const SerachUrl = "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName="


$(document).ready(function () {
    // Define a function to retrieve user data
    function getUsers(callback) {
        $.get(url, function (response) {
            callback(null, response);
        })
            .fail(function (error) {
                callback(new Error("API call for User list failed"), null);
            });
    }

    // Define a function to retrieve search results
    function getSearchList(searchValue, callback) {
        $.get(SerachUrl + searchValue, function (response) {
            callback(null, response);
        })
            .fail(function (error) {
                callback(new Error("API call for Search list failed"), null);
            });
    }

    // Callback function to handle user data retrieval
    function handleUserData(error, response) {
        if (error) {
            alert(error);
        } else {
            response.forEach(function (item) {
                $("#users-table").append(createRow(item));
            });

            // Add an event listener for the search input field
            $("#search").on("keypress", function (e) {
                if (e.which === 13) {
                    var searchValue = e.target.value;
                    if (searchValue.length >= 2) {
                        getSearchList(searchValue, function (err, resp) {
                            if (err) {
                                alert(err);
                            } else {
                                $(".row").remove();
                                    for (let i = 0; i < resp.length; i++) {
                                        $("#users-table").append(createRow(resp[i]));
                                };
                            }
                        });
                    } else {
                        alert('Please enter at least 2 characters');
                    }
                }
            });

            // Add an event listener for the "Reset" button
            $("#reset").click(function () {
                $(".row").remove();
                for (var i = 0; i < response.length; i++) {
                    $("#users-table").append(createRow(response[i]));
                }
            });
        }
    }

    // Initial user data retrieval
    getUsers(handleUserData);

    // Prevent form submission
    $("form").submit(function (e) {
        e.preventDefault();
    });
});

// Function to create a table row from user data
function createRow(data) {
    var row = $("<tr>").addClass("row");
    var td1 = $("<td>").addClass("cell-secondary");
    td1.html(data.id);
    var td2 = $("<td>").addClass("cell-avatar");
    td2.html($("<img>").attr("src", data.profilePic));
    var td3 = $("<td>").addClass("cell-secondary");
    td3.html(data.fullName);
    var td4 = $("<td>").addClass("cell-primary");
    td4.html(data.dob);
    var td5 = $("<td>").addClass("cell-secondary");
    td5.html(data.gender);
    var td6 = $("<td>").addClass("cell-secondary");
    td6.html(data.currentCity + ", " + data.currentCountry);
    row.append(td1, td2, td3, td4, td5, td6);
    return row;
}
