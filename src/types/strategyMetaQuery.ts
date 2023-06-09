// Generated by https://quicktype.io

export interface StrategyMetaQuery {
  strategy: Strategy;
}

type Currency = 'USD' | 'BTC' | 'MATIC' | 'ETH';

export interface Strategy {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  updatedAt: string;
  network: string;
  sharePrice: number;
  address: string;
  aum: number;
  createdAt: string;
  feesApr: Record<Currency, number>;
  sevenDayApy: Record<Currency, number>;
  sinceInception: Record<Currency, number>;
  oneDayApy: Record<Currency, number>;
}
