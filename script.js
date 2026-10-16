
fetch("./employees.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch employees");
    }
    return response.json();
  })
  .then(employees => {
    employees.sort((a, b) => a.age - b.age);
    console.log(employees);
  })
  .catch(error => {
    console.error("Error fetching employees:", error);
  });
