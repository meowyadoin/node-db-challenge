exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { resource_name: "gloves", description: "small" },
        { resource_name: "dust rag", description: "soft" },
        {
          resource_name: "laundry room",
          description: "for washing and drying clothes"
        },
        { resource_name: "hair dryer", description: "red" },
        { resource_name: "shampoo", description: "green bottle" },
        { resource_name: "book", description: "almost finished" },
        { resource_name: "app", description: "for meditation" }
      ]);
    });
};