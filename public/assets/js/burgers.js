$(function () {

  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");
    console.log(id);

    var newDevourState = {
      devoured: newDevoured
    };
    console.log(newDevoured);

    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: newDevourState
    })
      .then(function () {
        console.log(`Changed devoured state to ${newDevoured}`);
        location.reload();
      });

  });

  $("#add-burger").on("click", function (event) {
    event.preventDefault();
    var newBurger = {
      name: $("#new-burger").val().trim()
    };

    $.post(`/api/burgers`, newBurger)
      .then(function () {
        console.log("Created new burger");
        location.reload();
      });

  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).attr("data-id");
    console.log(id);
    $.ajax(`/api/burgers/${id}`, {
      type: "DELETE"
    })
      .then(function () {
        console.log(`Deleted burger #${id}`);
        location.reload();
      });

  });

});