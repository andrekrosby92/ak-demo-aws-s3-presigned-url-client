import { PresignedUrlResponse } from '~/types/presigned-url'

export function generateFormData(
  presignedUrlFields: PresignedUrlResponse['fields'],
  fileAsBinaryString: string,
): FormData {
  const formData = new FormData()

  Object.entries(presignedUrlFields).forEach(([key, value]) => {
    formData.append(key, value)
  })

  formData.append('file', fileAsBinaryString)
  return formData
}
