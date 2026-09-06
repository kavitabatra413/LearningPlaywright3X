let names = ["Amit Kumar", "Neha Singh"];
roles = ["admin", "viewer"];

function create(names, roles) {
   return names.map((name, index) => {
    const username = name
      .trim()
      .toLowerCase()
      .split(" ")
      .join("_");

    return {
      username: username,
      email: `${username}@playwrightbatch.com`,
      role: roles[index]
    };
  });
}

console.log(create(names, roles));
