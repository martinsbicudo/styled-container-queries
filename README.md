<div align="center">

<img title="styled-container-queries" alt="styled-container-queries" src="https://github.com/martinsbicudo/styled-container-queries/blob/0c232caf216f73caddfe1868fc49e8bd4f1af179/public/logo.png" width="225px">

<br>
<br>

![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/martinsbicudo/styled-container-queries/pr_build_check.yml)
![minified size](https://img.shields.io/bundlephobia/min/styled-container-queries)
![npm](https://img.shields.io/npm/v/styled-container-queries)

<p>Simple lib to use container queries with <a href="https://styled-components.com" target="_blank">styled-components</a></p>
</div>

<br>

# Inspiration

Inspired by [styled-breakpoints](https://github.com/mg901/styled-breakpoints)

# Compatibility

- Styled Components >= `6.0.0`
- Browsers: [check here](https://caniuse.com/css-container-queries)

# Bundle Analyzer

- [main](https://htmlpreview.github.io/?https://github.com/martinsbicudo/styled-container-queries/blob/main/parcel-bundle-reports/main.html)
- [types](https://htmlpreview.github.io/?https://github.com/martinsbicudo/styled-container-queries/blob/main/parcel-bundle-reports/types.html)

# Quick Menu

- [how to use](#how-to-use)
- [documentation](#documentation)
- [how to contribute](#how-to-contribute)
- [license](#license)

# How to use

### Install

```shell
npm i styled-container-queries

#or

yarn add styled-container-queries

#or

pnpm add styled-container-queries
```

### Simple example

`theme.ts`

```tsx
import { createStyledContainerQueries } from "styled-container-queries";

const breakpoints = {
  sm: "500px",
  md: "700px",
  lg: "900px",
} as const;

const containerTheme = createStyledContainerQueries(breakpoints);

const theme = {
  ...containerTheme,
  ...styledTheme,
};

export { theme };
```

`styled.ts`

```tsx
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  ${({ theme }) => theme.container.inline.up("sm")} {
    & > p {
      background-color: red;
    }
  }

  ${({ theme }) => theme.container.inline.down("sm")} {
    & > p {
      background-color: yellow;
    }
  }
`;
```

`main.tsx`

```tsx
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import * as S from "./styled.ts";

const Main = () => (
  <ThemeProvider theme={theme}>
    <S.Container>
      <p>example text</p>
    </S.Container>
  </ThemeProvider>
);

export { Main };
```

<br>

# Documentation

- [theme structure](#theme-structure)
- [container types](#container-types)
  - [inline-size](#inline-size)
  - [size](#size)
- [container queries](#container-queries)
  - [min-width](#min-width)
  - [max-width](#max-width)
  - [exact breakpoint](#exact-breakpoint)
  - [between breakpoint](#between-breakpoint)
- [only attrs](#only-attrs)
- [only query](#only-query)
- [named container](#named-container)
  - [name](#container-name)
  - [context](#container-context)
  - [both](#container-name-and-context)

## Theme structure

Create theme

```ts
import { createStyledContainerQueries } from "styled-container-queries";

const breakpoints = {
  sm: "200px",
} as const;

const containerTheme = createStyledContainerQueries(breakpoints);
```

```ts
const containerTheme = {
  //return query and container-type: inline-size
  inline: {
    up,
    down,
    only,
    between,
    attrs,
  },
  //return query and container-type: size
  size: {
    up,
    down,
    only,
    between,
    attrs,
  },
  //return only query without `container-type` and `container-name`
  query: {
    up,
    down,
    only,
    between,
  },
};
```

## Container types

### Inline Size

```tsx
const Container = styled.div`
  width: 100%;

  ${({ theme }) => theme.container.inline.up("md")} {
    background-color: red;
  }
`;
```

<details><summary><strong>Result</strong></summary>

```css
container-type: inline-size;

@container (min-width: $MD_SIZE) {
  background-color: red;
}
```

</details>
<hr/>

### Size

```tsx
const Container = styled.div`
  width: 100%;

  ${({ theme }) => theme.container.size.up("md")} {
    background-color: red;
  }
`;
```

<details><summary><strong>Result</strong></summary>

```css
container-type: size;

@container (min-width: $MD_SIZE) {
  background-color: red;
}
```

</details>

## Container queries

### Min-width

```tsx
const Container = styled.div`
  width: 100%;

  ${({ theme }) => theme.container.inline.up("md")} {
    background-color: red;
  }
`;
```

<details><summary><strong>Result</strong></summary>

```css
container-type: inline-size;

@container (min-width: $MD_SIZE) {
  background-color: red;
}
```

</details>
<hr/>

### Max-width

```tsx
const Container = styled.div`
  width: 100%;

  ${({ theme }) => theme.container.inline.down("md")} {
    background-color: red;
  }
`;
```

<details><summary><strong>Result</strong></summary>

```css
container-type: inline-size;

@container (max-width: $MD_SIZE) {
  background-color: red;
}
```

</details>
<hr/>

### Exact breakpoint

```tsx
const Container = styled.div`
  width: 100%;

  ${({ theme }) => theme.container.inline.only("md")} {
    background-color: red;
  }
`;
```

<details><summary><strong>Result</strong></summary>

Whether find next largest size

```css
container-type: inline-size;

@container (min-width: $MD_SIZE) and (max-width: $NEXT_SIZE - 0.2) {
  background-color: red;
}
```

Else

```css
container-type: inline-size;

@container (min-width: $MD_SIZE) {
  background-color: red;
}
```

</details>
<hr/>

### Between breakpoint

```tsx
const Container = styled.div`
  width: 100%;

  ${({ theme }) => theme.container.inline.between(["sm", "md"])} {
    background-color: red;
  }
`;
```

<details><summary><strong>Result</strong></summary>

```css
container-type: inline-size;

@container (min-width: $SM_SIZE) and (max-width: $MD_SIZE - 0.2) {
  background-color: red;
}
```

</details>

## Only Attrs

> With this method you get only container attrs

```tsx
const Container = styled.div`
  width: 100%;

  ${({ theme }) => theme.container.inline.attrs()}
`;
```

```tsx
const Container = styled.div`
  width: 100%;

  ${({ theme }) => theme.container.inline.attrs("name")}
`;
```

```tsx
const Container = styled.div`
  width: 100%;

  ${({ theme }) => theme.container.size.attrs("name")}
`;
```

<details><summary><strong>Results</strong></summary>

```css
container-type: inline-size;
```

```css
container-type: inline-size;
container-name: name;
```

```css
container-type: size;
container-name: name;
```

</details>

## Only Query

> With this method you get only container queries (`up`, `down`, `only` and `between`)

```tsx
const Container = styled.div`
  width: 100%;

  ${({ theme }) => theme.container.query.up("md")} {
    background-color: red;
  }
`;
```

<details><summary><strong>Result</strong></summary>

```css
@container (min-width: $MD_SIZE) {
  background-color: red;
}
```

</details>

## Named container

### Container name

```tsx
const Container = styled.div`
  width: 100%;

  ${({ theme }) => theme.container.inline.up("md", "name")} {
    background-color: red;
  }
`;
```

```tsx
const Container = styled.div`
  width: 100%;

  ${({ theme }) => theme.container.inline.between(["sm", "md"], "name")} {
    background-color: red;
  }
`;
```

<details><summary><strong>Results</strong></summary>

```css
container-type: inline-size;
container-name: name;

@container (min-width: $MD_SIZE) {
  background-color: red;
}
```

```css
container-type: inline-size;
container-name: name;

@container (min-width: $SM_SIZE) and (max-width: $MD_SIZE - 0.2) {
  background-color: red;
}
```

</details>
<hr/>

### Container context

```tsx
const Container = styled.div`
  width: 100%;

  ${({ theme }) => theme.container.inline.up("md", ".context")} {
    background-color: red;
  }
`;
```

```tsx
const Container = styled.div`
  width: 100%;

  ${({ theme }) => theme.container.inline.between(["sm", "md"], ".context")} {
    background-color: red;
  }
`;
```

<details><summary><strong>Results</strong></summary>

```css
container-type: inline-size;

@container context (min-width: $MD_SIZE) {
  background-color: red;
}
```

```css
container-type: inline-size;

@container context (min-width: $SM_SIZE) and (max-width: $MD_SIZE - 0.2) {
  background-color: red;
}
```

</details>
<hr/>

### Container name and context

#### 1. Simple example

```tsx
const Container = styled.div`
  width: 100%;

  ${({ theme }) => theme.container.inline.up("md", "name.context")} {
    background-color: red;
  }
`;
```

```tsx
const Container = styled.div`
  width: 100%;

  ${({ theme }) =>
    theme.container.inline.between(["sm", "md"], "name.context")} {
    background-color: red;
  }
`;
```

<details><summary><strong>Results</strong></summary>

```css
container-type: inline-size;
container-nane: name;

@container context (min-width: $MD_SIZE) {
  background-color: red;
}
```

```css
container-type: inline-size;
container-name: name;

@container context (min-width: $SM_SIZE) and (max-width: $MD_SIZE - 0.2) {
  background-color: red;
}
```

</details>
<hr/>

#### 2. Complex example

`styled.ts`

```tsx
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  ${({ theme }) => theme.container.inline.up("md")} {
    p {
      background-color: red;
    }
  }
`;

export const SubContainer = styled.div`
  width: 50%;

  ${({ theme }) => theme.container.inline.up("md", "container")} {
    background-color: pink;
  }
`;

export const SubSubContainer = styled.div`
  ${({ theme }) => theme.container.inline.up("md", ".container")} {
    background-color: yellow;
  }
`;
```

`component.tsx`

```tsx
import * as S from "./styled.ts";

const Component = () => (
  <S.Container>
    <p>container</p>
    <S.SubContainer>
      <S.SubSubContainer>
        <p>sub-sub-container</p>
      </S.SubSubContainer>
    </S.SubContainer>
  </S.Container>
);
```

<details><summary><strong>Result</strong></summary>

<img title="container-name-and-context-example" alt="container-name-and-context-example" src="https://github.com/martinsbicudo/styled-container-queries/blob/0c232caf216f73caddfe1868fc49e8bd4f1af179/public/example.gif"/>

</details>
<br>

# How to contribute

To contribute, make sure to follow the steps bellow:

1. Create a new branch:

   ```shell
    git checkout -b feat/your-new-feature
   ```

2. Make your changes, add unit tests (with `jest`) and test with `npm link`

   On styled-container-queries project:

   ```shell
    npm link
   ```

   On your app/project:

   ```shell
    npm link styled-container-queries
   ```

   This will create a symlink into your `node_modules` app, and you can test iteratively. You can check more about npm-link [here](https://docs.npmjs.com/cli/v9/commands/npm-link)

3. Before to push your changes to origin, open your pull request and fill all required fields.
   1. Make sure to fill the **Release** section with what your pull request changes. **This section is required to merge pull request.**
4. Set a _required_ `semver` label according to your change:
   1. `semver:patch`: used when you submit a fix to a bug, enhance performance, etc;
   2. `semver:minor`: used when you submit a new component, new feature, etc;
   3. `semver:major`: used when you submit some breaking change, etc;
   4. `semver:prerelease`: used when you submit a prerelease (ex: `1.0.0-beta.1`);
   5. `semver:bypass`: used to update docs, or something that doesn’t affect the build.

> Info: Once you have merged your pull request, with all required fields, GitHub Actions will be responsible to create a new build and publish on stage environment.

# License

MIT License
