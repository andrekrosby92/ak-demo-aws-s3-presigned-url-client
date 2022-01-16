import { FormEvent, useState } from 'react'

import styles from '~/styles/Home.module.css'
import { awsPostObject, getPresignedUrl } from '~/lib/http'
import { generateFormData } from '~/utils/helpers'

export default function Home(): JSX.Element {
  const [file, setFile] = useState<File | undefined>()

  const handleOnSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if (!file) {
      return
    }

    const { url, fields } = await getPresignedUrl(file)
    const formData = generateFormData(fields, file)
    const response = awsPostObject(url, formData)
    console.log(response)
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleOnSubmit}>
        <input
          type="file"
          onChange={(event) => setFile(event.currentTarget.files?.[0])}
          accept=".jpg, .jpeg, .png, .svg"
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  )
}
