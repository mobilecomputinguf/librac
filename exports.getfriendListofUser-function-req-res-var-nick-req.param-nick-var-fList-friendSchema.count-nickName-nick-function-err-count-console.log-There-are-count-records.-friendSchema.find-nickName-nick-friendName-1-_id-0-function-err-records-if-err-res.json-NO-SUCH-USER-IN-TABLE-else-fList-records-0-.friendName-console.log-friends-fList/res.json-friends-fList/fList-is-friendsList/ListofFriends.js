exports.getfriendListofUser = function(req, res){
    var nick  = req.param('nick');
    var  fList = [];
    friendSchema.count({nickName : nick}, function(err, count) {
          console.log("There are " + count + " records.");
          friendSchema.find({nickName : nick}, {friendName:1, _id:0}, function(err, records){
            if(err)
              res.json("NO SUCH USER IN TABLE");
            else{
              fList = records[0].friendName;
              console.log({friends:fList});
              //res.json({friends: fList});/* fList is friendsList */
              res.json(fList);
            }
          }); 
    });

};
