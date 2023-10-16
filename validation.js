$(document).ready(function() {
    $("#myForm").submit(function(e) {
        e.preventDefault();
        validateForm();
    });

    function validateForm() {
        let isValid = true;

        // Validate Username
        let username = $("#username").val().trim();
        let usernameFeedback = $("#usernameFeedback");
        let usernameValidFeedback = $("#usernameValidFeedback");
        if (!/^[a-zA-Z_]{6,10}$/.test(username)) {
            $("#username").addClass('invalid');
            usernameFeedback.text("Username should be between >=6 and <=10");
            isValid = false;
        } else {
            $("#username").removeClass('invalid');
            usernameFeedback.text("");
            usernameValidFeedback.text("✔");
        }

        // Validate Email
        let email = $("#email").val().trim();
        let emailFeedback = $("#emailFeedback");
        let emailValidFeedback = $("#emailValidFeedback");
        if (!/^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email) || (email.split('@').length - 1) > 1) {
            $("#email").addClass('invalid');
            emailFeedback.text("Not a valid e-mail address");
            isValid = false;
        } else {
            $("#email").removeClass('invalid');
            emailFeedback.text("");
            emailValidFeedback.text("✔");
        }

        // Validate Position
        let position = $("#position").val();
        let positionFeedback = $("#positionFeedback");
        if (position === "") {
            positionFeedback.text("You must select a position");
            isValid = false;
        } else {
            positionFeedback.text("");
        }

        // Validate Type
        let typeFeedback = $("#typeFeedback");
        if (!$("input[name='type']:checked").val()) {
            typeFeedback.text("You must select a type");
            isValid = false;
        } else {
            typeFeedback.text("");
        }

        // If all fields are valid, submit the form
        if (isValid) {
            console.log("Form submitted successfully");
        }
    }
});
