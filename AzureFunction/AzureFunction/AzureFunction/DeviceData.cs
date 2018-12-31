using Newtonsoft.Json;
using System;

namespace AzureFunction
{
    public class DeviceData
    {
        [JsonProperty("messageId")]
        public string MessageId { get; set; }

        [JsonProperty("deviceId")]
        public string DeviceId { get; set; }

        [JsonProperty("temperature")]
        public string Temperature { get; set; }

        [JsonProperty("humidity")]
        public string Humidity { get; set; }

        [JsonProperty("pressure")]
        public string pressure { get; set; }

        [JsonProperty("pointInfo")]
        public string PointInfo { get; set; }

        [JsonProperty("ioTHub")]
        public string IoTHub { get; set; }

        [JsonProperty("eventEnqueuedUtcTime")]
        public DateTime EventEnqueuedUtcTime { get; set; }

        [JsonProperty("eventProcessedUtcTime")]
        public DateTime EventProcessedUtcTime { get; set; }

        [JsonProperty("partitionId")]
        public string PartitionId { get; set; }
    }
}
