Meteor.publish('zips_results', function(searchText) {
    if (searchText && searchText !== '')
    {
        var doc = {};
        var zipIds = Meteor.call('searchZips', searchText);
        if (zipIds) {
            doc._id = {
                $in: zipIds
            };
        }
        return Zips.find(doc);
    }
});