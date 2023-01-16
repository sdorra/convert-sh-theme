# convert-sh-theme

Small utility to convert VSCode Themes to Shiki/Code Hike css variables.
For a detailed description how to use the generated variables, have a look at [sdorra.dev](https://sdorra.dev/posts/2023-01-12-ch-dark-mode)

## Example

```bash
$ npx convert-sh-theme https://raw.githubusercontent.com/shikijs/shiki/main/packages/shiki/themes/dracula.json

style.css
=======================================

:root {
  --shiki-color-text: #F8F8F2;
  --shiki-color-background: #282A36;

  --shiki-token-constant: #BD93F9;
  --shiki-token-string: #8BE9FD;
  --shiki-token-comment: #6272A4;
  --shiki-token-keyword: #FF79C6;
  --shiki-token-parameter: #F8F8F2;
  --shiki-token-function: #8BE9FD;
  --shiki-token-string-expression: #FF79C6;
  --shiki-token-punctuation: #F8F8F2;
  --shiki-token-link: #8BE9FD;
}
```

## Usage

Shiki:

```bash
npx convert-sh-theme path/or/url/to/vscode/theme
```

Code Hike:

```bash
npx convert-sh-theme --code-hike path/or/url/vscode/theme
```

The styles can also be written to a directory instead of output to stdout.

```bash
npx convert-sh-theme --out output/directory path/or/url/vscode/theme
```

For a list of all options and parameters use `npx convert-sh-theme --help`.