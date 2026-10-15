# Krishna Shoes — Client Quick Guide

## Try the admin panel before going live
Open `admin.html` from a local web server. If Firebase is not configured, use demo login:
- Email: `demo@krishnashoes.in`
- Password: `KS-Demo-2026!`

Local Preview Mode is only for testing on the same browser. It is not secure and will not sync to other devices. Complete `FIREBASE_SETUP.md` before using the panel for real store data.

# Krishna Shoes — Client quick guide

After the one-time Firebase setup is complete:

1. Open the store's admin URL: `https://YOUR-DOMAIN/admin`.
2. Sign in using the private admin email and password provided to you.
3. Choose **Products & Stock** to add a shoe/chappal, set price, sizes, colours, photo and stock status.
4. Choose **Gallery** to upload store or footwear photos with a caption.
5. Choose **Notifications** to publish a new-arrival, offer or stock update for the bell icon.
6. Choose **Website Settings** to edit the address, hours, phone/WhatsApp, map link and selected homepage text/images.
7. Changes save to the database and sync to the public website. If a visitor has an old tab open, it should update live; refreshing also loads the latest saved data.
8. Use **Log out** when finished. Never share the admin password publicly.

If something does not save, ask the website developer to check Firebase configuration, Firestore/Storage rules and billing/quota status.
