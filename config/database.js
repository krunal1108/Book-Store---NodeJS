const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://krunalkotadiya2004:mongoISMYFAVmaroon%4025@cluster0.cprjc.mongodb.net/bookStoreDB')
  .then(() => console.log('Database is Connected..')).catch((err)=>{
    console.log('Error',err);
  });

