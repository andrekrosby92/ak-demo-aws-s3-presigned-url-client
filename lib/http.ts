import { PresignedUrlResponse } from '~/types/presigned-url'

export async function getPresignedUrl(file: File): Promise<PresignedUrlResponse> {
  try {
    const res = await fetch('http://localhost:8000/get-presigned-url/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        object_name: file.name,
        type: file.type,
      }),
    })

    return res.json() as Promise<PresignedUrlResponse>
  } catch (error) {
    throw new Error(`Something went wrong: ${error}`)
  }
}

export async function awsPostObject(url: string, formData: FormData): Promise<Response> {
  try {
    const res = await fetch(url, {
      method: 'POST',
      body: formData,
    })

    return res
  } catch (error) {
    throw new Error(`Something went wrong: ${error}`)
  }
}
