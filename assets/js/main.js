
var show_units_grade = function(data){
  $('#transcript_unit').empty()
  for (j=0; j<data.length;j++) 
  {

    var unit= '<tr class="bg-white">'+
        '<td style="color: black;" >'+data[j].name+'</td>'+
        '<td style="color: black;" >'+data[j].score+'</td>'+
        '</tr>'+
    '<tr class="table-divider"></tr>'
    $('#transcript_unit').append(unit)
  }

};

var transripts_append = function(data){
for (i=0; i<data.length;i++) 
{
  var transcript_dom = '<div class="col-lg-3 mb-5 mb-lg-0">'+
      '<div data-animate-hover="1" data-toggle="hidden">'+
          '<div class="card bg-gradient-primary shadow-primary border-primary animate-this">'+
              '<div class="py-5 text-center">'+
                  '<img alt="Image placeholder" src="./assets/img/icons/dusk/svg/browser-window.svg" class="img-saturate" style="width: 100px;">'+
              '</div>'+
              '<div class="px-4 pb-5 text-center">'+
                  '<a href="#sct_page_examples" onclick="show_units_grade('+data[i].data+')"  data-toggle="modal" data-target="#modal_5" class="btn btn-sm btn-white btn-circle">View Units Score</a>'+
                  '<p style=" font-size: 19px; margin: 0px; "  class="text-white mt-4">'+data[i].year+'</p>'+
                  '<p style=" margin-top: 12px; " class="text-white">'+data[i].grade+'</p>'+
              '</div>'+
          '</div>'+
      '</div>'+
  '</div>'

  $('#transcript_container').append(transcript_dom)

}
};

var append_results = function(data) {
  $('#course_taken').empty().append(data.data.course_taken)
  $('#grade').empty().append(data.data.grade)
  $('#study_period').empty().append(data.data.study_period)
  $('#institution_name').empty().append(data.data.institution_name)
  $('#student_name_respo').empty().append(data.data.student_name_respo)

}

var process_errors = function() {
  alert("sorry an error try again later")
  transripts_append('data')
};



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
      studentProfile= JSON.stringify({"fullname":student_name,"admission_number":admission_number}),
      $.ajax({
        url: 'http://127.0.0.1:8000/results',
        type: 'POST',
        data: studentProfile,
        dataType: 'json',
        processData: false,
        contentType: false,
        success: function(data){
          append_results(data)
        },
        error: function (xhr, ajaxOptions, thrownError) {
          process_errors()
        }
      });

    }
  }

});

// you can invoke methods in JavaScript too
