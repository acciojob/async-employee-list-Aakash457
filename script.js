
import { readFile } from "node:fs";

readFile("./employees.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const employees = JSON.parse(data);

  employees.sort((a, b) => a.age - b.age);

  console.log(employees);
});
