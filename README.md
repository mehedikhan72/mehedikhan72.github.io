# mehedikhan.me

Jekyll site — Jon Barron's academic-page design (via Leonid Keselman's Jekyll port), rebuilt for
Mehedi Khan's portfolio and blog.

- `mehedikhan.me` — portfolio (news, education, work, research, achievements, skills, projects, ECA)
- `mehedikhan.me/blogs` — blog

Content lives in `_data/*.yml` (news, education, work experience, skills, ECA) and three collections:
`_research/`, `_projects/`, `_achievements/`. Each collection entry gets its own detail page; the
front page renders a short blurb + link. Blog posts are Markdown files in `_posts/`.

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000`.

## Deploy

Push to `jekyll-site` — `.github/workflows/deploy.yml` builds the site and force-pushes `_site/` to
`main`, which GitHub Pages serves at the custom domain in `CNAME`. No manual `yarn deploy` step.

## Other branches

- `legacy-react-site` — the previous Create React App + Tailwind implementation of this site, kept for
  reference. Not maintained.
