### 宝塔安装
yum install -y wget && wget -O install.sh https://download.bt.cn/install/install_6.0.sh && sh install.sh ed8484bec
### 更新系统
sudo yum update -y
### 程序环境
环境为 ng1.18+php7.3+MySQL 5.6.50+phpMyAdmin 4.9
运行目录为/public
设置伪静态laravel5
安装es,安装python3,设置反向代理
### 删除函数
putenv,pcntl_signal,pcntl_signal_dispatch,pcntl_fork,pcntl_wait,pcntl_alarm
### 安装扩展 
fileinfo opcache memcache redis imap exif intl xsl
### 安装python3
yum install -y python3 && pip3 install websocket-client redis
### 安装elasticsearch7
rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch && vi /etc/yum.repos.d/elasticsearch.repo
----------------------------------------------------------------
[elasticsearch-7.x]
name=Elasticsearch repository for 7.x packages
baseurl=https://artifacts.elastic.co/packages/7.x/yum
gpgcheck=1
gpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch
enabled=1
autorefresh=1
type=rpm-md
----------------------------------------------------------------
yum install elasticsearch -y
### 目录映射
php artisan storage:link
### 清理缓存
php artisan config:cache

### 伪静态
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
### 设置代理
server_name ~^.*$;

location ~/(wss|socket.io) {
	# 此处改为 socket.io 后端的 ip 和端⼝即可 
	proxy_pass http://0.0.0.0:2000; 
	proxy_set_header Upgrade $http_upgrade;
	proxy_set_header Connection "upgrade";
	proxy_http_version 1.1;
	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	proxy_set_header Host $host;
}
### 数据库huobi_symbols添加XAUT
INSERT INTO `huobi_symbols` (`id`, `base-currency`, `quote-currency`, `price-precision`, `amount-precision`, `symbol-partition`, `symbol`) VALUES (NULL, 'xaut', 'usdt', '4', '4', 'main', 'xautusdt')
### 添加计划任务
然后添加计划任务
每天 00:01

理财结算
cd /www/wwwroot/Site
php artisan auto_dual_order

锁仓派息
cd /www/wwwroot/Site
php artisan lhdispatch_interest

每分钟一次
处理跟单
cd /www/wwwroot/Site
php artisan follow

n分钟 30分钟
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
### 1.elasticsearch
service elasticsearch start
开机自启
sudo systemctl enable elasticsearch
关闭自启
sudo systemctl disable elasticsearch

### 2.webmsgsender
sudo vi /etc/systemd/system/webmsgsender-client.service
-----------------------------------------------------------------
[Unit]
Description=Web Message Sender Client
After=network.target

[Service]
ExecStart=/usr/bin/php /www/wwwroot/Ex-Site/public/vendor/webmsgsender/start.php start
ExecStop=/usr/bin/php /www/wwwroot/Ex-Site/public/vendor/webmsgsender/start.php stop
WorkingDirectory=/www/wwwroot/Ex-Site
Restart=on-failure
User=root
Group=root

[Install]
WantedBy=multi-user.target
------------------------------------------------------------------
sudo systemctl daemon-reload
sudo systemctl restart webmsgsender-client.service
sudo systemctl status webmsgsender-client.service

### 3.websocket
sudo vi /etc/systemd/system/websocket-client.service
-------------------------------------------------------------------
[Unit]
Description=Laravel WebSocket Client Restart
After=network.target

[Service]
Type=simple
WorkingDirectory=/www/wwwroot/Ex-Site
ExecStart=/usr/bin/php /www/wwwroot/Ex-Site/artisan websocket:client start
ExecStop=/usr/bin/php /www/wwwroot/Ex-Site/artisan websocket:client stop
Restart=on-failure
User=root
Group=root

[Install]
WantedBy=multi-user.target
------------------------------------------------------------------
sudo systemctl daemon-reload
sudo systemctl restart websocket-client.service
sudo systemctl status websocket-client.service
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<!-- robot
cd /www/wwwroot/Site
php artisan robot 4

work
cd /www/wwwroot/Site
php artisan queue:work

schedule:run
cd /www/wwwroot/Site
php artisan schedule:run -->

管理后台：/manage 账号：admin 密码：123456
代理后台：/agent 账号：admin 密码：123456

start.sh
#! /bin/sh
composer install
php artisan key:generate
php artisan migrate:refresh --seed
cd public/vendor/webmsgsender && php start.php start -d
