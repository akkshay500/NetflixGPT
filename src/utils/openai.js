import { AzureOpenAI } from "openai";
import{ENDPOINT, APIVERSION, OPENAI_API_KEY} from "./constants";

const client = new AzureOpenAI({
    apiKey: OPENAI_API_KEY,
    apiVersion: APIVERSION,
    endpoint:ENDPOINT,
    dangerouslyAllowBrowser:true
});


export default client;