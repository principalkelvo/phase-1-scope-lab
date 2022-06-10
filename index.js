// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase()
    return customerName;
    // console.log("customerName", customerName);
}
// upperCaseCustomerName();

function setBestCustomer(){
  bestCustomer = 'not bob';
  return bestCustomer;
  // console.log(bestCustomer);
}

function overwriteBestCustomer(){
  bestCustomer = "maybe bob";
  return bestCustomer;
}

const leastFavoriteCustomer = 'John';

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = "Doe";
  return leastFavoriteCustomer;
}
