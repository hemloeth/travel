# Travel — Figma implementation

This is a clean replacement frontend built directly from the supplied Figma design:
https://www.figma.com/design/eX2kUXO379EgwAkAAKS1oo/

The earlier approximate design and legacy admin/backend screens are not included in this replacement.

## Run

Use Node.js 22+.

```sh
npm ci
npm run dev
```

Production:

```sh
npm run build
npm start
```

## Screens

| Route | Figma frame |
| --- | --- |
| / | Homepage — 0:622 |
| /about | About Us — 0:1609 |
| /packages | Packages Archive — 0:1354 |
| /tour/information | Tour Information — 0:1136 |
| /tour/plan | Tour Plan — 0:1797 |
| /tour/location | Tour Location — 0:2012 |
| /tour/gallery | Tour Gallery — 0:2163 |
| /build-package | Create Your Own Package — 0:18 |

The Thumbnail and designer's Thankyou credit frame are presentation material, not customer website pages.

## Theme

- Clotted Cream: #E8DFC8
- Spruce Velvet: #194735
- Heirloom Tomato: #EE4129

Source imagery, logos and decorative artwork remain unmodified. Text, buttons and page surfaces use the requested theme. Original template copy, example dates, prices and testimonial text are retained for design fidelity; they are not verified business claims and must be replaced before launch.

## Implementation and validation

- Live Figma design context and screenshots were obtained for all eight website frames.
- Main page sections use normal flow with layered CSS grids. Source image crops, proportions and artwork positions are retained inside the sections.
- 362 downloaded asset references were deduplicated by byte-identical SHA-256 hashes to 238 local files. No remote Figma asset URLs or access tokens are required at runtime.
- All 238 local files were checked for non-empty content and valid image/SVG metadata; see asset-audit.json.
- 1,319 source layer coordinates were checked against the converted grid coordinates, with no differences.
- Next.js production build and TypeScript passed.
- A browser screenshot comparison was not completed because preview access was restricted in this environment. This source-based verification does not certify pixel-perfect browser rendering.

## Typography and screen sizes

Poppins, Volkhov, Manrope, Yesteryear and Roboto are loaded through next/font. The source also names Circular Std and Gilroy; their font binaries were not supplied, so those small portions currently fall back to Poppins. Add licensed font files to remove these remaining typography differences.

The supplied Figma frames are desktop canvases (1920px wide). Above 1100px the desktop compositions are scaled to the viewport as before. At 1100px and below a responsive reflow in `app/globals.css` replaces the scale-to-fit approach: layers flow into a single column, typography uses a fluid clamp() scale derived from the desktop sizes, decorative/rotated artwork and masked crops are hidden or reset, and the interactive pieces (hero search form, builder package form, package cards, bullet lists) stack or widen appropriately. No separate mobile Figma design was supplied, so the reflow reuses the desktop artwork and hierarchy.

## Interaction scope

Navigation, tour tabs, services menu, editable fields, checkboxes, package preference draft and archive sorting are wired. Package preferences are saved only to sessionStorage. Booking/newsletter actions are explicitly marked as a design preview and do not send a request, take payment or make a reservation. This is the requested design replacement, not a production booking backend.
