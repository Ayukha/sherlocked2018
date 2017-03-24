// // States
// // 

// (function ($){
//   window.numberArray = [],
//   window.phoneNumber = '',
//   window.updateDisplay,
//   window.numberDisplayEl,
//   window.inCallModeActive,
//   window.dialpadButton = $('div#dialpad li'),
//   window.dialpadCase = $('div#dialpad'),
//   window.clearButton = $('#actions .clear'),
//   window.callButton = $('#actions .call'),
//   window.actionButtons = $('#actions'),
//   window.skipButton = $('#actions .skip'),
//   window.numberDisplayEl = $('#numberDisplay input');

//   function compilePhoneNumber(numberArray){
//     if (window.numberArray.length > 1){ 
//       window.phoneNumber = window.numberArray.join('');
//     } else {
//       window.phoneNumber = window.numberArray
//     }
//     return this.phoneNumber;
//   };

//   function updateDisplay(phoneNumber){
//     window.numberDisplayEl.val(window.phoneNumber);
//   };

//   function clearPhoneNumber(){
//     window.numberDisplayEl.val('');
//     window.phoneNumber = '';
//     window.numberArray = [];
//   };

//   function callNumber(){
//     window.numberDisplayEl.val('Calling...');
//     activateInCallInterface();
//     // Need timer interval to animate . . .
//     // Trigger  "Hangup"
//     // Trigger  "Call timer"
//   };

//   function holdNumber(){
//     window.numberDisplayEl.val('On Hold.');
//     changeHoldIntoUnhold();
//   };

//   function changeHoldIntoUnhold(){
//     window.skipButton.html('Unhold');
//     window.skipButton.addClass('ready');
//   };

//   function changeUnholdIntoHold(){
//     window.skipButton.html('Hold');
//   };

//   function activateInCallInterface(){
//     changeClearIntoHangUp();
//     changeSkipIntoHold();
//     disableCallButton();
//     disableDialButton();
//     removeReadyFromCall();
//     enableReadOnlyInput();
//     window.inCallModeActive = true;
//   };

//   function disableInCallInterface(){
//     removeReadOnlyInput();
//     enableCallButton();
//     changeHoldIntoSkip();
//     window.inCallModeActive = false;
//   }

//   function disableCallButton(){
//     window.callButton.addClass('deactive');
//   };

//   function enableCallButton(){
//     window.callButton.removeClass('deactive');
//   };

//   function enableDialButton(){
//     window.dialpadCase.removeClass('deactive');
//   };

//   function disableDialButton(){
//     window.dialpadCase.addClass('deactive');
//   };

//   function changeSkipIntoHold(){
//     window.skipButton.html('Hold');
//   };

//   function changeHoldIntoSkip(){
//     window.skipButton.html('Skip');
//   };

//   function changeClearIntoHangUp(){
//     window.clearButton.html('Hang Up');
//     window.clearButton.addClass('hangup');
//   };

//   function changeHangUpIntoClear(){
//     if( window.clearButton.html('Hang Up') ){
//       window.clearButton.html('Clear');
//       window.clearButton.removeClass('hangup');
//     }
//   };

//   function enableReadOnlyInput(){
//     window.numberDisplayEl.attr('readonly','readonly');
//   }

//   function removeReadOnlyInput(){
//     window.numberDisplayEl.removeAttr('readonly');
//   }

//   function refreshInputArray(){
//     this.numberDisplayElContent = window.numberDisplayEl.val(); 
//     window.numberArray = this.numberDisplayElContent.split('');
//   };

//   window.dialpadButton.click(function(){
//     if( !$(dialpadCase).hasClass('deactive') ){
//       var content = $(this).html();
//       refreshInputArray();
//       window.numberArray.push(content);
//       compilePhoneNumber();
//       updateDisplay();
//       checkDisplayEl();
//       saveNumberDisplayEl();
//     }
//   });

//   window.skipButton.click(function(){
//     if (window.inCallModeActive == true){
//       holdNumber();
//     }
//   });

//   function checkDisplayEl(){
//     if( window.numberDisplayEl.val() != "" ){
//       addReadyToClear();
//       addReadyToCall();
//       enableActionButtons();
//     } else if ( window.numberDisplayEl.val() == "" ) {
//       removeReadyFromClear();
//       removeReadyFromCall();
//       disableActionButtons();
//     }
//   }

//   function disableActionButtons(){
//     window.actionButtons.addClass('deactive');
//   }

//   function enableActionButtons(){
//     window.actionButtons.removeClass('deactive');
//   }

//   function addReadyToCall(){
//     window.callButton.addClass('ready');
//   }

//   function removeReadyFromCall(){
//     window.callButton.removeClass('ready');
//   }

//   function addReadyToClear(){
//     window.clearButton.addClass('ready');
//   }

//   function removeReadyFromClear(){
//     window.clearButton.removeClass('ready');
//   }

//   function saveNumberDisplayEl(){
//     lastNumberDisplayEl = window.numberDisplayEl.val()
//   }

//   function displayLastSavedNumberDisplayEl(){
//     console.log('Last displayed element value: ' + lastNumberDisplayEl);
//   }

//   $('div#actions li.clear').click(function(){
//     enableCallButton();
//     enableDialButton();
//     clearPhoneNumber();
//     removeReadOnlyInput();
//     changeHangUpIntoClear();
//     updateDisplay();
//     checkDisplayEl();
//     disableInCallInterface();
//   });

//   $('div#actions li.call').click(function(){
//     callNumber();
//   });

//   $('.play').click(function(){
//     window.numberArray.append(this.val());
//     print window.numberArray;
//   })

// })(jQuery);

var phoneScreen = $("#phoneScreen"); 
if(phoneScreen.val())
{
  var phoneNumber = phoneScreen.val();
}else{
  var phoneNumber = "";
}
var delBtn = $("button#del"); var clrBtn = $("button#clr");
var numBtn = $("button.number"); var dialBtn = $("button#dial");

function updatePhoneNumber(newNumber) {
  phoneNumber = phoneNumber + newNumber;
  console.log(phoneNumber);
}
function deleteNumber() {
  phoneNumber = phoneNumber.slice(0,-1);
}
function clearNumber() {
  phoneNumber = "";
}
function printPhoneNumber() {
  $("#phoneScreen").innerHTML(phoneNumber);
}
function dialNumber() {
  alert("Dialing Number: " + phoneNumber);
}
numBtn.click(function() {
  var number = $(this).val();
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
