module.exports = function (context, input) {
  context.log(`Function read_entries has Started`);
  try {
    var documents = context.bindings.inputDocument;
    context.res.json(documents);
    context.res = {
      headers: {
        "content-type": "application/json",
      },
      body: "Success",
    };
  } catch (error) {
    context.res = {
        body: error,
      };
      context.log(error);
  }
  context.log(`Function read_entries has Ended`);
  context.done();
};
