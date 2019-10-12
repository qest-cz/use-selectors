# @qest/use-selectors   

Little wrapper around useSelector, that lets you select multiple values in single hook.

## Preferred usage

You should import `initializeUseSelectors` and pass your `Redux` interface into it and then use created function.

```tsx
// utils/useSelectors.ts
import { initializeUseSelectors } from '@qest/useSelectors';
import { ReduxType } from '../yourLocalPathToReduxType';

const initializedUseSelectors = initializeUseSelectors<ReduxType>();

export default initializedUseSelectors;
```

```tsx
// UserList.tsx
import React from 'react';
import useSelectors from 'utils/useSelectors';

const UserList = (props: Props) => {
    const {loading, users} = useSelectors({
        loading: selectLoading,
        users: (state)=> state.users.data
    });

    return null;
};

export default UserList;
```

## no types/pure js usage

```tsx
// UserList.tsx
import React from 'react';
import useSelectors from '@qest/use-selectors';

const UserList = (props: Props) => {
    const {loading, users} = useSelectors({
        loading: selectLoading,
        users: (state)=> state.users.data
    });

    return null;
};

export default UserList;
```
