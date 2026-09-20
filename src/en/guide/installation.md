# Install the Tracker

```html
<script src="https://analytics.example/tracker.js"
        data-site-id="srl_your_public_tracking_id"></script>
```

After deployment, verify the page in the live report. For PJAX or other no-reload navigation, end the old lifecycle before replacement and declare the new layout after rendering stabilises:

```js
SeeRay.beginNavigation();
SeeRay.pageReady({ layoutVersion: 'catalog-v2' });
```

Remember to verify allowed domains, CSP, consent withdrawal and production retention settings.
