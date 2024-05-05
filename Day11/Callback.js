function fetchData(callback) {
    // Asynchronous operation
    setTimeout(function() {
        var data = 'This is the fetched data';
        callback(data);
    }, 2000);
}

fetchData(function(data) {
    console.log(data); // Output after 2 seconds: This is the fetched data
});
