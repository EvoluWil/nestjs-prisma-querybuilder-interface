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

<hr>

### Documentation

- **How to install it?**

  #### npm

  ```sh
  npm install --save nestjs-prisma-querybuilder-interface
  ```

  #### yarn

  ```sh
  yarn add nestjs-prisma-querybuilder-interface
  ```

- **Properties**

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

    contains, endsWith, startsWith, equals, gt, gte, in, lt, lte ,not, notIn, hasEvery, hasSome, has, isEmpty;

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
        path: 'plate',
        value: 'XFS1T67'
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
      filter: [{ path: 'name', value: 'ford', operator: 'contains' }],
      populate: [
        {
          path: 'brand',
          select: 'name'
        }
      ],
      primaryKey: 'yourTablePrimaryKey' // default 'id'
    }
  ];
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
  ```

### END

- Nestjs/Prisma Querybuilder Interface is ISC licensed.

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FWillian-Rodrigues%2Fnestjs-prisma-querybuilder-interface&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
