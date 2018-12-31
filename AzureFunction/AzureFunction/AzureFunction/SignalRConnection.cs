using Microsoft.AspNetCore.Http;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Extensions.SignalRService;
using Microsoft.Extensions.Logging;

namespace AzureFunction
{
    public static class SignalRConnection
    {
        [FunctionName("SignalRConnection")]
        public static SignalRConnectionInfo Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = null)] HttpRequest req,
            [SignalRConnectionInfo(HubName = "broadcast")] SignalRConnectionInfo info,
            ILogger log) => info;
    }
}
