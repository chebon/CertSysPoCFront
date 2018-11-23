var getfilename = function (filename) {
  var student_results = $.ajax({
      url: "http://localhost:8000/"+filename,
      cache: false,
      processData: false,
      contentType: false,
      type: 'GET'
  });

  student_results.done(function (response, textStatus, jqXHR){
      // Log a message to the console
      console.log("Hooray, it worked!");
      console.log(response);
  });

  // Callback handler that will be called on failure
  student_results.fail(function (jqXHR, textStatus, errorThrown){
      // Log the error to the console
      alert('an error occured please try again later')
     var data = '{\n' +
         '"results":\n' +
         '[{\n' +
         '"code":"a",\n' +
         '"description":"Bible",\n' +
         '"cf":3.00,\n' +
         '"grade":"A"\n' +
         '},{\n' +
         '"code":"b",\n' +
         '"description":"introduction to math",\n' +
         '"cf":3.00,\n' +
         '"grade":"A"\n' +
         '}, {\n' +
         '"code":"c",\n' +
         '"description":"Comunacation Skills",\n' +
         '"cf":2.00,\n' +
         '"grade":"B"\n' +
         '}],\n' +
         '"overalls":{\n' +
         '"averages":67.6,\n' +
         '"cumulative":23,\n' +
         '"admission_number":"cs/m/we/swe",\n' +
         '"fullname":"Dougla Wabuko",\n' +
         '"academic_year":"2012/2019",\n' +
         '"recommendation":"Proceed to year two"\n' +
         '}\n' +
         '}\n'

      var obj = JSON.parse(data);
      console.log(obj)
      update_dom_verification(obj)
  });
}


    var verify_results = function () {
        var myform = document.getElementById("verify_results");
        var fd = new FormData();
        fd.fullname = $('#student_name').val()
        fd.admission_number = $('#admission_number').val()

        console.log(fd);


        var request = $.ajax({
            url: "http://localhost:8000/result",
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
        });

        // Callback handler that will be called on failure
        request.fail(function (jqXHR, textStatus, errorThrown){
            // Log the error to the console
            alert('an error occured please try again later')
            var data = '{"account": "d6230375fcf8568c0379922e8990f1dc7e5d523a",\n' +
                '"address": "2N6srumdpRCmCQ4nQ4HDhuQ2mRkdvH6e4ic",\n' +
                '"amount": "0.0001",\n' +
                '"bip125-replaceable": "no",\n' +
                '"category": "receive",\n' +
                '"comment": "d6230375fcf8568c0379922e8990f1dc7e5d523a",\n' +
                '"confirmations": "0",\n' +
                '"label": "d6230375fcf8568c0379922e8990f1dc7e5d523a",\n' +
                '"time": "1542708893",\n' +
                '"timereceived": "1542708893",\n' +
                '"trusted": "true",\n' +
                '"txid": "76e27d3c1861918a343c9d562e14b12c95690c451b66297198363d60caf17664",\n' +
                '"vout": "1",\n' +
                '"walletconflicts": []\n' +
                '}'
            var obj = JSON.parse(data);
            getfilename(obj.account)
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
