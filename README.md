# yum update -y nss curl libcurl

环境为 ng1.18+php7.2+MySQL 5.6.50+phpMyAdmin 4.9

添加域名，上传源码，添加数据库

运行目录为/public

设置伪静态laravel5

开启SSL    安装es   安装 python3   设置反向代理

删除函数
安装扩展 

fileinfo
opcache
memcache
redis
imap
exif
intl
xsl


yum install python3

pip3 install websocket-client redis

清理缓存

php artisan config:cache



设置代理

  location ~/(wss|socket.io) {
	# 此处改为 socket.io 后端的 ip 和端⼝即可 
	proxy_pass http://127.0.0.1:2000; 
	proxy_set_header Upgrade $http_upgrade; proxy_set_header Connection "upgrade";
	proxy_http_version 1.1;
	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	proxy_set_header Host $host;
 }


es安装

rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch

vi /etc/yum.repos.d/elasticsearch.repo

[elasticsearch-7.x]
name=Elasticsearch repository for 7.x packages
baseurl=https://artifacts.elastic.co/packages/7.x/yum
gpgcheck=1
gpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch
enabled=1
autorefresh=1
type=rpm-md

yum install elasticsearch -y

service elasticsearch start




然后添加计划任务
artisan 1 n分钟 30分钟
cd /www/wwwroot/demo.com
php artisan websocket:client restart

php start
cd /www/wwwroot/demo.com/public/vendor/webmsgsender
php start.php restart


artisan 
cd /www/wwwroot/demo.com
php artisan robot 4


work
cd /www/wwwroot/demo.com
php artisan queue:work


schedule:run
cd /www/wwwroot/demo.com
php artisan schedule:run




矿机返现执行脚本  每天晚上12点执行一次就行
https://www.vipgrayscale.com/api/user/kj   



后台：https://xxxx.com/superdad 账号：admin 密码：123456



代理商后台地址 
/agent
admin   123456


