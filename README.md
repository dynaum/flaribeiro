# flaribeiro.com

Sales page for Shine by Fla, the 12-week coaching program by Flavia Ribeiro.
Portuguese at `/` and English at `/en/`, plain HTML and CSS, no build step. The
only JavaScript is Google Analytics and a redirect for old `?lang=en` links. Deployed on GitHub Pages at [flaribeiro.com](https://flaribeiro.com).

## Local preview

```bash
python3 -m http.server 8000
```

## Files

- `index.html`: Portuguese page (hero, pain points, how it works, gallery, coaching, about, plans, FAQ, final call)
- `en/index.html`: English page. Keep copy, prices and structured data in sync with the Portuguese page
- `styles.css`: design tokens via CSS custom properties, values from the design mockup
- `favicon.svg`: sparkle mark on the brand color
- `CNAME`: `flaribeiro.com`
- `images/`: page photos

## Content still missing

- Testimonials: the "Elas começaram de onde você está" section sits in an HTML comment in `index.html`. Activate it once real, authorized testimonials exist.
- Plan buttons open WhatsApp with a message naming the plan. Swap the `wa.me` links for checkout links if a payment page gets added.

## DNS

Apex `flaribeiro.com` is managed via Terraform in
[`digitalocean-dns`](https://github.com/dynaum/digitalocean-dns) and points to
GitHub Pages' four anycast A records.
