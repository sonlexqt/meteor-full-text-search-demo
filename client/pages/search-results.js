Zips = new Meteor.Collection('zips');

Template.searchResults.helpers({
    results: function(){
        var key = Session.get('search-key');
        Meteor.subscribe('zips_results', key);
        return Zips.find().fetch();
    }
});
