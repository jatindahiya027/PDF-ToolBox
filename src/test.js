// const fs = require('fs');
// const path = require('path');
// const fse = require('fs-extra');
// const sourceDirectory = path.join(__dirname, 'files/python'); // Replace with the path to your directory
// const destinationDirectory = 'C:/Users/91741/AppData/Local/pdf_toolbox/app-1.0.0/resources'; // Replace with the path to your destination directory

// // Ensure the destination directory exists
// fse.ensureDirSync(destinationDirectory);

// fs.readdir(sourceDirectory, (err, files) => {
//   if (err) {
//     console.error('Error reading source directory:', err);
//     return;
//   }

//   console.log('Copying files from source to destination directory:');
//   files.forEach((file, index) => {
//     const sourceFilePath = path.join(sourceDirectory, file);
//     const destinationFilePath = path.join(destinationDirectory, file);

//     // Use fs-extra's copySync to copy the file
//     try {
//       fse.copySync(sourceFilePath, destinationFilePath);
//       console.log(`Copied ${file}`);
//     } catch (copyError) {
//       console.error(`Error copying ${file}:`, copyError);
//     }
//   });
// });
