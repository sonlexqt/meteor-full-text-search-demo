Meteor.methods({
    // Helper that extracts the ids from the search results
    searchZips: function (searchText) {
        if (searchText && searchText !== '') {
            var searchResults = _searchZips(searchText);
            var ids = [];
            for (var i = 0; i < searchResults.length; i++) {
                ids.push(searchResults[i].obj._id);
            }
            return ids;
        }
    }
});

// Actual text search function
var _searchZips = function (searchText) {
    var Future = Npm.require('fibers/future');
    var future = new Future();
    MongoInternals.defaultRemoteCollectionDriver().mongo.db.executeDbCommand({
            text: 'zips',
            search: searchText,
            project: {
                id: 1 // Only return the ids
            }
        }
        , function(error, results) {
            if (results && results.documents[0].ok === 1) {
                var x = results.documents[0].results;
                future.return(x);
            }
            else {
                future.return('');
            }
        });
    return future.wait();
};