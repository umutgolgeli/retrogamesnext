import {AzureNamedKeyCredential, odata, TableClient, TableServiceClient} from "@azure/data-tables";

export default async function handler(req, res) {
  const response = await getTable();
  const respons = {name:"John doe"}
  res.status(200).json(response);
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


export async function getTable() {
  const entities = [];
  let entitiesIter = client.listEntities();
  let i = 1;
  for await (const entity of entitiesIter) {
    // const item = `Entity${i} - PartitionKey: ${entity.partitionKey} RowKey: ${entity.rowKey} SetupFile: ${entity.SetupFile} Image:${entity.Image}`;
    entities.push(entity);
    i++;
  }
  return entities;
}
