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

- Ruby 3.0+ (managed via rbenv)
- Bundler

### Setup (First Time)

```bash
# Install rbenv if not already installed
brew install rbenv ruby-build

# Install Ruby 3.2.2
rbenv install 3.2.2
rbenv global 3.2.2

# Restart your terminal, then navigate to the project
cd /Users/sylviavargas/Documents/GitHub/Claude/puertoricangenealogygroup

# Install dependencies
bundle install
```

### Running the Local Server

```bash
# Navigate to the project directory
cd /Users/sylviavargas/Documents/GitHub/Claude/puertoricangenealogygroup

# Initialize rbenv (may be needed if ruby version shows as system)
eval "$(rbenv init -)"

# Start the Jekyll server
bundle exec jekyll serve
```

Visit **<http://127.0.0.1:4000/>** to view the site.

The server will auto-regenerate when you make changes to files.

### Stopping the Server

Press `Ctrl+C` in the terminal, or run:
```bash
pkill -f "jekyll serve"
```

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
