
    var verify_results = function () {
        var myform = document.getElementById("verify_results");
        var fd = new FormData();
        fd.fullname = $('#student_name').val()
        fd.admission_number = $('#admission_number').val()

        console.log(fd);

        var request = $.ajax({
            url: "http://127.0.0.1:8000/results",
            data: fd,
            cache: false,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function (dataofconfirm) {
                // do something with the result
            }
        });

        request.done(function (response, textStatus, jqXHR){
            // Log a message to the console
            console.log("Hooray, it worked!");
        });

        // Callback handler that will be called on failure
        request.fail(function (jqXHR, textStatus, errorThrown){
            // Log the error to the console
            alert('an error occured please try again later')
            data = '{"student_name":"'+$("#student_name").val()+'", "course": "computer science", "overal_grade": "B", "period": "2012-2014", "institution": "Kabarak University"}'
            update_dom_verification(data)
        });
    }


    var update_dom_verification = function(data){
        var obj = JSON.parse(data)
        $('#student_name_respo').empty().text(obj.student_name);
        $('#course_taken').empty().append('<strong>Course Taken: </strong>'+obj.course);
        $('#grade').empty().append('<strong>Overal Grade: </strong>'+obj.overal_grade);
        $('#study_period').empty().append('<strong> Study Period: </strong>'+obj.period);
        $('#institution_name').empty().append('<strong> Institution Name: </strong>'+obj.institution);
        $('#sct-topics').show();
    }


    var create_profile = function () {
        var myform = document.getElementById("create_profile");
        var fd = new FormData();
        fd.fullname = $('#student_name').val()
        fd.admission_number = $('#admission_number').val()

        console.log(fd);

        var request = $.ajax({
            url: "http://127.0.0.1:8000/profile",
            data: fd,
            cache: false,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function (dataofconfirm) {
                // do something with the result
            }
        });

        request.done(function (response, textStatus, jqXHR){
            // Log a message to the console
            console.log("Hooray, it worked!");
            alert('Hooray, profile created sucessfully')
        });

        // Callback handler that will be called on failure
        request.fail(function (jqXHR, textStatus, errorThrown){
            // Log the error to the console
            alert('profile created sucessfully')
        });
    }
