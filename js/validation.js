
  $("#signupform").validate({
    rules: {
       fname: { required: true, minlength: 2 } ,
       emailaddress: { required:true},
       wherep: { required:true},
       choose: { required:true},
       message: {required:true}
    },
    messages: {
fname:"enter your full name",
required:"This field is required"
    },
      submitHandler:function(form){
      $.ajax({
          url:"https://script.google.com/macros/s/AKfycbw1YAvn-K4C3UAGXVvvu6I7yydbtgFoGH-NEgNEpdOC6nXVH7P_QF3xHplr_ATtlK90/exec",
          data:$("#signupform").serialize(),
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
  });



