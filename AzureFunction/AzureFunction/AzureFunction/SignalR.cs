using Microsoft.Azure.EventHubs;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.SignalRService;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Text;
using System.Threading.Tasks;
using IoTHubTrigger = Microsoft.Azure.WebJobs.EventHubTriggerAttribute;

namespace AzureFunction
{
    public static class SignalR
    {
        [FunctionName("SignalR")]
        public static async Task Run(
            [IoTHubTrigger("messages/events", Connection = "IoTHubTriggerConnection", ConsumerGroup = "ml-iot-platform-func")]EventData message,
            [SignalR(HubName = "broadcast")]IAsyncCollector<SignalRMessage> signalRMessages,
            ILogger log)
        {
            var deviceData = JsonConvert.DeserializeObject<DeviceData>(Encoding.UTF8.GetString(message.Body.Array));
            deviceData.DeviceId = Convert.ToString(message.SystemProperties["iothub-connection-device-id"]);


            log.LogInformation($"C# IoT Hub trigger function processed a message: {JsonConvert.SerializeObject(deviceData)}");
            await signalRMessages.AddAsync(new SignalRMessage()
            {
                Target = "notify",
                Arguments = new[] { JsonConvert.SerializeObject(deviceData) }
            });
        }
    }
}