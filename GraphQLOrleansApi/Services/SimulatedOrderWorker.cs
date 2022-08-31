namespace GraphQLOrleansApi.Services;

public class SimulatedOrderWorker : BackgroundService
{
    private readonly ILiquiditySourceSummaryService liquiditySourceSummaryService;

    public SimulatedOrderWorker(ILiquiditySourceSummaryService liquiditySourceSummaryService)
    {
        this.liquiditySourceSummaryService = liquiditySourceSummaryService;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            var liquiditySourceId = Random.Shared.Next(1, 30);

            if (Random.Shared.NextDouble() > 0.1)
            {
                liquiditySourceSummaryService.AddOrder(liquiditySourceId);
            }
            else
            {
                liquiditySourceSummaryService.AddReject(liquiditySourceId);
            }

            await Task.Delay(50, stoppingToken);
        }
    }
}