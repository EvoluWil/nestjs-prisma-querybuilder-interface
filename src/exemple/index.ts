import { queryBuilder } from '../querybuilder/queryBuilder';

const teste = () => {
  const q = queryBuilder({
    select: 'a b c',
    populate: [
      { path: 'pop', select: 'um dois' },
      { path: 'populate', select: 'tres quatro' }
    ]
  });

  console.log(q);
};
teste();
