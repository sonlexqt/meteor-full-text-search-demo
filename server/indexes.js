Meteor.startup(function () {
    var search_index_name = 'my_search_index';
    // Remove old indexes as you can only have one text index and if you add
    // more fields to your index then you will need to recreate it.
    Zips._dropIndex(search_index_name);

    Zips._ensureIndex({
        city: 'text',
        state: 'text'
    }, {
        name: 'my_search_index'
    });
});