import {AzureNamedKeyCredential, odata, TableClient, TableServiceClient} from "@azure/data-tables";

export default async function handler(req, res) {
  console.log("osman");
  const response = await  createTableAndEntity()
  res.status(200).json(response);
  console.log("balta");
}
const account = "retrogamesstorage";
const accountKey = "IQO22MPzKrK8OgfK/L7Z4kFxl3LzoVQxcuScqZ+bTw0ALrFLD/uFP35ftCGR/+LEHIURjFMot8iQ+AStQfROJQ==";
const tableName = "retrogames";



const endpoint = "https://retrogamesstorage.table.core.windows.net/";
const credential = new AzureNamedKeyCredential(account,accountKey);
const serviceClient = new TableServiceClient(
    'https://retrogamesstorage.table.core.windows.net',credential
)
const client = new TableClient(`https://${account}.table.core.windows.net`, tableName, credential);


async function createTableAndEntity() {
  let entitiesIter = client.listEntities();
  let i = 1;
  for await (const entity of entitiesIter) {
    console.log(`Entity${i}: PartitionKey: ${entity.partitionKey} RowKey: ${entity.rowKey} SetupFile: ${entity.SetupFile} Image:${entity.Image}`);
    i++;
  }
}
