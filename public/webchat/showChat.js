$(document).ready(function() {

    $('body').prepend('<div id="chatpopoverlay" class="chatpopoverlay"><div class="popup"><a style="text-decoration:none" href="#"><h2>Chat with Us!</h2></a><div aria-hidden="true" class="chatdiv"><svg color="inherit" class="chatsvg" viewBox="0 0 32 32"><path fill="#FFFFFF" d="M12.63,26.46H8.83a6.61,6.61,0,0,1-6.65-6.07,89.05,89.05,0,0,1,0-11.2A6.5,6.5,0,0,1,8.23,3.25a121.62,121.62,0,0,1,15.51,0A6.51,6.51,0,0,1,29.8,9.19a77.53,77.53,0,0,1,0,11.2,6.61,6.61,0,0,1-6.66,6.07H19.48L12.63,31V26.46"></path><path fill="#01916d" d="M19.57,21.68h3.67a2.08,2.08,0,0,0,2.11-1.81,89.86,89.86,0,0,0,0-10.38,1.9,1.9,0,0,0-1.84-1.74,113.15,113.15,0,0,0-15,0A1.9,1.9,0,0,0,6.71,9.49a74.92,74.92,0,0,0-.06,10.38,2,2,0,0,0,2.1,1.81h3.81V26.5Z" class="chatsvgani"></path></svg><div class="chatsvgbrd"></div></div></div></div></div>');

      $('.popup').click(function(){
        //$(_genesys.widgets.bus.command('WebChat.open',getAdvancedConfig()));
        $(customPlugin.command('WebChat.open',getAdvancedConfig()));
          $('.chatpopoverlay, .popup').fadeOut(100);
    });
});


function getAdvancedConfigProactive() {
  return {
    form: {
      autoSubmit: false,
      name: '',
      contact: '',
      email: '',
                  serial: '',
      opt: ''
    },

              formJSON: {
      wrapper: '<table>Hi, how can i help you? </br></br>Welcome to FUJIFILM Business Innovation Australia Live Chat.</br> Please enter your  details below: </table> ',
                  inputs: [
                      {
                          id: 'cx_webchat_form_firstname',
                          name: 'customername',
                          maxlength: 100,
                          placeholder: 'Required',
                          value:decodeToken().firstName,
                          label: 'Name',
                          //validateWhileTyping: true,
          validate: function (event, form, input, label, $, CXBus, Common) {
            if(input && input.val()) { // to validate some input exits
              return true;	// validation passed
            }else{
                                  return false;	// no input exists, validation failed
            }
          }
                      },	
                      {
                          id: "cx_webchat_form_phone_number",
                          name: "phoneNumber",
                          maxlength: '14',
                          placeholder: "Required",
                          value:decodeToken().phoneNumber,
                          label: "Phone number",
           validateWhileTyping: true,
                          onkeypress: function (event) {
                              // To allow only number inputs
                              return (event.charCode >= 48 && event.charCode <= 57) || (event.charCode == 43)
                          },
                        onpaste: function (event) {
                              // To allow only number inputs - stop paste
                              return (event.charCode >= 48 && event.charCode <= 57) || (event.charCode == 43)
                          },
                          validate: function (event, form, input, label, $, CXBus, Common) {
                              if (input && input.val()) { // to validate some input exits 
              return true;	// validation passed
            }else{
                                  return false;	// no input exists, validation failed
            }
          }
                      },
        {
          id: 'cx_webchat_form_email',
          name: "email",
          maxlength: "100",
          placeholder: "Optional",
          label: "Email"
        },
        {
          id: 'cx_webchat_form_serial',
          name: 'serial',
          maxlength: '100',
          placeholder: 'Optional',
          label: 'Serial Number'
                      },
                      {
                          id: "cx_webchat_form_category",
                          type: "select",
                          name: "opt",
                          label: "Request Type",
                          options: [{ text: "Please Select", value: "0" },{ text: "Product Sales Enquiry", value: "Sales" },{ text: "Technical hardware", value: "Technical hardware" }, { text: "Technical software", value: "Technical software" }, { text: "Place an order", value: "Place an order" }, { text: "General Inquiries", value: "General Inquiries" }],
          validate: function (event, form, input, label, $, CXBus, Common) {
                              if (input && (input.val() != 0)) { // to validate some input exits 
              return true;	// validation passed
            }else{
                                  return false;	// no input exists, validation failed
            }
          }

                      },
        {
          id: 'cx_webchat_form_trigger',
          type: 'hidden',
          value: "Proactive",
        },
      ]
    }
  };
}




function getAdvancedConfig() {
  return {
    form: {
      autoSubmit: false,
      name: '',
      contact: '',
      email: '',
                  serial: '',
      opt: ''
    },

              formJSON: {
      wrapper: '<table>Welcome to FUJIFILM Business Innovation Australia Live Chat.</br> Please enter your  details below: </table> ',
                  inputs: [
                      {
                          id: 'cx_webchat_form_firstname',
                          name: 'customername',
                          maxlength: 100,
                          value: decodeToken().firstName,
                          placeholder: 'Required',
                          label: 'Name',
                          //validateWhileTyping: true,
          validate: function (event, form, input, label, $, CXBus, Common) {
            if(input && input.val()) { // to validate some input exits
              return true;	// validation passed
            }else{
                                  return false;	// no input exists, validation failed
            }
          }
                      },	
                      {
                          id: "cx_webchat_form_phone_number",
                          name: "phoneNumber",
                          maxlength: '14',
                          placeholder: "Required",
                          value: decodeToken().phoneNumber,
                          label: "Phone number",
           validateWhileTyping: true,
                          onkeypress: function (event) {
                              // To allow only number inputs
                              return (event.charCode >= 48 && event.charCode <= 57) || (event.charCode == 43)
                          },
                        onpaste: function (event) {
                              // To allow only number inputs - stop paste
                              return (event.charCode >= 48 && event.charCode <= 57) || (event.charCode == 43)
                          },
                          validate: function (event, form, input, label, $, CXBus, Common) {
                              if (input && input.val()) { // to validate some input exits 
              return true;	// validation passed
            }else{
                                  return false;	// no input exists, validation failed
            }
          }
                      },
        {
          id: 'cx_webchat_form_email',
          name: "email",
          value : decodeToken().emailAddress,
          maxlength: "100",
          placeholder: "Optional",
          label: "Email"
        },
        {
          id: 'cx_webchat_form_serial',
          name: 'serial',
          maxlength: '100',
          placeholder: 'Optional',
          label: 'Serial Number'
                      },
                      {
                          id: "cx_webchat_form_category",
                          type: "select",
                          name: "opt",
                          label: "Request Type",
                          options: [{ text: "Please Select", value: "0" },{ text: "Product Sales Enquiry", value: "Sales" },{ text: "Technical hardware", value: "Technical hardware" }, { text: "Technical software", value: "Technical software" }, { text: "Place an order", value: "Place an order" }, { text: "General Inquiries", value: "General Inquiries" }],
          validate: function (event, form, input, label, $, CXBus, Common) {
                              if (input && (input.val() != 0)) { // to validate some input exits 
              return true;	// validation passed
            }else{
                                  return false;	// no input exists, validation failed
            }
          }

                      },
        {
          id: 'cx_webchat_form_trigger',
          type: 'hidden',
          value: "Customer",
        },
      ]
    }
  };
}

function decodeToken() {
    const tokenString = localStorage.getItem('token');
    if (tokenString === null)
      return null;
    else
      return JSON.parse(decodeURIComponent(atob(tokenString)));
  }