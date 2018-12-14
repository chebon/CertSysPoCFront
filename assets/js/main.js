var getfilename = function (filename) {
  var student_results = $.ajax({
      url: "http://35.246.59.250:8001/"+filename,
      cache: false,
      processData: false,
      contentType: false,
      type: 'GET'
  });

  student_results.done(function (response, textStatus, jqXHR){
      // Log a message to the console
      var obj = JSON.parse(response);
      console.log(obj)
      update_dom_verification(obj)
  });

  // Callback handler that will be called on failure
  student_results.fail(function (jqXHR, textStatus, errorThrown){
      // Log the error to the console
      alert('an error occured please try again later')
  });
}


    var verify_results = function () {
        var myform = document.getElementById("verify_results");
        var fd = new FormData();
        fd.fullname = $('#student_name').val()
        fd.admission_number = $('#admission_number').val()

        console.log(fd);


        var request = $.ajax({
            url: "http://35.246.59.250:8001/results",
            data: fd,
            cache: false,
            processData: false,
            contentType: false,
            type: 'POST'
        });

        request.done(function (response, textStatus, jqXHR){
            // Log a message to the console
            console.log("Hooray, it worked!");
            console.log(response);
            var obj = JSON.parse(data);
            var arrayLength = data.length;
            for (var i = 0; i < arrayLength; i++) {
                getfilename(data[i])
            }
        });

        // Callback handler that will be called on failure
        request.fail(function (jqXHR, textStatus, errorThrown){
            // Log the error to the console
            alert('an error occured please try again later')
        });
    }


    var update_dom_verification = function(obj){
        $('#student_name_respo').empty().text(obj.fullname);
        $('#course_taken').empty().append('<strong>Course Taken: </strong>'+obj.course).hide();
        $('#grade').empty().append('<strong>Overal Grade: </strong>'+obj.overal_grade);
        $('#study_period').empty().append('<strong> Study Period: </strong>'+obj.academic_year);
        $('#institution_name').empty().append('<strong> Institution Name: </strong>'+obj.institution).hide();
        $('#sct-topics').show();
        $('#unit_content').empty();

        jQuery.each(obj.results, $.proxy(function(index, item) {
            console.log(item)
            var index_key = index+1;
            $('#unit_content').append('<tr> <th scope="row">'+index_key +'</th> <td>'+item.code+'</td> <td>'+item.description+'</td> <td>'+item.cf+'</td> <td>'+item.grade+'</td> </tr>')
        }, this));
    }


    var create_profile = function () {
        var myform = document.getElementById("create_profile");
        var fd = new FormData();
        fd.fullname = $('#student_name').val()
        fd.admission_number = $('#admission_number').val()

        console.log(fd);

        var request = $.ajax({
            url: "http://35.246.59.250:8001/profile",
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
