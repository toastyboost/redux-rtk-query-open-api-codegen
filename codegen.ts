import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "./openapi.yaml", // Путь к схеме для гененрации
  apiFile: "./src/redux/api.ts", // Путь к RTK API подключенному к Redux
  apiImport: "baseApi", // Имя переменной с RTK API в api.ts
  outputFile: "./src/redux/codegen/codegenApi.ts", // Куда положить результа кодгена
  exportName: "codegenApi", // Имя переменной для импорта в codegenApi.ts
  argSuffix: "Props", // Суффикс для аргументов запроса
  responseSuffix: "Response", // Суффикс для ответа сервера
  hooks: {
    queries: true, // Хуки для GET запросов
    lazyQueries: true, // Ленивые хуки (useLazyQuery)
    mutations: true, // Хуки для мутаций
  },
  //   tag: false, //  Группировать эндпоинты по тегам из OpenAPI
  //   flattenArg: false, // "Разворачивать" сложные параметры запросов (по умолчанию false)
  //   useEnumType: false, // Использовать enum вместо union типов (по умолчанию false)
  //   filterEndpoints: [], // Фильтрация эндпоинтов для генерации
  //   endpointOverrides: [], // Переопределение параметров конкретных эндпоинтов
};

export default config;
