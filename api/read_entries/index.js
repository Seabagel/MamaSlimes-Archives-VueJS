module.exports = function (context) {
  context.log(`Function read_entries has Started`);
  try {
    if (!context.bindings.inputDocument) {
      context.log("Not found");
    } else {
      context.log("Success: " + context.bindings.inputDocument);
      context.res = {
        body: context.bindings.inputDocument,
      };
    }
  } catch (error) {
    context.res = {
      body: error,
    };
    context.log(error);
  }

  context.log(`Function read_entries has Ended`);
  context.done();
};
