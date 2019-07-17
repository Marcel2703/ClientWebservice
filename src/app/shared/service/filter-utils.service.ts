import { Injectable } from '@angular/core';

@Injectable()
export class FilterUtilsService {
  constructor() {}

  public getIntervalls(max, limit): Array<number> {
    const size = Math.round((max - 1) / limit);
    const result = [];

    if (size > 0) {
      for (let i = 0; i < limit; i++) {
        const inf = i + i * size;
        const sup = inf + size < max ? inf + size : max;

        inf <= sup && result.push([inf, sup]);
      }
    } else {
      result.push([0, max]);
    }
    return result;
  }

  public getFilterItems(maxItem, limit) {
    const intervals = this.getIntervalls(maxItem, limit);

    return intervals.map((item, index) => {
      const min = item[0], max = item[1];
      return { id: index, itemName: `${min} - ${max}`, value: { min, max } };
    });
  }

  transformFiltersToQueryParams(value, paramName) {
    return Object.entries(value).reduce((acc, curr) => {
      const propName = `${paramName}[${curr[0]}]`;
      return { ...acc, [propName]: curr[1] };
    }, {});
  }
}
