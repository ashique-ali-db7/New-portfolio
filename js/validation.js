$(function () {
  $("#signupform").validate({
    rules: {
       fname: { required: true, minlength: 2 } ,
       emailadress: { required:true,email:true},
       wherep: { required:true},
       choose: { required:true},
       message: {required:true}
    },
    messages: {
fname:"enter your full name",
required:"This field is required"
    }
  });
});





