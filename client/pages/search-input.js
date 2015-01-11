Template.searchInput.events({
    'keyup .morphsearch-input': function (event, template) {
        event.preventDefault();
        var key = event.currentTarget.value;
        Session.set('search-key', key);
    }
});