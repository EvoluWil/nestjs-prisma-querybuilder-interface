# Nestjs/prisma-querybuilder-interface

![https://nestjs.com/img/logo_text.svg](https://nestjs.com/img/logo_text.svg)

<br/>

## Use case

### this is a frontend interface to [nestjs-prisma-querybuilder](https://github.com/HarielThums/nestjs-prisma-querybuilder)

<br/>

### Documentação / Documentation

- **How to install it?**

  ```sh
  npm install --save nestjs-prisma-querybuilder-interface
  # or
  yarn add nestjs-prisma-querybuilder-interface
  ```

- **How to use it?**

- use in PARAMS with

  - AXIOS

  <br/>

  ```tsx
  import { QueryString, Query } from 'nestjs-prisma-querybuilder-interface';

  const query: Query = {
    select: 'message title date',
    populate: [
      {
        path: 'user',
        select: 'name email'
      }
    ],
    sort: 'asc',
    sortField: 'date',
    limit: 20
  };

  axios.get('http://example.com/movies', {
    params: query,
    paramsSerializer: params => QueryString(params)
  });
  ```

  - ANGULAR

    <br/>

  ```tsx
  import { HttpParams } from '@angular/common/http';
  import { QueryString, Query } from 'nestjs-prisma-querybuilder-interface';

  const query: Query = {
    select: 'message title date',
    populate: [
      {
        path: 'user',
        select: 'name email'
      }
    ],
    sort: 'asc',
    sortField: 'date',
    limit: 20
  };

  const params = new HttpParams({ fromString: QueryString(params) });

  axios.get('http://example.com/movies', {
    params // params: params
  });
  ```

  <br/>

- use in URL

  <br/>

  ```tsx
  import { QueryString } from 'nestjs-prisma-querybuilder-interface';

  const query = QueryToUrl({
    select: 'message title date',
    populate: [
      {
        path: 'user',
        select: 'name email'
      }
    ],
    sort: 'asc',
    sortField: 'date',
    limit: 20
  });

  fetch(`http://example.com/movies?${query}`);

  // with axios

  axios.get(`http://example.com/movies?${query}`);
  ```

  <br/>

- **Properts**

| Name      | Type                   | exemple                                          |
| --------- | ---------------------- | ------------------------------------------------ |
| select    | string                 | select: 'name email',                            |
| page      | number                 | page: 2,                                         |
| limit     | number                 | limit: 20,                                       |
| sort      | 'asc' or 'desc'        | sort: 'asc',                                     |
| sortField | string                 | sortField: 'name',                               |
| populate  | Populate               | populate: [{path: 'car', select: 'model plate'}] |
| operator  | 'and' or 'or' or 'not' | operator: 'and' ` => use with filter`            |
| filter    | FiltersFields[]        | filter: [{path: 'name', value: 'willian'}]       |

  <br/>

- **Populate**

| Name     | Type     | exemple                                     |
| -------- | -------- | ------------------------------------------- |
| path     | string   | path: 'picture'                             |
| select   | string   | select: 'url extencion',                    |
| populate | Populate | populate: [{path: 'post', select: 'title'}] |

  <br/>

- **FilterFields**

| Name     | Type                                        | exemple                              |
| -------- | ------------------------------------------- | ------------------------------------ |
| path     | string                                      | path: 'picture'                      |
| value    | string                                      | value: 'url',                        |
| type     | 'string' or 'boolean' or 'number' or 'date' | type: 'number', ` => default string` |
| operator | string                                      | operator: 'equals',                  |

  <br/>

- **Operators**

contains, endsWith, startsWith, equals, gt, gte, in, lt, lte ,not, notIn

  <br/>

### END

- Nestjs/Prisma Querybuilder Interface is ISC licensed.
