import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The built-in `Decimal` scalar type. */
  Decimal: any;
};

export type LiquiditySourceInfo = {
  __typename?: 'LiquiditySourceInfo';
  id: Scalars['Int'];
  name: Scalars['String'];
  transactionCost: Scalars['Decimal'];
};

/** A connection to a list of items. */
export type LiquiditySourceInfoConnection = {
  __typename?: 'LiquiditySourceInfoConnection';
  /** A list of edges. */
  edges?: Maybe<Array<LiquiditySourceInfoEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<LiquiditySourceInfo>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LiquiditySourceInfoEdge = {
  __typename?: 'LiquiditySourceInfoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: LiquiditySourceInfo;
};

/** A connection to a list of items. */
export type LiquiditySourceSummariesConnection = {
  __typename?: 'LiquiditySourceSummariesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<LiquiditySourceSummariesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<LiquiditySourceSummary>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LiquiditySourceSummariesEdge = {
  __typename?: 'LiquiditySourceSummariesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: LiquiditySourceSummary;
};

export type LiquiditySourceSummary = {
  __typename?: 'LiquiditySourceSummary';
  liquiditySource: LiquiditySourceInfo;
  totalOrderCount: Scalars['Int'];
  totalRejectCount: Scalars['Int'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  liquiditySourceInfo?: Maybe<LiquiditySourceInfoConnection>;
  liquiditySourceSummaries?: Maybe<LiquiditySourceSummariesConnection>;
  liquiditySourceSummary: LiquiditySourceSummary;
};


export type QueryLiquiditySourceInfoArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryLiquiditySourceSummariesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryLiquiditySourceSummaryArgs = {
  id: Scalars['Int'];
};

export type Subscriptions = {
  __typename?: 'Subscriptions';
  summaryUpdated: LiquiditySourceSummary;
};

export type LiqSourceInfosQueryVariables = Exact<{ [key: string]: never; }>;


export type LiqSourceInfosQuery = { __typename?: 'Query', liquiditySourceInfo?: { __typename?: 'LiquiditySourceInfoConnection', nodes?: Array<{ __typename?: 'LiquiditySourceInfo', name: string, id: number, transactionCost: any }> | null } | null };

export type LiqSourceSummariesQueryVariables = Exact<{ [key: string]: never; }>;


export type LiqSourceSummariesQuery = { __typename?: 'Query', liquiditySourceSummaries?: { __typename?: 'LiquiditySourceSummariesConnection', nodes?: Array<{ __typename?: 'LiquiditySourceSummary', totalOrderCount: number, totalRejectCount: number, liquiditySource: { __typename?: 'LiquiditySourceInfo', id: number, name: string } }> | null } | null };

export type LiqSourceSummaryUpdatesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type LiqSourceSummaryUpdatesSubscription = { __typename?: 'Subscriptions', summaryUpdated: { __typename?: 'LiquiditySourceSummary', totalOrderCount: number, totalRejectCount: number, liquiditySource: { __typename?: 'LiquiditySourceInfo', id: number, name: string } } };

export const LiqSourceInfosDocument = gql`
    query LiqSourceInfos {
  liquiditySourceInfo {
    nodes {
      name
      id
      transactionCost
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LiqSourceInfosGQL extends Apollo.Query<LiqSourceInfosQuery, LiqSourceInfosQueryVariables> {
    document = LiqSourceInfosDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LiqSourceSummariesDocument = gql`
    query LiqSourceSummaries {
  liquiditySourceSummaries {
    nodes {
      liquiditySource {
        id
        name
      }
      totalOrderCount
      totalRejectCount
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LiqSourceSummariesGQL extends Apollo.Query<LiqSourceSummariesQuery, LiqSourceSummariesQueryVariables> {
    document = LiqSourceSummariesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LiqSourceSummaryUpdatesDocument = gql`
    subscription LiqSourceSummaryUpdates {
  summaryUpdated {
    liquiditySource {
      id
      name
    }
    totalOrderCount
    totalRejectCount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LiqSourceSummaryUpdatesGQL extends Apollo.Subscription<LiqSourceSummaryUpdatesSubscription, LiqSourceSummaryUpdatesSubscriptionVariables> {
    document = LiqSourceSummaryUpdatesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }