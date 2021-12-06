const consolePrefix = "Creating Entry - ";

module.exports = async function (context, req) {
  context.log(`${consolePrefix}Started`);

  // Try reading the body
  try {
    const rb = req.body;

    if (rb.id && rb.username && rb.messageBody) {
      const data = {
        id: rb.id,
        username: rb.username,
        messageBody: rb.messageBody,
      };

      context.bindings.outputDocument = data;

      context.res = {
        status: 201, // Success
        headers: {
          "content-type": "application/json",
        },
        body: data,
      };

      context.log(`${consolePrefix}Status: 201 Success`);
    } else {
      context.res = {
        status: 400, // Bad Request
      };
      context.log(`${consolePrefix}Status: 400 Bad Request`);
    }

    // Catch Errors
  } catch (error) {
    context.res = {
      status: 500, // Internal Server Error
    };
    context.log(`${consolePrefix}Status: 500 Internal Server Error`);
  }

  context.log(`${consolePrefix}Done`);
  context.done();
};
