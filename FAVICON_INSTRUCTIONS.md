# Favicon Generation Instructions

SVG favicon files have been created. To generate PNG and ICO files:

## Option 1: Online Converter (Recommended)
1. Go to https://convertio.co/svg-png/ or https://cloudconvert.com/svg-to-png
2. Upload `public/favicon-32x32.svg` and convert to PNG (32x32)
3. Upload `public/favicon-16x16.svg` and convert to PNG (16x16)
4. Upload `public/apple-touch-icon.svg` and convert to PNG (180x180)
5. For ICO: Use https://convertio.co/png-ico/ with the 32x32 PNG

## Option 2: Using ImageMagick (Command Line)
```bash
# Install ImageMagick first
magick convert public/favicon-32x32.svg -resize 32x32 public/favicon-32x32.png
magick convert public/favicon-16x16.svg -resize 16x16 public/favicon-16x16.png
magick convert public/apple-touch-icon.svg -resize 180x180 public/apple-touch-icon.png
magick convert public/favicon-32x32.png public/favicon.ico
```

## Option 3: Using Sharp (Node.js)
```bash
npm install sharp
node scripts/generate-favicon.js
```

Save the generated files to `public/` folder:
- favicon.ico
- favicon-16x16.png
- favicon-32x32.png
- apple-touch-icon.png
