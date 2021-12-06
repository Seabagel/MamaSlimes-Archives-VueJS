const consolePrefix = "Creating Entry - ";

module.exports = async function (context, req) {
  context.log(`${consolePrefix}Started`);

  // Try reading the body
  try {
    const rb = req.body;

    if (rb.messageId && rb.username && rb.messageBody) {
      const data = {
        messageId: rb.messageId,
        username: rb.username,
        messageBody: rb.messageBody,
      };

      context.res = {
        status: 201, // Success
        headers: {
          "content-type": "application/json",
        },
        body: data,
      };

      context.log(`${consolePrefix}Status: 201 Success`);
      context.done();
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
