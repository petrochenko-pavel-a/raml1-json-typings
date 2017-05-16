import common=require("./common")
import types=require("./types")
import methods=require("./methods")
import resources=require("./resources")

export interface DocumentationItem {
    title: string
    content: string
}
export type Documentation= DocumentationItem[]

//it is returned if rootNodeDetails:true is passed to the options

export interface RAMLParseResult {

    ramlVersion: "RAML10"

    type: string

    errors?: common.Error[]

    specification: common.FragmentDeclaration
}

export interface LibraryBase extends common.FragmentDeclaration {

    //wtf (why we are producing arrays of maps)
    schemas?: types.Types[]
    types?: types.Types[]
    //TODO very strange but it is true (checked in TCK)
    resourceTypes?: common.Map<resources.ResourceType>[]

    traits?: common.Map<methods.Trait>[]

    annotationTypes: types.Types[]

    securitySchemes: common.Map<methods.SecuritySchemeDefinition>
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
    baseUriParameters?: types.Types;
    resources?: resources.Resource[]
    protocols?: string[]
    mediaType?: string| string[]
    securedBy?: methods.SecuritySchemeRef[]
}
export interface Overlay extends LibraryBase {
    extends?: string
    usage?: string
}