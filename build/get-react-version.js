export async function getLatestReact() {
  const response = await fetch("https://registry.npmjs.org/react/latest");
  return response.json();
}
