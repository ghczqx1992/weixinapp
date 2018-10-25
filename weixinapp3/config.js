(function(){
  var exports=module.exports={};
  //易源接口应用
  var appid = 78072;
  //接口密钥
  var secret ="b9abfabb855b4a828213d18095afe37d";
  //get方式的参数
  var param = "?showapi_appid=" + appid +"&showapi_sign="+secret;
  var hotUrl="https://route.showapi.com/213-4"+param;
  var searchByNameUrl ="https://route.showapi.com/213-1"+param;
  var searchByIdUrl ="https://route.showapi.com/213-2"+param;

  module.exports={
    config:{
      hotUrl: hotUrl,
      searchByNameUrl: searchByNameUrl,
      searchByIdUrl: searchByIdUrl
    }
  };
})(module);