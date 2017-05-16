import common=require("./common")
import types=require("./types")
export type TraitRef=string| common.Map<any>

export type Types=types.Types

//TODO FILL IT LATER
export interface SecuritySchemeDefinition extends common.Annotable {

    type: string
    settings?: common.Map<any>
}
export interface Response extends common.Annotable {
    description?: string

    //TODO this looks pretty strange (recheck actual output)
    headers: types.Type[]
    body?: Types
    code: string
}
export type SecuritySchemeRef=string|common.Map<any>
export interface Operation extends common.Annotable {
    responses?: common.Map<Response>
    headers?: Types
    queryParameters?: Types
    queryString?: types.TypeReference
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
export interface TraitFragment extends Trait,common.FragmentDeclaration {

}
