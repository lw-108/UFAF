# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useCreateApplication, useGetApplication, useUpdateApplicationStatus, useListApplications } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useCreateApplication(createApplicationVars);

const { data, isPending, isSuccess, isError, error } = useGetApplication(getApplicationVars);

const { data, isPending, isSuccess, isError, error } = useUpdateApplicationStatus(updateApplicationStatusVars);

const { data, isPending, isSuccess, isError, error } = useListApplications();

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createApplication, getApplication, updateApplicationStatus, listApplications } from '@dataconnect/generated';


// Operation CreateApplication:  For variables, look at type CreateApplicationVars in ../index.d.ts
const { data } = await CreateApplication(dataConnect, createApplicationVars);

// Operation GetApplication:  For variables, look at type GetApplicationVars in ../index.d.ts
const { data } = await GetApplication(dataConnect, getApplicationVars);

// Operation UpdateApplicationStatus:  For variables, look at type UpdateApplicationStatusVars in ../index.d.ts
const { data } = await UpdateApplicationStatus(dataConnect, updateApplicationStatusVars);

// Operation ListApplications: 
const { data } = await ListApplications(dataConnect);


```