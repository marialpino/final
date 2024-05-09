$(function () {
    // Form validation
    $("#form").validate({
        errorPlacement: function (error, element) {
            error.appendTo(element.parent());
            if (element.attr("name") == "fname" ||
                element.attr("name") == "lname" ||
                element.attr("name") == "email" ||
                element.attr("name") == "phone" ||
                element.attr("name") == "message") {
                error.appendTo(element.parent());
            }
        },
        success: function (label) {
            label.parent().removeClass("error-parent");
        },
        highlight: function (element, errorClass) {
            $(element).parent().addClass("error-parent");
            $(element).parent().find(".error").fadeOut(function () {
                $(this).fadeIn();
            });
        },
        rules: {
            fname: {
                required: true
            },
            lname: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                phoneUS: true
            },
            message: {
                required: true
            }
        },
        messages: {
            fname: "⛔️First name required",
            lname: "⛔️Last name required",
            email: {
                required: "⛔️ Email required",
                email: " ⚠️Please enter a valid email address"
            },
            message: "⛔️ Please enter a message"
        }
    });
});
