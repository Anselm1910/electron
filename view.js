const $ = require ('jquery');
const fs = require ('fs');
const filename = ('mycontacts');
let sno = 0;


$('#btn-submit').onclick(function(){
 let name = $('#name').val();
 let email = $('#email').val();

 fs.appendFile('mycontacts', name +',' + email + '\n',function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
});


function addEntry(name, email) {
    if(name && email) {
       sno++
       let updateString = '<tr><td>'+ sno + '</td><td>'+ name +'</td><td>' + email +'</td></tr>'
       $('#contact-table').append(updateString)
    }
 }

function loadAndDisplayContacts() {  
   
    //Check if file exists
    if(fs.existsSync(filename)) {
       let data = fs.readFileSync(filename, 'utf8').split('\n')
       
       data.forEach((contact, index) => {
          let [ name, email ] = contact.split(',')
          addEntry(name, email)
       })
    
    } else {
       console.log("File Doesn\'t Exist. Creating new file.")
       fs.writeFile(filename, '', (err) => {
          if(err)
             console.log(err)
       })
    }
 }

 loadAndDisplayContacts()