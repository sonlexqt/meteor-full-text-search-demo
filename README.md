# meteor-instant-search-demo
This project is a demo of a search feature based on MongoDB's full-text-search, built on top of MeteorJS framework.

### Installation steps
1. Download this project [sample database](http://media.mongodb.org/zips.json?_ga=1.43800419.799148726.1404742229) provided by MongoDB.
2. Import the sample db to your local MongoDB database:
`mongoimport -d meteor-instant-search -c zips zips.json`
Notice that the `zips.json` part is the path to your downloaded **zips.json** file, from your current directory
3. Navigate to the project directory and start it with your local MongoDB database:
`MONGO_URL="mongodb://localhost:27017/meteor-instant-search" meteor`
4. If the "index" error shows up, go to the ***server/indexes.js** file, and remove the following lines, then do step 3 again:
`Zips._dropIndex(search_index_name);`
