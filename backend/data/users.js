import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@xample.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Vijay Akepati",
    email: "vijay@xample.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Prasanna Akepati",
    email: "prasanna@xample.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
