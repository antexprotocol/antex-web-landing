import { Project, SyntaxKind } from "ts-morph";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ESM 下获取 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const base = "../";

// i18n 语言文件路径
const i18nFile = path.resolve(__dirname, base, "src/i18n/en.json");
const i18nData = JSON.parse(fs.readFileSync(i18nFile, "utf-8"));

// TSX 文件目录
const componentsDir = path.resolve(__dirname, base, "src/components");

// 初始化项目
const project = new Project({
  tsConfigFilePath: path.resolve(__dirname, base, "tsconfig.json"),
});

// 添加源文件（只扫描 components 下的 .tsx 文件）
project.addSourceFilesAtPaths(`${componentsDir}/*.tsx`);

function getDefaultValue(key) {
  return i18nData[key] || "";
}

// 遍历文件
project.getSourceFiles().forEach((sourceFile) => {
  let modified = false;

  sourceFile.forEachDescendant((node) => {
    if (
      node.getKind() === SyntaxKind.CallExpression &&
      node.getExpression().getText() === "t"
    ) {
      const args = node.getArguments();
      const keyNode = args[0];
      if (keyNode && keyNode.getKind() === SyntaxKind.StringLiteral) {
        const key = keyNode.getLiteralText();
        // 检查是否已有 defaultValue
        const hasDefault = args[1]?.getText().includes("defaultValue");
        if (!hasDefault) {
          const defaultValue = getDefaultValue(key).replace(/"/g, '\\"');
          node.addArgument(`{ defaultValue: "${defaultValue}" }`);
          modified = true;
        }
      }
    }
  });

  if (modified) {
    sourceFile.saveSync();
    console.log(`Updated: ${sourceFile.getFilePath()}`);
  }
});

console.log("Done adding defaultValue!");
