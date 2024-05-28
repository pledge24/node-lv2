
Object.defineProperty(exports, "__esModule", { value: true });

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
  getRuntime
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.14.0
 * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
 */
Prisma.prismaVersion = {
  client: "5.14.0",
  engine: "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AccountsScalarFieldEnum = {
  userId: 'userId',
  accountId: 'accountId',
  accountPassword: 'accountPassword',
  accountName: 'accountName'
};

exports.Prisma.CharactersScalarFieldEnum = {
  characterId: 'characterId',
  accountId: 'accountId',
  characterName: 'characterName',
  characterHealth: 'characterHealth',
  characterPower: 'characterPower',
  characterMoney: 'characterMoney'
};

exports.Prisma.CharactersInventoryScalarFieldEnum = {
  characterId: 'characterId',
  itemCode: 'itemCode',
  itemCount: 'itemCount'
};

exports.Prisma.CharactersEquipmentScalarFieldEnum = {
  characterId: 'characterId',
  itemCode: 'itemCode'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};


exports.Prisma.ModelName = {
  Accounts: 'Accounts',
  Characters: 'Characters',
  CharactersInventory: 'CharactersInventory',
  CharactersEquipment: 'CharactersEquipment'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\zmwps\\OneDrive\\바탕 화면\\NodeJSWorkspace\\node-lv2\\prisma\\userClient",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "5.14.0",
  "engineVersion": "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_USER_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"./userClient\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_USER_URL\")\n}\n\n// Accounts\n// userId (PK) INTEGER NOT NULL AUTO_INCREMENT\n// accountId (PK) STRING NOT NULL\n// accountPassword STRING NOT NULL\n// accountName STRING NOT NULL\nmodel Accounts {\n  userId          Int    @id @unique @default(autoincrement()) @map(\"user_id\")\n  accountId       String @unique @map(\"account_id\")\n  accountPassword String @map(\"account_password\")\n  accountName     String @map(\"account_name\")\n\n  // 계정(Accounts) 테이블과 캐릭터 정보(Characters) 테이블이 1:N 관계를 맺습니다.\n  characters Characters[]\n\n  @@map(\"accounts\")\n}\n\n// Characters\n// characterId (PK) INTEGER NOT NULL AUTO_INCREMENT\n// characterName STRING NOT NULL\n// characterHealth INTEGER NOT NULL (default 500)\n// characterPower INTEGER NOT NULL (default 100)\n// characterMoney INTEGER NOT NULL (default 10000)\nmodel Characters {\n  characterId     Int    @id @default(autoincrement()) @map(\"character_id\")\n  accountId       String @map(\"account_id\")\n  characterName   String @unique @map(\"character_name\")\n  characterHealth Int    @default(500) @map(\"character_health\")\n  characterPower  Int    @default(100) @map(\"character_power\")\n  characterMoney  Int    @default(10000) @map(\"character_money\")\n\n  // Accounts 테이블과의 관계를 설정합니다.\n  account Accounts @relation(fields: [accountId], references: [accountId], onDelete: Cascade)\n\n  // 캐릭터 정보(Characters) 테이블과 캐릭터 인벤토리(CharactersInventory) 테이블이 1:N 관계를 맺습니다.\n  charactersInventory CharactersInventory[]\n\n  // 캐릭터 정보(Characters) 테이블과 캐릭터 장비장착(CharactersEquipment) 테이블이 1:N 관계를 맺습니다.\n  charactersEquipment CharactersEquipment[]\n\n  @@map(\"characters\")\n}\n\n// CharactersInventory\n// itemCode INTEGER NOT NULL\n// itemCount INTEGER NOT NULL\nmodel CharactersInventory {\n  characterId Int @map(\"character_id\")\n  itemCode    Int @map(\"item_code\")\n  itemCount   Int @map(\"item_count\")\n\n  // Characters 테이블과의 관계를 설정합니다.\n  character Characters @relation(fields: [characterId], references: [characterId], onDelete: Cascade)\n\n  @@id([characterId, itemCode])\n  @@map(\"characters_inventory\")\n}\n\n// CharactersEquipment\n// itemCode INTEGER NOT NULL\nmodel CharactersEquipment {\n  characterId Int @map(\"character_id\")\n  itemCode    Int @map(\"item_code\")\n\n  // Characters 테이블과의 관계를 설정합니다.\n  character Characters @relation(fields: [characterId], references: [characterId], onDelete: Cascade)\n\n  @@id([characterId, itemCode])\n  @@map(\"characters_equipment\")\n}\n",
  "inlineSchemaHash": "bcfac3a5129bcaf0c0bf2198a756fbeb8a5ddfbf369df9c3378f7a848086e8a3",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Accounts\":{\"dbName\":\"accounts\",\"fields\":[{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountId\",\"dbName\":\"account_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountPassword\",\"dbName\":\"account_password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountName\",\"dbName\":\"account_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"characters\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Characters\",\"relationName\":\"AccountsToCharacters\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Characters\":{\"dbName\":\"characters\",\"fields\":[{\"name\":\"characterId\",\"dbName\":\"character_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountId\",\"dbName\":\"account_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"characterName\",\"dbName\":\"character_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"characterHealth\",\"dbName\":\"character_health\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":500,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"characterPower\",\"dbName\":\"character_power\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":100,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"characterMoney\",\"dbName\":\"character_money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":10000,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Accounts\",\"relationName\":\"AccountsToCharacters\",\"relationFromFields\":[\"accountId\"],\"relationToFields\":[\"accountId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"charactersInventory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CharactersInventory\",\"relationName\":\"CharactersToCharactersInventory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"charactersEquipment\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CharactersEquipment\",\"relationName\":\"CharactersToCharactersEquipment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CharactersInventory\":{\"dbName\":\"characters_inventory\",\"fields\":[{\"name\":\"characterId\",\"dbName\":\"character_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"itemCode\",\"dbName\":\"item_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"itemCount\",\"dbName\":\"item_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"character\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Characters\",\"relationName\":\"CharactersToCharactersInventory\",\"relationFromFields\":[\"characterId\"],\"relationToFields\":[\"characterId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"characterId\",\"itemCode\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CharactersEquipment\":{\"dbName\":\"characters_equipment\",\"fields\":[{\"name\":\"characterId\",\"dbName\":\"character_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"itemCode\",\"dbName\":\"item_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"character\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Characters\",\"relationName\":\"CharactersToCharactersEquipment\",\"relationFromFields\":[\"characterId\"],\"relationToFields\":[\"characterId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"characterId\",\"itemCode\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_USER_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_USER_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_USER_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

