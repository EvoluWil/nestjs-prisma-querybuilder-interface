# Nestjs/prisma-querybuilder-interface

![https://nestjs.com/img/logo_text.svg](https://nestjs.com/img/logo_text.svg)

<br/>

## Use case

### this is a frontend interface to [nestjs-prisma-querybuilder](https://github.com/HarielThums/nestjs-prisma-querybuilder)

<br/>

### What's new

- **Filter in Populate**

  You can filter inside populate

- **Insensitive Case**

  now in the filter you can search with insensitive case

- **Verbose**

  You can filter and populate with verbose method or non verbose

<hr>

### Documentation

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

    | Name     | Type       | exemple                                          |
    | -------- | ---------- | ------------------------------------------------ |
    | select   | string     | select: 'name email',                            |
    | page     | number     | page: 2,                                         |
    | limit    | number     | limit: 20,                                       |
    | sort     | SortFields | sort: {field: string, criteria: 'asc'},          |
    | populate | Populate   | populate: [{path: 'car', select: 'model plate'}] |
    | filter   | Filter     | filter: [{name: 'jonas'}, {value: { gte: 4 }}]   |

      <br/>

- **Exported Interfaces**

  ```tsx
  import {
    Query,
    Populate,
    Filter
  } from 'nestjs-prisma-querybuilder-interface';
  ```

  - **Query**

    all types

  - **Populate**
  - **Filter**
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

- **Populate**

  ```tsx
  const populate: Populate = [
    {
      path: 'car',
      select: 'model plate',
      filter: [{path: 'name', value: 'ford', operator: 'contains'}],
      populate: [
        {
          path: 'brand',
          select: 'name',
        }
      ],
      primaryKey: 'yourTablePrimaryKey' // default 'id'
    },

    // Or

    {
      car: 'model plate',
      filter: [{name: {contains: 'ford'}],
      populate: [{brand: 'name'}],
      primaryKey: 'yourTablePrimaryKey' // default 'id'
    },
  ],
  ```

- **Filter**

  ```tsx
  const filter: Filter = [
    {
      path: 'createdAt',
      value: new Date(),
      operator: 'lte'
    },
    {
      or: [
        {
          path: 'role',
          value: 'admin',
          operator: 'equals'
        },
        {
          path: 'role',
          value: 'system',
          operator: 'equals'
        }
      ]
    },
    {
      and: [
        {
          path: 'name',
          value: 'Ricky',
          operator: 'equals',
          insensitive: true
        },
        {
          path: 'lastName',
          value: 'Morty',
          operator: 'contains',
          insensitive: true
        }
      ]
    }
  ];

  // Or

  const filter: Filter = [
    {
      createdAt: { lte: new Date() }
    },
    {
      or: [
        {
          role: 'admin'
        },
        {
          role: 'system'
        }
      ]
    },
    {
      and: [
        {
          name: { equals: 'Ricky', insensitive: true }
        },
        {
          lastName: { contains: 'Morty', insensitive: true }
        }
      ]
    }
  ];
  ```

### END

- Nestjs/Prisma Querybuilder Interface is ISC licensed.

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FWillian-Rodrigues%2Fnestjs-prisma-querybuilder-interface&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
