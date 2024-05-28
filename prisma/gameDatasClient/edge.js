Object.defineProperty(exports, '__esModule', { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
} = require('./runtime/edge.js');

const Prisma = {};

exports.Prisma = Prisma;
exports.$Enums = {};

/**
 * Prisma Client JS version: 5.14.0
 * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
 */
Prisma.prismaVersion = {
  client: '5.14.0',
  engine: 'e9771e62de70f79a5e1c604a2d7c8e2a0a874b48',
};

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.NotFoundError = NotFoundError;
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = Public.validator;

/**
 * Extensions
 */
Prisma.getExtensionContext = Extensions.getExtensionContext;
Prisma.defineExtension = Extensions.defineExtension;

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull,
};

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
});

exports.Prisma.ItemsScalarFieldEnum = {
  itemCode: 'itemCode',
  itemName: 'itemName',
  itemHealth: 'itemHealth',
  itemPower: 'itemPower',
  itemPrice: 'itemPrice',
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc',
};

exports.Prisma.ModelName = {
  Items: 'Items',
};
/**
 * Create the Client
 */
const config = {
  generator: {
    name: 'client',
    provider: {
      fromEnvVar: null,
      value: 'prisma-client-js',
    },
    output: {
      value:
        'C:\\Users\\zmwps\\OneDrive\\바탕 화면\\NodeJSWorkspace\\node-lv2\\prisma\\gameDatasClient',
      fromEnvVar: null,
    },
    config: {
      engineType: 'library',
    },
    binaryTargets: [
      {
        fromEnvVar: null,
        value: 'windows',
        native: true,
      },
    ],
    previewFeatures: [],
    isCustomOutput: true,
  },
  relativeEnvPaths: {
    rootEnvPath: null,
    schemaEnvPath: '../../.env',
  },
  relativePath: '..',
  clientVersion: '5.14.0',
  engineVersion: 'e9771e62de70f79a5e1c604a2d7c8e2a0a874b48',
  datasourceNames: ['db'],
  activeProvider: 'mysql',
  inlineDatasources: {
    db: {
      url: {
        fromEnvVar: 'DATABASE_GAME_DATAS_URL',
        value: null,
      },
    },
  },
  inlineSchema:
    '// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = "prisma-client-js"\n  output   = "./gameDatasClient"\n}\n\ndatasource db {\n  provider = "mysql"\n  url      = env("DATABASE_GAME_DATAS_URL")\n}\n\n// Items\n// itemCode (PK) INTEGER NOT NULL\n// itemName STRING NOT NULL\n// itemHealth INTEGER NOT NULL (default 0)\n// itemPower INTEGER NOT NULL (default 0)\n// itemPrice INTEGER NOT NULL (default 0)\nmodel Items {\n  itemCode   Int    @id @map("item_code")\n  itemName   String @map("item_name")\n  itemHealth Int    @default(0) @map("item_health")\n  itemPower  Int    @default(0) @map("item_Power")\n  itemPrice  Int    @default(0) @map("item_Price")\n\n  @@map("items")\n}\n',
  inlineSchemaHash:
    '7482a01d23c1540e6e66eb9e8c6252df8aff223d2fe0b4239bdf11e7e4fbf002',
  copyEngine: true,
};
config.dirname = '/';

config.runtimeDataModel = JSON.parse(
  '{"models":{"Items":{"dbName":"items","fields":[{"name":"itemCode","dbName":"item_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"itemName","dbName":"item_name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"itemHealth","dbName":"item_health","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"itemPower","dbName":"item_Power","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"itemPrice","dbName":"item_Price","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":0,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}'
);
defineDmmfProperty(exports.Prisma, config.runtimeDataModel);
config.engineWasm = undefined;

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_GAME_DATAS_URL:
      (typeof globalThis !== 'undefined' &&
        globalThis['DATABASE_GAME_DATAS_URL']) ||
      (typeof process !== 'undefined' &&
        process.env &&
        process.env.DATABASE_GAME_DATAS_URL) ||
      undefined,
  },
});

if (
  (typeof globalThis !== 'undefined' && globalThis['DEBUG']) ||
  (typeof process !== 'undefined' && process.env && process.env.DEBUG) ||
  undefined
) {
  Debug.enable(
    (typeof globalThis !== 'undefined' && globalThis['DEBUG']) ||
      (typeof process !== 'undefined' && process.env && process.env.DEBUG) ||
      undefined
  );
}

const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);
