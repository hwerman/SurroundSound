// const { MongoClient } = require('mongodb');
// const { ObjectID } = require('mongodb');

// // HJW database information: store the info of the songs that
// // the user wants to revisit - the songs that the user adds
// // to the personal collection at the bottom

// const dbConnection = 'mongodb://localhost:27017/surroundsound'

// function accessFaves(req, res, next) {
//   MongoClient.connect(dbConnection, (err, db) => {
//     if (err) return next(err);

//     db.collection('favorites')
//     .find({})
//     .toArray((arrayError, data) => {
//       if (arrayError) return next(arrayError);

//       res.fave = data;
//       db.close();
//       return next();
//     });
//     return false;
//   });
//   return false;
// }

// function saveFaves(req, res, next){
//   MongoClient.connect(dbConnection, (err, db) => {
//     if (err) return next(err);

//     db.collection('favorites')
//     .insert(//what are you finding here? req.body.fave? or req.query.fave?
//       , (insertError, result) => {
//         if (insertErr) return next(insertErr);

//         res.save = result;
//         db.close();
//         return next();
//       });
//     return false;
//   });
//   return false;
// };

// function removeFaves(req, res, next) {
//   MongoClient.connect(dbConnection, (err, db) => {
//     if (err) return next(err);

//     db.collection('favorites')
//     .findAndRemove({//figure out the req.params for this}
//       }, (removeError, doc) => {
//         if (removeErr) return next(removeErr);

//         res.bye = doc;
//         db.close();
//         return next();
//       });
//     return false;
//   });
//   return false;
// };

// module.exports = {
//   accessFaves,
//   saveFaves,
//   removeFaves,
// }
