SET NAMES UTF8;
DROP DATABASE IF EXISTS hotel;
CREATE DATABASE hotel CHARSET=UTF8;
USE hotel;


/**�������ͱ�**/
CREATE TABLE room_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(32)
);

/**�����ͺ�**/
CREATE TABLE room_laptop(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  family_id INT,              #�����������ͱ��
  title VARCHAR(128),         #������
  price DECIMAL(10,2),        #�۸�
  lname VARCHAR(32),          #��Ʒ����
  details VARCHAR(1024),      #��Ʒ��ϸ˵��
  sold_count INT,             #���۳�������
  is_onsale BOOLEAN,           #�Ƿ������
  pic VARCHAR(128)
);

/**�û���Ϣ**/
CREATE TABLE ht_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  avatar VARCHAR(128),        #ͷ��ͼƬ·��
  user_name VARCHAR(32),      #�û���������С��
  gender INT                  #�Ա�  0-Ů  1-��
);

/**�û�����**/
CREATE TABLE room_order(
  did INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,           #�������
  lid INT,         #������
  count INT,               #Ԥ����������
  uid INT,   #�ͻ����
  foreign key(lid) references room_laptop(lid),
  foreign key(uid) references ht_user(uid)
);
