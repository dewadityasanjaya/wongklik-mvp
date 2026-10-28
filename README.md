# WONGKLIK

WONGKLIK is a website concept for an illustrated Wayang Wong Tejakula keychain. A QR code on the keychain can open the site's cultural introduction at `/wayang-wong-tejakula`.

The website introduces Wayang Wong Tejakula, its performance contexts, and ways to approach the tradition with respect. The essay's proposed augmented-reality experience is not implemented in this website; AR is described as a possible companion feature, not a live capability.

The learning page links to reporting from RRI and detikBali, an ISI Denpasar article, and information from the Buleleng cultural office. It includes two YouTube performance embeds, which require an internet connection and may be subject to their channels' availability and embedding settings. The site photographs include a cropped and resized derivative of a 4,256 × 2,832 Wayang Wong Tejakula photo by Imadedana from Wikimedia Commons, licensed CC BY-SA 4.0. The visible image credit links to the source and license; asset details are recorded in `ASSET-ATTRIBUTIONS.md`.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## QR code

The learning page includes a downloadable QR code. It uses the current site origin and points to `/wayang-wong-tejakula`. A locally generated QR code is only suitable for local testing. Before printing product tags, deploy the site to its permanent HTTPS domain and generate a QR code from that public address.

## Content and cultural review

The Wayang Wong Tejakula copy uses the linked cultural and research sources and is based in part on the concept essay supplied with this project. It should be reviewed with Tejakula artists and community representatives before public launch. Confirm which photos and illustrations may be published and replace any artwork that does not have publication permission. The keychain graphic on the landing page is a CSS concept illustration, not a product photograph or manufacturing specification. The project keeps the previously supplied photo in `public/images/hero-wayang.png`; the current high-resolution hero and mask images use the separately credited Commons source.

The planned AR interaction would require additional development, compatible devices or software, validated character artwork, and community review. This site currently provides the QR-linked information experience only.
