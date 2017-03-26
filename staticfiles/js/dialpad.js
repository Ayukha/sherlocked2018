$(document).ready(function(){
  // console.log("ready!");
  var delBtn = $("button#del"); var clrBtn = $("button#clr");
  var numBtn = $("button.number"); var dialBtn = $("button#dial");

  if($("#phoneScreen").val())
  {
    var phoneNumber = $("#phoneScreen").val();
  }else{
    var phoneNumber = "";
  }

  function PlaySound(id) {
          var sound = document.getElementById(id);
          sound.play()
      }

  function updatePhoneNumber(newNumber) {
    phoneNumber = phoneNumber + newNumber;
    // console.log(phoneNumber);
  }
  function deleteNumber() {
    phoneNumber = phoneNumber.slice(0,-1);
  }
  function clearNumber() {
    phoneNumber = "";
  }
  function printPhoneNumber() {
    $("#phoneScreen").val(phoneNumber);
  }
  function dialNumber() {
    alert("Dialing Number: " + phoneNumber);
  }
  numBtn.click(function() {
    var number = $(this).val();
    // console.log("clicked "+number);
    PlaySound(number.toString());
    updatePhoneNumber(number);
    printPhoneNumber();
  });
  delBtn.click(function() {
    deleteNumber();
    printPhoneNumber();
  });
  clrBtn.click(function() {
    clearNumber();
    printPhoneNumber();
  });
  dialBtn.click(function() {
    dialNumber();
    clearNumber();
    printPhoneNumber();
  });
});

