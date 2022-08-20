// IMPORT DEPENDENCIES
const express = require("express");
// const User = require("./User");
// const Company = require("./Company");
// const { req, res } = require("express");

// INSTANTIATE AN EXPRESS SERVER
const app = express();
const port = 8000;

// INJECT DEPENDENCIES
const { faker } = require("@faker-js/faker");

// RUN EXPRESS SERVER
app.listen(port, () => {
  console.log(`We are ready to boogie on port ${port}`);
});

// MIDDLEWARE! important-needed for POST req
// ALLOWING USE OF JSON
app.use(express.json());
// ALLOWING USE OF POST REQUEST INFO
app.use(express.urlencoded({ extended: true }));

// CREATE USER
const createUser = () => {
  return {
    _id: faker.datatype.uuid(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phone_number: faker.phone.number(),
  };
};

// CREATE COMPANY
const createCompany = () => {
  return {
    _id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    address: {
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCode(),
      country: faker.address.country,
    },
  };
};

// DEFINE API ENDPOINTS
// req is short for request// res is short for response

// GET HOME PAGE
app.get("/", (req, res) => {
  res.json("Hello Sunshine!");
});

// GET NEW USER
app.get("/user", (req, res) => {
  console.log("This is an endpoint");
  const user = createUser();
  res.json(user);
});
// GET NEW COMPANY
app.get("/company", (req, res) => {
  console.log(req.url, req.method);
  const company = createCompany();
  res.json(company);
});
// GET NEW USER AND COMPANY
app.get("/user/company", (req, res) => {
  console.log(req.url.req, req.method);
  const user = createUser();
  const company = createCompany();
  res.json({ user, company });
});

// POST ROUTE
app.post("/addUser", (req, res) => {
  console.log(req.body);
});
