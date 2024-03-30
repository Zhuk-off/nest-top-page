export enum TopLevelCategory {
  Course,
  Services,
  Books,
  Products,
}

export class TopPageModel {
  _id: string;
  firstLevel: TopLevelCategory;
  secondCategory: string;
  title: string;
  category: string;
  hh?: {
    count: number;
    juniorSalary: number;
    meddleSalary: number;
    seniorSalary: number;
  };
  advantages: {
    title: string;
    description: string;
  }[];
  seoText: string;
  tagsTitle: string;
  tags: string[];
}
