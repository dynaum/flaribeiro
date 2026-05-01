# flaribeiro.com

Personal site for Flávia Ribeiro, personal trainer. Bilingual (pt-BR / en),
plain HTML / CSS / JS, no build step. Deployed on GitHub Pages at
[flaribeiro.com](https://flaribeiro.com).

## Local preview

```bash
python3 -m http.server 8000
```

## Files

- `index.html` — single page with all sections (hero, about, services, method, gallery, contact)
- `styles.css` — design tokens via CSS custom properties; light + dark theme
- `script.js` — `i18n` dictionary (pt-BR + en), language toggle, theme toggle, scroll affordance
- `favicon.svg` — circular FR monogram in terracotta
- `CNAME` — `flaribeiro.com`
- `images/` — drop real photos here and update the `index.html` `photo-placeholder` blocks

## What's a placeholder

The site ships with **photo placeholders** (radial-gradient panels with an "FR" monogram). Replace them with real images:

1. Add `images/hero.jpg`, `images/gallery-1.jpg`, ..., `images/gallery-6.jpg`.
2. In `index.html`, swap each `<div class="photo-placeholder">...</div>` for an `<img src="/images/...jpg" alt="..." width="..." height="...">` (give every image meaningful alt text in Portuguese).

Also placeholder until Flávia confirms:
- WhatsApp link in `#contact` (currently `https://wa.me/`) — fill in the international-format phone number.
- Email link `mailto:` — fill in if she wants email.
- Hero proof numbers (`+100 alunos`, `5★`, `CREF`) — adjust to the truth.
- Body copy throughout — sensible drafts in both languages, but she should review and edit.

## DNS

Apex `flaribeiro.com` is managed via Terraform in
[`digitalocean-dns`](https://github.com/dynaum/digitalocean-dns) and points to
GitHub Pages' four anycast A records.
