Place local wood preview images in this folder.

Use file names or paths relative to this folder in
`src/data/shared/options/medienaImages.json`.

Organize images by generic wood type folder when the title contains it.
If a decor has multiple numbered variants like `Ash1`, `Ash2`, `Oak1`, or
`Oak2`, keep the files in the generic wood folder and choose the preferred file
explicitly in `src/data/shared/options/medienaImages.json`.

Common folder examples:
- `ash/...`
- `oak/...`
- `birch/...`
- `beech/...`
- `pine/...`
- `walnut/...`
- `sycamore/...`

Examples:
- `"image": "oak-natural.jpg"`
- `"image": "ash/white-oil.webp"`
- `"image": "/mediena-images/birch/light.jpg"`

Do not use:
- `file:///C:/...`
- absolute disk paths
- `..` path segments
