namespace GraphQLOrleansApi.Services;

using GraphQLOrleansApi.Model;
using System.Collections.Generic;

public interface ILiquiditySourceSummaryService
{
    void AddOrder(int liquiditySourceId);
    void AddReject(int liquiditySourceId);
    IEnumerable<LiquiditySourceSummary> GetSummaries();
    LiquiditySourceSummary GetSummary(int liquiditySourceId);
}