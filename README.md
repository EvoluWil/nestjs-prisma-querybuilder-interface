# Nestjs/prisma-querybuilder-interface

![https://nestjs.com/img/logo_text.svg](https://nestjs.com/img/logo_text.svg)

<br/>

## Use case

### this is a frontend interface to https://github.com/HarielThums/nestjs-prisma-querybuilder

<br/>

### Documentação / Documentation

- **How to install it?**

  ```sh
  npm install --save nestjs-prisma-querybuilder-interface
  # or
  yarn add nestjs-prisma-querybuilder-interface
  ```

- **How to use it?**

  ```tsx
  import { Querybuilder } from 'nestjs-prisma-querybuilder-interface';

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

  fetch(`http://example.com/movies.json?${query}`).then(res =>
    console.log(res)
  );

  // with axios

  axios
    .get(`http://example.com/movies.json?${query}`)
    .then(res => console.log(res));
  ```

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

- **Populate**

| Name     | Type     | exemple                                     |
| -------- | -------- | ------------------------------------------- |
| path     | string   | path: 'picture'                             |
| select   | string   | select: 'url extencion',                    |
| populate | Populate | populate: [{path: 'post', select: 'title'}] |

- **FilterFields**

| Name     | Type                                        | exemple                              |
| -------- | ------------------------------------------- | ------------------------------------ |
| path     | string                                      | path: 'picture'                      |
| value    | string                                      | value: 'url',                        |
| type     | 'string' or 'boolean' or 'number' or 'date' | type: 'number', ` => default string` |
| operator | string                                      | operator: 'equals',                  |

- **Operators**

contains, endsWith, startsWith, equals, gt, gte, in, lt, lte ,not, notIn

### END

- Nestjs/Prisma Querybuilder Interface is ISC licensed.
