exports.lambdaHandler = async (event)=>{
    // value pushed out
    return {
        lambda:"one",
        pretest: true,
        postTest: true,
        code: 2
    }
}