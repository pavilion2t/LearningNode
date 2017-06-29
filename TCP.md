在Node中，提供了一个net模块，用于实现基于TCP的数据通信。
创建一个TCP服务器，只需调用net模块中createServer方法即可：
  ``
  var server = net.createServer(option,connectListener);
  ``
  
