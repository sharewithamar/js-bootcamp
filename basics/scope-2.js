//Global
//Variables can be refined in another scope !!
// leaked Global - when we assign a valyue to a variable , but that variable was never explicity defined in that scope it will leak to global

//let name = 'Amar';
if (true) {
  // let name = 'Rajasekaran'; //Variable Shadowing
  if (true) {
    let name = 'Ertugrul';
    console.log(name);
  }
}

if (true) {
  console.log(name);
}
