using Newtonsoft.Json;

namespace API.DTOs
{
    public class UserDto
    {
        [JsonProperty("username")]
        public string UserName { get; set; }
        public string Token { get; set; }
    }
}