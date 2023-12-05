export function jsonParse<T = {}>(data: string | null): T {
  let result = null;

  if (data) {
    try {
      result = JSON.parse(data);
    } catch (e) {
      result = null;
    }
  }

  return result;
}
