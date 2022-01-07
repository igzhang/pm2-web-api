# pm2-web-api

## 解决问题
- 通过API调用pm2操作，可以远程管理进程
- 其他module已过时不再更新

## API reference
### 1. pm2 list  
- url: /
- method: GET
- response(json): [ProcessObjects]

### 2. pm2 start
- url: /
- method: POST
- request json: 
    - process: script path (relative) or object via options
- response: 200 OK or 500

### 3. pm2 stop
- url: /stop
- method: PUT
- request json: 
    - process: target process ID or Name
- response: 200 OK or 500

### 4. pm2 restart
- url: /restart
- method: PUT
- request json: 
    - process: target process ID or Name
    - [options]: object
- response: 200 OK or 500
