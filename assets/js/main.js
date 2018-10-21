

var append_results = function() {

}

var process_errors = function() {
  alert("sorry an error try again later")
}



var action2 = new Vue({
  el: '#action-2',
  data: {
    name: 'Vue.js'
  },
  // define methods under the `methods` object
  methods: {
    verify_submit: function (event) {

      // `event` is the native DOM event
      var student_name = $("#student_name").val()
      var admission_number = $("#admission_number").val()
      var fd = new FormData();
      fd.append( 'student_name', student_name );
      fd.append( 'admission_number', admission_number );
      $.ajax({
        url: 'http://example.com/script.php',
        data: fd,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function(data){
          append_results()
        },
        error: function (xhr, ajaxOptions, thrownError) {
          process_errors()
        }
      });

    }
  }

})

// you can invoke methods in JavaScript too
