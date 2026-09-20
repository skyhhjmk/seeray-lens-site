# 快速开始

SeeRay Lens 的基本流程只有三步：创建站点、安装 Tracker、在工作区查看数据。

## 需要准备什么

- 一台可以运行 PostgreSQL 与 RabbitMQ 的服务器
- 一个站点的公开域名与允许域名配置
- 一个稳定的 `SEERAY_SECRET_ENCRYPTION_KEY`

开发环境可先使用 Compose 启动依赖，再运行控制面和管理端。生产环境请为数据库、RabbitMQ、上传目录和密钥配置持久化存储。

下一步：[安装 Tracker](/guide/installation)。
