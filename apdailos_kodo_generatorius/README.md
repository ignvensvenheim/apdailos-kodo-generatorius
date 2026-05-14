# Apdailos Kodo Generatorius

React + TypeScript + Vite app for generating decor codes in three flows:
- Standard decor
- Paint
- Huseby / Foss

The app includes:
- LT / EN language switch
- decor code generation and copy action
- paint color preview
- standard decor wood image preview
- rules/help section and standard surface info popup

## Run locally

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build
npm run preview
npm run lint
```

## Image previews

`src/data/shared/options/medienaImages.json` can reference images from `public/mediena-images/`.

Example:

```json
{
  "decorKey": "Example decor",
  "woodKey": "ash",
  "image": "ash/example.jpg"
}
```

This resolves to `/mediena-images/ash/example.jpg` in the browser.
