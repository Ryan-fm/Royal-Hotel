SET NAMES UTF8;
DROP DATABASE IF EXISTS hotel;
CREATE DATABASE hotel CHARSET=UTF8;
USE hotel;


/**房间类型表**/
CREATE TABLE room_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(32)
);

/**房间型号**/
CREATE TABLE room_laptop(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  family_id INT,              #所属房间类型编号
  title VARCHAR(128),         #主标题
  price DECIMAL(10,2),        #价格
  lname VARCHAR(32),          #商品名称
  details VARCHAR(1024),      #产品详细说明
  sold_count INT,             #已售出的数量
  is_onsale BOOLEAN,           #是否促销中
  pic VARCHAR(128)
);

/**用户信息**/
CREATE TABLE ht_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT                  #性别  0-女  1-男
);

/**用户订单**/
CREATE TABLE room_order(
  did INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,           #订单编号
  lid INT,         #房间编号
  count INT,               #预定房间数量
  uid INT,   #客户编号
  foreign key(lid) references room_laptop(lid),
  foreign key(uid) references ht_user(uid)
);
