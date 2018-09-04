const hello = (event, context, callback) => {
    console.log(`Lambda invoked with event ${JSON.stringify(event)}`);
    callback(null, "Got it");
};

module.exports = {
    hello
}