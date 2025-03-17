export function getCollectionName(collectionName: string) {
  return process.env.NODE_ENV === "production"
    ? "prod_"
    : "dev_" + collectionName;
}
