### yum update -y nss curl libcurl
环境为 ng1.18+php7.3+MySQL 5.6.50+phpMyAdmin 4.9
添加域名，上传源码，添加数据库
运行目录为/public
设置伪静态laravel5
开启SSL    安装es   安装 python3   设置反向代理
### 删除函数
putenv,pcntl_signal,pcntl_fork,pcntl_signal_dispatch,pcntl_wait
### 安装扩展 
fileinfo opcache memcache redis imap exif intl xsl
### 按照python
yum install python3
pip3 install websocket-client redis
### 清理缓存
php artisan config:cache
### 设置代理
location ~/(wss|socket.io) {
	# 此处改为 socket.io 后端的 ip 和端⼝即可 
	proxy_pass http://127.0.0.1:2000; 
	proxy_set_header Upgrade $http_upgrade;
	proxy_set_header Connection "upgrade";
	proxy_http_version 1.1;
	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	proxy_set_header Host $host;
}
### es安装
rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch
vi /etc/yum.repos.d/elasticsearch.repo
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
service elasticsearch start
### 添加计划任务
然后添加计划任务
每天 00:01

理财结算
cd /www/wwwroot/Site
php artisan auto_dual_order

锁仓派息
cd /www/wwwroot/Site
php artisan lhdispatch_interest

每小时1次
移除积压
cd /www/wwwroot/Site
php artisan remove_queue

每分钟一次
处理跟单
cd /www/wwwroot/Site
php artisan follow

n分钟 30分钟

1.elasticsearch
service elasticsearch start

2.webmsgsender
cd /www/wwwroot/Site/public/vendor/webmsgsender
php start.php restart

3.websocket
cd /www/wwwroot/Site
php artisan websocket:client restart

<!-- robot
cd /www/wwwroot/Site
php artisan robot 4

work
cd /www/wwwroot/Site
php artisan queue:work

schedule:run
cd /www/wwwroot/Site
php artisan schedule:run -->

管理后台：https://xxxx.com/superdad 账号：admin 密码：123456
代理后台：/agent 账号：admin 密码：123456