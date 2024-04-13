interface Country {
    name: {
      common: string;
    };
    population:number;
    region:string;
    capital:string
    flags:string[]
  }

export const sortData = (data: Country[]) => {
    return data.slice().sort((a, b) => {
      const nameA = a.name.common.toUpperCase();
      const nameB = b.name.common.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  };
