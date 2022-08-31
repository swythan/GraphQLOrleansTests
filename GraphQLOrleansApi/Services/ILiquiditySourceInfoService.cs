namespace GraphQLOrleansApi.Services;

using GraphQLOrleansApi.Model;
using System.Collections.Generic;

public interface ILiquiditySourceInfoService
{
    IEnumerable<LiquiditySourceInfo> GetInfo();
    LiquiditySourceInfo GetInfo(int liquiditySourceId);
}