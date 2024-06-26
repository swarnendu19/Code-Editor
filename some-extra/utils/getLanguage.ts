export function getLanguage(language: string): [string, string] | undefined {
  switch (language) {
    case "cpp":
      return ["cpp14", "3"];
    case "c":
      return ["c", "3"];
    case "java":
      return ["java", "1"];
    case "python":
      return ["python3", "3"];
    default:
      return undefined;
  }
}