/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 1");
console.log(
  "Create a variable and assign to it an array containing the first 5 positive numbers."
);
const firstArray = [1, 2, 3, 4, 5];
console.log("Array: " + firstArray);
let array = [];
for (let i = 1; i <= 5; i++) {
  array.push(i);
}
console.log("Array: " + array);

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 2");
console.log(
  "Create a variable and assign to it an object containing your name, surname, email address and age."
);
const andyCotruta = {
  name: "Andy",
  surname: "Cotruta",
  email: "acotruta18@gmail.com",
  age: 28,
};
console.log("Myself: ", andyCotruta);

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 3");
console.log(
  "Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license."
);
andyCotruta.hasDrivingLicense = false;
andyCotruta.age = 28;
const newProperty =
  andyCotruta.age >= 18 ? "hasDrivingLicense" : "noDrivingLicense";
andyCotruta[newProperty] = true;
console.log(andyCotruta);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 4");
console.log("Remove from the previously created object the age property.");
delete andyCotruta.age;
console.log("New andyCotruta: ", andyCotruta);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 5");
console.log(
  "Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one."
);
const newAndyCotruta = Object.assign({}, andyCotruta);
newAndyCotruta.name = "Alin";
newAndyCotruta.surname = "Ciprian";
newAndyCotruta.email = "ciprian@gmail.com";
newAndyCotruta.age = 31;
let condition =
  newAndyCotruta.email === andyCotruta.email
    ? "Email address is the same"
    : "Email address is different";
console.log("Answer: ", condition);

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 6");
console.log(
  "You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.\nCurrently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).\nWrite an algorithm that calculates the total cost to charge the user with."
);
// let totalShoppingCart = 0;
// let shippingCost =
//   totalShoppingCart > 50 ? "Free shipping" : "Total shipping cost is 10";
// console.log("Alert: ", shippingCost);

let totalShoppingCart = 40;
let shippingCost = totalShoppingCart > 50 ? 0 : 10;
console.log("Your shipping cost is: ", shippingCost);

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 7");
console.log(
  "You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.\nModify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost."
);
let totalCost = totalShoppingCart - 0.2 * totalShoppingCart + shippingCost;
console.log("Total cost is: ", totalCost);

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 8");
console.log(
  "Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.\nThen clone it 5 times, and change the licensePlate for each cloned car without affecting the original one."
);
const car1 = {
  brand: "Mercedes",
  model: "E Klasse",
  licensePlate: "IZ-AC-1993",
};
console.log(car1);

const car2 = Object.assign({}, car1);
car2.licensePlate = "IZ-AC-2022";
console.log(car2);
const car3 = Object.assign({}, car1);
car3.licensePlate = "IZ-AC-2020";
console.log(car3);
const car4 = Object.assign({}, car1);
car4.licensePlate = "IZ-AC-2012";
console.log(car4);
const car5 = Object.assign({}, car1);
car5.licensePlate = "IZ-AC-2010";
console.log(car5);
console.log("Car1 license plate still is: ", car1.licensePlate);

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 9");
console.log(
  "Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise."
);
const carsForRent = [car1, car2, car3, car4, car5];
console.log(carsForRent);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 10");
console.log("Remove the first and the last car from the carsForRent array.");
carsForRent.splice(0, 1);
carsForRent.splice(-1, 1);
console.log(carsForRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 11");
console.log(
  "Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties."
);
for (i = 0; i < carsForRent.length; i++) {
  const carBrand = carsForRent[i];
  console.log("The brand of the " + (i + 1) + " car is: " + carBrand.brand);
}
console.log("\n");
for (i = 0; i < carsForRent.length; i++) {
  const carModel = carsForRent[i];
  console.log("The model of the " + (i + 1) + " car is: " + carModel.model);
}
console.log("\n");
for (i = 0; i < carsForRent.length; i++) {
  const carLicensePlate = carsForRent[i];
  console.log(
    "The license plate of the " +
      (i + 1) +
      " car is: " +
      carLicensePlate.licensePlate
  );
}

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 12");
console.log(
  "Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.\nCreate a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays."
);
const carsForSale = [
  (salecar1 = Object.assign({}, car1)),
  (salecar2 = Object.assign({}, car1)),
  (salecar3 = Object.assign({}, car1)),
];
console.log(
  "The length of both Arrays is: ",
  carsForSale.length + carsForRent.length
);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXERCISE 13");
console.log(
  "Using a loop, print to the console all the data for each car in the carsForSale array."
);
for (i = 0; i < carsForSale.length; i++) {
  const allData = carsForSale[i];
  console.log(
    "Here is all the data of the ",
    i + 1,
    " car: ",
    allData.brand,
    allData.model,
    allData.licensePlate
  );
}
