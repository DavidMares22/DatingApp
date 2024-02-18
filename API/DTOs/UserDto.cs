using Newtonsoft.Json;

namespace API.DTOs
{
    public class UserDto
    {
        [JsonProperty("username")]
        public string UserName { get; set; }
        public string Token { get; set; }
        public string PhotoUrl { get; set; }   
        public string KnownAs { get; set; }
        public string Gender { get; set; }

    }
}