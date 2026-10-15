# Krishna Shoes — one-time secure setup

This ZIP now contains a Firebase-ready admin manager at `admin.html` (the intended live route is `/admin` when hosting rewrites are configured), a public realtime data bridge, and starter security rules. **It is not live or secure until you complete the setup below.** Do not share the admin URL as a substitute for authentication.

## 1. Create the Firebase project
1. Open https://console.firebase.google.com/ and create a project for Krishna Shoes.
2. Add a Web App in Project settings and copy the web config.
3. In Authentication → Sign-in method, enable **Email/Password**. Do not enable public account creation in this website.
4. In Authentication → Users, manually add the client's email and a strong temporary password. Give the client the password privately and ask them to change it after first login (Firebase password reset can be used).
5. Firestore has been created. Also open Build → Storage and finish creating the Storage bucket if you have not already done so.

## 2. Add config and admin email
1. The web config in `firebase-config.js` has already been filled using the configuration you supplied. `ADMIN_EMAIL` is already set to `prabalgyani@gmail.com`. Confirm that this exact email exists in Firebase Authentication → Users. Do not put a password in any website file.
2. Both `firestore.rules` and `storage.rules` are already configured for `prabalgyani@gmail.com`. Publish these rules only after confirming this is the intended admin account.
3. Publish the contents of `firestore.rules` in Firestore → Rules, and `storage.rules` in Storage → Rules. Never use open write rules such as `allow read, write: if true`.
4. The admin login code additionally checks the configured admin email. The rules are the real security boundary; the email check in the page alone is not security.

## 3. Deploy to a real HTTPS host
Use Firebase Hosting or another static host that serves HTML/CSS/JS over HTTPS. Opening files directly with `file://` is not enough for Firebase modules. For a Firebase Hosting URL `/admin`, configure a rewrite in `firebase.json` to serve `/admin` as `/admin.html` (static-host providers may have their own rewrite setting). The admin page file is `admin.html`.

Example `firebase.json` for Firebase Hosting:
```json
{
  "hosting": {
    "public": ".",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{ "source": "/admin", "destination": "/admin.html" }]
  }
}
```

## 4. How the client uses it
- Open `/admin`, sign in with the authorized email/password.
- Products & Stock → add/edit/delete products; sizes and colours are comma-separated. Upload a product image or paste an image URL.
- Gallery → upload a photo and caption. It appears on `gallery.html`.
- Notifications → publish or hide messages shown in the bell menu.
- Website Settings → update address, hours, contact links, homepage headline and descriptions.
- Changes are saved to Firestore and the customer website listens for realtime updates. A normal page refresh also loads the latest saved data.

## Important notes
- The demo product list is replaced by the live Firestore product collection once Firebase is configured. Add the client's real stock before publishing; demo products/prices/images are not real store inventory.
- Product size availability is currently represented by a product's `sizes` list plus an overall In Stock/Sold Out status. Per-size quantities can be added as a later enhancement.
- This is a catalog and content manager, not a cart/checkout/payment/order-management system.
- Public reads are intentionally enabled so visitors can view the catalog. Writes are restricted to the single verified admin email. Protect the Firebase project itself with account security and never publish passwords in the ZIP.
- Firebase usage is subject to quotas/pricing. Configure budget alerts and keep image sizes reasonable.
