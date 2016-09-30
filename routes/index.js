
module.exports = function (app) {
  app.get('/api/test', function (req, res) {
    res.json([1,2,3,4,5]);
  });
  // app.get('*', function (req, res) {
  //   res.sendfile('./public/index.html');
  // });
};
