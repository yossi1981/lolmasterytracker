using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Configuration;
using System.Web.Http;

namespace lolmasterytracker.Controllers.api
{
    public class ChampionMasteriesController : ApiController
    {
        // GET: api/Test
        public async Task<Object> Get(string serverId, string playerId)
        {
            var riotApiKey = WebConfigurationManager.AppSettings["riotApiKey"];

            var url = "https://eune.api.pvp.net/championmastery/location/" + serverId + "/player/" + playerId + "/champions?api_key=" + riotApiKey;

            HttpClient httpClient = new HttpClient();
            HttpResponseMessage response = await httpClient.GetAsync(url);
            var contentBody = response.Content.ReadAsStringAsync();

            var result = JsonConvert.DeserializeObject(contentBody.Result);
            return result;
        }
    }
}
