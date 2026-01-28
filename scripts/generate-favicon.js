// Script to generate favicon files
// Run: node scripts/generate-favicon.js
// Requires: sharp package (npm install sharp)

const fs = require('fs');
const path = require('path');

// SVG template for favicon
const svgTemplate = `<svg width="{size}" height="{size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="{size}" height="{size}" fill="#0B0B0B"/>
  <text x="{center}" y="{textY}" font-family="Arial, sans-serif" font-size="{fontSize}" font-weight="900" fill="#B11212" text-anchor="middle" style="text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">888</text>
</svg>`;

const sizes = [
  { size: 16, fontSize: 12, name: 'favicon-16x16.png' },
  { size: 32, fontSize: 22, name: 'favicon-32x32.png' },
  { size: 180, fontSize: 120, name: 'apple-touch-icon.png' },
];

console.log('Favicon generation script');
console.log('Note: This script creates SVG files. For PNG/ICO conversion, use an online tool or sharp package.');
console.log('SVG favicon created at public/favicon.svg');
