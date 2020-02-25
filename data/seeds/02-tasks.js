
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          task_name: "do laundry",
          description: "make sure it is set to cold",
          notes: "use fabric softener",
          completed: "true",
          project_id: 1
        },
        {
          task_name: "clean living room",
          description: "dust and vacuum",
          notes: "find extension cord",
          completed: "false",
          project_id: 1
        },
        {
          task_name: "wash the dishes",
          description: "scrub pots and pans",
          notes: "do not use the dishwasher because it is gross",
          completed: "false",
          project_id: 1
        },
        {
          task_name: "get supplies to bathe dog",
          description: "shampoo and condition",
          notes: "don't forget the itch spray",
          completed: "true",
          project_id: 2
        },
        {
          task_name: "wash in sink",
          description: "bathe the dog in the laundry room sink",
          notes: "make sure sink is clean first",
          completed: "true",
          project_id: 2
        },
        {
          task_name: "dry ",
          description: "use a towel and a hair dryer",
          notes: "wait to put collar back on until he is completely dry",
          completed: "false",
          project_id: 2
        },
        {
          task_name: "practice mindfulness",
          description: "use meditation app to relax",
          notes: "set an alarm in case i fall asleep",
          completed: "true",
          project_id: 3
        },
        {
          task_name: "finish reading my book",
          description: "read the last few chapters ",
          notes: "use your neat new bookmark!",
          completed: "true",
          project_id: 3
        },
        {
          task_name: "return book to library",
          description: "take a leisurely walk to the library to return the book on time",
          notes: "dont forget they close at 6",
          completed: "false",
          project_id: 3
        }
      ]);
    });
};