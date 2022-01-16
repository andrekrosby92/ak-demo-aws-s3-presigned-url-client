import { PresignedUrlResponse } from '~/types/presigned-url'

export function generateFormData(presignedUrlFields: PresignedUrlResponse['fields'], file: File): FormData {
  const formData = new FormData()

  Object.entries(presignedUrlFields).forEach(([key, value]) => {
    formData.append(key, value)
  })

  formData.append('file', file)
  return formData
}
