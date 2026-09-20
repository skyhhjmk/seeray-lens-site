# 隐私设计

SeeRay Lens 的默认值偏向少采集、可解释和可撤回。

## 核心原则

1. **同意优先**：需要同意的站点可在 Tracker 上开启 consent gating，支持接受、拒绝、撤回和再次询问。
2. **最小化数据**：URL 去除不必要的 query/fragment；不采集广告 ID、设备型号，也不保留原始 IP。
3. **站点隔离**：匿名标识是站点范围内的，工作区成员与 API Token 受权限约束。
4. **能力默认关闭**：位置、热图、录屏、实验和崩溃采集都需要显式配置。
5. **可持续管理**：站点级留存、审计日志和导出让数据生命周期保持透明。

## 同意模式示例

```html
<script src="https://analytics.example/tracker.js"
  data-site-id="srl_your_public_tracking_id"
  data-require-consent="true"></script>
<script src="https://analytics.example/consent.js"
  data-site-id="srl_your_public_tracking_id"></script>
```

在正式启用前，请结合所在地区法律、站点用途和第三方服务逐项完成隐私评估。
