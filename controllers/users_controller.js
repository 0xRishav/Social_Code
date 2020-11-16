module.exports.profile = function(req,res){
    console.log('hi');
    return res.end('<h1>This is users profile</h1>');
}
module.exports.settings = function(req,res){
    return res.end('these are setting');
}