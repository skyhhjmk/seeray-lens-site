# 安装 Tracker

把下面的脚本放在站点页面中，替换 `srl_your_public_tracking_id`：

```html
<script src="https://analytics.example/tracker.js"
        data-site-id="srl_your_public_tracking_id"></script>
```

部署后打开页面，在 SeeRay Lens 的实时报告中确认访问已到达。对于 PJAX 或其他无刷新导航，请在内容替换前结束旧生命周期，并在布局稳定后声明新页面：

```js
SeeRay.beginNavigation();
// 替换内容并恢复滚动位置
SeeRay.pageReady({ layoutVersion: 'catalog-v2' });
```

## 接入 SDK

Android、iOS 和 Flutter SDK 都使用显式、可同意控制的 screen/event/goal 调用。它们与 Web 共用 schema-v1 collector，适合希望把 Web 与 App 报表放在同一个站点视图里的团队。

## 验证清单

- 站点允许域名配置正确
- Tracker 请求返回成功且没有被 CSP 阻断
- 实时报告出现当前页面
- 拒绝同意后不再发送分析请求
- 生产环境已配置密钥、备份与留存策略
