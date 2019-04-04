# BES Playbooks

BES Playbooks is a project to display "Playbooks" or user guides for BES disciplines. All content is stored in markdown files and compiled to static html with `MkDocs`.

## Scripts

- `start`: Start local server
- `css`: Bundles css to a single file. If editing files during development, run this in watch mode: `npm run css -- --watch`
- `deploy`: Compiles current working tree in to static code, which is added to the `gh-pages` branch. This static code is then pushed to Github where it is served. By default this assumes your remote is named `origin`. If your remote is named differently use this flag `mkdocs gh-deploy --remote-name [remote-name]`
- `stylelint`: Lint the css for errors. This can also fix certain errors `npm run stylelint -- --fix`


## Setup

### Install Git

Follow the [directions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) for your OS to install Git.

### Clone this repo

Click the green "Clone or download" button and copy the repo URL. Navigate in your terminal to the desired project directory and run: `git clone <url>`.

It is important that you have git available in the command line. MKDocs deploys use Git to store the compiled web files and push them to Github for serving.

### Install MKDocs

Follow the [install directions](https://www.mkdocs.org/#installation) for `MkDocs`.

### Install Node.js & npm

This project uses code from npm to lint and build the css. Follow the [instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) from npm if you do not have them installed.

From your project directory, run `npm install` to download all dependencies. You will only need to do this if the `dependencies` or `devDependencies` in `package.json` are updated. This creates a folder `node_modules` which contains the downloaded code. This folder should not be included in source control.

### Running Locally

In 2 terminals:
- Run `npm run css -- --watch`. This will watch the source `bes-theme/css` files and compile them to `bes-theme/main.css` when files change
- Run `npm start` to run the local server. When any files change, including the compiled css, the web page will live reload.

## Structure

### `/bes-theme`

This is the theme folder for the site. This project uses a custom theme, `bes-theme`. It is based off of the [readthedocs](https://github.com/mkdocs/mkdocs/tree/master/mkdocs/themes/readthedocs) theme.

All of the css and js was removed from that project. The template files have been modified to suit this project. There are many vestigial items left in these templates unfortunately. Cleaning these templates should be looked at if this playbook is revisited.


### `/docs`

This folder contains all the content and images for the project. Each playbook has a folder for its markdown files. The `_assets` folder contains images.


## Authoring

Content for this playbook is wrote in [Markdown](https://daringfireball.net/projects/markdown/syntax). Markdown is a plain-text, easy to read, format for creating HTML content. It uses simple symbols (`#`, `>`, `_`, etc) to signify html elements.

This README is created using markdown, the above title "Authoring" is wrote as `## Authoring`. This creates an "H2" element. White space denotes paragraphs and **to make something bold**, two `**` wrapping text makes it bold, like `**I'm bold**, you're not`.

In order to style this playbook unique combinations of markdown are used to indicate styling.

### Headers

#### Page Header

```
> # **5.2** Global Navigation
```

For the page header to appear properly, it must be the first item in a page. The `>` indicates a `blockquote`. This contains an `h1`. The section number is bolded. This combination is needed to appear properly.

### Images

```
![5.2 Global Nav](../_assets/5.2_nav_example_03.png)
```

This is the markdown for the most basic image. First the `!` indicates this is an image, and not a link. The text in the `[]` bracket will become the image `title` attribute. Finally the text in the `()` is the path to the image. The image path should be relative to the current markdown file.

All the images in the UX Playbook are served as a standard size and "2x" size for higher DPI displays.

```
![5.2 Global Nav](../_assets/5.2_nav_example_03.png){srcset="../../_assets/5.2_nav_example_03@2x.png 2x"}
```

This image adds some more information. The `{}` after the image is a unique syntax enabled by the [attribute lists](https://python-markdown.github.io/extensions/attr_list/) plugin. In this case it applies a `srcset` to the image. This `sourceset` image is twice the size of the original, providing a crisper image on higher DPI displays.

Notice the different number of `../` in the image paths. Because of how MKDocs processes links, they need to be different. The first path will get processed by MKDocs and create a full URL for the image once built. MKDocs does not process the `srcset` attribute though and the URL needs to be relative to the final compiled location, which happens to be 2 directories up.

### Image Layouts

There are a collection of styles for images to use in this playbook. Some stretch the full way across the page. Some are side by side and centered. Certain patterns must be followed to get them to display correctly and scale to mobile sizes.

#### Single Image

```
_![5.2 Global Nav](../_assets/5.2_nav_example_03.png)_
```

This is the most basic image layout. The image is wrapped in `_` characters. These will create an `<em>` tag around the image, allowing to it scale properly on smaller devices. Every image should be wrapped in underscores to create this `<em>`.

#### Centered Images

```
_![5.2 Global Nav](../_assets/5.2_nav_example_03.png)_
{.center}
```

Again the curly brackets are used to add some extra info. Here this will apply the class "center" to the paragraph which surrounds the image. You can place one or many images here, they will be centered horizontally with some padding between them.


#### Space Between

```
_![5.2 Global Nav](../_assets/5.2_nav_example_03.png)_
_![5.2 Global Nav](../_assets/5.2_nav_example_04.png)_
{.space-between}
```

The "space-between" class works with one or more images. It will distribute them evenly in the horizontal direction.

[Example](https://arraybesplaybooks.github.io/ArrayBESPlaybook/ux/4-3-grids/)

#### Align Bottom

```
_![5.2 Global Nav](../_assets/5.2_nav_example_03.png)_
_![5.2 Global Nav](../_assets/5.2_nav_example_04.png)_
{.align-bottom}
```
The "align-bottom" class will justify the images to the bottom of the row. This can be useful for layouts with images of different heights.

[Example](https://arraybesplaybooks.github.io/ArrayBESPlaybook/ux/4-12-mobile/#phone-vs-tablet-differences)

#### Float

```
_![5.2 Global Nav](../_assets/5.2_nav_example_03.png)_
_![5.2 Global Nav](../_assets/5.2_nav_example_04.png)_
_![5.2 Global Nav](../_assets/5.2_nav_example_05.png)_
_![5.2 Global Nav](../_assets/5.2_nav_example_06.png)_
{.float}
```

The "float" class is useful when display many images at once. They behave in a cascade, wrapping to a new line if it is too long.

[Example](https://arraybesplaybooks.github.io/ArrayBESPlaybook/ux/5-8-visualizations/#machine-learning)

#### Padded

```
_![5.2 Global Nav](../_assets/5.2_nav_example_03.png)_
{.padded}
```

Using the "padded" class will apply spacing above and below the image container.

#### Narrow

```
_![5.2 Global Nav](../_assets/5.2_nav_example_03.png)_
_![5.2 Global Nav](../_assets/5.2_nav_example_04.png)_
{.narrow}
```

The "narrow" class will create a smaller column than the main content area to display the images in.

[Example](https://arraybesplaybooks.github.io/ArrayBESPlaybook/ux/5-5-modules/#designing-for-editorial-content)

#### Extended

```
_![5.2 Global Nav](../_assets/5.2_nav_example_03.png)_
_![5.2 Global Nav](../_assets/5.2_nav_example_04.png)_
{.extended}
```

The "extended" class will expand the content area to the right of the main content column.

[Example](https://arraybesplaybooks.github.io/ArrayBESPlaybook/ux/4-3-grids/#defining-pixels)


#### Wide

```
_![5.2 Global Nav](../_assets/5.2_nav_example_04.png)_
{.wide}
```

The "wide" class will expand the content to the right and left of the main content column. This is often used to one very wide image.

[Example](https://arraybesplaybooks.github.io/ArrayBESPlaybook/ux/4-5-headers/#desktop-navigation)

#### Well

```
_![4.11 Buttons](../_assets/4.11_button_states_clicked.png)_
_![4.11 Buttons](../_assets/4.11_button_states_disabled.png)_
{.well}
```
The "well" class creates a padded area with a grey background. This treatment can be used to make images stand out. 

[Example](https://arraybesplaybooks.github.io/ArrayBESPlaybook/ux/4-11-buttons/#button-emphasis-states)

#### Combining Styles

The above classes can be combined to create unique layouts.

```
_![4.8 Color Usage](../_assets/4.8_color_usage_cta.png)_
_![4.8 Color Usage](../_assets/4.8_color_usage_alert.png)_
_![4.8 Color Usage](../_assets/4.8_color_usage_checkmark.png)_
_![4.8 Color Usage](../_assets/4.8_color_usage_navigation.png)_
{.wide .well .space-between}
```

Here a wide (`.wide`) column will extend to the left and right, in a grey padded container (`.well`) and space themselves out evenly (`.space-between`).

[Example](https://arraybesplaybooks.github.io/ArrayBESPlaybook/ux/4-8-color/)



## Custom extensions

Extensions to the Python Markdown interpreter

- https://python-markdown.github.io/extensions/
- https://python-markdown.github.io/extensions/attr_list/
- https://facelessuser.github.io/pymdown-extensions/extensions/extrarawhtml/


## Templating

Theme templates use Jinja for templating and logic.

http://jinja.pocoo.org/docs/2.10/


## Branches

- `master` Final work for release
- `develop` Work in progress
- `gh-pages` Branch generated by MkDocs for deploying on GitHub. Do not check out or edit!


## TODO

- Create better base templates so main and home pages can be shared