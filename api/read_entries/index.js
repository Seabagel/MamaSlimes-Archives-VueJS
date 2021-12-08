module.exports = async function (context, req) {
  context.log(`Function read_entries has Started`);
  let documents;
  try {
    documents = await context.bindings.inputDocument.then((res) =>
      context.res.json(res)
    );
  } catch (error) {
    context.res = {
      body: error,
    };
    context.log(error);
  }
  context.log(`Function read_entries has Ended`);
};
