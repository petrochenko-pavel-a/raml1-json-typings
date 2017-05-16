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