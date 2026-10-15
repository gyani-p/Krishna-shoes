## Important: test mode vs live website

This package now includes a **Local Preview Mode** for the admin panel when Firebase has not been configured. Open `admin.html` using a local web server and sign in with:

- Email: `demo@krishnashoes.in`
- Password: `KS-Demo-2026!`

In this mode, product/gallery/notification/settings edits are stored in the current browser's local storage. This is only for trying the interface and is **not secure, not cloud-backed, and does not sync to another customer's phone or computer**. Never use these demo credentials on a public live website.

For real client use, follow `FIREBASE_SETUP.md`, replace the placeholder config, create the authorized admin user, and publish the restrictive Firestore and Storage rules. Once configured, the panel uses Firebase Authentication, Firestore, and Storage for cross-device realtime updates. Do not share Firebase passwords or private credentials in chat.

# KRISHNA SHOES — Premium Storefront Demo

A responsive front-end website concept for a local footwear store. Built with plain HTML, CSS, and JavaScript; no build tools or framework are required.

## Run it
1. Extract the ZIP file.
2. Open `index.html` in a browser. An internet connection is used for Google Fonts and the sample Unsplash product/store/gallery images.
3. For a more realistic local preview, you can use VS Code's Live Server extension.

## Included features
- Short branded intro animation
- Responsive navigation drawer opened by a three-line hamburger icon
- Wide top-bar search field with live product filtering and Enter-to-view-results behavior
- Bell notification dropdown for store updates and offer messages
- Dedicated `gallery.html` page opened from the menu (Gallery is no longer embedded on the homepage), with a responsive photo grid
- Refined typography using Manrope for clean UI text, Cormorant Garamond for editorial headings, and Noto Sans Devanagari for Hindi text
- Working category filters: All, Shoes, Sneakers, Slippers
- Working sort: Popular, price low-to-high, price high-to-low
- Product detail modal with demo sizes, colours, ratings and descriptions
- English/Hindi interface switcher for the main UI
- Store location, hours, phone, email and WhatsApp placeholders
- Smooth reveal and hover effects, with reduced-motion setting
- Mobile, tablet and desktop layouts

## Important before showing it as a live client website
This is a **front-end demo**, not a complete e-commerce system. The sample product names, ratings, prices, product images, shop photo, address and hours are illustrative. Replace them with verified client information before publishing. Image URLs need an internet connection.

### Edit shop details
Open `app.js` and update `SHOP_CONFIG` near the top:
- `address`
- `hours`
- `phone`
- `whatsapp` (include country code, digits only recommended; India example format starts with 91)
- `email`
- `mapsUrl`

WhatsApp enquiries work after a real number is added. The phone and email links are updated when their values are provided.

### Edit products
Update the `PRODUCTS` array in `app.js`. Each product has:
- `id`, `name`, `category` (`Shoes`, `Sneakers`, or `Slippers`)
- `price`, `rating`, `popularity`, `badge`
- `image`, `description`, `sizes`, `colours`, `available`

`Popular` sorting uses the demo `popularity` number. Use real sales or view data if you want this ranking to represent actual popularity.

## Admin manager and live editing
This package now includes `admin.html`, `admin.js`, `admin.css`, `firebase-config.js`, and `public-sync.js` for a Firebase-backed manager. The intended client route is `/admin`; the actual HTML file is `admin.html`. The client can manage products, gallery photos, notifications, and key website settings. Public pages subscribe to Firestore realtime updates.

**Firebase web configuration is now filled in using the config supplied by the owner.** Before live admin login and cross-device updates work, set the authorized client email in `firebase-config.js`, replace the matching email placeholder in both security-rule files, ensure Firebase Storage is enabled, and publish the rules. Follow `FIREBASE_SETUP.md`. The admin page intentionally has no public sign-up button. Do not deploy before setting secure rules.

## Important limits
No cart, checkout, online payments, or order-management system is included. The manager currently tracks an overall In Stock/Sold Out status per product; per-size quantities are not yet implemented. Demo content should be replaced with verified store inventory before going live.
