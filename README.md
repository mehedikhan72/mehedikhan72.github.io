# mehedikhan.me

Jekyll site - Jon Barron's academic-page design (via Leonid Keselman's Jekyll port), rebuilt for
Mehedi Khan's portfolio and blog.

- `mehedikhan.me` - portfolio (news, education, work, research, achievements, skills, projects, ECA)
- `mehedikhan.me/blogs` - blog

Everything is one page - content lives entirely in `_data/*.yml` (news, education, work experience,
research, achievements, skills, projects, ECA), each rendered through `_includes/entry-row.html` or
`_includes/role-block.html`. No per-item detail pages; each entry is a self-contained blurb with
external links (blog post, code, live site, design doc). Blog posts are Markdown files in `_posts/`.

## Local development

```bash
./serve.sh
```

Visit `http://localhost:4000`. (Equivalent to `bundle install && bundle exec jekyll serve`.)

## Deploy

Push to `jekyll-site` - `.github/workflows/deploy.yml` builds the site and force-pushes `_site/` to
`main`, which GitHub Pages serves at the custom domain in `CNAME`. No manual `yarn deploy` step.

## Other branches

- `legacy-react-site` - the previous Create React App + Tailwind implementation of this site, kept for
  reference. Not maintained.
