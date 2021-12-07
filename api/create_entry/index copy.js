const consolePrefix = "Creating Entry - ";

module.exports = async function (context, req) {
  context.log(`${consolePrefix}Started`);

  // Try reading the body
  try {
    const rq = req.query;

    if (rq.message_id && rq.username && rq.msgbody) {
      const data = {
        message_id: rq.message_id,
        username: rq.username,
        msgbody: rq.msgbody,
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