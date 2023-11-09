import  Configuration from "openai";
import OpenAIApi from "openai";

const env = process.env;

export default async function Home() {
const configuration = new Configuration({
    organization: env.OPENAI_ORGANIZATION,
    apiKey: env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();

return (
<>
Yo
</>
);
}