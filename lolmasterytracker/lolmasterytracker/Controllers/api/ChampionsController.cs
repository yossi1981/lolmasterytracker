using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Configuration;
using System.Web.Http;

namespace lolmasterytracker.Controllers.api
{
    public class ChampionsController : ApiController
    {
        // GET: api/Test
        public async Task<Object> Get()
        {
            var riotApiKey = WebConfigurationManager.AppSettings["riotApiKey"];
            var url = "https://global.api.pvp.net/api/lol/static-data/eune/v1.2/champion?champData=image&api_key=" + riotApiKey;

            HttpClient httpClient = new HttpClient();
            HttpResponseMessage response = await httpClient.GetAsync(url);
            var contentBody = response.Content.ReadAsStringAsync();

            var result = JsonConvert.DeserializeObject(contentBody.Result);
            return result;
        }
    }
}
