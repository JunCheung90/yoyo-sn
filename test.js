var Weibo = require('./lib/weibo');

var weibo = new Weibo({
  access_token: '2.00swKOcCCybyeCa4691e40davR53uC',
  uid: '2397145114',
  screen_name: '北上的风'	//昵称
});


// 当前用户最新发布的微博
weibo.user_timeline({count: 1, since_id: 13132}, function (err, data) {
  if (err)
    console.log(err);
  else
    console.log(data);
});

// 无参数的调用
// weibo.user_timeline(function (err, data) {
//   if (err)
//     console.log(err);
//   else
//     console.log(data);
// });

