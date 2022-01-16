export interface PresignedUrlResponse {
  url: string
  fields: {
    acl: string
    key: string
    policy: string
    'Content-Type': string
    'x-amz-algorithm': string
    'x-amz-credential': string
    'x-amz-date': string
    'x-amz-signature': string
  }
}
