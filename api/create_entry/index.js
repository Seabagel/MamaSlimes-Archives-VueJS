const consolePrefix = "Creating Entry - ";

module.exports = async function (context, req) {
  context.log(`${consolePrefix}Started`);

  // Try reading the body
  try {
    const rq = req.query;

    if (rq.message_id && rq.username && rq.msgbody) {
      // Compile data from parameter query
      const payload = {
        message_id: rq.message_id,
        username: rq.username,
        msgbody: rq.msgbody,
        timestamp: rq.timestamp,
        pictureURL: rq.pictureURL
      };

      // context.res = {
      //   status: 201, // Success
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   // body: "Hello world",
      // };

      context.res.json(payload);

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
