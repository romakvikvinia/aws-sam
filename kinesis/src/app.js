// export const lambdaHandler = async (event: any) => JSON.stringify(event);
const AWS = require("aws-sdk");
const dc = new AWS.DynamoDB.DocumentClient();
const TTL = 10;
exports.processHandler = async (event) => {
  let items = [];
  let now = Date.now();
  let output = [];
  console.log("Event From", event);

  event.records.map((record) => {
    let buff = new Buffer.from(record.data, "base64");
    let text = buff.toString("utf-8");
    console.log("Buffered Text", text);
    let params = {
      TableName: process.env.TABLE_NAME,
      Item: {
        id: record.recordId,
        createdTime: now,
        ttl: now + TTL * 60 * 1000,
        ...JSON.parse(text),
      },
      ConditionExpression: "attribute_not_exists(id)",
    };

    items.push(dc.put(params).promise());
    output.push({
      result: "Ok", // Dropped | Ok | ProcessingFailed
      ...record,
    });
  });

  try {
    await Promise.all(items);
  } catch (err) {
    console.log(err.message);
  }
  return {
    records: output,
  };
};
