import common=require("./common")
export type Types=common.Map<TypeReference>
export  interface TypeDeclarationFragment {
}

export interface Example {
    value?: string
    strict?: boolean
    name?: boolean
    description?: string
    displayName?: string
    structuredValue?: any
}

export type TypeReference= string| string[]| Type

export interface TypeDeclaration extends common.Annotable {


    //WHAT THE ... it is not clear from schema when each of them is used
    example?: any
    examples?: Example[]
    structuredExample?: Example

    enum: any[]
    type: TypeReference
    name?: string
    default?: any
    description?: string
    displayName?: string
    //TODO ANNOTATION TYPES ONLY
    allowedTargets?: string[]

    xml?: {
        attribute?: boolean
        wrapped?: boolean
        name?: string
        namespace?: string
        prefix?: string
    }
    required?: boolean

    facets?: common.Map<TypeReference>

    fixedFacets?: common.Map<any>
}

export interface ArrayTypeDeclaration {
    uniqueItems?: boolean
    minItems?: number
    maxItems?: number
    items?: TypeReference
}
export interface ObjectDeclaration {
    discriminator?: string
    discriminatorValue?: string
    properties?: common.Map<Type>
    minProperties?: number
    maxProperties?: number
    additionalProperties?: boolean
}
export interface TypeSchemaDeclaration extends TypeDeclaration {
    schema?: TypeReference
    schemaPath?: string
}
export interface NumberTypeDeclaration extends TypeDeclaration {
    minimum?: number
    maximum?: number
    format?: number
    multipleOf?: number
}
export interface StringTypeDeclaration extends TypeDeclaration {
    pattern?: string
    minLength?: string
    maxLength?: string
}
export interface FileTypeDeclaration extends TypeDeclaration {
    pattern?: string
    minLength?: string
    maxLength?: string
}
export interface DateTypeDeclaration extends TypeDeclaration {
    format: string
}
export interface Type extends ArrayTypeDeclaration,ObjectDeclaration,TypeSchemaDeclaration,StringTypeDeclaration,FileTypeDeclaration {
}

export interface TypeFragment extends common.FragmentDeclaration,Type {
}

