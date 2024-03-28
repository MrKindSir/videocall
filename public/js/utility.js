(function(window) {

   'use strict';

   function dashboard() {
      // self.util_button_text.innerHTML = '';
      // self.util_button.innerHTML = '';
      self.table_data.innerHTML = '';
      self.table_data.innerHTML = dashboard_layout;
      self.table_data.classList.remove('table-data');
      // self.util_button.innerHTML = 
      // `
      //    <i id="util_icon" class='bx bxs-search' ></i>
      //    <span id="util_button_text" class="text">Search For Tools</span>
      // `;

   }

   function popup(popup_section, modal_content, self, display) {
      self.modal_content.innerHTML = '';      
      self.modal_content.innerHTML = display;
      self.popup_section.classList.add("active");
   }

   // Function to remove specified parameters from the URL
   function removeURLParameters(parameterNames) {
      var url = window.location.href;
      
      parameterNames.forEach(function (param) {
         var regex = new RegExp('[?&]' + param + '(=([^&#]*)|&|#|$)');
         url = url.replace(regex, '');
      });

      // Remove any trailing ? or &
      url = url.replace(/[?&]$/, '');

      // Update the URL without reloading the page
      window.history.replaceState({}, document.title, url);
   }
 
   function utility() {
     // Start init
     this._init();
   }

   function delay() {
      return new Promise(resolve => setTimeout(resolve, 300));
   }
    
   async function delayed_log(json_item) {
      await delay();
      const systemHost = window.location.host;
      const boxWrapper = document.getElementById("table_data");

      if (json_item[0] == '0') {
         const box = document.createElement("div");
         box.innerHTML = json_item[2];
         boxWrapper.appendChild(box);
      }

      if (json_item[0] == '1') {
         const box = document.createElement("div");
         box.innerHTML = json_item[2]
         boxWrapper.appendChild(box);
      }

      if (json_item[0] == '3') {
         // alert();
         if (ut === 0) {
            ut++;
            boxWrapper.innerHTML = trash_layout;

         }
         const box = document.getElementById("tb");
         const boxi = document.createElement("tr");
         boxi.innerHTML = json_item[2];
         box.appendChild(boxi);
      }

      if (json_item[0] == '4') {
         const box = document.getElementById("rtu");
         box.value = json_item[1]
         // boxWrapper.appendChild(box);
      }
   }

   async function process_json_response(array) {      
      array.forEach(async (item) => {
         await delayed_log(item);
      });      
   }

   async function handle_request(requestType, formData) {
      return new Promise((resolve, reject) => {
         let email     = '',
         atoken        = '',
         cookie        = '',
         cookieValues  = '';         

         cookie = getCookie("fof");
         if (cookie === "") {
            // return;
         }
         else {
            cookieValues = JSON.parse(cookie);
            email = cookieValues['email'];
            atoken = cookieValues['token'];
         }

         if (requestType === "items" || requestType === "categories" || requestType === "contacts" || 
             requestType === "trash" || requestType === "account" || requestType === "images" ||
             requestType === "videos" || requestType === "texts" || requestType === "files" || 
             requestType === "productivity" || requestType === "socials") {
                  

            // const formData = new FormData();
            // formData.append('jsonData', myJSON);
            // formData.append('files[]', userFormData);

            // alert("Sticks");

            let xhr = new XMLHttpRequest();
            xhr.open("POST", "requests.php", true);
            xhr.onload = ()=>{
               if(xhr.readyState === XMLHttpRequest.DONE) {
                  if(xhr.status === 200) {
                     let data = xhr.response;
                     // alert(data);
                     console.log(data);
                     var json_data = new Array();
                     var trimmedJsonString = data.trim();
                     // alert(trimmedJsonString);
                     json_data = JSON.parse(trimmedJsonString);
                     process_json_response(json_data);

                     if (requestType === "account") {
                        rddata = data;
                     }

                     resolve(json_data);
                     
                  } else {
                     // Reject the Promise if there's an error
                     reject(xhr.status);
                  }
               }
            }
            // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(formData);
         }
         // }, 500);
      });
   }
   
 
   utility.prototype = {
 
      // this._init();
      _init: function() {
         var self = this;

         // this.rh = new Request_Handler();
 
         this.sbd = document.getElementById('sbd');
         this.sbst = document.getElementById('sbst');
         this.sbcc = document.getElementById('sbcc');
         this.sbccc = document.getElementById('sbccc');
         this.sbic = document.getElementById('sbic');
         this.sbtp = document.getElementById("sbtp");
         this.sbai = document.getElementById("sbai");
         this.sbc = document.getElementById("sbc");
         this.sbt = document.getElementById("sbt");
         this.util_button = document.getElementById("util_button");
         this.table_data = document.getElementById("table_data");
         this.util_button_text = document.getElementById("util_button_text");
         this.save_file = document.getElementById("save_file");
         this.file_name = document.getElementById("file-name");
         this.tbfa = document.getElementById('tbfa');         
         this.popup_section = document.getElementById("popupsection");
         this.modal_content = document.getElementById("modal-content");
         this.close_btn = document.getElementById("close-btn");
         this.call = document.getElementById("call");
 
         this._initEvents();

      },

      _image_generator_init: function() {

         var self = this;

      },

      _new_file_content_init: function() {

         var self = this;

         // text file
         this.textarea = document.querySelector("textarea"),
         this.fileNameInput = document.querySelector(".file-name input"),
         self.selectMenu = document.querySelector(".save-as select"),
         this.saveBtn = document.querySelector(".save-btn"),
         this.saveFile = document.getElementById('save_file');

      },

      _search_settings_init: function() {
         var self = this;
 
         this.li_search_zero = document.getElementById("li-search-zero");
         this.li_search_one = document.getElementById("li-search-one");
         this.li_search_two = document.getElementById("li-search-two");
         this.li_search_three = document.getElementById("li-search-three");
         this.li_search_four = document.getElementById("li-search-four");

      },

      _new_content_init: function() {
         var self = this;

         this.search_one = document.getElementById("search-one");
         this.search_two = document.getElementById("search-two");
         this.search_three = document.getElementById("search-three");
         this.search_four = document.getElementById("search-four");
         this.search_five = document.getElementById("search-five");

         // Get all article elements with the class "information"
         this.articles = document.getElementById('ds');

         this._newContentInitEvents();
      },
 
 
      // this._initEvents();
      _initEvents: function() {
 
         var self = this;        
         
         this.close_btn.addEventListener('click', () => {
            self.popup_section.classList.remove("active");
         });

         if (this.tbfa !== null){
         this.tbfa.addEventListener('click', () => {
            let obj = '';
            let imgElement = '';
            let jpgImageFileBlob = null;
            // Get the last part of the path

            // Get the pathname from the current URL
            const pathname = window.location.pathname;

            // Remove leading and trailing slashes, and then split the path by '/'
            const pathParts = pathname.replace(/^\/|\/$/g, '').split('/');

            const formData = new FormData();
            let email      = '',
            atoken         = '',
            cookie         = '',
            current_plan   = '',
            cookieValues   = '';         
         
            cookie = getCookie("fof");
            if (cookie === "") {
               // return;
            }
            else {
               cookieValues = JSON.parse(cookie);
               email = cookieValues['email'];
               atoken = cookieValues['token'];
               current_plan = cookieValues['current_plan'];
            }

            const lastPart = pathParts[pathParts.length - 1];

            if (lastPart === "new-file.php") {
               let fileName = document.getElementById("file-name").value;
               const textarea = document.querySelector("textarea");

               if (fileName === '') {
                  let display = 
                     `
                     <!-- partial:index.partial.html -->
                     <section class="page-contain">
                     <a href="#" class="data-card">
                        <h3>270</h3>
                        <h4>Care Facilities</h4>
                        <p>Aenean lacinia bibendum nulla sed consectetur.</p>
                        <span class="link-text">
                           View All Providers
                        </span>
                     </a>                  
                     </section>
                     <!-- partial -->
                     `
                  popup(this.popup_section, this.modal_content, self, display);
                  return;
               }

               obj = {
                  request:       'new-file',
                  sub_request:   'addItems',
                  plan:          current_plan,
                  email,         email,
                  token:         atoken,                  
                  tool:          'new_file',
                  file_type:     '.txt',
                  images:        '',
                  file_name:     fileName,
                  text:          textarea.value
               };

               const myJSON = JSON.stringify(obj);            
               formData.append('jsonData', myJSON);
               // formData.append('files[]', null, null);
            }

            if (lastPart === "image-generator.php") {
               obj = {
                  request:       'image-generator',
                  sub_request:   'addItems',
                  plan:          current_plan,
                  email,         email,
                  token:         atoken,                  
                  tool:          lastPart,
                  file_type:     '.txt',
                  images:        '',
                  file_name:     '',
                  text:          '',
                  prompt:        userPrompt,
                  quantity:      userImgQuantity
               };
            }

            if (lastPart === "typing-test.php") {
               obj = {
                  request: '     typing-test',
                  sub_request:   'addItems',
                  plan:          current_plan,
                  email,         email,
                  token:         atoken,                  
                  tool:          lastPart,
                  file_type:     '.txt',
                  images:        '',
                  file_name:     fileName,
                  text:          textarea.value,
                  mistakes:      mistakeTag,
                  wpm:           wpmTag,
                  time_left:     time_left,
                  cpm:           cpmTag // characters per minute
               };
            }

            if (lastPart === "colour-generator.php") {
               const colors = []; // Array to hold color values

               // Generating and saving color values
               container.querySelectorAll(".color").forEach(colorElement => {
                   const hexValue = colorElement.querySelector(".hex-value").innerText;
                   colors.push(hexValue);
               });
           
               // Converting the colors array to JSON string
               const jsonColors = JSON.stringify({ colors: colors });
           
               // Saving the JSON string or performing further actions
               // For demonstration, let's log the JSON string
               console.log("JSON Colors:", jsonColors);
               
               obj = {
                  request: 'colour-generator',
                  sub_request: 'addItems',
                  plan: current_plan,
                  email, email,
                  token: atoken,                  
                  tool: lastPart,
                  file_type: '.txt',
                  images: '',
                  colours: jsonColors,
                  // text: textarea.value
               };
            }


            if (lastPart === "video-sharing.php") {
               obj = {
                  request: 'video-sharing',
                  sub_request: 'add',
                  plan: current_plan,
                  email, email,
                  token: atoken,                  
                  tool: lastPart,
                  file_type: '.txt',
                  images: '',
                  file_name: fileName,
                  text: textarea.value
               };
            }

            if (lastPart === "png-to-jpg.php"      || lastPart === "jpg-to-png.php" || 
                lastPart === "remove-password.php") {

               self.table_data.innerHTML = ``;
               self.util_button_text.innerHTML = '';
            
               imgElement = document.querySelector('.drag-area img');            
      
               for (let i = 0; i < fileInput.files.length; i++) {
                  isMultiple = true;
                  alert("PNGJ");
         
                  const base64ImageData = imgElement.src.split(',')[1]; // Extract Base64 data
         
                  // Convert the Base64 data to a Blob
                  const jpgImageFileBlob = base64toBlob(base64ImageData, 'image/png');
         
                  // Validate
                  if (jpgImageFileBlob.type.includes('image/png')) {
                     const converter = new JpgToPngConvertor(jpgImageFileBlob);
                     converter.process();
                  }
                  else {
                     return;
                  }
         
                  obj = {
                     request: lastPart,
                     sub_request: 'add',
                     plan: current_plan,
                     email, email,
                     token: atoken,                  
                     tool: lastPart,
                     file_type: '',
                     images: '',
                     file_name: '',
                     text: ''
                  };

               }
            }

            // formData.append('files[]', jpgImageFileBlob, fileInput.files[i].name);
            // formData.append('files[]', null, null);
         
            let isEmpty = true;
         
            for (let pair of formData.entries()) {
               isEmpty = false;
               break; // Exit loop once we find at least one entry
            }
         
            if (!isEmpty) {
               console.log("FormData is not empty.");
               console.log("FormData size:", formData.size);
               for (let pair of formData.entries()) {
                  console.log(pair[0] + ', ' + pair[1]);
               }
            } else {
               console.log("FormData is empty.");
            }
         
            // formData.append('files', fileInput.files[i]);
            try {
               const response = handle_request('images', formData);
               console.log('Response from server:', response);
            } catch (error) {
               console.error('Error:', error);
            }
      
            // isMultiple = false;
         });
         }

         if (this.tbfa !== null) {
            this.tbfa.removeEventListener('click', function() {

            });
         }
            

         this.sbd.addEventListener('click', function() {
            // self.table_data.innerHTML = '';
            // dashboard();
            // removeURLParameters(['page', 't']);
            // Assuming you have values for page, nf, and t
            // var pageValue = 'nf';
            // var tValue = 'sbd';

            toolsl('Tools', '');

            // Construct the URL with parameters
            // var newURL = window.location.href.split('?')[0] + `?page=${pageValue}&t=${tValue}`;
            // Update the URL
            // window.history.pushState({ path: newURL }, '', newURL);
         }); 

         this.sbccc.addEventListener('click', function() {
            // Get the current URL
            var url = '';
            var currentUrl = window.location.href;

            // Check if the current URL is localhost
            var isLocalhost = currentUrl.includes("localhost");

            // Check if the current URL starts with "https://"
            var isSecure = currentUrl.startsWith("https://");

            // Output the results
            if (isLocalhost) {
            console.log("Current URL is localhost.");
            // Wait for the DOM content to be fully loaded
            // document.addEventListener("DOMContentLoaded", function() {
            //    // Get the link element by its ID
            //    var link = document.getElementById("dashboard");
               
            //    // Check if the link element exists
            //    if (link) {
                  // Set the new href attribute value
                  url = "http://localhost/fixorfix/";
               // } else {
               //    console.log("Link element not found.");
               // }
            // });
            } else if (isSecure) {
            // console.log("Current URL is secure (https://).");
            //    // Wait for the DOM content to be fully loaded
            //    document.addEventListener("DOMContentLoaded", function() {
            //       // Get the link element by its ID
            //       var link = document.getElementById("dashboard");
                  
            //       // Check if the link element exists
            //       if (link) {
                     // Set the new href attribute value
                     url = "https://fixorfix.com/";
               //    } else {
               //       console.log("Link element not found.");
               //    }
               // });
            } else {
            console.log("Current URL is neither localhost nor secure.");
            }
            window.location.href = url;

         });
 
         this.sbcc.addEventListener('click', function() {
            // Get the current URL
            var url = '';
            var currentUrl = window.location.href;

            // Check if the current URL is localhost
            var isLocalhost = currentUrl.includes("localhost");

            // Check if the current URL starts with "https://"
            var isSecure = currentUrl.startsWith("https://");

            // Output the results
            if (isLocalhost) {
            console.log("Current URL is localhost.");
            // Wait for the DOM content to be fully loaded
            // document.addEventListener("DOMContentLoaded", function() {
            //    // Get the link element by its ID
            //    var link = document.getElementById("dashboard");
               
            //    // Check if the link element exists
            //    if (link) {
                  // Set the new href attribute value
                  url = "http://localhost/fixorfix/dashboard.php";
               // } else {
               //    console.log("Link element not found.");
               // }
            // });
            } else if (isSecure) {
            // console.log("Current URL is secure (https://).");
            //    // Wait for the DOM content to be fully loaded
            //    document.addEventListener("DOMContentLoaded", function() {
            //       // Get the link element by its ID
            //       var link = document.getElementById("dashboard");
                  
            //       // Check if the link element exists
            //       if (link) {
                     // Set the new href attribute value
                     url = "https://fixorfix.com/dashboard.php/";
               //    } else {
               //       console.log("Link element not found.");
               //    }
               // });
            } else {
            console.log("Current URL is neither localhost nor secure.");
            }
            window.location.href = url;

         });

         if (this.sbtp !== null) {
            this.sbtp.addEventListener('click', function() {
               self.table_data.innerHTML = '';
               removeURLParameters(['page', 't']);
               // Assuming you have values for page, nf, and t
               var pageValue = 'nf';
               var tValue = 'sbtp';

               // Construct the URL with parameters
               var newURL = window.location.href.split('?')[0] + `?page=${pageValue}&t=${tValue}`;
               // Update the URL
               window.history.pushState({ path: newURL }, '', newURL);

               // Get the pathname from the current URL
               const pathname = window.location.pathname;

               // Remove leading and trailing slashes, and then split the path by '/'
               const pathParts = pathname.replace(/^\/|\/$/g, '').split('/');

               // Get the last part of the path
               const lastPart = pathParts[pathParts.length - 1];

               let tool = '';

               if (lastPart === "png-to-jpg.php") {

               tool = 'png_to_jpg';
               }

               const formData = new FormData();
                  
               let email     = '',
               atoken        = '',
               cookie        = '',
               current_plan = '',
               note_id = 0,
               current_page = 1,
               cookieValues  = '';         
      
               cookie = getCookie("fof");
               if (cookie === "") {
                  // return;
               }
               else {
                  cookieValues = JSON.parse(cookie);
                  email = cookieValues['email'];
                  atoken = cookieValues['token'];
                  current_plan = cookieValues['current_plan'];
               }
            
               let obj = {
                  request: 'items',
                  sub_request: 'load',
                  email: email,
                  token: atoken,
                  note_id: note_id,
                  plan: current_plan,
                  current_page: current_page,
                  tool: 'new_file',
                  text:null,
                  image: null
               };
         
               const myJSON = JSON.stringify(obj);
               
               formData.append('jsonData', myJSON);
               formData.append('files[]', null);

               let isEmpty = true;

               for (let pair of formData.entries()) {
                  isEmpty = false;
                  break; // Exit loop once we find at least one entry
               }

               if (!isEmpty) {
                  console.log("FormData is not empty.");
                  console.log("FormData size:", formData.size);
                  for (let pair of formData.entries()) {
                     console.log(pair[0] + ', ' + pair[1]);
                  }
               } else {
                  console.log("FormData is empty.");
               }
               
               // Call handle_request with the desired parameters
               self.rh.handle_request('categories', formData);
            });
         }

         if (!this.save_file == null) {
            this.save_file.addEventListener('click', function() {
               let fname = self.file_name.value;
               if (fname.length === 0) {
                  alert("File Name Empty")
               } else {               
                  // Get the last part of the path
                  const lastPart = pathParts[pathParts.length - 1];

                  let tool = '';

                  if (lastPart === "png-toojpg.php") {

                  tool = 'png_to_jpg';
                  }

                  self.rh.handle_request('items', 'save', 0, tool, fname, "");
               }
            });
         }      
 
         // Initialize functions on window load
         window.onload = function() {

            // Function to get URL parameter by name
            function getParameterByName(name, url) {
               if (!url) url = window.location.href;
               name = name.replace(/[[]]/g, "\\$&");
               var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                  results = regex.exec(url);
               if (!results) return null;
               if (!results[2]) return '';
               return decodeURIComponent(results[2].replace(/\+/g, " "));
            }

            // Read parameters from the URL
            var pageValue = getParameterByName('page');
            var nfValue = getParameterByName('nf');
            var tValue = getParameterByName('t');

            if (pageValue == 'nf') {
               if (tValue == 'sbd') {
                  self.sbd.click();
               }

               if (tValue == 'sbst') {
                  self.sbst.click();
               }

               if (tValue == 'sbcc') {
                  self.sbcc.click();
               }

               if (tValue == 'sbc') {
                  self.sbc.click();
               }

               if (tValue == 'sbic') {
                  self.sbic.click();
               }

               if (tValue == 'sbai') {
                  self.sbai.click();
               }

               if (tValue == 'sbt') {
                  self.sbt.click();
               }

            }            
 
         };
      },

      // this._initEvents();
      _newContentInitEvents: function() {
         
         var self = this;         
      },

      _newFileContentInitEvents: function() {
         
         var self = this;

         if (this.selectMenu !== null) {
            // selectMenu.addEventListener("change", () => {
            //    const selectedFormat = selectMenu.options[selectMenu.selectedIndex].text;
            //    saveBtn.innerText = `Save As ${selectedFormat.split(" ")[0]} File`;
            // });
         }

         if (this.saveBtn !== null) {
            this.saveBtn.addEventListener("click", () => {
               const blob = new Blob([textarea.value], {type: selectMenu.value});
               const fileUrl = URL.createObjectURL(blob);
               const link = document.createElement("a");
               link.download = fileNameInput.value;
               link.href = fileUrl;
               link.click();
            });
         }

         if (this.saveFile !== null) {
            this.saveFile.addEventListener("click", () => {               
               if (fileNameInput !== null) {
                     const formData = new FormData();
                     let email      = '',
                     atoken         = '',
                     cookie         = '',
                     current_plan   = '',
                     fileName       = document.getElementById("file-name").value,
                     cookieValues   = '';        
                     
                     if (fileName === '') {
                        alert("Empty Name");
                        return;
                     }
            
                     cookie = getCookie("fof");
                     if (cookie === "") {
                        // return;
                     }
                     else {
                        cookieValues = JSON.parse(cookie);
                        email = cookieValues['email'];
                        atoken = cookieValues['token'];
                        current_plan = cookieValues['current_plan'];
                     }
                     let obj = {
                        request: 'texts',
                        sub_request: 'add',
                        plan: current_plan,
                        email, email,
                        token: atoken,
                        tool: 'new_file',
                        name: fileName,
                        text: textarea.value,
                        image: null
                  };
               
                  const myJSON = JSON.stringify(obj);
                  
                  formData.append('jsonData', myJSON);
                  formData.append('files[]', null);
            
                  let isEmpty = true;
            
                     for (let pair of formData.entries()) {
                        isEmpty = false;
                        break; // Exit loop once we find at least one entry
                     }
            
                     if (!isEmpty) {
                        console.log("FormData is not empty.");
                        console.log("FormData size:", formData.size);
                        for (let pair of formData.entries()) {
                           console.log(pair[0] + ', ' + pair[1]);
                        }
                                       } else {
                        console.log("FormData is empty.");
                     }
                     // formData.append('files', fileInput.files[i]);
                     try {
                        let rh = new Request_Handler();
                        const response = rh.handle_request('texts', formData);
                        // console.log('Response from server:', response);
                     } catch (error) {
                        console.error('Error:', error);
                     }
            
               }
               else {
                     let section = document.querySelector("section");
                     let overlay = document.querySelector(".overlay");
                     let showBtn = document.querySelector(".show-modal");
                     let content = document.querySelector(".modal-content");
                     let closeBtn = document.querySelector(".close-btn");
            
                     section.classList.add("active");
                     content.innerHTML = '';
                     content.innerHTML = 
                     `
                        <h2>Enter File Name</h2>
                     `;
            
                     closeBtn.addEventListener("click", () =>
                        section.classList.remove("active")
                     );
               }
            });
         }
      },

      // this._initEvents();
      _searchSettingsInitEvents: function() {
         
         var self = this;

         // search
         self.li_search_zero.addEventListener('click', () => {
            self.search_one.checked = !self.search_one.checked;
         }, false);

      }
      
 
   };
 
   // add to the global namespace
   window.utility = utility;
 
})(window);
 
// Init main
new utility();
 