// export const lambdaHandler = async (event: any) => JSON.stringify(event);

exports.lambdaHandler = async (event, context, callback) => {
  let newScope = event.request.groupConfiguration.groupsToOverride.map(
    (item) => `${item}-${event.callerContext.clientId}`
  );

  event.response = {
    claimsOverrideDetails: {
      claimsToAddOrOverride: {
        scope: newScope.join(" "),
      },
    },
  };

  callback(null, event);
};
