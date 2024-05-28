
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Accounts
 * 
 */
export type Accounts = $Result.DefaultSelection<Prisma.$AccountsPayload>
/**
 * Model Characters
 * 
 */
export type Characters = $Result.DefaultSelection<Prisma.$CharactersPayload>
/**
 * Model CharactersInventory
 * 
 */
export type CharactersInventory = $Result.DefaultSelection<Prisma.$CharactersInventoryPayload>
/**
 * Model CharactersEquipment
 * 
 */
export type CharactersEquipment = $Result.DefaultSelection<Prisma.$CharactersEquipmentPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.accounts.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.accounts.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.accounts`: Exposes CRUD operations for the **Accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.accounts.findMany()
    * ```
    */
  get accounts(): Prisma.AccountsDelegate<ExtArgs>;

  /**
   * `prisma.characters`: Exposes CRUD operations for the **Characters** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characters
    * const characters = await prisma.characters.findMany()
    * ```
    */
  get characters(): Prisma.CharactersDelegate<ExtArgs>;

  /**
   * `prisma.charactersInventory`: Exposes CRUD operations for the **CharactersInventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CharactersInventories
    * const charactersInventories = await prisma.charactersInventory.findMany()
    * ```
    */
  get charactersInventory(): Prisma.CharactersInventoryDelegate<ExtArgs>;

  /**
   * `prisma.charactersEquipment`: Exposes CRUD operations for the **CharactersEquipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CharactersEquipments
    * const charactersEquipments = await prisma.charactersEquipment.findMany()
    * ```
    */
  get charactersEquipment(): Prisma.CharactersEquipmentDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Accounts: 'Accounts',
    Characters: 'Characters',
    CharactersInventory: 'CharactersInventory',
    CharactersEquipment: 'CharactersEquipment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'accounts' | 'characters' | 'charactersInventory' | 'charactersEquipment'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Accounts: {
        payload: Prisma.$AccountsPayload<ExtArgs>
        fields: Prisma.AccountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          findFirst: {
            args: Prisma.AccountsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          findMany: {
            args: Prisma.AccountsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>[]
          }
          create: {
            args: Prisma.AccountsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          createMany: {
            args: Prisma.AccountsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccountsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          update: {
            args: Prisma.AccountsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          deleteMany: {
            args: Prisma.AccountsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          aggregate: {
            args: Prisma.AccountsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccounts>
          }
          groupBy: {
            args: Prisma.AccountsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountsCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountsCountAggregateOutputType> | number
          }
        }
      }
      Characters: {
        payload: Prisma.$CharactersPayload<ExtArgs>
        fields: Prisma.CharactersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharactersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharactersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          findFirst: {
            args: Prisma.CharactersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharactersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          findMany: {
            args: Prisma.CharactersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>[]
          }
          create: {
            args: Prisma.CharactersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          createMany: {
            args: Prisma.CharactersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CharactersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          update: {
            args: Prisma.CharactersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          deleteMany: {
            args: Prisma.CharactersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CharactersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CharactersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          aggregate: {
            args: Prisma.CharactersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCharacters>
          }
          groupBy: {
            args: Prisma.CharactersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CharactersGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharactersCountArgs<ExtArgs>,
            result: $Utils.Optional<CharactersCountAggregateOutputType> | number
          }
        }
      }
      CharactersInventory: {
        payload: Prisma.$CharactersInventoryPayload<ExtArgs>
        fields: Prisma.CharactersInventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharactersInventoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersInventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharactersInventoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersInventoryPayload>
          }
          findFirst: {
            args: Prisma.CharactersInventoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersInventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharactersInventoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersInventoryPayload>
          }
          findMany: {
            args: Prisma.CharactersInventoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersInventoryPayload>[]
          }
          create: {
            args: Prisma.CharactersInventoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersInventoryPayload>
          }
          createMany: {
            args: Prisma.CharactersInventoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CharactersInventoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersInventoryPayload>
          }
          update: {
            args: Prisma.CharactersInventoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersInventoryPayload>
          }
          deleteMany: {
            args: Prisma.CharactersInventoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CharactersInventoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CharactersInventoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersInventoryPayload>
          }
          aggregate: {
            args: Prisma.CharactersInventoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCharactersInventory>
          }
          groupBy: {
            args: Prisma.CharactersInventoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CharactersInventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharactersInventoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CharactersInventoryCountAggregateOutputType> | number
          }
        }
      }
      CharactersEquipment: {
        payload: Prisma.$CharactersEquipmentPayload<ExtArgs>
        fields: Prisma.CharactersEquipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharactersEquipmentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersEquipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharactersEquipmentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersEquipmentPayload>
          }
          findFirst: {
            args: Prisma.CharactersEquipmentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersEquipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharactersEquipmentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersEquipmentPayload>
          }
          findMany: {
            args: Prisma.CharactersEquipmentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersEquipmentPayload>[]
          }
          create: {
            args: Prisma.CharactersEquipmentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersEquipmentPayload>
          }
          createMany: {
            args: Prisma.CharactersEquipmentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CharactersEquipmentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersEquipmentPayload>
          }
          update: {
            args: Prisma.CharactersEquipmentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersEquipmentPayload>
          }
          deleteMany: {
            args: Prisma.CharactersEquipmentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CharactersEquipmentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CharactersEquipmentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersEquipmentPayload>
          }
          aggregate: {
            args: Prisma.CharactersEquipmentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCharactersEquipment>
          }
          groupBy: {
            args: Prisma.CharactersEquipmentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CharactersEquipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharactersEquipmentCountArgs<ExtArgs>,
            result: $Utils.Optional<CharactersEquipmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AccountsCountOutputType
   */

  export type AccountsCountOutputType = {
    characters: number
  }

  export type AccountsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characters?: boolean | AccountsCountOutputTypeCountCharactersArgs
  }

  // Custom InputTypes
  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsCountOutputType
     */
    select?: AccountsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountCharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharactersWhereInput
  }


  /**
   * Count Type CharactersCountOutputType
   */

  export type CharactersCountOutputType = {
    charactersInventory: number
    charactersEquipment: number
  }

  export type CharactersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charactersInventory?: boolean | CharactersCountOutputTypeCountCharactersInventoryArgs
    charactersEquipment?: boolean | CharactersCountOutputTypeCountCharactersEquipmentArgs
  }

  // Custom InputTypes
  /**
   * CharactersCountOutputType without action
   */
  export type CharactersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersCountOutputType
     */
    select?: CharactersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharactersCountOutputType without action
   */
  export type CharactersCountOutputTypeCountCharactersInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharactersInventoryWhereInput
  }

  /**
   * CharactersCountOutputType without action
   */
  export type CharactersCountOutputTypeCountCharactersEquipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharactersEquipmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Accounts
   */

  export type AggregateAccounts = {
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  export type AccountsAvgAggregateOutputType = {
    userId: number | null
  }

  export type AccountsSumAggregateOutputType = {
    userId: number | null
  }

  export type AccountsMinAggregateOutputType = {
    userId: number | null
    accountId: string | null
    accountPassword: string | null
    accountName: string | null
  }

  export type AccountsMaxAggregateOutputType = {
    userId: number | null
    accountId: string | null
    accountPassword: string | null
    accountName: string | null
  }

  export type AccountsCountAggregateOutputType = {
    userId: number
    accountId: number
    accountPassword: number
    accountName: number
    _all: number
  }


  export type AccountsAvgAggregateInputType = {
    userId?: true
  }

  export type AccountsSumAggregateInputType = {
    userId?: true
  }

  export type AccountsMinAggregateInputType = {
    userId?: true
    accountId?: true
    accountPassword?: true
    accountName?: true
  }

  export type AccountsMaxAggregateInputType = {
    userId?: true
    accountId?: true
    accountPassword?: true
    accountName?: true
  }

  export type AccountsCountAggregateInputType = {
    userId?: true
    accountId?: true
    accountPassword?: true
    accountName?: true
    _all?: true
  }

  export type AccountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to aggregate.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsMaxAggregateInputType
  }

  export type GetAccountsAggregateType<T extends AccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccounts[P]>
      : GetScalarType<T[P], AggregateAccounts[P]>
  }




  export type AccountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountsWhereInput
    orderBy?: AccountsOrderByWithAggregationInput | AccountsOrderByWithAggregationInput[]
    by: AccountsScalarFieldEnum[] | AccountsScalarFieldEnum
    having?: AccountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsCountAggregateInputType | true
    _avg?: AccountsAvgAggregateInputType
    _sum?: AccountsSumAggregateInputType
    _min?: AccountsMinAggregateInputType
    _max?: AccountsMaxAggregateInputType
  }

  export type AccountsGroupByOutputType = {
    userId: number
    accountId: string
    accountPassword: string
    accountName: string
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  type GetAccountsGroupByPayload<T extends AccountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsGroupByOutputType[P]>
        }
      >
    >


  export type AccountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    accountId?: boolean
    accountPassword?: boolean
    accountName?: boolean
    characters?: boolean | Accounts$charactersArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type AccountsSelectScalar = {
    userId?: boolean
    accountId?: boolean
    accountPassword?: boolean
    accountName?: boolean
  }


  export type AccountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characters?: boolean | Accounts$charactersArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AccountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Accounts"
    objects: {
      characters: Prisma.$CharactersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      accountId: string
      accountPassword: string
      accountName: string
    }, ExtArgs["result"]["accounts"]>
    composites: {}
  }


  type AccountsGetPayload<S extends boolean | null | undefined | AccountsDefaultArgs> = $Result.GetResult<Prisma.$AccountsPayload, S>

  type AccountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountsCountAggregateInputType | true
    }

  export interface AccountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Accounts'], meta: { name: 'Accounts' } }
    /**
     * Find zero or one Accounts that matches the filter.
     * @param {AccountsFindUniqueArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountsFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Accounts that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountsFindUniqueOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindFirstArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountsFindFirstArgs<ExtArgs>>
    ): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Accounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindFirstOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.accounts.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.accounts.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const accountsWithUserIdOnly = await prisma.accounts.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends AccountsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Accounts.
     * @param {AccountsCreateArgs} args - Arguments to create a Accounts.
     * @example
     * // Create one Accounts
     * const Accounts = await prisma.accounts.create({
     *   data: {
     *     // ... data to create a Accounts
     *   }
     * })
     * 
    **/
    create<T extends AccountsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountsCreateArgs<ExtArgs>>
    ): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountsCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends AccountsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Accounts.
     * @param {AccountsDeleteArgs} args - Arguments to delete one Accounts.
     * @example
     * // Delete one Accounts
     * const Accounts = await prisma.accounts.delete({
     *   where: {
     *     // ... filter to delete one Accounts
     *   }
     * })
     * 
    **/
    delete<T extends AccountsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountsDeleteArgs<ExtArgs>>
    ): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Accounts.
     * @param {AccountsUpdateArgs} args - Arguments to update one Accounts.
     * @example
     * // Update one Accounts
     * const accounts = await prisma.accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountsUpdateArgs<ExtArgs>>
    ): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountsDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Accounts.
     * @param {AccountsUpsertArgs} args - Arguments to update or create a Accounts.
     * @example
     * // Update or create a Accounts
     * const accounts = await prisma.accounts.upsert({
     *   create: {
     *     // ... data to create a Accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accounts we want to update
     *   }
     * })
    **/
    upsert<T extends AccountsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountsUpsertArgs<ExtArgs>>
    ): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.accounts.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountsCountArgs>(
      args?: Subset<T, AccountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountsAggregateArgs>(args: Subset<T, AccountsAggregateArgs>): Prisma.PrismaPromise<GetAccountsAggregateType<T>>

    /**
     * Group by Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountsGroupByArgs['orderBy'] }
        : { orderBy?: AccountsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Accounts model
   */
  readonly fields: AccountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    characters<T extends Accounts$charactersArgs<ExtArgs> = {}>(args?: Subset<T, Accounts$charactersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Accounts model
   */ 
  interface AccountsFieldRefs {
    readonly userId: FieldRef<"Accounts", 'Int'>
    readonly accountId: FieldRef<"Accounts", 'String'>
    readonly accountPassword: FieldRef<"Accounts", 'String'>
    readonly accountName: FieldRef<"Accounts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Accounts findUnique
   */
  export type AccountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts findUniqueOrThrow
   */
  export type AccountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts findFirst
   */
  export type AccountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * Accounts findFirstOrThrow
   */
  export type AccountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * Accounts findMany
   */
  export type AccountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * Accounts create
   */
  export type AccountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * The data needed to create a Accounts.
     */
    data: XOR<AccountsCreateInput, AccountsUncheckedCreateInput>
  }

  /**
   * Accounts createMany
   */
  export type AccountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountsCreateManyInput | AccountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Accounts update
   */
  export type AccountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * The data needed to update a Accounts.
     */
    data: XOR<AccountsUpdateInput, AccountsUncheckedUpdateInput>
    /**
     * Choose, which Accounts to update.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts updateMany
   */
  export type AccountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountsUpdateManyMutationInput, AccountsUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountsWhereInput
  }

  /**
   * Accounts upsert
   */
  export type AccountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * The filter to search for the Accounts to update in case it exists.
     */
    where: AccountsWhereUniqueInput
    /**
     * In case the Accounts found by the `where` argument doesn't exist, create a new Accounts with this data.
     */
    create: XOR<AccountsCreateInput, AccountsUncheckedCreateInput>
    /**
     * In case the Accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountsUpdateInput, AccountsUncheckedUpdateInput>
  }

  /**
   * Accounts delete
   */
  export type AccountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter which Accounts to delete.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts deleteMany
   */
  export type AccountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountsWhereInput
  }

  /**
   * Accounts.characters
   */
  export type Accounts$charactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    where?: CharactersWhereInput
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    cursor?: CharactersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Accounts without action
   */
  export type AccountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
  }


  /**
   * Model Characters
   */

  export type AggregateCharacters = {
    _count: CharactersCountAggregateOutputType | null
    _avg: CharactersAvgAggregateOutputType | null
    _sum: CharactersSumAggregateOutputType | null
    _min: CharactersMinAggregateOutputType | null
    _max: CharactersMaxAggregateOutputType | null
  }

  export type CharactersAvgAggregateOutputType = {
    characterId: number | null
    characterHealth: number | null
    characterPower: number | null
    characterMoney: number | null
  }

  export type CharactersSumAggregateOutputType = {
    characterId: number | null
    characterHealth: number | null
    characterPower: number | null
    characterMoney: number | null
  }

  export type CharactersMinAggregateOutputType = {
    characterId: number | null
    accountId: string | null
    characterName: string | null
    characterHealth: number | null
    characterPower: number | null
    characterMoney: number | null
  }

  export type CharactersMaxAggregateOutputType = {
    characterId: number | null
    accountId: string | null
    characterName: string | null
    characterHealth: number | null
    characterPower: number | null
    characterMoney: number | null
  }

  export type CharactersCountAggregateOutputType = {
    characterId: number
    accountId: number
    characterName: number
    characterHealth: number
    characterPower: number
    characterMoney: number
    _all: number
  }


  export type CharactersAvgAggregateInputType = {
    characterId?: true
    characterHealth?: true
    characterPower?: true
    characterMoney?: true
  }

  export type CharactersSumAggregateInputType = {
    characterId?: true
    characterHealth?: true
    characterPower?: true
    characterMoney?: true
  }

  export type CharactersMinAggregateInputType = {
    characterId?: true
    accountId?: true
    characterName?: true
    characterHealth?: true
    characterPower?: true
    characterMoney?: true
  }

  export type CharactersMaxAggregateInputType = {
    characterId?: true
    accountId?: true
    characterName?: true
    characterHealth?: true
    characterPower?: true
    characterMoney?: true
  }

  export type CharactersCountAggregateInputType = {
    characterId?: true
    accountId?: true
    characterName?: true
    characterHealth?: true
    characterPower?: true
    characterMoney?: true
    _all?: true
  }

  export type CharactersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to aggregate.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characters
    **/
    _count?: true | CharactersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharactersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharactersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharactersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharactersMaxAggregateInputType
  }

  export type GetCharactersAggregateType<T extends CharactersAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacters]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacters[P]>
      : GetScalarType<T[P], AggregateCharacters[P]>
  }




  export type CharactersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharactersWhereInput
    orderBy?: CharactersOrderByWithAggregationInput | CharactersOrderByWithAggregationInput[]
    by: CharactersScalarFieldEnum[] | CharactersScalarFieldEnum
    having?: CharactersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharactersCountAggregateInputType | true
    _avg?: CharactersAvgAggregateInputType
    _sum?: CharactersSumAggregateInputType
    _min?: CharactersMinAggregateInputType
    _max?: CharactersMaxAggregateInputType
  }

  export type CharactersGroupByOutputType = {
    characterId: number
    accountId: string
    characterName: string
    characterHealth: number
    characterPower: number
    characterMoney: number
    _count: CharactersCountAggregateOutputType | null
    _avg: CharactersAvgAggregateOutputType | null
    _sum: CharactersSumAggregateOutputType | null
    _min: CharactersMinAggregateOutputType | null
    _max: CharactersMaxAggregateOutputType | null
  }

  type GetCharactersGroupByPayload<T extends CharactersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharactersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharactersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharactersGroupByOutputType[P]>
            : GetScalarType<T[P], CharactersGroupByOutputType[P]>
        }
      >
    >


  export type CharactersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterId?: boolean
    accountId?: boolean
    characterName?: boolean
    characterHealth?: boolean
    characterPower?: boolean
    characterMoney?: boolean
    account?: boolean | AccountsDefaultArgs<ExtArgs>
    charactersInventory?: boolean | Characters$charactersInventoryArgs<ExtArgs>
    charactersEquipment?: boolean | Characters$charactersEquipmentArgs<ExtArgs>
    _count?: boolean | CharactersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characters"]>

  export type CharactersSelectScalar = {
    characterId?: boolean
    accountId?: boolean
    characterName?: boolean
    characterHealth?: boolean
    characterPower?: boolean
    characterMoney?: boolean
  }


  export type CharactersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountsDefaultArgs<ExtArgs>
    charactersInventory?: boolean | Characters$charactersInventoryArgs<ExtArgs>
    charactersEquipment?: boolean | Characters$charactersEquipmentArgs<ExtArgs>
    _count?: boolean | CharactersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CharactersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Characters"
    objects: {
      account: Prisma.$AccountsPayload<ExtArgs>
      charactersInventory: Prisma.$CharactersInventoryPayload<ExtArgs>[]
      charactersEquipment: Prisma.$CharactersEquipmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      characterId: number
      accountId: string
      characterName: string
      characterHealth: number
      characterPower: number
      characterMoney: number
    }, ExtArgs["result"]["characters"]>
    composites: {}
  }


  type CharactersGetPayload<S extends boolean | null | undefined | CharactersDefaultArgs> = $Result.GetResult<Prisma.$CharactersPayload, S>

  type CharactersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CharactersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CharactersCountAggregateInputType | true
    }

  export interface CharactersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Characters'], meta: { name: 'Characters' } }
    /**
     * Find zero or one Characters that matches the filter.
     * @param {CharactersFindUniqueArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CharactersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersFindUniqueArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Characters that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CharactersFindUniqueOrThrowArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CharactersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersFindFirstArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CharactersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersFindFirstArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Characters that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersFindFirstOrThrowArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CharactersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.characters.findMany()
     * 
     * // Get first 10 Characters
     * const characters = await prisma.characters.findMany({ take: 10 })
     * 
     * // Only select the `characterId`
     * const charactersWithCharacterIdOnly = await prisma.characters.findMany({ select: { characterId: true } })
     * 
    **/
    findMany<T extends CharactersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Characters.
     * @param {CharactersCreateArgs} args - Arguments to create a Characters.
     * @example
     * // Create one Characters
     * const Characters = await prisma.characters.create({
     *   data: {
     *     // ... data to create a Characters
     *   }
     * })
     * 
    **/
    create<T extends CharactersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersCreateArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Characters.
     * @param {CharactersCreateManyArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const characters = await prisma.characters.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CharactersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Characters.
     * @param {CharactersDeleteArgs} args - Arguments to delete one Characters.
     * @example
     * // Delete one Characters
     * const Characters = await prisma.characters.delete({
     *   where: {
     *     // ... filter to delete one Characters
     *   }
     * })
     * 
    **/
    delete<T extends CharactersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersDeleteArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Characters.
     * @param {CharactersUpdateArgs} args - Arguments to update one Characters.
     * @example
     * // Update one Characters
     * const characters = await prisma.characters.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CharactersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersUpdateArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Characters.
     * @param {CharactersDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.characters.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CharactersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const characters = await prisma.characters.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CharactersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Characters.
     * @param {CharactersUpsertArgs} args - Arguments to update or create a Characters.
     * @example
     * // Update or create a Characters
     * const characters = await prisma.characters.upsert({
     *   create: {
     *     // ... data to create a Characters
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Characters we want to update
     *   }
     * })
    **/
    upsert<T extends CharactersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersUpsertArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.characters.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
    **/
    count<T extends CharactersCountArgs>(
      args?: Subset<T, CharactersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharactersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharactersAggregateArgs>(args: Subset<T, CharactersAggregateArgs>): Prisma.PrismaPromise<GetCharactersAggregateType<T>>

    /**
     * Group by Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharactersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharactersGroupByArgs['orderBy'] }
        : { orderBy?: CharactersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharactersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharactersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Characters model
   */
  readonly fields: CharactersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Characters.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharactersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    account<T extends AccountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountsDefaultArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    charactersInventory<T extends Characters$charactersInventoryArgs<ExtArgs> = {}>(args?: Subset<T, Characters$charactersInventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharactersInventoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    charactersEquipment<T extends Characters$charactersEquipmentArgs<ExtArgs> = {}>(args?: Subset<T, Characters$charactersEquipmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharactersEquipmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Characters model
   */ 
  interface CharactersFieldRefs {
    readonly characterId: FieldRef<"Characters", 'Int'>
    readonly accountId: FieldRef<"Characters", 'String'>
    readonly characterName: FieldRef<"Characters", 'String'>
    readonly characterHealth: FieldRef<"Characters", 'Int'>
    readonly characterPower: FieldRef<"Characters", 'Int'>
    readonly characterMoney: FieldRef<"Characters", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Characters findUnique
   */
  export type CharactersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters findUniqueOrThrow
   */
  export type CharactersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters findFirst
   */
  export type CharactersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Characters findFirstOrThrow
   */
  export type CharactersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Characters findMany
   */
  export type CharactersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characters.
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Characters create
   */
  export type CharactersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * The data needed to create a Characters.
     */
    data: XOR<CharactersCreateInput, CharactersUncheckedCreateInput>
  }

  /**
   * Characters createMany
   */
  export type CharactersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characters.
     */
    data: CharactersCreateManyInput | CharactersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Characters update
   */
  export type CharactersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * The data needed to update a Characters.
     */
    data: XOR<CharactersUpdateInput, CharactersUncheckedUpdateInput>
    /**
     * Choose, which Characters to update.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters updateMany
   */
  export type CharactersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characters.
     */
    data: XOR<CharactersUpdateManyMutationInput, CharactersUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharactersWhereInput
  }

  /**
   * Characters upsert
   */
  export type CharactersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * The filter to search for the Characters to update in case it exists.
     */
    where: CharactersWhereUniqueInput
    /**
     * In case the Characters found by the `where` argument doesn't exist, create a new Characters with this data.
     */
    create: XOR<CharactersCreateInput, CharactersUncheckedCreateInput>
    /**
     * In case the Characters was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharactersUpdateInput, CharactersUncheckedUpdateInput>
  }

  /**
   * Characters delete
   */
  export type CharactersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter which Characters to delete.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters deleteMany
   */
  export type CharactersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to delete
     */
    where?: CharactersWhereInput
  }

  /**
   * Characters.charactersInventory
   */
  export type Characters$charactersInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersInventory
     */
    select?: CharactersInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInventoryInclude<ExtArgs> | null
    where?: CharactersInventoryWhereInput
    orderBy?: CharactersInventoryOrderByWithRelationInput | CharactersInventoryOrderByWithRelationInput[]
    cursor?: CharactersInventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharactersInventoryScalarFieldEnum | CharactersInventoryScalarFieldEnum[]
  }

  /**
   * Characters.charactersEquipment
   */
  export type Characters$charactersEquipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersEquipment
     */
    select?: CharactersEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersEquipmentInclude<ExtArgs> | null
    where?: CharactersEquipmentWhereInput
    orderBy?: CharactersEquipmentOrderByWithRelationInput | CharactersEquipmentOrderByWithRelationInput[]
    cursor?: CharactersEquipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharactersEquipmentScalarFieldEnum | CharactersEquipmentScalarFieldEnum[]
  }

  /**
   * Characters without action
   */
  export type CharactersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
  }


  /**
   * Model CharactersInventory
   */

  export type AggregateCharactersInventory = {
    _count: CharactersInventoryCountAggregateOutputType | null
    _avg: CharactersInventoryAvgAggregateOutputType | null
    _sum: CharactersInventorySumAggregateOutputType | null
    _min: CharactersInventoryMinAggregateOutputType | null
    _max: CharactersInventoryMaxAggregateOutputType | null
  }

  export type CharactersInventoryAvgAggregateOutputType = {
    characterId: number | null
    itemCode: number | null
    itemHealth: number | null
    itemPower: number | null
    itemPrice: number | null
    itemCount: number | null
  }

  export type CharactersInventorySumAggregateOutputType = {
    characterId: number | null
    itemCode: number | null
    itemHealth: number | null
    itemPower: number | null
    itemPrice: number | null
    itemCount: number | null
  }

  export type CharactersInventoryMinAggregateOutputType = {
    characterId: number | null
    itemCode: number | null
    itemName: string | null
    itemHealth: number | null
    itemPower: number | null
    itemPrice: number | null
    itemCount: number | null
  }

  export type CharactersInventoryMaxAggregateOutputType = {
    characterId: number | null
    itemCode: number | null
    itemName: string | null
    itemHealth: number | null
    itemPower: number | null
    itemPrice: number | null
    itemCount: number | null
  }

  export type CharactersInventoryCountAggregateOutputType = {
    characterId: number
    itemCode: number
    itemName: number
    itemHealth: number
    itemPower: number
    itemPrice: number
    itemCount: number
    _all: number
  }


  export type CharactersInventoryAvgAggregateInputType = {
    characterId?: true
    itemCode?: true
    itemHealth?: true
    itemPower?: true
    itemPrice?: true
    itemCount?: true
  }

  export type CharactersInventorySumAggregateInputType = {
    characterId?: true
    itemCode?: true
    itemHealth?: true
    itemPower?: true
    itemPrice?: true
    itemCount?: true
  }

  export type CharactersInventoryMinAggregateInputType = {
    characterId?: true
    itemCode?: true
    itemName?: true
    itemHealth?: true
    itemPower?: true
    itemPrice?: true
    itemCount?: true
  }

  export type CharactersInventoryMaxAggregateInputType = {
    characterId?: true
    itemCode?: true
    itemName?: true
    itemHealth?: true
    itemPower?: true
    itemPrice?: true
    itemCount?: true
  }

  export type CharactersInventoryCountAggregateInputType = {
    characterId?: true
    itemCode?: true
    itemName?: true
    itemHealth?: true
    itemPower?: true
    itemPrice?: true
    itemCount?: true
    _all?: true
  }

  export type CharactersInventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharactersInventory to aggregate.
     */
    where?: CharactersInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharactersInventories to fetch.
     */
    orderBy?: CharactersInventoryOrderByWithRelationInput | CharactersInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharactersInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharactersInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharactersInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CharactersInventories
    **/
    _count?: true | CharactersInventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharactersInventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharactersInventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharactersInventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharactersInventoryMaxAggregateInputType
  }

  export type GetCharactersInventoryAggregateType<T extends CharactersInventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCharactersInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharactersInventory[P]>
      : GetScalarType<T[P], AggregateCharactersInventory[P]>
  }




  export type CharactersInventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharactersInventoryWhereInput
    orderBy?: CharactersInventoryOrderByWithAggregationInput | CharactersInventoryOrderByWithAggregationInput[]
    by: CharactersInventoryScalarFieldEnum[] | CharactersInventoryScalarFieldEnum
    having?: CharactersInventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharactersInventoryCountAggregateInputType | true
    _avg?: CharactersInventoryAvgAggregateInputType
    _sum?: CharactersInventorySumAggregateInputType
    _min?: CharactersInventoryMinAggregateInputType
    _max?: CharactersInventoryMaxAggregateInputType
  }

  export type CharactersInventoryGroupByOutputType = {
    characterId: number
    itemCode: number
    itemName: string
    itemHealth: number
    itemPower: number
    itemPrice: number
    itemCount: number
    _count: CharactersInventoryCountAggregateOutputType | null
    _avg: CharactersInventoryAvgAggregateOutputType | null
    _sum: CharactersInventorySumAggregateOutputType | null
    _min: CharactersInventoryMinAggregateOutputType | null
    _max: CharactersInventoryMaxAggregateOutputType | null
  }

  type GetCharactersInventoryGroupByPayload<T extends CharactersInventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharactersInventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharactersInventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharactersInventoryGroupByOutputType[P]>
            : GetScalarType<T[P], CharactersInventoryGroupByOutputType[P]>
        }
      >
    >


  export type CharactersInventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterId?: boolean
    itemCode?: boolean
    itemName?: boolean
    itemHealth?: boolean
    itemPower?: boolean
    itemPrice?: boolean
    itemCount?: boolean
    character?: boolean | CharactersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["charactersInventory"]>

  export type CharactersInventorySelectScalar = {
    characterId?: boolean
    itemCode?: boolean
    itemName?: boolean
    itemHealth?: boolean
    itemPower?: boolean
    itemPrice?: boolean
    itemCount?: boolean
  }


  export type CharactersInventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharactersDefaultArgs<ExtArgs>
  }


  export type $CharactersInventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CharactersInventory"
    objects: {
      character: Prisma.$CharactersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      characterId: number
      itemCode: number
      itemName: string
      itemHealth: number
      itemPower: number
      itemPrice: number
      itemCount: number
    }, ExtArgs["result"]["charactersInventory"]>
    composites: {}
  }


  type CharactersInventoryGetPayload<S extends boolean | null | undefined | CharactersInventoryDefaultArgs> = $Result.GetResult<Prisma.$CharactersInventoryPayload, S>

  type CharactersInventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CharactersInventoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CharactersInventoryCountAggregateInputType | true
    }

  export interface CharactersInventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CharactersInventory'], meta: { name: 'CharactersInventory' } }
    /**
     * Find zero or one CharactersInventory that matches the filter.
     * @param {CharactersInventoryFindUniqueArgs} args - Arguments to find a CharactersInventory
     * @example
     * // Get one CharactersInventory
     * const charactersInventory = await prisma.charactersInventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CharactersInventoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersInventoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CharactersInventoryClient<$Result.GetResult<Prisma.$CharactersInventoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CharactersInventory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CharactersInventoryFindUniqueOrThrowArgs} args - Arguments to find a CharactersInventory
     * @example
     * // Get one CharactersInventory
     * const charactersInventory = await prisma.charactersInventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CharactersInventoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersInventoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CharactersInventoryClient<$Result.GetResult<Prisma.$CharactersInventoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CharactersInventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersInventoryFindFirstArgs} args - Arguments to find a CharactersInventory
     * @example
     * // Get one CharactersInventory
     * const charactersInventory = await prisma.charactersInventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CharactersInventoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersInventoryFindFirstArgs<ExtArgs>>
    ): Prisma__CharactersInventoryClient<$Result.GetResult<Prisma.$CharactersInventoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CharactersInventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersInventoryFindFirstOrThrowArgs} args - Arguments to find a CharactersInventory
     * @example
     * // Get one CharactersInventory
     * const charactersInventory = await prisma.charactersInventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CharactersInventoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersInventoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CharactersInventoryClient<$Result.GetResult<Prisma.$CharactersInventoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CharactersInventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersInventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CharactersInventories
     * const charactersInventories = await prisma.charactersInventory.findMany()
     * 
     * // Get first 10 CharactersInventories
     * const charactersInventories = await prisma.charactersInventory.findMany({ take: 10 })
     * 
     * // Only select the `characterId`
     * const charactersInventoryWithCharacterIdOnly = await prisma.charactersInventory.findMany({ select: { characterId: true } })
     * 
    **/
    findMany<T extends CharactersInventoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersInventoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharactersInventoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CharactersInventory.
     * @param {CharactersInventoryCreateArgs} args - Arguments to create a CharactersInventory.
     * @example
     * // Create one CharactersInventory
     * const CharactersInventory = await prisma.charactersInventory.create({
     *   data: {
     *     // ... data to create a CharactersInventory
     *   }
     * })
     * 
    **/
    create<T extends CharactersInventoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersInventoryCreateArgs<ExtArgs>>
    ): Prisma__CharactersInventoryClient<$Result.GetResult<Prisma.$CharactersInventoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CharactersInventories.
     * @param {CharactersInventoryCreateManyArgs} args - Arguments to create many CharactersInventories.
     * @example
     * // Create many CharactersInventories
     * const charactersInventory = await prisma.charactersInventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CharactersInventoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersInventoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CharactersInventory.
     * @param {CharactersInventoryDeleteArgs} args - Arguments to delete one CharactersInventory.
     * @example
     * // Delete one CharactersInventory
     * const CharactersInventory = await prisma.charactersInventory.delete({
     *   where: {
     *     // ... filter to delete one CharactersInventory
     *   }
     * })
     * 
    **/
    delete<T extends CharactersInventoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersInventoryDeleteArgs<ExtArgs>>
    ): Prisma__CharactersInventoryClient<$Result.GetResult<Prisma.$CharactersInventoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CharactersInventory.
     * @param {CharactersInventoryUpdateArgs} args - Arguments to update one CharactersInventory.
     * @example
     * // Update one CharactersInventory
     * const charactersInventory = await prisma.charactersInventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CharactersInventoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersInventoryUpdateArgs<ExtArgs>>
    ): Prisma__CharactersInventoryClient<$Result.GetResult<Prisma.$CharactersInventoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CharactersInventories.
     * @param {CharactersInventoryDeleteManyArgs} args - Arguments to filter CharactersInventories to delete.
     * @example
     * // Delete a few CharactersInventories
     * const { count } = await prisma.charactersInventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CharactersInventoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersInventoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharactersInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersInventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CharactersInventories
     * const charactersInventory = await prisma.charactersInventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CharactersInventoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersInventoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CharactersInventory.
     * @param {CharactersInventoryUpsertArgs} args - Arguments to update or create a CharactersInventory.
     * @example
     * // Update or create a CharactersInventory
     * const charactersInventory = await prisma.charactersInventory.upsert({
     *   create: {
     *     // ... data to create a CharactersInventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CharactersInventory we want to update
     *   }
     * })
    **/
    upsert<T extends CharactersInventoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersInventoryUpsertArgs<ExtArgs>>
    ): Prisma__CharactersInventoryClient<$Result.GetResult<Prisma.$CharactersInventoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CharactersInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersInventoryCountArgs} args - Arguments to filter CharactersInventories to count.
     * @example
     * // Count the number of CharactersInventories
     * const count = await prisma.charactersInventory.count({
     *   where: {
     *     // ... the filter for the CharactersInventories we want to count
     *   }
     * })
    **/
    count<T extends CharactersInventoryCountArgs>(
      args?: Subset<T, CharactersInventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharactersInventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CharactersInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersInventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharactersInventoryAggregateArgs>(args: Subset<T, CharactersInventoryAggregateArgs>): Prisma.PrismaPromise<GetCharactersInventoryAggregateType<T>>

    /**
     * Group by CharactersInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersInventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharactersInventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharactersInventoryGroupByArgs['orderBy'] }
        : { orderBy?: CharactersInventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharactersInventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharactersInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CharactersInventory model
   */
  readonly fields: CharactersInventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CharactersInventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharactersInventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    character<T extends CharactersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharactersDefaultArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CharactersInventory model
   */ 
  interface CharactersInventoryFieldRefs {
    readonly characterId: FieldRef<"CharactersInventory", 'Int'>
    readonly itemCode: FieldRef<"CharactersInventory", 'Int'>
    readonly itemName: FieldRef<"CharactersInventory", 'String'>
    readonly itemHealth: FieldRef<"CharactersInventory", 'Int'>
    readonly itemPower: FieldRef<"CharactersInventory", 'Int'>
    readonly itemPrice: FieldRef<"CharactersInventory", 'Int'>
    readonly itemCount: FieldRef<"CharactersInventory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CharactersInventory findUnique
   */
  export type CharactersInventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersInventory
     */
    select?: CharactersInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInventoryInclude<ExtArgs> | null
    /**
     * Filter, which CharactersInventory to fetch.
     */
    where: CharactersInventoryWhereUniqueInput
  }

  /**
   * CharactersInventory findUniqueOrThrow
   */
  export type CharactersInventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersInventory
     */
    select?: CharactersInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInventoryInclude<ExtArgs> | null
    /**
     * Filter, which CharactersInventory to fetch.
     */
    where: CharactersInventoryWhereUniqueInput
  }

  /**
   * CharactersInventory findFirst
   */
  export type CharactersInventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersInventory
     */
    select?: CharactersInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInventoryInclude<ExtArgs> | null
    /**
     * Filter, which CharactersInventory to fetch.
     */
    where?: CharactersInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharactersInventories to fetch.
     */
    orderBy?: CharactersInventoryOrderByWithRelationInput | CharactersInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharactersInventories.
     */
    cursor?: CharactersInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharactersInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharactersInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharactersInventories.
     */
    distinct?: CharactersInventoryScalarFieldEnum | CharactersInventoryScalarFieldEnum[]
  }

  /**
   * CharactersInventory findFirstOrThrow
   */
  export type CharactersInventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersInventory
     */
    select?: CharactersInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInventoryInclude<ExtArgs> | null
    /**
     * Filter, which CharactersInventory to fetch.
     */
    where?: CharactersInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharactersInventories to fetch.
     */
    orderBy?: CharactersInventoryOrderByWithRelationInput | CharactersInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharactersInventories.
     */
    cursor?: CharactersInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharactersInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharactersInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharactersInventories.
     */
    distinct?: CharactersInventoryScalarFieldEnum | CharactersInventoryScalarFieldEnum[]
  }

  /**
   * CharactersInventory findMany
   */
  export type CharactersInventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersInventory
     */
    select?: CharactersInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInventoryInclude<ExtArgs> | null
    /**
     * Filter, which CharactersInventories to fetch.
     */
    where?: CharactersInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharactersInventories to fetch.
     */
    orderBy?: CharactersInventoryOrderByWithRelationInput | CharactersInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CharactersInventories.
     */
    cursor?: CharactersInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharactersInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharactersInventories.
     */
    skip?: number
    distinct?: CharactersInventoryScalarFieldEnum | CharactersInventoryScalarFieldEnum[]
  }

  /**
   * CharactersInventory create
   */
  export type CharactersInventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersInventory
     */
    select?: CharactersInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a CharactersInventory.
     */
    data: XOR<CharactersInventoryCreateInput, CharactersInventoryUncheckedCreateInput>
  }

  /**
   * CharactersInventory createMany
   */
  export type CharactersInventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CharactersInventories.
     */
    data: CharactersInventoryCreateManyInput | CharactersInventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CharactersInventory update
   */
  export type CharactersInventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersInventory
     */
    select?: CharactersInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a CharactersInventory.
     */
    data: XOR<CharactersInventoryUpdateInput, CharactersInventoryUncheckedUpdateInput>
    /**
     * Choose, which CharactersInventory to update.
     */
    where: CharactersInventoryWhereUniqueInput
  }

  /**
   * CharactersInventory updateMany
   */
  export type CharactersInventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CharactersInventories.
     */
    data: XOR<CharactersInventoryUpdateManyMutationInput, CharactersInventoryUncheckedUpdateManyInput>
    /**
     * Filter which CharactersInventories to update
     */
    where?: CharactersInventoryWhereInput
  }

  /**
   * CharactersInventory upsert
   */
  export type CharactersInventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersInventory
     */
    select?: CharactersInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the CharactersInventory to update in case it exists.
     */
    where: CharactersInventoryWhereUniqueInput
    /**
     * In case the CharactersInventory found by the `where` argument doesn't exist, create a new CharactersInventory with this data.
     */
    create: XOR<CharactersInventoryCreateInput, CharactersInventoryUncheckedCreateInput>
    /**
     * In case the CharactersInventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharactersInventoryUpdateInput, CharactersInventoryUncheckedUpdateInput>
  }

  /**
   * CharactersInventory delete
   */
  export type CharactersInventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersInventory
     */
    select?: CharactersInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInventoryInclude<ExtArgs> | null
    /**
     * Filter which CharactersInventory to delete.
     */
    where: CharactersInventoryWhereUniqueInput
  }

  /**
   * CharactersInventory deleteMany
   */
  export type CharactersInventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharactersInventories to delete
     */
    where?: CharactersInventoryWhereInput
  }

  /**
   * CharactersInventory without action
   */
  export type CharactersInventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersInventory
     */
    select?: CharactersInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInventoryInclude<ExtArgs> | null
  }


  /**
   * Model CharactersEquipment
   */

  export type AggregateCharactersEquipment = {
    _count: CharactersEquipmentCountAggregateOutputType | null
    _avg: CharactersEquipmentAvgAggregateOutputType | null
    _sum: CharactersEquipmentSumAggregateOutputType | null
    _min: CharactersEquipmentMinAggregateOutputType | null
    _max: CharactersEquipmentMaxAggregateOutputType | null
  }

  export type CharactersEquipmentAvgAggregateOutputType = {
    characterId: number | null
    itemCode: number | null
    itemHealth: number | null
    itemPower: number | null
    itemPrice: number | null
  }

  export type CharactersEquipmentSumAggregateOutputType = {
    characterId: number | null
    itemCode: number | null
    itemHealth: number | null
    itemPower: number | null
    itemPrice: number | null
  }

  export type CharactersEquipmentMinAggregateOutputType = {
    characterId: number | null
    itemCode: number | null
    itemName: string | null
    itemHealth: number | null
    itemPower: number | null
    itemPrice: number | null
  }

  export type CharactersEquipmentMaxAggregateOutputType = {
    characterId: number | null
    itemCode: number | null
    itemName: string | null
    itemHealth: number | null
    itemPower: number | null
    itemPrice: number | null
  }

  export type CharactersEquipmentCountAggregateOutputType = {
    characterId: number
    itemCode: number
    itemName: number
    itemHealth: number
    itemPower: number
    itemPrice: number
    _all: number
  }


  export type CharactersEquipmentAvgAggregateInputType = {
    characterId?: true
    itemCode?: true
    itemHealth?: true
    itemPower?: true
    itemPrice?: true
  }

  export type CharactersEquipmentSumAggregateInputType = {
    characterId?: true
    itemCode?: true
    itemHealth?: true
    itemPower?: true
    itemPrice?: true
  }

  export type CharactersEquipmentMinAggregateInputType = {
    characterId?: true
    itemCode?: true
    itemName?: true
    itemHealth?: true
    itemPower?: true
    itemPrice?: true
  }

  export type CharactersEquipmentMaxAggregateInputType = {
    characterId?: true
    itemCode?: true
    itemName?: true
    itemHealth?: true
    itemPower?: true
    itemPrice?: true
  }

  export type CharactersEquipmentCountAggregateInputType = {
    characterId?: true
    itemCode?: true
    itemName?: true
    itemHealth?: true
    itemPower?: true
    itemPrice?: true
    _all?: true
  }

  export type CharactersEquipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharactersEquipment to aggregate.
     */
    where?: CharactersEquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharactersEquipments to fetch.
     */
    orderBy?: CharactersEquipmentOrderByWithRelationInput | CharactersEquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharactersEquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharactersEquipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharactersEquipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CharactersEquipments
    **/
    _count?: true | CharactersEquipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharactersEquipmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharactersEquipmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharactersEquipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharactersEquipmentMaxAggregateInputType
  }

  export type GetCharactersEquipmentAggregateType<T extends CharactersEquipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateCharactersEquipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharactersEquipment[P]>
      : GetScalarType<T[P], AggregateCharactersEquipment[P]>
  }




  export type CharactersEquipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharactersEquipmentWhereInput
    orderBy?: CharactersEquipmentOrderByWithAggregationInput | CharactersEquipmentOrderByWithAggregationInput[]
    by: CharactersEquipmentScalarFieldEnum[] | CharactersEquipmentScalarFieldEnum
    having?: CharactersEquipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharactersEquipmentCountAggregateInputType | true
    _avg?: CharactersEquipmentAvgAggregateInputType
    _sum?: CharactersEquipmentSumAggregateInputType
    _min?: CharactersEquipmentMinAggregateInputType
    _max?: CharactersEquipmentMaxAggregateInputType
  }

  export type CharactersEquipmentGroupByOutputType = {
    characterId: number
    itemCode: number
    itemName: string
    itemHealth: number
    itemPower: number
    itemPrice: number
    _count: CharactersEquipmentCountAggregateOutputType | null
    _avg: CharactersEquipmentAvgAggregateOutputType | null
    _sum: CharactersEquipmentSumAggregateOutputType | null
    _min: CharactersEquipmentMinAggregateOutputType | null
    _max: CharactersEquipmentMaxAggregateOutputType | null
  }

  type GetCharactersEquipmentGroupByPayload<T extends CharactersEquipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharactersEquipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharactersEquipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharactersEquipmentGroupByOutputType[P]>
            : GetScalarType<T[P], CharactersEquipmentGroupByOutputType[P]>
        }
      >
    >


  export type CharactersEquipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterId?: boolean
    itemCode?: boolean
    itemName?: boolean
    itemHealth?: boolean
    itemPower?: boolean
    itemPrice?: boolean
    character?: boolean | CharactersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["charactersEquipment"]>

  export type CharactersEquipmentSelectScalar = {
    characterId?: boolean
    itemCode?: boolean
    itemName?: boolean
    itemHealth?: boolean
    itemPower?: boolean
    itemPrice?: boolean
  }


  export type CharactersEquipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharactersDefaultArgs<ExtArgs>
  }


  export type $CharactersEquipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CharactersEquipment"
    objects: {
      character: Prisma.$CharactersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      characterId: number
      itemCode: number
      itemName: string
      itemHealth: number
      itemPower: number
      itemPrice: number
    }, ExtArgs["result"]["charactersEquipment"]>
    composites: {}
  }


  type CharactersEquipmentGetPayload<S extends boolean | null | undefined | CharactersEquipmentDefaultArgs> = $Result.GetResult<Prisma.$CharactersEquipmentPayload, S>

  type CharactersEquipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CharactersEquipmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CharactersEquipmentCountAggregateInputType | true
    }

  export interface CharactersEquipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CharactersEquipment'], meta: { name: 'CharactersEquipment' } }
    /**
     * Find zero or one CharactersEquipment that matches the filter.
     * @param {CharactersEquipmentFindUniqueArgs} args - Arguments to find a CharactersEquipment
     * @example
     * // Get one CharactersEquipment
     * const charactersEquipment = await prisma.charactersEquipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CharactersEquipmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersEquipmentFindUniqueArgs<ExtArgs>>
    ): Prisma__CharactersEquipmentClient<$Result.GetResult<Prisma.$CharactersEquipmentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CharactersEquipment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CharactersEquipmentFindUniqueOrThrowArgs} args - Arguments to find a CharactersEquipment
     * @example
     * // Get one CharactersEquipment
     * const charactersEquipment = await prisma.charactersEquipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CharactersEquipmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersEquipmentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CharactersEquipmentClient<$Result.GetResult<Prisma.$CharactersEquipmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CharactersEquipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersEquipmentFindFirstArgs} args - Arguments to find a CharactersEquipment
     * @example
     * // Get one CharactersEquipment
     * const charactersEquipment = await prisma.charactersEquipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CharactersEquipmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersEquipmentFindFirstArgs<ExtArgs>>
    ): Prisma__CharactersEquipmentClient<$Result.GetResult<Prisma.$CharactersEquipmentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CharactersEquipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersEquipmentFindFirstOrThrowArgs} args - Arguments to find a CharactersEquipment
     * @example
     * // Get one CharactersEquipment
     * const charactersEquipment = await prisma.charactersEquipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CharactersEquipmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersEquipmentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CharactersEquipmentClient<$Result.GetResult<Prisma.$CharactersEquipmentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CharactersEquipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersEquipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CharactersEquipments
     * const charactersEquipments = await prisma.charactersEquipment.findMany()
     * 
     * // Get first 10 CharactersEquipments
     * const charactersEquipments = await prisma.charactersEquipment.findMany({ take: 10 })
     * 
     * // Only select the `characterId`
     * const charactersEquipmentWithCharacterIdOnly = await prisma.charactersEquipment.findMany({ select: { characterId: true } })
     * 
    **/
    findMany<T extends CharactersEquipmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersEquipmentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharactersEquipmentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CharactersEquipment.
     * @param {CharactersEquipmentCreateArgs} args - Arguments to create a CharactersEquipment.
     * @example
     * // Create one CharactersEquipment
     * const CharactersEquipment = await prisma.charactersEquipment.create({
     *   data: {
     *     // ... data to create a CharactersEquipment
     *   }
     * })
     * 
    **/
    create<T extends CharactersEquipmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersEquipmentCreateArgs<ExtArgs>>
    ): Prisma__CharactersEquipmentClient<$Result.GetResult<Prisma.$CharactersEquipmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CharactersEquipments.
     * @param {CharactersEquipmentCreateManyArgs} args - Arguments to create many CharactersEquipments.
     * @example
     * // Create many CharactersEquipments
     * const charactersEquipment = await prisma.charactersEquipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CharactersEquipmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersEquipmentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CharactersEquipment.
     * @param {CharactersEquipmentDeleteArgs} args - Arguments to delete one CharactersEquipment.
     * @example
     * // Delete one CharactersEquipment
     * const CharactersEquipment = await prisma.charactersEquipment.delete({
     *   where: {
     *     // ... filter to delete one CharactersEquipment
     *   }
     * })
     * 
    **/
    delete<T extends CharactersEquipmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersEquipmentDeleteArgs<ExtArgs>>
    ): Prisma__CharactersEquipmentClient<$Result.GetResult<Prisma.$CharactersEquipmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CharactersEquipment.
     * @param {CharactersEquipmentUpdateArgs} args - Arguments to update one CharactersEquipment.
     * @example
     * // Update one CharactersEquipment
     * const charactersEquipment = await prisma.charactersEquipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CharactersEquipmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersEquipmentUpdateArgs<ExtArgs>>
    ): Prisma__CharactersEquipmentClient<$Result.GetResult<Prisma.$CharactersEquipmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CharactersEquipments.
     * @param {CharactersEquipmentDeleteManyArgs} args - Arguments to filter CharactersEquipments to delete.
     * @example
     * // Delete a few CharactersEquipments
     * const { count } = await prisma.charactersEquipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CharactersEquipmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersEquipmentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharactersEquipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersEquipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CharactersEquipments
     * const charactersEquipment = await prisma.charactersEquipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CharactersEquipmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersEquipmentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CharactersEquipment.
     * @param {CharactersEquipmentUpsertArgs} args - Arguments to update or create a CharactersEquipment.
     * @example
     * // Update or create a CharactersEquipment
     * const charactersEquipment = await prisma.charactersEquipment.upsert({
     *   create: {
     *     // ... data to create a CharactersEquipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CharactersEquipment we want to update
     *   }
     * })
    **/
    upsert<T extends CharactersEquipmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersEquipmentUpsertArgs<ExtArgs>>
    ): Prisma__CharactersEquipmentClient<$Result.GetResult<Prisma.$CharactersEquipmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CharactersEquipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersEquipmentCountArgs} args - Arguments to filter CharactersEquipments to count.
     * @example
     * // Count the number of CharactersEquipments
     * const count = await prisma.charactersEquipment.count({
     *   where: {
     *     // ... the filter for the CharactersEquipments we want to count
     *   }
     * })
    **/
    count<T extends CharactersEquipmentCountArgs>(
      args?: Subset<T, CharactersEquipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharactersEquipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CharactersEquipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersEquipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharactersEquipmentAggregateArgs>(args: Subset<T, CharactersEquipmentAggregateArgs>): Prisma.PrismaPromise<GetCharactersEquipmentAggregateType<T>>

    /**
     * Group by CharactersEquipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersEquipmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharactersEquipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharactersEquipmentGroupByArgs['orderBy'] }
        : { orderBy?: CharactersEquipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharactersEquipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharactersEquipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CharactersEquipment model
   */
  readonly fields: CharactersEquipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CharactersEquipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharactersEquipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    character<T extends CharactersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharactersDefaultArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CharactersEquipment model
   */ 
  interface CharactersEquipmentFieldRefs {
    readonly characterId: FieldRef<"CharactersEquipment", 'Int'>
    readonly itemCode: FieldRef<"CharactersEquipment", 'Int'>
    readonly itemName: FieldRef<"CharactersEquipment", 'String'>
    readonly itemHealth: FieldRef<"CharactersEquipment", 'Int'>
    readonly itemPower: FieldRef<"CharactersEquipment", 'Int'>
    readonly itemPrice: FieldRef<"CharactersEquipment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CharactersEquipment findUnique
   */
  export type CharactersEquipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersEquipment
     */
    select?: CharactersEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersEquipmentInclude<ExtArgs> | null
    /**
     * Filter, which CharactersEquipment to fetch.
     */
    where: CharactersEquipmentWhereUniqueInput
  }

  /**
   * CharactersEquipment findUniqueOrThrow
   */
  export type CharactersEquipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersEquipment
     */
    select?: CharactersEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersEquipmentInclude<ExtArgs> | null
    /**
     * Filter, which CharactersEquipment to fetch.
     */
    where: CharactersEquipmentWhereUniqueInput
  }

  /**
   * CharactersEquipment findFirst
   */
  export type CharactersEquipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersEquipment
     */
    select?: CharactersEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersEquipmentInclude<ExtArgs> | null
    /**
     * Filter, which CharactersEquipment to fetch.
     */
    where?: CharactersEquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharactersEquipments to fetch.
     */
    orderBy?: CharactersEquipmentOrderByWithRelationInput | CharactersEquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharactersEquipments.
     */
    cursor?: CharactersEquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharactersEquipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharactersEquipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharactersEquipments.
     */
    distinct?: CharactersEquipmentScalarFieldEnum | CharactersEquipmentScalarFieldEnum[]
  }

  /**
   * CharactersEquipment findFirstOrThrow
   */
  export type CharactersEquipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersEquipment
     */
    select?: CharactersEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersEquipmentInclude<ExtArgs> | null
    /**
     * Filter, which CharactersEquipment to fetch.
     */
    where?: CharactersEquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharactersEquipments to fetch.
     */
    orderBy?: CharactersEquipmentOrderByWithRelationInput | CharactersEquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharactersEquipments.
     */
    cursor?: CharactersEquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharactersEquipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharactersEquipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharactersEquipments.
     */
    distinct?: CharactersEquipmentScalarFieldEnum | CharactersEquipmentScalarFieldEnum[]
  }

  /**
   * CharactersEquipment findMany
   */
  export type CharactersEquipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersEquipment
     */
    select?: CharactersEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersEquipmentInclude<ExtArgs> | null
    /**
     * Filter, which CharactersEquipments to fetch.
     */
    where?: CharactersEquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharactersEquipments to fetch.
     */
    orderBy?: CharactersEquipmentOrderByWithRelationInput | CharactersEquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CharactersEquipments.
     */
    cursor?: CharactersEquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharactersEquipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharactersEquipments.
     */
    skip?: number
    distinct?: CharactersEquipmentScalarFieldEnum | CharactersEquipmentScalarFieldEnum[]
  }

  /**
   * CharactersEquipment create
   */
  export type CharactersEquipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersEquipment
     */
    select?: CharactersEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersEquipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a CharactersEquipment.
     */
    data: XOR<CharactersEquipmentCreateInput, CharactersEquipmentUncheckedCreateInput>
  }

  /**
   * CharactersEquipment createMany
   */
  export type CharactersEquipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CharactersEquipments.
     */
    data: CharactersEquipmentCreateManyInput | CharactersEquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CharactersEquipment update
   */
  export type CharactersEquipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersEquipment
     */
    select?: CharactersEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersEquipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a CharactersEquipment.
     */
    data: XOR<CharactersEquipmentUpdateInput, CharactersEquipmentUncheckedUpdateInput>
    /**
     * Choose, which CharactersEquipment to update.
     */
    where: CharactersEquipmentWhereUniqueInput
  }

  /**
   * CharactersEquipment updateMany
   */
  export type CharactersEquipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CharactersEquipments.
     */
    data: XOR<CharactersEquipmentUpdateManyMutationInput, CharactersEquipmentUncheckedUpdateManyInput>
    /**
     * Filter which CharactersEquipments to update
     */
    where?: CharactersEquipmentWhereInput
  }

  /**
   * CharactersEquipment upsert
   */
  export type CharactersEquipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersEquipment
     */
    select?: CharactersEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersEquipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the CharactersEquipment to update in case it exists.
     */
    where: CharactersEquipmentWhereUniqueInput
    /**
     * In case the CharactersEquipment found by the `where` argument doesn't exist, create a new CharactersEquipment with this data.
     */
    create: XOR<CharactersEquipmentCreateInput, CharactersEquipmentUncheckedCreateInput>
    /**
     * In case the CharactersEquipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharactersEquipmentUpdateInput, CharactersEquipmentUncheckedUpdateInput>
  }

  /**
   * CharactersEquipment delete
   */
  export type CharactersEquipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersEquipment
     */
    select?: CharactersEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersEquipmentInclude<ExtArgs> | null
    /**
     * Filter which CharactersEquipment to delete.
     */
    where: CharactersEquipmentWhereUniqueInput
  }

  /**
   * CharactersEquipment deleteMany
   */
  export type CharactersEquipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharactersEquipments to delete
     */
    where?: CharactersEquipmentWhereInput
  }

  /**
   * CharactersEquipment without action
   */
  export type CharactersEquipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersEquipment
     */
    select?: CharactersEquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersEquipmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountsScalarFieldEnum: {
    userId: 'userId',
    accountId: 'accountId',
    accountPassword: 'accountPassword',
    accountName: 'accountName'
  };

  export type AccountsScalarFieldEnum = (typeof AccountsScalarFieldEnum)[keyof typeof AccountsScalarFieldEnum]


  export const CharactersScalarFieldEnum: {
    characterId: 'characterId',
    accountId: 'accountId',
    characterName: 'characterName',
    characterHealth: 'characterHealth',
    characterPower: 'characterPower',
    characterMoney: 'characterMoney'
  };

  export type CharactersScalarFieldEnum = (typeof CharactersScalarFieldEnum)[keyof typeof CharactersScalarFieldEnum]


  export const CharactersInventoryScalarFieldEnum: {
    characterId: 'characterId',
    itemCode: 'itemCode',
    itemName: 'itemName',
    itemHealth: 'itemHealth',
    itemPower: 'itemPower',
    itemPrice: 'itemPrice',
    itemCount: 'itemCount'
  };

  export type CharactersInventoryScalarFieldEnum = (typeof CharactersInventoryScalarFieldEnum)[keyof typeof CharactersInventoryScalarFieldEnum]


  export const CharactersEquipmentScalarFieldEnum: {
    characterId: 'characterId',
    itemCode: 'itemCode',
    itemName: 'itemName',
    itemHealth: 'itemHealth',
    itemPower: 'itemPower',
    itemPrice: 'itemPrice'
  };

  export type CharactersEquipmentScalarFieldEnum = (typeof CharactersEquipmentScalarFieldEnum)[keyof typeof CharactersEquipmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AccountsWhereInput = {
    AND?: AccountsWhereInput | AccountsWhereInput[]
    OR?: AccountsWhereInput[]
    NOT?: AccountsWhereInput | AccountsWhereInput[]
    userId?: IntFilter<"Accounts"> | number
    accountId?: StringFilter<"Accounts"> | string
    accountPassword?: StringFilter<"Accounts"> | string
    accountName?: StringFilter<"Accounts"> | string
    characters?: CharactersListRelationFilter
  }

  export type AccountsOrderByWithRelationInput = {
    userId?: SortOrder
    accountId?: SortOrder
    accountPassword?: SortOrder
    accountName?: SortOrder
    characters?: CharactersOrderByRelationAggregateInput
  }

  export type AccountsWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    accountId?: string
    AND?: AccountsWhereInput | AccountsWhereInput[]
    OR?: AccountsWhereInput[]
    NOT?: AccountsWhereInput | AccountsWhereInput[]
    accountPassword?: StringFilter<"Accounts"> | string
    accountName?: StringFilter<"Accounts"> | string
    characters?: CharactersListRelationFilter
  }, "userId" | "userId" | "accountId">

  export type AccountsOrderByWithAggregationInput = {
    userId?: SortOrder
    accountId?: SortOrder
    accountPassword?: SortOrder
    accountName?: SortOrder
    _count?: AccountsCountOrderByAggregateInput
    _avg?: AccountsAvgOrderByAggregateInput
    _max?: AccountsMaxOrderByAggregateInput
    _min?: AccountsMinOrderByAggregateInput
    _sum?: AccountsSumOrderByAggregateInput
  }

  export type AccountsScalarWhereWithAggregatesInput = {
    AND?: AccountsScalarWhereWithAggregatesInput | AccountsScalarWhereWithAggregatesInput[]
    OR?: AccountsScalarWhereWithAggregatesInput[]
    NOT?: AccountsScalarWhereWithAggregatesInput | AccountsScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"Accounts"> | number
    accountId?: StringWithAggregatesFilter<"Accounts"> | string
    accountPassword?: StringWithAggregatesFilter<"Accounts"> | string
    accountName?: StringWithAggregatesFilter<"Accounts"> | string
  }

  export type CharactersWhereInput = {
    AND?: CharactersWhereInput | CharactersWhereInput[]
    OR?: CharactersWhereInput[]
    NOT?: CharactersWhereInput | CharactersWhereInput[]
    characterId?: IntFilter<"Characters"> | number
    accountId?: StringFilter<"Characters"> | string
    characterName?: StringFilter<"Characters"> | string
    characterHealth?: IntFilter<"Characters"> | number
    characterPower?: IntFilter<"Characters"> | number
    characterMoney?: IntFilter<"Characters"> | number
    account?: XOR<AccountsRelationFilter, AccountsWhereInput>
    charactersInventory?: CharactersInventoryListRelationFilter
    charactersEquipment?: CharactersEquipmentListRelationFilter
  }

  export type CharactersOrderByWithRelationInput = {
    characterId?: SortOrder
    accountId?: SortOrder
    characterName?: SortOrder
    characterHealth?: SortOrder
    characterPower?: SortOrder
    characterMoney?: SortOrder
    account?: AccountsOrderByWithRelationInput
    charactersInventory?: CharactersInventoryOrderByRelationAggregateInput
    charactersEquipment?: CharactersEquipmentOrderByRelationAggregateInput
  }

  export type CharactersWhereUniqueInput = Prisma.AtLeast<{
    characterId?: number
    characterName?: string
    AND?: CharactersWhereInput | CharactersWhereInput[]
    OR?: CharactersWhereInput[]
    NOT?: CharactersWhereInput | CharactersWhereInput[]
    accountId?: StringFilter<"Characters"> | string
    characterHealth?: IntFilter<"Characters"> | number
    characterPower?: IntFilter<"Characters"> | number
    characterMoney?: IntFilter<"Characters"> | number
    account?: XOR<AccountsRelationFilter, AccountsWhereInput>
    charactersInventory?: CharactersInventoryListRelationFilter
    charactersEquipment?: CharactersEquipmentListRelationFilter
  }, "characterId" | "characterName">

  export type CharactersOrderByWithAggregationInput = {
    characterId?: SortOrder
    accountId?: SortOrder
    characterName?: SortOrder
    characterHealth?: SortOrder
    characterPower?: SortOrder
    characterMoney?: SortOrder
    _count?: CharactersCountOrderByAggregateInput
    _avg?: CharactersAvgOrderByAggregateInput
    _max?: CharactersMaxOrderByAggregateInput
    _min?: CharactersMinOrderByAggregateInput
    _sum?: CharactersSumOrderByAggregateInput
  }

  export type CharactersScalarWhereWithAggregatesInput = {
    AND?: CharactersScalarWhereWithAggregatesInput | CharactersScalarWhereWithAggregatesInput[]
    OR?: CharactersScalarWhereWithAggregatesInput[]
    NOT?: CharactersScalarWhereWithAggregatesInput | CharactersScalarWhereWithAggregatesInput[]
    characterId?: IntWithAggregatesFilter<"Characters"> | number
    accountId?: StringWithAggregatesFilter<"Characters"> | string
    characterName?: StringWithAggregatesFilter<"Characters"> | string
    characterHealth?: IntWithAggregatesFilter<"Characters"> | number
    characterPower?: IntWithAggregatesFilter<"Characters"> | number
    characterMoney?: IntWithAggregatesFilter<"Characters"> | number
  }

  export type CharactersInventoryWhereInput = {
    AND?: CharactersInventoryWhereInput | CharactersInventoryWhereInput[]
    OR?: CharactersInventoryWhereInput[]
    NOT?: CharactersInventoryWhereInput | CharactersInventoryWhereInput[]
    characterId?: IntFilter<"CharactersInventory"> | number
    itemCode?: IntFilter<"CharactersInventory"> | number
    itemName?: StringFilter<"CharactersInventory"> | string
    itemHealth?: IntFilter<"CharactersInventory"> | number
    itemPower?: IntFilter<"CharactersInventory"> | number
    itemPrice?: IntFilter<"CharactersInventory"> | number
    itemCount?: IntFilter<"CharactersInventory"> | number
    character?: XOR<CharactersRelationFilter, CharactersWhereInput>
  }

  export type CharactersInventoryOrderByWithRelationInput = {
    characterId?: SortOrder
    itemCode?: SortOrder
    itemName?: SortOrder
    itemHealth?: SortOrder
    itemPower?: SortOrder
    itemPrice?: SortOrder
    itemCount?: SortOrder
    character?: CharactersOrderByWithRelationInput
  }

  export type CharactersInventoryWhereUniqueInput = Prisma.AtLeast<{
    characterId_itemCode?: CharactersInventoryCharacterIdItemCodeCompoundUniqueInput
    AND?: CharactersInventoryWhereInput | CharactersInventoryWhereInput[]
    OR?: CharactersInventoryWhereInput[]
    NOT?: CharactersInventoryWhereInput | CharactersInventoryWhereInput[]
    characterId?: IntFilter<"CharactersInventory"> | number
    itemCode?: IntFilter<"CharactersInventory"> | number
    itemName?: StringFilter<"CharactersInventory"> | string
    itemHealth?: IntFilter<"CharactersInventory"> | number
    itemPower?: IntFilter<"CharactersInventory"> | number
    itemPrice?: IntFilter<"CharactersInventory"> | number
    itemCount?: IntFilter<"CharactersInventory"> | number
    character?: XOR<CharactersRelationFilter, CharactersWhereInput>
  }, "characterId_itemCode">

  export type CharactersInventoryOrderByWithAggregationInput = {
    characterId?: SortOrder
    itemCode?: SortOrder
    itemName?: SortOrder
    itemHealth?: SortOrder
    itemPower?: SortOrder
    itemPrice?: SortOrder
    itemCount?: SortOrder
    _count?: CharactersInventoryCountOrderByAggregateInput
    _avg?: CharactersInventoryAvgOrderByAggregateInput
    _max?: CharactersInventoryMaxOrderByAggregateInput
    _min?: CharactersInventoryMinOrderByAggregateInput
    _sum?: CharactersInventorySumOrderByAggregateInput
  }

  export type CharactersInventoryScalarWhereWithAggregatesInput = {
    AND?: CharactersInventoryScalarWhereWithAggregatesInput | CharactersInventoryScalarWhereWithAggregatesInput[]
    OR?: CharactersInventoryScalarWhereWithAggregatesInput[]
    NOT?: CharactersInventoryScalarWhereWithAggregatesInput | CharactersInventoryScalarWhereWithAggregatesInput[]
    characterId?: IntWithAggregatesFilter<"CharactersInventory"> | number
    itemCode?: IntWithAggregatesFilter<"CharactersInventory"> | number
    itemName?: StringWithAggregatesFilter<"CharactersInventory"> | string
    itemHealth?: IntWithAggregatesFilter<"CharactersInventory"> | number
    itemPower?: IntWithAggregatesFilter<"CharactersInventory"> | number
    itemPrice?: IntWithAggregatesFilter<"CharactersInventory"> | number
    itemCount?: IntWithAggregatesFilter<"CharactersInventory"> | number
  }

  export type CharactersEquipmentWhereInput = {
    AND?: CharactersEquipmentWhereInput | CharactersEquipmentWhereInput[]
    OR?: CharactersEquipmentWhereInput[]
    NOT?: CharactersEquipmentWhereInput | CharactersEquipmentWhereInput[]
    characterId?: IntFilter<"CharactersEquipment"> | number
    itemCode?: IntFilter<"CharactersEquipment"> | number
    itemName?: StringFilter<"CharactersEquipment"> | string
    itemHealth?: IntFilter<"CharactersEquipment"> | number
    itemPower?: IntFilter<"CharactersEquipment"> | number
    itemPrice?: IntFilter<"CharactersEquipment"> | number
    character?: XOR<CharactersRelationFilter, CharactersWhereInput>
  }

  export type CharactersEquipmentOrderByWithRelationInput = {
    characterId?: SortOrder
    itemCode?: SortOrder
    itemName?: SortOrder
    itemHealth?: SortOrder
    itemPower?: SortOrder
    itemPrice?: SortOrder
    character?: CharactersOrderByWithRelationInput
  }

  export type CharactersEquipmentWhereUniqueInput = Prisma.AtLeast<{
    characterId_itemCode?: CharactersEquipmentCharacterIdItemCodeCompoundUniqueInput
    AND?: CharactersEquipmentWhereInput | CharactersEquipmentWhereInput[]
    OR?: CharactersEquipmentWhereInput[]
    NOT?: CharactersEquipmentWhereInput | CharactersEquipmentWhereInput[]
    characterId?: IntFilter<"CharactersEquipment"> | number
    itemCode?: IntFilter<"CharactersEquipment"> | number
    itemName?: StringFilter<"CharactersEquipment"> | string
    itemHealth?: IntFilter<"CharactersEquipment"> | number
    itemPower?: IntFilter<"CharactersEquipment"> | number
    itemPrice?: IntFilter<"CharactersEquipment"> | number
    character?: XOR<CharactersRelationFilter, CharactersWhereInput>
  }, "characterId_itemCode">

  export type CharactersEquipmentOrderByWithAggregationInput = {
    characterId?: SortOrder
    itemCode?: SortOrder
    itemName?: SortOrder
    itemHealth?: SortOrder
    itemPower?: SortOrder
    itemPrice?: SortOrder
    _count?: CharactersEquipmentCountOrderByAggregateInput
    _avg?: CharactersEquipmentAvgOrderByAggregateInput
    _max?: CharactersEquipmentMaxOrderByAggregateInput
    _min?: CharactersEquipmentMinOrderByAggregateInput
    _sum?: CharactersEquipmentSumOrderByAggregateInput
  }

  export type CharactersEquipmentScalarWhereWithAggregatesInput = {
    AND?: CharactersEquipmentScalarWhereWithAggregatesInput | CharactersEquipmentScalarWhereWithAggregatesInput[]
    OR?: CharactersEquipmentScalarWhereWithAggregatesInput[]
    NOT?: CharactersEquipmentScalarWhereWithAggregatesInput | CharactersEquipmentScalarWhereWithAggregatesInput[]
    characterId?: IntWithAggregatesFilter<"CharactersEquipment"> | number
    itemCode?: IntWithAggregatesFilter<"CharactersEquipment"> | number
    itemName?: StringWithAggregatesFilter<"CharactersEquipment"> | string
    itemHealth?: IntWithAggregatesFilter<"CharactersEquipment"> | number
    itemPower?: IntWithAggregatesFilter<"CharactersEquipment"> | number
    itemPrice?: IntWithAggregatesFilter<"CharactersEquipment"> | number
  }

  export type AccountsCreateInput = {
    accountId: string
    accountPassword: string
    accountName: string
    characters?: CharactersCreateNestedManyWithoutAccountInput
  }

  export type AccountsUncheckedCreateInput = {
    userId?: number
    accountId: string
    accountPassword: string
    accountName: string
    characters?: CharactersUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountsUpdateInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    accountPassword?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    characters?: CharactersUpdateManyWithoutAccountNestedInput
  }

  export type AccountsUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
    accountPassword?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    characters?: CharactersUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountsCreateManyInput = {
    userId?: number
    accountId: string
    accountPassword: string
    accountName: string
  }

  export type AccountsUpdateManyMutationInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    accountPassword?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
  }

  export type AccountsUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
    accountPassword?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
  }

  export type CharactersCreateInput = {
    characterName: string
    characterHealth?: number
    characterPower?: number
    characterMoney?: number
    account: AccountsCreateNestedOneWithoutCharactersInput
    charactersInventory?: CharactersInventoryCreateNestedManyWithoutCharacterInput
    charactersEquipment?: CharactersEquipmentCreateNestedManyWithoutCharacterInput
  }

  export type CharactersUncheckedCreateInput = {
    characterId?: number
    accountId: string
    characterName: string
    characterHealth?: number
    characterPower?: number
    characterMoney?: number
    charactersInventory?: CharactersInventoryUncheckedCreateNestedManyWithoutCharacterInput
    charactersEquipment?: CharactersEquipmentUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharactersUpdateInput = {
    characterName?: StringFieldUpdateOperationsInput | string
    characterHealth?: IntFieldUpdateOperationsInput | number
    characterPower?: IntFieldUpdateOperationsInput | number
    characterMoney?: IntFieldUpdateOperationsInput | number
    account?: AccountsUpdateOneRequiredWithoutCharactersNestedInput
    charactersInventory?: CharactersInventoryUpdateManyWithoutCharacterNestedInput
    charactersEquipment?: CharactersEquipmentUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
    characterName?: StringFieldUpdateOperationsInput | string
    characterHealth?: IntFieldUpdateOperationsInput | number
    characterPower?: IntFieldUpdateOperationsInput | number
    characterMoney?: IntFieldUpdateOperationsInput | number
    charactersInventory?: CharactersInventoryUncheckedUpdateManyWithoutCharacterNestedInput
    charactersEquipment?: CharactersEquipmentUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersCreateManyInput = {
    characterId?: number
    accountId: string
    characterName: string
    characterHealth?: number
    characterPower?: number
    characterMoney?: number
  }

  export type CharactersUpdateManyMutationInput = {
    characterName?: StringFieldUpdateOperationsInput | string
    characterHealth?: IntFieldUpdateOperationsInput | number
    characterPower?: IntFieldUpdateOperationsInput | number
    characterMoney?: IntFieldUpdateOperationsInput | number
  }

  export type CharactersUncheckedUpdateManyInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
    characterName?: StringFieldUpdateOperationsInput | string
    characterHealth?: IntFieldUpdateOperationsInput | number
    characterPower?: IntFieldUpdateOperationsInput | number
    characterMoney?: IntFieldUpdateOperationsInput | number
  }

  export type CharactersInventoryCreateInput = {
    itemCode: number
    itemName: string
    itemHealth?: number
    itemPower?: number
    itemPrice?: number
    itemCount: number
    character: CharactersCreateNestedOneWithoutCharactersInventoryInput
  }

  export type CharactersInventoryUncheckedCreateInput = {
    characterId: number
    itemCode: number
    itemName: string
    itemHealth?: number
    itemPower?: number
    itemPrice?: number
    itemCount: number
  }

  export type CharactersInventoryUpdateInput = {
    itemCode?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
    itemHealth?: IntFieldUpdateOperationsInput | number
    itemPower?: IntFieldUpdateOperationsInput | number
    itemPrice?: IntFieldUpdateOperationsInput | number
    itemCount?: IntFieldUpdateOperationsInput | number
    character?: CharactersUpdateOneRequiredWithoutCharactersInventoryNestedInput
  }

  export type CharactersInventoryUncheckedUpdateInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    itemCode?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
    itemHealth?: IntFieldUpdateOperationsInput | number
    itemPower?: IntFieldUpdateOperationsInput | number
    itemPrice?: IntFieldUpdateOperationsInput | number
    itemCount?: IntFieldUpdateOperationsInput | number
  }

  export type CharactersInventoryCreateManyInput = {
    characterId: number
    itemCode: number
    itemName: string
    itemHealth?: number
    itemPower?: number
    itemPrice?: number
    itemCount: number
  }

  export type CharactersInventoryUpdateManyMutationInput = {
    itemCode?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
    itemHealth?: IntFieldUpdateOperationsInput | number
    itemPower?: IntFieldUpdateOperationsInput | number
    itemPrice?: IntFieldUpdateOperationsInput | number
    itemCount?: IntFieldUpdateOperationsInput | number
  }

  export type CharactersInventoryUncheckedUpdateManyInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    itemCode?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
    itemHealth?: IntFieldUpdateOperationsInput | number
    itemPower?: IntFieldUpdateOperationsInput | number
    itemPrice?: IntFieldUpdateOperationsInput | number
    itemCount?: IntFieldUpdateOperationsInput | number
  }

  export type CharactersEquipmentCreateInput = {
    itemCode: number
    itemName: string
    itemHealth?: number
    itemPower?: number
    itemPrice?: number
    character: CharactersCreateNestedOneWithoutCharactersEquipmentInput
  }

  export type CharactersEquipmentUncheckedCreateInput = {
    characterId: number
    itemCode: number
    itemName: string
    itemHealth?: number
    itemPower?: number
    itemPrice?: number
  }

  export type CharactersEquipmentUpdateInput = {
    itemCode?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
    itemHealth?: IntFieldUpdateOperationsInput | number
    itemPower?: IntFieldUpdateOperationsInput | number
    itemPrice?: IntFieldUpdateOperationsInput | number
    character?: CharactersUpdateOneRequiredWithoutCharactersEquipmentNestedInput
  }

  export type CharactersEquipmentUncheckedUpdateInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    itemCode?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
    itemHealth?: IntFieldUpdateOperationsInput | number
    itemPower?: IntFieldUpdateOperationsInput | number
    itemPrice?: IntFieldUpdateOperationsInput | number
  }

  export type CharactersEquipmentCreateManyInput = {
    characterId: number
    itemCode: number
    itemName: string
    itemHealth?: number
    itemPower?: number
    itemPrice?: number
  }

  export type CharactersEquipmentUpdateManyMutationInput = {
    itemCode?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
    itemHealth?: IntFieldUpdateOperationsInput | number
    itemPower?: IntFieldUpdateOperationsInput | number
    itemPrice?: IntFieldUpdateOperationsInput | number
  }

  export type CharactersEquipmentUncheckedUpdateManyInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    itemCode?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
    itemHealth?: IntFieldUpdateOperationsInput | number
    itemPower?: IntFieldUpdateOperationsInput | number
    itemPrice?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CharactersListRelationFilter = {
    every?: CharactersWhereInput
    some?: CharactersWhereInput
    none?: CharactersWhereInput
  }

  export type CharactersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountsCountOrderByAggregateInput = {
    userId?: SortOrder
    accountId?: SortOrder
    accountPassword?: SortOrder
    accountName?: SortOrder
  }

  export type AccountsAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type AccountsMaxOrderByAggregateInput = {
    userId?: SortOrder
    accountId?: SortOrder
    accountPassword?: SortOrder
    accountName?: SortOrder
  }

  export type AccountsMinOrderByAggregateInput = {
    userId?: SortOrder
    accountId?: SortOrder
    accountPassword?: SortOrder
    accountName?: SortOrder
  }

  export type AccountsSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type AccountsRelationFilter = {
    is?: AccountsWhereInput
    isNot?: AccountsWhereInput
  }

  export type CharactersInventoryListRelationFilter = {
    every?: CharactersInventoryWhereInput
    some?: CharactersInventoryWhereInput
    none?: CharactersInventoryWhereInput
  }

  export type CharactersEquipmentListRelationFilter = {
    every?: CharactersEquipmentWhereInput
    some?: CharactersEquipmentWhereInput
    none?: CharactersEquipmentWhereInput
  }

  export type CharactersInventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharactersEquipmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharactersCountOrderByAggregateInput = {
    characterId?: SortOrder
    accountId?: SortOrder
    characterName?: SortOrder
    characterHealth?: SortOrder
    characterPower?: SortOrder
    characterMoney?: SortOrder
  }

  export type CharactersAvgOrderByAggregateInput = {
    characterId?: SortOrder
    characterHealth?: SortOrder
    characterPower?: SortOrder
    characterMoney?: SortOrder
  }

  export type CharactersMaxOrderByAggregateInput = {
    characterId?: SortOrder
    accountId?: SortOrder
    characterName?: SortOrder
    characterHealth?: SortOrder
    characterPower?: SortOrder
    characterMoney?: SortOrder
  }

  export type CharactersMinOrderByAggregateInput = {
    characterId?: SortOrder
    accountId?: SortOrder
    characterName?: SortOrder
    characterHealth?: SortOrder
    characterPower?: SortOrder
    characterMoney?: SortOrder
  }

  export type CharactersSumOrderByAggregateInput = {
    characterId?: SortOrder
    characterHealth?: SortOrder
    characterPower?: SortOrder
    characterMoney?: SortOrder
  }

  export type CharactersRelationFilter = {
    is?: CharactersWhereInput
    isNot?: CharactersWhereInput
  }

  export type CharactersInventoryCharacterIdItemCodeCompoundUniqueInput = {
    characterId: number
    itemCode: number
  }

  export type CharactersInventoryCountOrderByAggregateInput = {
    characterId?: SortOrder
    itemCode?: SortOrder
    itemName?: SortOrder
    itemHealth?: SortOrder
    itemPower?: SortOrder
    itemPrice?: SortOrder
    itemCount?: SortOrder
  }

  export type CharactersInventoryAvgOrderByAggregateInput = {
    characterId?: SortOrder
    itemCode?: SortOrder
    itemHealth?: SortOrder
    itemPower?: SortOrder
    itemPrice?: SortOrder
    itemCount?: SortOrder
  }

  export type CharactersInventoryMaxOrderByAggregateInput = {
    characterId?: SortOrder
    itemCode?: SortOrder
    itemName?: SortOrder
    itemHealth?: SortOrder
    itemPower?: SortOrder
    itemPrice?: SortOrder
    itemCount?: SortOrder
  }

  export type CharactersInventoryMinOrderByAggregateInput = {
    characterId?: SortOrder
    itemCode?: SortOrder
    itemName?: SortOrder
    itemHealth?: SortOrder
    itemPower?: SortOrder
    itemPrice?: SortOrder
    itemCount?: SortOrder
  }

  export type CharactersInventorySumOrderByAggregateInput = {
    characterId?: SortOrder
    itemCode?: SortOrder
    itemHealth?: SortOrder
    itemPower?: SortOrder
    itemPrice?: SortOrder
    itemCount?: SortOrder
  }

  export type CharactersEquipmentCharacterIdItemCodeCompoundUniqueInput = {
    characterId: number
    itemCode: number
  }

  export type CharactersEquipmentCountOrderByAggregateInput = {
    characterId?: SortOrder
    itemCode?: SortOrder
    itemName?: SortOrder
    itemHealth?: SortOrder
    itemPower?: SortOrder
    itemPrice?: SortOrder
  }

  export type CharactersEquipmentAvgOrderByAggregateInput = {
    characterId?: SortOrder
    itemCode?: SortOrder
    itemHealth?: SortOrder
    itemPower?: SortOrder
    itemPrice?: SortOrder
  }

  export type CharactersEquipmentMaxOrderByAggregateInput = {
    characterId?: SortOrder
    itemCode?: SortOrder
    itemName?: SortOrder
    itemHealth?: SortOrder
    itemPower?: SortOrder
    itemPrice?: SortOrder
  }

  export type CharactersEquipmentMinOrderByAggregateInput = {
    characterId?: SortOrder
    itemCode?: SortOrder
    itemName?: SortOrder
    itemHealth?: SortOrder
    itemPower?: SortOrder
    itemPrice?: SortOrder
  }

  export type CharactersEquipmentSumOrderByAggregateInput = {
    characterId?: SortOrder
    itemCode?: SortOrder
    itemHealth?: SortOrder
    itemPower?: SortOrder
    itemPrice?: SortOrder
  }

  export type CharactersCreateNestedManyWithoutAccountInput = {
    create?: XOR<CharactersCreateWithoutAccountInput, CharactersUncheckedCreateWithoutAccountInput> | CharactersCreateWithoutAccountInput[] | CharactersUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CharactersCreateOrConnectWithoutAccountInput | CharactersCreateOrConnectWithoutAccountInput[]
    createMany?: CharactersCreateManyAccountInputEnvelope
    connect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
  }

  export type CharactersUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<CharactersCreateWithoutAccountInput, CharactersUncheckedCreateWithoutAccountInput> | CharactersCreateWithoutAccountInput[] | CharactersUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CharactersCreateOrConnectWithoutAccountInput | CharactersCreateOrConnectWithoutAccountInput[]
    createMany?: CharactersCreateManyAccountInputEnvelope
    connect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CharactersUpdateManyWithoutAccountNestedInput = {
    create?: XOR<CharactersCreateWithoutAccountInput, CharactersUncheckedCreateWithoutAccountInput> | CharactersCreateWithoutAccountInput[] | CharactersUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CharactersCreateOrConnectWithoutAccountInput | CharactersCreateOrConnectWithoutAccountInput[]
    upsert?: CharactersUpsertWithWhereUniqueWithoutAccountInput | CharactersUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: CharactersCreateManyAccountInputEnvelope
    set?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    disconnect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    delete?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    connect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    update?: CharactersUpdateWithWhereUniqueWithoutAccountInput | CharactersUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: CharactersUpdateManyWithWhereWithoutAccountInput | CharactersUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: CharactersScalarWhereInput | CharactersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CharactersUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<CharactersCreateWithoutAccountInput, CharactersUncheckedCreateWithoutAccountInput> | CharactersCreateWithoutAccountInput[] | CharactersUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CharactersCreateOrConnectWithoutAccountInput | CharactersCreateOrConnectWithoutAccountInput[]
    upsert?: CharactersUpsertWithWhereUniqueWithoutAccountInput | CharactersUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: CharactersCreateManyAccountInputEnvelope
    set?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    disconnect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    delete?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    connect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    update?: CharactersUpdateWithWhereUniqueWithoutAccountInput | CharactersUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: CharactersUpdateManyWithWhereWithoutAccountInput | CharactersUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: CharactersScalarWhereInput | CharactersScalarWhereInput[]
  }

  export type AccountsCreateNestedOneWithoutCharactersInput = {
    create?: XOR<AccountsCreateWithoutCharactersInput, AccountsUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutCharactersInput
    connect?: AccountsWhereUniqueInput
  }

  export type CharactersInventoryCreateNestedManyWithoutCharacterInput = {
    create?: XOR<CharactersInventoryCreateWithoutCharacterInput, CharactersInventoryUncheckedCreateWithoutCharacterInput> | CharactersInventoryCreateWithoutCharacterInput[] | CharactersInventoryUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharactersInventoryCreateOrConnectWithoutCharacterInput | CharactersInventoryCreateOrConnectWithoutCharacterInput[]
    createMany?: CharactersInventoryCreateManyCharacterInputEnvelope
    connect?: CharactersInventoryWhereUniqueInput | CharactersInventoryWhereUniqueInput[]
  }

  export type CharactersEquipmentCreateNestedManyWithoutCharacterInput = {
    create?: XOR<CharactersEquipmentCreateWithoutCharacterInput, CharactersEquipmentUncheckedCreateWithoutCharacterInput> | CharactersEquipmentCreateWithoutCharacterInput[] | CharactersEquipmentUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharactersEquipmentCreateOrConnectWithoutCharacterInput | CharactersEquipmentCreateOrConnectWithoutCharacterInput[]
    createMany?: CharactersEquipmentCreateManyCharacterInputEnvelope
    connect?: CharactersEquipmentWhereUniqueInput | CharactersEquipmentWhereUniqueInput[]
  }

  export type CharactersInventoryUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<CharactersInventoryCreateWithoutCharacterInput, CharactersInventoryUncheckedCreateWithoutCharacterInput> | CharactersInventoryCreateWithoutCharacterInput[] | CharactersInventoryUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharactersInventoryCreateOrConnectWithoutCharacterInput | CharactersInventoryCreateOrConnectWithoutCharacterInput[]
    createMany?: CharactersInventoryCreateManyCharacterInputEnvelope
    connect?: CharactersInventoryWhereUniqueInput | CharactersInventoryWhereUniqueInput[]
  }

  export type CharactersEquipmentUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<CharactersEquipmentCreateWithoutCharacterInput, CharactersEquipmentUncheckedCreateWithoutCharacterInput> | CharactersEquipmentCreateWithoutCharacterInput[] | CharactersEquipmentUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharactersEquipmentCreateOrConnectWithoutCharacterInput | CharactersEquipmentCreateOrConnectWithoutCharacterInput[]
    createMany?: CharactersEquipmentCreateManyCharacterInputEnvelope
    connect?: CharactersEquipmentWhereUniqueInput | CharactersEquipmentWhereUniqueInput[]
  }

  export type AccountsUpdateOneRequiredWithoutCharactersNestedInput = {
    create?: XOR<AccountsCreateWithoutCharactersInput, AccountsUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutCharactersInput
    upsert?: AccountsUpsertWithoutCharactersInput
    connect?: AccountsWhereUniqueInput
    update?: XOR<XOR<AccountsUpdateToOneWithWhereWithoutCharactersInput, AccountsUpdateWithoutCharactersInput>, AccountsUncheckedUpdateWithoutCharactersInput>
  }

  export type CharactersInventoryUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<CharactersInventoryCreateWithoutCharacterInput, CharactersInventoryUncheckedCreateWithoutCharacterInput> | CharactersInventoryCreateWithoutCharacterInput[] | CharactersInventoryUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharactersInventoryCreateOrConnectWithoutCharacterInput | CharactersInventoryCreateOrConnectWithoutCharacterInput[]
    upsert?: CharactersInventoryUpsertWithWhereUniqueWithoutCharacterInput | CharactersInventoryUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: CharactersInventoryCreateManyCharacterInputEnvelope
    set?: CharactersInventoryWhereUniqueInput | CharactersInventoryWhereUniqueInput[]
    disconnect?: CharactersInventoryWhereUniqueInput | CharactersInventoryWhereUniqueInput[]
    delete?: CharactersInventoryWhereUniqueInput | CharactersInventoryWhereUniqueInput[]
    connect?: CharactersInventoryWhereUniqueInput | CharactersInventoryWhereUniqueInput[]
    update?: CharactersInventoryUpdateWithWhereUniqueWithoutCharacterInput | CharactersInventoryUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: CharactersInventoryUpdateManyWithWhereWithoutCharacterInput | CharactersInventoryUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: CharactersInventoryScalarWhereInput | CharactersInventoryScalarWhereInput[]
  }

  export type CharactersEquipmentUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<CharactersEquipmentCreateWithoutCharacterInput, CharactersEquipmentUncheckedCreateWithoutCharacterInput> | CharactersEquipmentCreateWithoutCharacterInput[] | CharactersEquipmentUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharactersEquipmentCreateOrConnectWithoutCharacterInput | CharactersEquipmentCreateOrConnectWithoutCharacterInput[]
    upsert?: CharactersEquipmentUpsertWithWhereUniqueWithoutCharacterInput | CharactersEquipmentUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: CharactersEquipmentCreateManyCharacterInputEnvelope
    set?: CharactersEquipmentWhereUniqueInput | CharactersEquipmentWhereUniqueInput[]
    disconnect?: CharactersEquipmentWhereUniqueInput | CharactersEquipmentWhereUniqueInput[]
    delete?: CharactersEquipmentWhereUniqueInput | CharactersEquipmentWhereUniqueInput[]
    connect?: CharactersEquipmentWhereUniqueInput | CharactersEquipmentWhereUniqueInput[]
    update?: CharactersEquipmentUpdateWithWhereUniqueWithoutCharacterInput | CharactersEquipmentUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: CharactersEquipmentUpdateManyWithWhereWithoutCharacterInput | CharactersEquipmentUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: CharactersEquipmentScalarWhereInput | CharactersEquipmentScalarWhereInput[]
  }

  export type CharactersInventoryUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<CharactersInventoryCreateWithoutCharacterInput, CharactersInventoryUncheckedCreateWithoutCharacterInput> | CharactersInventoryCreateWithoutCharacterInput[] | CharactersInventoryUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharactersInventoryCreateOrConnectWithoutCharacterInput | CharactersInventoryCreateOrConnectWithoutCharacterInput[]
    upsert?: CharactersInventoryUpsertWithWhereUniqueWithoutCharacterInput | CharactersInventoryUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: CharactersInventoryCreateManyCharacterInputEnvelope
    set?: CharactersInventoryWhereUniqueInput | CharactersInventoryWhereUniqueInput[]
    disconnect?: CharactersInventoryWhereUniqueInput | CharactersInventoryWhereUniqueInput[]
    delete?: CharactersInventoryWhereUniqueInput | CharactersInventoryWhereUniqueInput[]
    connect?: CharactersInventoryWhereUniqueInput | CharactersInventoryWhereUniqueInput[]
    update?: CharactersInventoryUpdateWithWhereUniqueWithoutCharacterInput | CharactersInventoryUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: CharactersInventoryUpdateManyWithWhereWithoutCharacterInput | CharactersInventoryUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: CharactersInventoryScalarWhereInput | CharactersInventoryScalarWhereInput[]
  }

  export type CharactersEquipmentUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<CharactersEquipmentCreateWithoutCharacterInput, CharactersEquipmentUncheckedCreateWithoutCharacterInput> | CharactersEquipmentCreateWithoutCharacterInput[] | CharactersEquipmentUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharactersEquipmentCreateOrConnectWithoutCharacterInput | CharactersEquipmentCreateOrConnectWithoutCharacterInput[]
    upsert?: CharactersEquipmentUpsertWithWhereUniqueWithoutCharacterInput | CharactersEquipmentUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: CharactersEquipmentCreateManyCharacterInputEnvelope
    set?: CharactersEquipmentWhereUniqueInput | CharactersEquipmentWhereUniqueInput[]
    disconnect?: CharactersEquipmentWhereUniqueInput | CharactersEquipmentWhereUniqueInput[]
    delete?: CharactersEquipmentWhereUniqueInput | CharactersEquipmentWhereUniqueInput[]
    connect?: CharactersEquipmentWhereUniqueInput | CharactersEquipmentWhereUniqueInput[]
    update?: CharactersEquipmentUpdateWithWhereUniqueWithoutCharacterInput | CharactersEquipmentUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: CharactersEquipmentUpdateManyWithWhereWithoutCharacterInput | CharactersEquipmentUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: CharactersEquipmentScalarWhereInput | CharactersEquipmentScalarWhereInput[]
  }

  export type CharactersCreateNestedOneWithoutCharactersInventoryInput = {
    create?: XOR<CharactersCreateWithoutCharactersInventoryInput, CharactersUncheckedCreateWithoutCharactersInventoryInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutCharactersInventoryInput
    connect?: CharactersWhereUniqueInput
  }

  export type CharactersUpdateOneRequiredWithoutCharactersInventoryNestedInput = {
    create?: XOR<CharactersCreateWithoutCharactersInventoryInput, CharactersUncheckedCreateWithoutCharactersInventoryInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutCharactersInventoryInput
    upsert?: CharactersUpsertWithoutCharactersInventoryInput
    connect?: CharactersWhereUniqueInput
    update?: XOR<XOR<CharactersUpdateToOneWithWhereWithoutCharactersInventoryInput, CharactersUpdateWithoutCharactersInventoryInput>, CharactersUncheckedUpdateWithoutCharactersInventoryInput>
  }

  export type CharactersCreateNestedOneWithoutCharactersEquipmentInput = {
    create?: XOR<CharactersCreateWithoutCharactersEquipmentInput, CharactersUncheckedCreateWithoutCharactersEquipmentInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutCharactersEquipmentInput
    connect?: CharactersWhereUniqueInput
  }

  export type CharactersUpdateOneRequiredWithoutCharactersEquipmentNestedInput = {
    create?: XOR<CharactersCreateWithoutCharactersEquipmentInput, CharactersUncheckedCreateWithoutCharactersEquipmentInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutCharactersEquipmentInput
    upsert?: CharactersUpsertWithoutCharactersEquipmentInput
    connect?: CharactersWhereUniqueInput
    update?: XOR<XOR<CharactersUpdateToOneWithWhereWithoutCharactersEquipmentInput, CharactersUpdateWithoutCharactersEquipmentInput>, CharactersUncheckedUpdateWithoutCharactersEquipmentInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type CharactersCreateWithoutAccountInput = {
    characterName: string
    characterHealth?: number
    characterPower?: number
    characterMoney?: number
    charactersInventory?: CharactersInventoryCreateNestedManyWithoutCharacterInput
    charactersEquipment?: CharactersEquipmentCreateNestedManyWithoutCharacterInput
  }

  export type CharactersUncheckedCreateWithoutAccountInput = {
    characterId?: number
    characterName: string
    characterHealth?: number
    characterPower?: number
    characterMoney?: number
    charactersInventory?: CharactersInventoryUncheckedCreateNestedManyWithoutCharacterInput
    charactersEquipment?: CharactersEquipmentUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharactersCreateOrConnectWithoutAccountInput = {
    where: CharactersWhereUniqueInput
    create: XOR<CharactersCreateWithoutAccountInput, CharactersUncheckedCreateWithoutAccountInput>
  }

  export type CharactersCreateManyAccountInputEnvelope = {
    data: CharactersCreateManyAccountInput | CharactersCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type CharactersUpsertWithWhereUniqueWithoutAccountInput = {
    where: CharactersWhereUniqueInput
    update: XOR<CharactersUpdateWithoutAccountInput, CharactersUncheckedUpdateWithoutAccountInput>
    create: XOR<CharactersCreateWithoutAccountInput, CharactersUncheckedCreateWithoutAccountInput>
  }

  export type CharactersUpdateWithWhereUniqueWithoutAccountInput = {
    where: CharactersWhereUniqueInput
    data: XOR<CharactersUpdateWithoutAccountInput, CharactersUncheckedUpdateWithoutAccountInput>
  }

  export type CharactersUpdateManyWithWhereWithoutAccountInput = {
    where: CharactersScalarWhereInput
    data: XOR<CharactersUpdateManyMutationInput, CharactersUncheckedUpdateManyWithoutAccountInput>
  }

  export type CharactersScalarWhereInput = {
    AND?: CharactersScalarWhereInput | CharactersScalarWhereInput[]
    OR?: CharactersScalarWhereInput[]
    NOT?: CharactersScalarWhereInput | CharactersScalarWhereInput[]
    characterId?: IntFilter<"Characters"> | number
    accountId?: StringFilter<"Characters"> | string
    characterName?: StringFilter<"Characters"> | string
    characterHealth?: IntFilter<"Characters"> | number
    characterPower?: IntFilter<"Characters"> | number
    characterMoney?: IntFilter<"Characters"> | number
  }

  export type AccountsCreateWithoutCharactersInput = {
    accountId: string
    accountPassword: string
    accountName: string
  }

  export type AccountsUncheckedCreateWithoutCharactersInput = {
    userId?: number
    accountId: string
    accountPassword: string
    accountName: string
  }

  export type AccountsCreateOrConnectWithoutCharactersInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutCharactersInput, AccountsUncheckedCreateWithoutCharactersInput>
  }

  export type CharactersInventoryCreateWithoutCharacterInput = {
    itemCode: number
    itemName: string
    itemHealth?: number
    itemPower?: number
    itemPrice?: number
    itemCount: number
  }

  export type CharactersInventoryUncheckedCreateWithoutCharacterInput = {
    itemCode: number
    itemName: string
    itemHealth?: number
    itemPower?: number
    itemPrice?: number
    itemCount: number
  }

  export type CharactersInventoryCreateOrConnectWithoutCharacterInput = {
    where: CharactersInventoryWhereUniqueInput
    create: XOR<CharactersInventoryCreateWithoutCharacterInput, CharactersInventoryUncheckedCreateWithoutCharacterInput>
  }

  export type CharactersInventoryCreateManyCharacterInputEnvelope = {
    data: CharactersInventoryCreateManyCharacterInput | CharactersInventoryCreateManyCharacterInput[]
    skipDuplicates?: boolean
  }

  export type CharactersEquipmentCreateWithoutCharacterInput = {
    itemCode: number
    itemName: string
    itemHealth?: number
    itemPower?: number
    itemPrice?: number
  }

  export type CharactersEquipmentUncheckedCreateWithoutCharacterInput = {
    itemCode: number
    itemName: string
    itemHealth?: number
    itemPower?: number
    itemPrice?: number
  }

  export type CharactersEquipmentCreateOrConnectWithoutCharacterInput = {
    where: CharactersEquipmentWhereUniqueInput
    create: XOR<CharactersEquipmentCreateWithoutCharacterInput, CharactersEquipmentUncheckedCreateWithoutCharacterInput>
  }

  export type CharactersEquipmentCreateManyCharacterInputEnvelope = {
    data: CharactersEquipmentCreateManyCharacterInput | CharactersEquipmentCreateManyCharacterInput[]
    skipDuplicates?: boolean
  }

  export type AccountsUpsertWithoutCharactersInput = {
    update: XOR<AccountsUpdateWithoutCharactersInput, AccountsUncheckedUpdateWithoutCharactersInput>
    create: XOR<AccountsCreateWithoutCharactersInput, AccountsUncheckedCreateWithoutCharactersInput>
    where?: AccountsWhereInput
  }

  export type AccountsUpdateToOneWithWhereWithoutCharactersInput = {
    where?: AccountsWhereInput
    data: XOR<AccountsUpdateWithoutCharactersInput, AccountsUncheckedUpdateWithoutCharactersInput>
  }

  export type AccountsUpdateWithoutCharactersInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    accountPassword?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
  }

  export type AccountsUncheckedUpdateWithoutCharactersInput = {
    userId?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
    accountPassword?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
  }

  export type CharactersInventoryUpsertWithWhereUniqueWithoutCharacterInput = {
    where: CharactersInventoryWhereUniqueInput
    update: XOR<CharactersInventoryUpdateWithoutCharacterInput, CharactersInventoryUncheckedUpdateWithoutCharacterInput>
    create: XOR<CharactersInventoryCreateWithoutCharacterInput, CharactersInventoryUncheckedCreateWithoutCharacterInput>
  }

  export type CharactersInventoryUpdateWithWhereUniqueWithoutCharacterInput = {
    where: CharactersInventoryWhereUniqueInput
    data: XOR<CharactersInventoryUpdateWithoutCharacterInput, CharactersInventoryUncheckedUpdateWithoutCharacterInput>
  }

  export type CharactersInventoryUpdateManyWithWhereWithoutCharacterInput = {
    where: CharactersInventoryScalarWhereInput
    data: XOR<CharactersInventoryUpdateManyMutationInput, CharactersInventoryUncheckedUpdateManyWithoutCharacterInput>
  }

  export type CharactersInventoryScalarWhereInput = {
    AND?: CharactersInventoryScalarWhereInput | CharactersInventoryScalarWhereInput[]
    OR?: CharactersInventoryScalarWhereInput[]
    NOT?: CharactersInventoryScalarWhereInput | CharactersInventoryScalarWhereInput[]
    characterId?: IntFilter<"CharactersInventory"> | number
    itemCode?: IntFilter<"CharactersInventory"> | number
    itemName?: StringFilter<"CharactersInventory"> | string
    itemHealth?: IntFilter<"CharactersInventory"> | number
    itemPower?: IntFilter<"CharactersInventory"> | number
    itemPrice?: IntFilter<"CharactersInventory"> | number
    itemCount?: IntFilter<"CharactersInventory"> | number
  }

  export type CharactersEquipmentUpsertWithWhereUniqueWithoutCharacterInput = {
    where: CharactersEquipmentWhereUniqueInput
    update: XOR<CharactersEquipmentUpdateWithoutCharacterInput, CharactersEquipmentUncheckedUpdateWithoutCharacterInput>
    create: XOR<CharactersEquipmentCreateWithoutCharacterInput, CharactersEquipmentUncheckedCreateWithoutCharacterInput>
  }

  export type CharactersEquipmentUpdateWithWhereUniqueWithoutCharacterInput = {
    where: CharactersEquipmentWhereUniqueInput
    data: XOR<CharactersEquipmentUpdateWithoutCharacterInput, CharactersEquipmentUncheckedUpdateWithoutCharacterInput>
  }

  export type CharactersEquipmentUpdateManyWithWhereWithoutCharacterInput = {
    where: CharactersEquipmentScalarWhereInput
    data: XOR<CharactersEquipmentUpdateManyMutationInput, CharactersEquipmentUncheckedUpdateManyWithoutCharacterInput>
  }

  export type CharactersEquipmentScalarWhereInput = {
    AND?: CharactersEquipmentScalarWhereInput | CharactersEquipmentScalarWhereInput[]
    OR?: CharactersEquipmentScalarWhereInput[]
    NOT?: CharactersEquipmentScalarWhereInput | CharactersEquipmentScalarWhereInput[]
    characterId?: IntFilter<"CharactersEquipment"> | number
    itemCode?: IntFilter<"CharactersEquipment"> | number
    itemName?: StringFilter<"CharactersEquipment"> | string
    itemHealth?: IntFilter<"CharactersEquipment"> | number
    itemPower?: IntFilter<"CharactersEquipment"> | number
    itemPrice?: IntFilter<"CharactersEquipment"> | number
  }

  export type CharactersCreateWithoutCharactersInventoryInput = {
    characterName: string
    characterHealth?: number
    characterPower?: number
    characterMoney?: number
    account: AccountsCreateNestedOneWithoutCharactersInput
    charactersEquipment?: CharactersEquipmentCreateNestedManyWithoutCharacterInput
  }

  export type CharactersUncheckedCreateWithoutCharactersInventoryInput = {
    characterId?: number
    accountId: string
    characterName: string
    characterHealth?: number
    characterPower?: number
    characterMoney?: number
    charactersEquipment?: CharactersEquipmentUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharactersCreateOrConnectWithoutCharactersInventoryInput = {
    where: CharactersWhereUniqueInput
    create: XOR<CharactersCreateWithoutCharactersInventoryInput, CharactersUncheckedCreateWithoutCharactersInventoryInput>
  }

  export type CharactersUpsertWithoutCharactersInventoryInput = {
    update: XOR<CharactersUpdateWithoutCharactersInventoryInput, CharactersUncheckedUpdateWithoutCharactersInventoryInput>
    create: XOR<CharactersCreateWithoutCharactersInventoryInput, CharactersUncheckedCreateWithoutCharactersInventoryInput>
    where?: CharactersWhereInput
  }

  export type CharactersUpdateToOneWithWhereWithoutCharactersInventoryInput = {
    where?: CharactersWhereInput
    data: XOR<CharactersUpdateWithoutCharactersInventoryInput, CharactersUncheckedUpdateWithoutCharactersInventoryInput>
  }

  export type CharactersUpdateWithoutCharactersInventoryInput = {
    characterName?: StringFieldUpdateOperationsInput | string
    characterHealth?: IntFieldUpdateOperationsInput | number
    characterPower?: IntFieldUpdateOperationsInput | number
    characterMoney?: IntFieldUpdateOperationsInput | number
    account?: AccountsUpdateOneRequiredWithoutCharactersNestedInput
    charactersEquipment?: CharactersEquipmentUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateWithoutCharactersInventoryInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
    characterName?: StringFieldUpdateOperationsInput | string
    characterHealth?: IntFieldUpdateOperationsInput | number
    characterPower?: IntFieldUpdateOperationsInput | number
    characterMoney?: IntFieldUpdateOperationsInput | number
    charactersEquipment?: CharactersEquipmentUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersCreateWithoutCharactersEquipmentInput = {
    characterName: string
    characterHealth?: number
    characterPower?: number
    characterMoney?: number
    account: AccountsCreateNestedOneWithoutCharactersInput
    charactersInventory?: CharactersInventoryCreateNestedManyWithoutCharacterInput
  }

  export type CharactersUncheckedCreateWithoutCharactersEquipmentInput = {
    characterId?: number
    accountId: string
    characterName: string
    characterHealth?: number
    characterPower?: number
    characterMoney?: number
    charactersInventory?: CharactersInventoryUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharactersCreateOrConnectWithoutCharactersEquipmentInput = {
    where: CharactersWhereUniqueInput
    create: XOR<CharactersCreateWithoutCharactersEquipmentInput, CharactersUncheckedCreateWithoutCharactersEquipmentInput>
  }

  export type CharactersUpsertWithoutCharactersEquipmentInput = {
    update: XOR<CharactersUpdateWithoutCharactersEquipmentInput, CharactersUncheckedUpdateWithoutCharactersEquipmentInput>
    create: XOR<CharactersCreateWithoutCharactersEquipmentInput, CharactersUncheckedCreateWithoutCharactersEquipmentInput>
    where?: CharactersWhereInput
  }

  export type CharactersUpdateToOneWithWhereWithoutCharactersEquipmentInput = {
    where?: CharactersWhereInput
    data: XOR<CharactersUpdateWithoutCharactersEquipmentInput, CharactersUncheckedUpdateWithoutCharactersEquipmentInput>
  }

  export type CharactersUpdateWithoutCharactersEquipmentInput = {
    characterName?: StringFieldUpdateOperationsInput | string
    characterHealth?: IntFieldUpdateOperationsInput | number
    characterPower?: IntFieldUpdateOperationsInput | number
    characterMoney?: IntFieldUpdateOperationsInput | number
    account?: AccountsUpdateOneRequiredWithoutCharactersNestedInput
    charactersInventory?: CharactersInventoryUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateWithoutCharactersEquipmentInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
    characterName?: StringFieldUpdateOperationsInput | string
    characterHealth?: IntFieldUpdateOperationsInput | number
    characterPower?: IntFieldUpdateOperationsInput | number
    characterMoney?: IntFieldUpdateOperationsInput | number
    charactersInventory?: CharactersInventoryUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersCreateManyAccountInput = {
    characterId?: number
    characterName: string
    characterHealth?: number
    characterPower?: number
    characterMoney?: number
  }

  export type CharactersUpdateWithoutAccountInput = {
    characterName?: StringFieldUpdateOperationsInput | string
    characterHealth?: IntFieldUpdateOperationsInput | number
    characterPower?: IntFieldUpdateOperationsInput | number
    characterMoney?: IntFieldUpdateOperationsInput | number
    charactersInventory?: CharactersInventoryUpdateManyWithoutCharacterNestedInput
    charactersEquipment?: CharactersEquipmentUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateWithoutAccountInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    characterName?: StringFieldUpdateOperationsInput | string
    characterHealth?: IntFieldUpdateOperationsInput | number
    characterPower?: IntFieldUpdateOperationsInput | number
    characterMoney?: IntFieldUpdateOperationsInput | number
    charactersInventory?: CharactersInventoryUncheckedUpdateManyWithoutCharacterNestedInput
    charactersEquipment?: CharactersEquipmentUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateManyWithoutAccountInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    characterName?: StringFieldUpdateOperationsInput | string
    characterHealth?: IntFieldUpdateOperationsInput | number
    characterPower?: IntFieldUpdateOperationsInput | number
    characterMoney?: IntFieldUpdateOperationsInput | number
  }

  export type CharactersInventoryCreateManyCharacterInput = {
    itemCode: number
    itemName: string
    itemHealth?: number
    itemPower?: number
    itemPrice?: number
    itemCount: number
  }

  export type CharactersEquipmentCreateManyCharacterInput = {
    itemCode: number
    itemName: string
    itemHealth?: number
    itemPower?: number
    itemPrice?: number
  }

  export type CharactersInventoryUpdateWithoutCharacterInput = {
    itemCode?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
    itemHealth?: IntFieldUpdateOperationsInput | number
    itemPower?: IntFieldUpdateOperationsInput | number
    itemPrice?: IntFieldUpdateOperationsInput | number
    itemCount?: IntFieldUpdateOperationsInput | number
  }

  export type CharactersInventoryUncheckedUpdateWithoutCharacterInput = {
    itemCode?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
    itemHealth?: IntFieldUpdateOperationsInput | number
    itemPower?: IntFieldUpdateOperationsInput | number
    itemPrice?: IntFieldUpdateOperationsInput | number
    itemCount?: IntFieldUpdateOperationsInput | number
  }

  export type CharactersInventoryUncheckedUpdateManyWithoutCharacterInput = {
    itemCode?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
    itemHealth?: IntFieldUpdateOperationsInput | number
    itemPower?: IntFieldUpdateOperationsInput | number
    itemPrice?: IntFieldUpdateOperationsInput | number
    itemCount?: IntFieldUpdateOperationsInput | number
  }

  export type CharactersEquipmentUpdateWithoutCharacterInput = {
    itemCode?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
    itemHealth?: IntFieldUpdateOperationsInput | number
    itemPower?: IntFieldUpdateOperationsInput | number
    itemPrice?: IntFieldUpdateOperationsInput | number
  }

  export type CharactersEquipmentUncheckedUpdateWithoutCharacterInput = {
    itemCode?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
    itemHealth?: IntFieldUpdateOperationsInput | number
    itemPower?: IntFieldUpdateOperationsInput | number
    itemPrice?: IntFieldUpdateOperationsInput | number
  }

  export type CharactersEquipmentUncheckedUpdateManyWithoutCharacterInput = {
    itemCode?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
    itemHealth?: IntFieldUpdateOperationsInput | number
    itemPower?: IntFieldUpdateOperationsInput | number
    itemPrice?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AccountsCountOutputTypeDefaultArgs instead
     */
    export type AccountsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharactersCountOutputTypeDefaultArgs instead
     */
    export type CharactersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharactersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountsDefaultArgs instead
     */
    export type AccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharactersDefaultArgs instead
     */
    export type CharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharactersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharactersInventoryDefaultArgs instead
     */
    export type CharactersInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharactersInventoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharactersEquipmentDefaultArgs instead
     */
    export type CharactersEquipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharactersEquipmentDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}