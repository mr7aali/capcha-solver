 const T = require("tesseract.js");

const result =T.recognize('./Captcha1.png','eng',{
    tessedit_char_whitelist: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
  })
  .then(out=>{
    console.log(out.data.text.trim());
  })

//   console.log(result.text.trim());
   

