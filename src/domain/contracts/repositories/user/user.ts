export interface UserRepository {
  insert: (request: UserRepository.Request) => Promise<UserRepository.Response>
}

export namespace UserRepository {
  export type Request = { name: string, email: string, phone: string }
  export type Response = string
}
