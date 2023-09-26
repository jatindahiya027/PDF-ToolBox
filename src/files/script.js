const { PythonShell } = require("python-shell");
const path = require('path');

function jpgtopdf(){
  
  if(filePaths.length === 0){
     
    return;
  }
  showPopup();
    const options = {
      mode: "text",
      pythonPath: "C:/ProgramData/miniconda3/python.exe", // Replace with the path to your Python executable if necessary
      scriptPath: "C:/Users/91741/AppData/Local/pdf_toolbox/app-1.0.0/resources",
      args: [JSON.stringify(filePaths), "C:/Users/91741/Downloads/combined.pdf"],
    };
  
    let successMessageReceived = false; // To track if success message is received
    PythonShell.run("jpg2pdf.py", options)
      .then((results) => {
          console.log(results)
          closePopup();
          showPopupsuccess()
      })
      .catch((err) => {
        console.error("Error:", err);
        closePopup();
        showPopuperror()
      });
}
function epubtopdf(){
  if(filePaths.length === 0){
     
    return;
  }
  showPopup();
   
    for( pdfpath in filePaths ){
    const options = {
        mode: "text",
        pythonPath: "C:/ProgramData/miniconda3/python.exe", // Replace with the path to your Python executable if necessary
        scriptPath: "C:/Users/91741/AppData/Local/pdf_toolbox/app-1.0.0/resources",
        args: [filePaths[pdfpath], "C:/Users/91741/Downloads/epub.pdf"],
      };
    
      let successMessageReceived = false; // To track if success message is received
    
      PythonShell.run("epubtopdf.py", options)
        .then((results) => {
            console.log(results)
            closePopup();
          showPopupsuccess()
        })
        .catch((err) => {
          console.error("Error:", err);
          closePopup();
        showPopuperror()
        });
    }

}
function exceltopdf(){
  if(filePaths.length === 0){
     
    return;
  }
  showPopup();
    for( pdfpath in filePaths ){
    const options = {
        mode: "text",
        pythonPath: "C:/ProgramData/miniconda3/python.exe", // Replace with the path to your Python executable if necessary
        scriptPath: "C:/Users/91741/AppData/Local/pdf_toolbox/app-1.0.0/resources",
        args: [filePaths[pdfpath], "C:/Users/91741/Downloads/xls.pdf"],
      };
    
      let successMessageReceived = false; // To track if success message is received
    
      PythonShell.run("exceltopdf.py", options)
        .then((results) => {
            console.log(results)
            closePopup();
          showPopupsuccess()
        })
        .catch((err) => {
          console.error("Error:", err);
          closePopup();
        showPopuperror()
        });
}
}
function mergepdf(){
  if(filePaths.length === 0){
     
    return;
  }
  showPopup();
    const options = {
      mode: "text",
      pythonPath: "C:/ProgramData/miniconda3/python.exe", // Replace with the path to your Python executable if necessary
      scriptPath: "C:/Users/91741/AppData/Local/pdf_toolbox/app-1.0.0/resources",
      args: [JSON.stringify(filePaths), "C:/Users/91741/Downloads/merge.pdf"],
    };
  
    let successMessageReceived = false; // To track if success message is received
  
    PythonShell.run("mergepdf.py", options)
      .then((results) => {
          console.log(results)
          closePopup();
          showPopupsuccess()
      })
      .catch((err) => {
        console.error("Error:", err);
        closePopup();
        showPopuperror()
      });
}
function pdftodocx(){
  if(filePaths.length === 0){
     
    return;
  }
  showPopup();
    for( pdfpath in filePaths ){
        const options = {
            mode: "text",
            pythonPath: "C:/ProgramData/miniconda3/python.exe", // Replace with the path to your Python executable if necessary
            scriptPath: "C:/Users/91741/AppData/Local/pdf_toolbox/app-1.0.0/resources",
            args: [filePaths[pdfpath], "C:/Users/91741/Downloads/output.docx"],
          };
        
          let successMessageReceived = false; // To track if success message is received
        
          PythonShell.run("pdftodocx.py", options)
            .then((results) => {
                console.log(results)
                closePopup();
          showPopupsuccess()
            })
            .catch((err) => {
              console.error("Error:", err);
              closePopup();
        showPopuperror()
            });
    }
}
function pdftoexcel(){
  if(filePaths.length === 0){
     
    return;
  }
  showPopup();
    for( pdfpath in filePaths ){
    const options = {
        mode: "text",
        pythonPath: "C:/ProgramData/miniconda3/python.exe", // Replace with the path to your Python executable if necessary
        scriptPath: "C:/Users/91741/AppData/Local/pdf_toolbox/app-1.0.0/resources",
        args: [filePaths[pdfpath], "C:/Users/91741/Downloads/pdf.csv"],
      };
    
      let successMessageReceived = false; // To track if success message is received
    
      PythonShell.run("pdftoexcel.py", options)
        .then((results) => {
            console.log(results)
            closePopup();
          showPopupsuccess()
        })
        .catch((err) => {
          console.error("Error:", err);
          closePopup();
        showPopuperror()
        });
}
}
function pdftoimage(){
  if(filePaths.length === 0){
     
    return;
  }
  showPopup();
    for( pdfpath in filePaths ){
        // console.log()
    const options = {
        mode: "text",
        pythonPath: "C:/ProgramData/miniconda3/python.exe", // Replace with the path to your Python executable if necessary
        scriptPath: "C:/Users/91741/AppData/Local/pdf_toolbox/app-1.0.0/resources",
        args: [filePaths[pdfpath], "C:/Users/91741/Downloads/ok/"],
      };
    
      let successMessageReceived = false; // To track if success message is received
      console.log(options)
      PythonShell.run("pdftoimg.py", options)
        .then((results) => {
            console.log(results)
            closePopup();
          showPopupsuccess()
        })
        .catch((err) => {
          console.error("Error:", err);
          closePopup();
        showPopuperror()
        });
    }
}
function lockpdf(){
  if(filePaths.length === 0){
     
    return;
  }
    const pass = document.getElementById("password");
    showPopup();
    for( pdfpath in filePaths ){
        
        const options = {
            mode: "text",
            pythonPath: "C:/ProgramData/miniconda3/python.exe", // Replace with the path to your Python executable if necessary
            scriptPath: "C:/Users/91741/AppData/Local/pdf_toolbox/app-1.0.0/resources",
            args: [filePaths[pdfpath], "C:/Users/91741/Downloads/pass.pdf", pass.value],
          };
        
          let successMessageReceived = false; // To track if success message is received
        
          PythonShell.run("addpass.py", options)
            .then((results) => {
                console.log(results)
                closePopup();
          showPopupsuccess()
            })
            .catch((err) => {
              console.error("Error:", err);
              closePopup();
        showPopuperror()
            });
    }
}
function unlockpdf(){
  if(filePaths.length === 0){
     
    return;
  }
    const pass = document.getElementById("password");
    showPopup();
    for( pdfpath in filePaths ){
       
        const options = {
            mode: "text",
            pythonPath: "C:/ProgramData/miniconda3/python.exe", // Replace with the path to your Python executable if necessary
            scriptPath: "C:/Users/91741/AppData/Local/pdf_toolbox/app-1.0.0/resources",
            args: [filePaths[pdfpath], "C:/Users/91741/Downloads/unpass.pdf", pass.value],
          };
        
          let successMessageReceived = false; // To track if success message is received
        
          PythonShell.run("removepass.py", options)
            .then((results) => {
                console.log(results)
                closePopup();
          showPopupsuccess()
            })
            .catch((err) => {
              console.error("Error:", err);
              closePopup();
        showPopuperror()
            });
    }
}
function compresspdf(){
  if(filePaths.length === 0){
     
    return;
  }
  showPopup();
    const val = document.getElementById("level")
    // console.log(val.value)
    for( pdfpath in filePaths ){
        // console.log()
        const options = {
            mode: "text",
            pythonPath: "C:/ProgramData/miniconda3/python.exe", // Replace with the path to your Python executable if necessary
            scriptPath: "C:/Users/91741/AppData/Local/pdf_toolbox/app-1.0.0/resources",
            args: [filePaths[pdfpath], "C:/Users/91741/Downloads/compress.pdf", val.value],
          };
        
          let successMessageReceived = false; // To track if success message is received
        
          PythonShell.run("compresspdf.py", options)
            .then((results) => {
                console.log(results)
                closePopup();
          showPopupsuccess()
            })
            .catch((err) => {
              console.error("Error:", err);
              closePopup();
        showPopuperror()
            });
    }
}


function showPopup() {
  // Create the popup container element
  var popupContainer = document.createElement('div');
  popupContainer.classList.add('popup-container');

  // Create the loader
  var loader = document.createElement('div');
  loader.classList.add('lds-spinner');
  loader.innerHTML = '<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';

  // Create the "Processing..." text
  var processingText = document.createElement('div');
  processingText.classList.add('popup-text');
  processingText.textContent = 'Processing...';

  // Create the OK button
  // var okButton = document.createElement('button');
  // okButton.classList.add('ok-button');
  // okButton.textContent = 'OK';
  // okButton.addEventListener('click', closePopup);

  // Append loader, text, and button to the popup container
  popupContainer.appendChild(loader);
  popupContainer.appendChild(processingText);
  // popupContainer.appendChild(okButton);

  // Append the popup container to the body
  document.body.appendChild(popupContainer);

  // Display the popup
  popupContainer.style.display = 'flex';
  popupContainer.style.flexDirection='column';
}

function showPopupsuccess() {
// Create the popup container element
var popupContainer = document.createElement('div');
popupContainer.classList.add('popup-container');

// Create the loader
var loader = document.createElement('div');

loader.innerHTML = '<p>Sucessfully completed the task</p>';

// Create the "Processing..." text
// var processingText = document.createElement('div');
// processingText.classList.add('popup-text');
// processingText.textContent = 'Processing...';

// Create the OK button
var okButton = document.createElement('button');
okButton.classList.add('ok-button');
okButton.textContent = 'OK';
okButton.style.width="100px"
okButton.style.height="40px"
okButton.style.borderRadius="10px"
okButton.style.border="none"
okButton.style.fontWeight="500"
okButton.style.cursor="pointer"
okButton.addEventListener('click', closePopup);

// Append loader, text, and button to the popup container
popupContainer.appendChild(loader);
// popupContainer.appendChild(processingText);
popupContainer.appendChild(okButton);

// Append the popup container to the body
document.body.appendChild(popupContainer);

// Display the popup
popupContainer.style.display = 'flex';
popupContainer.style.flexDirection='column';
}
function showPopuperror() {
  // Create the popup container element
  var popupContainer = document.createElement('div');
  popupContainer.classList.add('popup-container');

  // Create the loader
  var loader = document.createElement('div');
  
  loader.innerHTML = '<p>Error accoured</p>';

  // Create the "Processing..." text
  // var processingText = document.createElement('div');
  // processingText.classList.add('popup-text');
  // processingText.textContent = 'Processing...';

  // Create the OK button
  var okButton = document.createElement('button');
  okButton.classList.add('ok-button');
okButton.textContent = 'OK';
okButton.style.width="100px"
okButton.style.height="40px"
okButton.style.borderRadius="10px"
okButton.style.border="none"
okButton.style.fontWeight="500"
okButton.style.cursor="pointer"
  okButton.addEventListener('click', closePopup);

  // Append loader, text, and button to the popup container
  popupContainer.appendChild(loader);
  // popupContainer.appendChild(processingText);
  popupContainer.appendChild(okButton);

  // Append the popup container to the body
  document.body.appendChild(popupContainer);

  // Display the popup
  popupContainer.style.display = 'flex';
  popupContainer.style.flexDirection='column';

}
// Function to close the popup
function closePopup() {
  var popupContainer = document.querySelector('.popup-container');
  if (popupContainer) {
      document.body.removeChild(popupContainer);
  }
}