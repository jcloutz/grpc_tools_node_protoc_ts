// package: com.book
// file: book.proto

import * as jspb from "google-protobuf";

export class Book extends jspb.Message {
    public static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    public static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    public static serializeBinaryToWriter(message: Book, writer: jspb.BinaryWriter): void;
    public static deserializeBinary(bytes: Uint8Array): Book;
    public static deserializeBinaryFromReader(message: Book, reader: jspb.BinaryReader): Book;

    public static toObject(includeInstance: boolean, msg: Book): Book.IAsObject;
    public toObject(includeInstance?: boolean): Book.IAsObject;

    public getIsbn(): number;
    public setIsbn(value: number): void;
    public getTitle(): string;
    public setTitle(value: string): void;
    public getAuthor(): string;
    public setAuthor(value: string): void;

    public serializeBinary(): Uint8Array;
}

export namespace Book {
    export interface IAsObject {
        isbn: number;
        title: string;
        author: string;
    }
}

export class GetBookRequest extends jspb.Message {
    public static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    public static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    public static serializeBinaryToWriter(message: GetBookRequest, writer: jspb.BinaryWriter): void;
    public static deserializeBinary(bytes: Uint8Array): GetBookRequest;
    public static deserializeBinaryFromReader(message: GetBookRequest, reader: jspb.BinaryReader): GetBookRequest;

    public static toObject(includeInstance: boolean, msg: GetBookRequest): GetBookRequest.IAsObject;
    public toObject(includeInstance?: boolean): GetBookRequest.IAsObject;

    public getIsbn(): number;
    public setIsbn(value: number): void;

    public serializeBinary(): Uint8Array;
}

export namespace GetBookRequest {
    export interface IAsObject {
        isbn: number;
    }
}

export class GetBookViaAuthor extends jspb.Message {
    public static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    public static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    public static serializeBinaryToWriter(message: GetBookViaAuthor, writer: jspb.BinaryWriter): void;
    public static deserializeBinary(bytes: Uint8Array): GetBookViaAuthor;
    public static deserializeBinaryFromReader(message: GetBookViaAuthor, reader: jspb.BinaryReader): GetBookViaAuthor;

    public static toObject(includeInstance: boolean, msg: GetBookViaAuthor): GetBookViaAuthor.IAsObject;
    public toObject(includeInstance?: boolean): GetBookViaAuthor.IAsObject;

    public getAuthor(): string;
    public setAuthor(value: string): void;

    public serializeBinary(): Uint8Array;
}

export namespace GetBookViaAuthor {
    export interface IAsObject {
        author: string;
    }
}

export class BookStore extends jspb.Message {
    public static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    public static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    public static serializeBinaryToWriter(message: BookStore, writer: jspb.BinaryWriter): void;
    public static deserializeBinary(bytes: Uint8Array): BookStore;
    public static deserializeBinaryFromReader(message: BookStore, reader: jspb.BinaryReader): BookStore;

    public static toObject(includeInstance: boolean, msg: BookStore): BookStore.IAsObject;
    public toObject(includeInstance?: boolean): BookStore.IAsObject;

    public getName(): string;
    public setName(value: string): void;

    public getBooksMap(): jspb.Map<number, string>;
    public clearBooksMap(): void;

    public serializeBinary(): Uint8Array;
}

export namespace BookStore {
    export interface IAsObject {
        name: string;

        booksMap: Array<[number, string]>;
    }
}

export enum EnumSample {
    UNKNOWN = 0,
    STARTED = 1,
    RUNNING = 1,
}
