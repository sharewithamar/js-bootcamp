let isAccountLocked = false;
let userRole = 'admin';

if (isAccountLocked) {
  console.log('is Account Locked');
} else {
  console.log(' Account is open');
}

// else if() comes afer if and before else
if (isAccountLocked) {
  console.log('is Account Locked');
} else if (userRole === 'admin') {
  console.log('admin logged in');
} else {
  console.log('Welcome');
}
