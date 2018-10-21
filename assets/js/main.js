
var action2 = new Vue({
  el: '#action-2',
  data: {
    name: 'Vue.js'
  },
  // define methods under the `methods` object
  methods: {
    verify_submit: function (event) {
      alert('Hello ' + this.name + '!')
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
          alert(data);
        }
      });

    }
  }
})

// you can invoke methods in JavaScript too
