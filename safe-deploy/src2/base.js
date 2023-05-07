exports.lambdaHandler = async (event)=>{
    // value pushed out
    return {
        lambda:"two",
        pretest: true,
        postTest: true,
        code: 10
    }
}