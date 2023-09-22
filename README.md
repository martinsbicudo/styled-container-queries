<div align="center">

<img title="styled-container-queries" alt="styled-container-queries" src="https://github.com/martinsbicudo/styled-container-queries/blob/0c232caf216f73caddfe1868fc49e8bd4f1af179/public/logo.png" width="225px">

<br>
<br>

<a href="https://github.com/mg901/styled-breakpoints/actions?query=workflow%3Arelease">
<img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/mg901/styled-breakpoints/release.yml?branch=master&style=flat-square">
</a>
<a href="https://coveralls.io/github/mg901/styled-breakpoints?branch=master">
<img alt="coverage status" src="https://img.shields.io/coverallsCoverage/github/mg901/styled-breakpoints?style=flat-square">
</a>
<a href="https://bundlephobia.com/package/styled-breakpoints">
<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/styled-breakpoints?style=flat-square">
</a>

<a href="https://img.shields.io/npm/dm/styled-breakpoints?style=flat-square">
<img alt="npm downloads" src="https://img.shields.io/npm/dm/styled-breakpoints?style=flat-square">
</a>
<a href="https://www.npmjs.com/package/styled-breakpoints">
<img alt="npm version" src="https://img.shields.io/npm/v/styled-breakpoints.svg?style=flat-square">
</a>

<br>
<br>

<p>Simple lib to use container queries with <a href="https://styled-components.com" target="_blank">styled-components</a></p>
</div>

<br>

# Inspiration

Inspired by [styled-breakpoints](https://github.com/mg901/styled-breakpoints)

# Compatibility

- Styled Components >= `6.0.0`
- Browsers: [check here](https://caniuse.com/css-container-queries)

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

# License

MIT License
