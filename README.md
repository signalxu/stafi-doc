# Install

## Install Node and pnpm

Install Node.js, and run `npm install pnpm -g`

## Install Dependencies & Local Development

First, run `pnpm i` to install the dependencies.

Then, run `pnpm dev` to start the development server and visit localhost:3000.

## Deploy

run `pnpm build` or use Github Action

# Guide

nextra guide: https://nextra.site/docs/guide

## Markdown

- h1: `#`
- h2: `##`
- h3: `###`
- a:`[StaFi](https://stafi.io "title")`
- blockquote: `> A greater than`
- br: `\`
- em: `* *`
- img: `![Alt text](/image/logo.png "title")`
- li: `- StaFi`
- ol: ``1.`
- strong: ` **  ** `
- strikethrough: ` ~~  ~~ `

**Task List**

```
- [ ] rBNB
- [x] rETH
```

**Table**

```
| Syntax        | Description |   Test Text |
| :------------ | :---------: | ----------: |
| Header        |    Title    | Here's this |
| Paragraph     |    Text     |    And more |
| Strikethrough |             |    ~~Text~~ |
```

**Latex**

```
The **Pythagorean equation**: $a=\sqrt{b^2 + c^2}$.
```


## Component

**Steps**

```
import { Steps } from 'nextra-theme-docs'
 
<Steps>
 
### Step 1
 
Contents for step 1.
 
### Step 2
 
Contents for step 2.
 
</Steps>
```

**Tabs**

```
import { Tab, Tabs } from 'nextra-theme-docs'
 
<Tabs items={['pnpm', 'npm', 'yarn']} defaultIndex="1">
  ...
</Tabs>
```

**Callout**

```
import { Callout } from 'nextra/components'
 
<Callout type="info" emoji="ℹ️">
  Today is Friday.
</Callout>
```

## Image

- Image path: `public/image`
- Use: `![Alt text](/image/logo.png "title")`

# Contribute

Docs is an open-source project, and anyone can contribute to it.

- Edit the markdown doc.
- Submit a pull request.
- Review and merge the pull request.

# License

This project is licensed under the MIT License.
