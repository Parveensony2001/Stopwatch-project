$(document).ready(function() {
  $('#studentForm').submit(function(event) {
    event.preventDefault();
    let name = $("#name").val();
    let age = $("#age").val();
    let marks = $("#marks").val();
    if (name==false || age==false|| marks==false) {
            alert("PLEASE FILL ALL BLANCK ")
            return
    }
    
      if (name && age && marks) {
    let listItem = $('<li>').text('Name: ' + name + ', Age: ' + age + ', Marks: ' + marks);

    $('#studentList').append(listItem);

    $("#name").val('');
    $("#age").val('');
    $("#marks").val('');
    }
  });
});
/*
$(document).ready(function() {
  $('#studentForm').submit(function(event) {
    event.preventDefault();
    
    let name = $("#name").val();
    let age = $("#age").val();
    let marks = $("#marks").val();
    
    if (name && age && marks) {
      let listItem = $('<li>').text('Name: ' + name + ', Age: ' + age + ', Marks: ' + marks);
      $('#studentList').append(listItem);
      
      $("#name").val('');
      $("#age").val('');
      $("#marks").val('');
    }
  });
});*/