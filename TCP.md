在Node中，提供了一个net模块，用于实现基于TCP的数据通信。   
# 创建一个TCP服务器
创建一个TCP服务器，只需调用net模块中createServer方法即可：
  ``
  var server = net.createServer(option,connectListener);
  ``   
  
# 创建一个TCP客户端  
  在Node中，创建TCP客户端是一件非常简单的事情。只需要创建一个用于连接TCP服务器的socket端口对象即可：  
  ``  
  var net = net.Socket(options);
  ``
  
  
