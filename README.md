# Puerto Rican Genealogy Group Website

**Conectando Raíces, Celebrando Herencia**

A bilingual (English/Spanish) website for the Puerto Rican Genealogy Group community.

## About

The Puerto Rican Genealogy Group is a grassroots community dedicated to helping individuals explore their Puerto Rican ancestry. This website serves as our central hub for:

- Research guides specific to Puerto Rican genealogy
- Curated resources (archives, databases, tools)
- Meeting information and community updates
- Member resources and templates

## Technology

- **Static Site Generator:** Jekyll
- **Hosting:** GitHub Pages
- **Languages:** English & Spanish (full bilingual support)

## Local Development

### Prerequisites

- Ruby 3.0+
- Bundler

### Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/puertoricangenealogygroup.git
cd puertoricangenealogygroup

# Install dependencies
bundle install

# Run locally
bundle exec jekyll serve
```

Visit `http://localhost:4000` to view the site.

## Structure

```
puertoricangenealogygroup/
├── _config.yml          # Jekyll configuration
├── _includes/           # Reusable components (header, footer, etc.)
├── _layouts/            # Page templates
├── _data/               # Data files (YAML)
├── _research-guides/    # Research guide collection
├── _resources/          # Resource collection
├── assets/
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript
│   └── images/         # Brand images and media
├── en/                  # (English pages at root)
├── es/                  # Spanish pages
├── index.md             # English homepage
└── es/index.md          # Spanish homepage
```

## Contributing

We welcome contributions! Please contact us at puertoricangenealogygroup@gmail.com.

## Related Links

- [Looking4MyRoots Blog](https://looking4myroots.com)
- [Email](mailto:puertoricangenealogygroup@gmail.com)

## License

Content © Puerto Rican Genealogy Group. All rights reserved.
