import { SerializedError } from "@reduxjs/toolkit"

export interface PendingAction<ThunkArg> {
  type: string
  payload: undefined
  meta: {
    requestId: string
    arg: ThunkArg
  }
}

export interface FulfilledAction<PromiseResult = unknown, ThunkArg = unknown> {
  type: string
  payload: PromiseResult
  meta: {
    requestId: string
    arg: ThunkArg
  }
}

export interface RejectedAction<ThunkArg = unknown> {
  type: string
  payload: unknown
  error: SerializedError
  meta: {
    requestId: string
    arg: ThunkArg
    aborted: boolean
    condition: boolean
  }
}

export interface RejectedWithValueAction<
  RejectedValue = unknown,
  ThunkArg = unknown,
> {
  type: string
  payload: RejectedValue
  error: { message: "Rejected" }
  meta: {
    requestId: string
    arg: ThunkArg
    aborted: boolean
  }
}
