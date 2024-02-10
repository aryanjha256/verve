---
title: "Astro"
description: "The web framework for content-driven websites."
pubDate: "Jul 13 2022"
---

Astro is an open-source web framework designed for content-heavy websites, such as landing pages, blogs, and more. It offers a unique approach to building websites by combining the best of static site generators and dynamic frameworks. In this article, we will explore the key features and benefits of Astro, as well as how to get started with using it.

![Astro](../../assets/gold.jpg)

## Markdown and MDX Support

Astro includes built-in support for standard Markdown files, which can also include frontmatter YAML description and tags. Additionally, Astro supports MDX, a syntax that allows you to insert components into your Markdown content. This integration enables you to create rich, interactive content without the need for extensive JavaScript knowledge.

## Content Collections

Content collections help you organize your content, validate your frontmatter, and provide automatic TypeScript type-safety while working with your content. You can manage your Markdown and MDX files in Astro in a special `src/content/` folder.

### Configuring Markdown and MDX

Astro's Markdown support is powered by remark, a powerful parsing and processing tool with an active ecosystem. Other Markdown parsers like Pandoc and markdown-it are not currently supported. Astro applies the GitHub-flavored Markdown and SmartyPants plugins by default, which bring some niceties like generating clickable links from text.

### Headless CMS Authoring

Astro allows you to fetch content from headless CMS platforms like Storyblok, WordPress, or Contentful. This enables you to write blog posts in your existing CMS and have them automatically synced with your Astro project.

## Getting Started with Astro

To get started with Astro, you can create a new project using the following command:

```bash
npx create-astro
```

This will set up a basic Astro project with a default layout and some sample content. You can then start adding your own Markdown and MDX files to the `src/content/` folder.

## Conclusion

Astro is a powerful and flexible web framework that offers a unique approach to building content-heavy websites. Its support for Markdown and MDX, content collections, and headless CMS authoring make it an excellent choice for developers looking to create engaging and interactive content. By following the steps outlined in this guide, you can easily get started with Astro and begin building your own content-rich websites.
