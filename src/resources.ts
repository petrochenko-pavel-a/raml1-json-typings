import common=require("./common")
import methods=require("./methods")
export type ResourceTypeRef=string| common.Map<any>

export interface ResourceType extends ResourceBase {
    name?: string
    usage?: string
    displayName?: string

    [name: string]: any | methods.Method
}
export interface ResourceTypeFragment extends ResourceType,common.FragmentDeclaration {

}
export interface Resource extends ResourceBase {
    displayName?: string
    resources?: Resource[]
    relativeUri: string
    relativeUriPathSegments?: string[]
    absoluteUri?: string
}
export interface ResourceBase extends common.Annotable {
    description?: string
    type?: ResourceTypeRef
    methods: methods.Method[]
    uriParameters: methods.Types
    is?: methods.TraitRef[]
    securedBy?: methods.SecuritySchemeRef[]

}