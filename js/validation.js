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

$("#submit-form").validate({
  rules:{
      name:{
          required:true,
          minlength:4,
      },
      email:{
          required:true,
          email:true
      },
      message:{
          required:true,
          minlength:10
      }
  },
  submitHandler:function(form){
      $.ajax({
          url:"https://script.google.com/macros/s/AKfycbxTV1PmFUqev5rPq_2W-KIRSA5GlvusggjJ7M_o/exec",
          data:$("#submit-form").serialize(),
          method:"post",
          success:function (response){
              alert("Message submitted successfully")
              window.location.reload()
          },
          error:function (err){
              alert("Something Error")
          }
      })
  }
})




