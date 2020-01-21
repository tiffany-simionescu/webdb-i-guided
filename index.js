const server = require('./server.js');

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

// --- NOTES --- //

// Basic SQL Command
// SELECT email FROM users WHERE name = 'Tiffany Simionescu';

// Conventional to use uppercase commands for SQL

// Can write on multiple lines
// SELECT email
// FROM users 
// WHERE name = 'Tiffany Simionescu';

// DDL - alter table, create table
// DML - Insert, update and delete
// DQL - Select 

// DQL
// SELECT SUM(UnitsInStock) as Total
// FROM Product
// WHERE SupplierId = 12;

// SELECT *
// FROM Product
// WHERE UnitsInStock >= 100
// ORDER BY UnitsInStock DESC
// LIMIT 5;

// SELECT *
// FROM Product
// ORDER BY UnitPrice DESC
// LIMIT 1;

// DML
// INSERT INTO <table name> (<column name>)
// VALUES (<some values>);

// INSERT INTO Category(CategoryName, Description)
// VALUES('Frozen', 'Ready-to-eat-meals');

// UPDATE Category
// SET Description = 'Desserts and ready-to-eat meals'
// WHERE id = 9;

// DELETE FROM Category
// WHERE id = 9;

// Knex.js - query builders takes JS converts to SQL
// Instead of IMPORT INTO users
// db.("users").insert();