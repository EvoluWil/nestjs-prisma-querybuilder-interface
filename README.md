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

  - use in PARAMS with **AXIOS**

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
      sort: { field: name, criteria: 'asc' },
      page: 1,
      limit: 20
    };

    axios.get('http://example.com/movies', {
      params: query,
      paramsSerializer: params => QueryString(params)
    });
    ```

    <br/>

  - use in URL

    <br/>

    ```tsx
    import { QueryString } from 'nestjs-prisma-querybuilder-interface';

    const query = QueryString({
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

- **Property**

  - Usage

    | Name     | Type              | exemple                                          |
    | -------- | ----------------- | ------------------------------------------------ |
    | select   | string            | select: 'name email',                            |
    | page     | number            | page: 2,                                         |
    | limit    | number            | limit: 20,                                       |
    | sort     | SortFields        | sort: {field: string, criteria: 'asc'},          |
    | populate | Populate [ ]      | populate: [{path: 'car', select: 'model plate'}] |
    | filter   | FiltersFields [ ] | filter: [{name: 'jonas'}, {value: { gte: 4 }}]   |

      <br/>

- **Exported Interfaces**

  - **Query**

    is a full types

  - **Populate**

    | Name     | Type         | exemple                                     |
    | -------- | ------------ | ------------------------------------------- |
    | path     | string       | path: 'picture'                             |
    | select   | string       | select: 'url extension',                    |
    | populate | Populate [ ] | populate: [{path: 'post', select: 'title'}] |

  <br/>

  - **FilterFields**

    | Name | Type       | exemple                                                             |
    | ---- | ---------- | ------------------------------------------------------------------- |
    | x    | Filter     | {name: { contains: 'Jonas' } }                                      |
    | and  | Filter [ ] | {and: [{name: { contains: 'Jonas' }, {active: true }}]}             |
    | or   | Filter [ ] | {or: [{post: { contains: 'hello' }, {post: { contains: 'world' }}]} |

    - **Filter**

      { key: value } with Operator 'equals'

      exemple: { postId: 147 }

      or

      { key: { operator: value } }

      exemple: { postId: { startsWith : 147 } }

      <br/>

    - **Operators**

      contains, endsWith, startsWith, equals, gt, gte, in, lt, lte ,not, notIn

  <br/>

- **Full usage exemple**

  ```tsx
  QueryString({
    select: 'firstName picture',
    populate: [
      {
        path: 'car',
        select: 'model plate',
        populate: [
          {
            path: 'brand',
            select: 'name'
          }
        ]
      }
    ],
    filter: [
      {
        createdAt: { lte: new Date() }
      },
      {
        or: [
          {
            role: 'admin'
          },
          {
            active: true
          }
        ]
      },
      {
        and: [
          {
            firstName: 'Matt'
          },
          {
            lastName: { contains: 'Ryan' }
          }
        ]
      }
    ]
  });
  ```

### END

- Nestjs/Prisma Querybuilder Interface is ISC licensed.

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FWillian-Rodrigues%2Fnestjs-prisma-querybuilder-interface&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
