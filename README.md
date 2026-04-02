# card page

Custom static links page inspired by Carrd-style single-page profiles.

## What is included

- A centered profile card with a circular profile image
- Blue and dark-blue visual theme
- Background image support
- Link rows generated from `data/site.json`
- GitHub Actions deployment to GitHub Pages

## Edit your content

Update `data/site.json` to change:

- profile name, headline, and image
- background image
- colours
- link rows and icons

Supported icon keys in the JSON:

`website`, `portfolio`, `github`, `linkedin`, `x`, `email`, `youtube`, `instagram`, `tiktok`, `spotify`, `discord`, `twitch`, `link`

## Replace the images

- Replace `assets/profile-placeholder.svg` with your own image, then point `profile.image` at it in the JSON.
- Replace `assets/background-default.svg` or point `background.image` to another file.

## Local preview

Because the page loads content from JSON, preview it through a local web server rather than opening `index.html` directly from the filesystem.

Example:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages deploy

The workflow at `.github/workflows/deploy.yml` deploys on every push to `main`.

One-time GitHub setup:

1. Push this repo to GitHub.
2. In the repository settings, open `Pages`.
3. Set the source to `GitHub Actions`.
