module.exports.home = function(req, res){
    console.log('home_controller');
    return res.end('<h1>Express is up for codeial</h1>');
}