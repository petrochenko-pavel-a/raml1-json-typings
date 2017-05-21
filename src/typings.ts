export interface Map<T> {
    [name: string]: T
}

export interface Annotable {

    annotations?: Map <Annotation>

    __METADATA__?: Map<any>

    scalarsAnnotations?: Map<Map<Annotation>>
}

export interface Annotation {
    name: string
    structuredValue: any
}

export interface UsesDeclaration {
    key: string
    value: string
}
export interface ErrorPosition {
    line?: number
    column?: number
    position?: number
}

export interface ErrorRange {
    start: ErrorPosition
    end: ErrorPosition
}
export interface Error {
    code: string
    message: string
    path: string
    isWarning: boolean
    trace?: Error[]
    range: ErrorRange
}
export interface FragmentDeclaration extends Annotable {
    uses?: UsesDeclaration[]
}
export type TraitRef=string| Map<any>

export type ResourceTypeRef=string| Map<any>

export interface ResourceType extends ResourceBase {
    name?: string
    usage?: string
    displayName?: string

    [name: string]: any | Method
}
export interface ResourceTypeFragment extends ResourceType,FragmentDeclaration {

}
export interface Resource extends ResourceBase {
    displayName?: string
    resources?: Resource[]
    relativeUri: string
    relativeUriPathSegments?: string[]
    absoluteUri?: string
}
export interface ResourceBase extends Annotable {
    description?: string
    type?: ResourceTypeRef
    methods?: Method[]
    uriParameters?: Types
    is?: TraitRef[]
    securedBy?: SecuritySchemeRef[]

}
export interface DocumentationItem {
    title: string
    content: string
}
export type Documentation= DocumentationItem[]

//it is returned if rootNodeDetails:true is passed to the options

export interface RAMLParseResult {

    ramlVersion: "RAML10"

    type: string

    errors?: Error[]

    specification: FragmentDeclaration
}

export interface LibraryBase extends FragmentDeclaration {

    //wtf (why we are producing arrays of maps)
    schemas?: Types[]
    types?: Types[]
    //TODO very strange but it is true (checked in TCK)
    resourceTypes?: Map<ResourceType>[]

    traits?: Map<Trait>[]

    annotationTypes: Types[]

    securitySchemes: Map<SecuritySchemeDefinition>[]
}

export  interface Library extends LibraryBase {

    name?: string
    usage?: string
}
export interface Extension extends LibraryBase {
    extends?: string
    usage?: string
}
export interface Api extends LibraryBase {
    documentation?: Documentation
    title?: string
    description?: string
    version?: string
    baseUri?: string
    baseUriParameters?: Types;
    resources?: Resource[]
    protocols?: string[]
    mediaType?: string| string[]
    securedBy?: SecuritySchemeRef[]
}
export interface Overlay extends LibraryBase {
    extends?: string
    usage?: string
}
export interface SecuritySchemeDefinition extends Annotable {

    type: string
    settings?: Map<any>
    describedBy: Operation
    name: string
    description: string

}
export interface Response extends Annotable {
    description?: string

    //TODO this looks pretty strange (recheck actual output)
    headers?: Type[]
    body?: Types
    code: string
}
export type SecuritySchemeRef=string|Map<any>
export interface Operation extends Annotable {
    responses?: Map<Response>
    headers?: Types
    queryParameters?: Types
    queryString?: TypeReference
}

export interface MethodBase extends Operation {
    displayName?: string
    protocols?: string[]
    is?: TraitRef[]
    //FIXME
    securedBy?: any[]
    body?: Types
    description?: string
}

export interface Method extends MethodBase {
    method: string
}
export interface Trait extends MethodBase {
    name?: string
    displayName?: string
    usage?: string
}
export interface TraitFragment extends Trait,FragmentDeclaration {

}
export type Types=Map<TypeReference>
export  interface TypeDeclarationFragment {
}

export interface Example {
    value?: string
    strict?: boolean
    name?: boolean
    description?: string
    displayName?: string
    structuredValue?: any
    annotations?: Map<Annotation>;
}

export type TypeReference= string| string[]| Type

export interface TypeDeclaration extends Annotable {


    //WHAT THE ... it is not clear from schema when each of them is used
    example?: any
    examples?: Example[]
    structuredExample?: Example

    enum?: any[]
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

    facets?: Map<TypeReference>

    fixedFacets?: Map<any>
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
    properties?: Map<Type>
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

export interface Type extends ArrayTypeDeclaration,ObjectDeclaration,TypeSchemaDeclaration,StringTypeDeclaration,FileTypeDeclaration
{
}

export interface TypeFragment extends FragmentDeclaration,Type {}

