import { TimestampProvider } from "rxjs"

export interface Usuario {
    id: number
    name: string,
    email?: string,
    email_verified_at?: TimestampProvider
    password?: string
    remember_token?: string
    created_at?: TimestampProvider
    updated_at?: TimestampProvider
}
