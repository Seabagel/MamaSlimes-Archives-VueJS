module.exports = async function (context, req) {
  context.log(`Function create_entry has Started`);

  // Try reading the body
  try {
    const rq = req.query;

    if (
      rq.message_id &&
      rq.username &&
      rq.msgbody &&
      rq.timestamp &&
      rq.pictureURL
    ) {
      const payload = {
        message_id: rq.message_id,
        username: rq.username,
        msgbody: rq.msgbody,
        timestamp: rq.timestamp,
        pictureURL: rq.pictureURL,
      };

      context.bindings.outputDocument = JSON.stringify(payload);
      // Send payload
    } else {
      context.log(`Incomplete request`);
    }

    context.res = {
      headers: {
        "content-type": "application/json",
      },
      body: "Success",
    };
    // Catch Errors
  } catch (error) {
    context.res = {
      body: error,
    };
    context.log(error);
  }

  context.log(`Function create_entry has Ended`);
  context.done();
};
