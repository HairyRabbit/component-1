# Avatar

## Usage

### basic usage

```tsx
<Avatar src="/path/to/avatar.png" />
```

use default render when image loading or  network error:

```tsx
<Avatar src="/path/to/avatar.png" fallback="/path/to/fallback.png" />
```

### custom render

render text

```tsx
<Avatar>
  AB
</Avatar>
```

render icon:

```tsx
<Avatar>
  <Icon />
</Avatar>
```


## Properties


## Environment

### AVATAR_ENDPOINT

The source url endpoint, e.g. set `AVATAR_ENDPOINT=/api` and `src="/foo"`, the url will become to `/api/foo`.

